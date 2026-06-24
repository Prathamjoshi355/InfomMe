import { MongoClient } from 'mongodb'
import fs from 'fs'
import path from 'path'

let cachedClient = null
let cachedDb = null

async function connectToDatabase(uri) {
  if (!uri) return null
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb }
  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  const dbName = new URL(uri).pathname.replace('/', '') || 'InformxMe'
  cachedDb = client.db(dbName)
  return { client: cachedClient, db: cachedDb }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const payload = req.body || {}
    if (!payload.vehicle) return res.status(400).json({ error: 'vehicle required' })

    const mongoUri = process.env.MONGODB_URI
    if (mongoUri) {
      const { db } = await connectToDatabase(mongoUri)
      const coll = db.collection('submissions')
      await coll.insertOne(payload)
      return res.status(201).json({ ok: true })
    }

    // Fallback: write to local file (works in local dev, not persistent in serverless environments)
    const dbFile = path.join(process.cwd(), 'submissions.json')
    let all = []
    try { all = JSON.parse(fs.readFileSync(dbFile, 'utf8') || '[]') } catch (e) { all = [] }
    all.push(payload)
    fs.writeFileSync(dbFile, JSON.stringify(all, null, 2))
    return res.status(201).json({ ok: true, fallback: true })
  } catch (err) {
    console.error('submit error', err)
    return res.status(500).json({ error: 'server error' })
  }
}

const { MongoClient } = require('mongodb')
const fs = require('fs')
const path = require('path')

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

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const url = req.url || ''
    const pwdQuery = url.split('?pwd=')[1] || ''
    const pwd = (req.query && req.query.pwd) || pwdQuery || ''
    const adminPwd = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || 'admin123'
    if (pwd !== adminPwd) return res.status(401).json({ error: 'Unauthorized' })

    const mongoUri = process.env.MONGODB_URI
    if (mongoUri) {
      const { db } = await connectToDatabase(mongoUri)
      const rows = await db.collection('submissions').find().toArray()
      return res.json(rows)
    }

    // Fallback to local file
    const dbFile = path.join(process.cwd(), 'submissions.json')
    let all = []
    try { all = JSON.parse(fs.readFileSync(dbFile, 'utf8') || '[]') } catch (e) { all = [] }
    return res.json(all)
  } catch (err) {
    console.error('submissions error', err)
    return res.status(500).json({ error: 'server error' })
  }
}

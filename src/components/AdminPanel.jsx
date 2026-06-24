import React, { useState } from 'react'

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const rawUrl = import.meta.env.VITE_API_URL || ''
      const API_BASE = rawUrl ? rawUrl.replace(/\/+$/g, '') : (import.meta.env.PROD ? '' : 'http://localhost:4000')
      const res = await fetch(`${API_BASE}/api/admin/submissions?pwd=${encodeURIComponent(password)}`)

      if (res.status === 401) {
        setError('Invalid password')
        setLoading(false)
        return
      }

      if (!res.ok) throw new Error('Failed to fetch submissions')

      const data = await res.json()
      setSubmissions(data)
      setIsAuthenticated(true)
      setPassword('')
    } catch (err) {
      setError(err.message || 'Error fetching submissions')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    setIsAuthenticated(false)
    setSubmissions([])
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-slate-600 mb-6">Enter password to view submissions</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white font-semibold hover:bg-slate-800 disabled:opacity-50"
              >
                {loading ? 'Unlocking...' : 'Unlock Admin'}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="rounded-2xl bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <p className="text-slate-600">
              Total Submissions: <span className="font-bold text-slate-900">{submissions.length}</span>
            </p>
          </div>

          {submissions.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              No submissions yet
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Vehicle</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">City</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Mobile</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Services</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Q2</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Q3</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-900">{sub.vehicle}</td>
                      <td className="px-6 py-4 text-sm text-slate-900">{sub.city}</td>
                      <td className="px-6 py-4 text-sm text-slate-900">{sub.mobile || '-'}</td>
                      <td className="px-6 py-4 text-sm text-slate-900">
                        {Array.isArray(sub.services) ? sub.services.join(', ') : '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900">{sub.q2}</td>
                      <td className="px-6 py-4 text-sm text-slate-900">{sub.q3}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {sub.submittedAt ? new Date(sub.submittedAt).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
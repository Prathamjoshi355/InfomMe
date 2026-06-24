import React, {useState} from 'react'

export default function SurveyForm(){
  const [vehicle, setVehicle] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [services, setServices] = useState([])
  const [city, setCity] = useState('')
  const [mobile, setMobile] = useState('')
  const [status, setStatus] = useState(null)

  function toggleService(val){
    setServices(s => s.includes(val) ? s.filter(x=>x!==val) : [...s, val])
  }

  async function handleSubmit(e){
    e.preventDefault()
    const payload = { vehicle, q2, q3, services, city, mobile, submittedAt: new Date().toISOString() }
    try{
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const res = await fetch(`${API_URL}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(res.ok){
        setStatus('success')
        setVehicle('')
        setQ2('')
        setQ3('')
        setServices([])
        setCity('')
        setMobile('')
      } else {
        setStatus('error')
      }
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <div className="rounded-3xl bg-slate-100 p-8 shadow-xl">
      <h3 className="text-3xl font-semibold text-slate-900">Help Us Serve You Better</h3>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">1. What type of vehicle do you use?</label>
          <select
            required
            value={vehicle}
            onChange={e=>setVehicle(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
          >
            <option value="">Select Vehicle Type</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">2. Have you ever faced a puncture or breakdown while traveling?</p>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="q2" value="yes" checked={q2==='yes'} onChange={e=>setQ2(e.target.value)} className="h-4 w-4 text-yellow-400" />
              Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="q2" value="no" checked={q2==='no'} onChange={e=>setQ2(e.target.value)} className="h-4 w-4 text-yellow-400" />
              No
            </label>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">3. Would you use an app to get immediate roadside assistance?</p>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="q3" value="yes" checked={q3==='yes'} onChange={e=>setQ3(e.target.value)} className="h-4 w-4 text-yellow-400" />
              Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="q3" value="no" checked={q3==='no'} onChange={e=>setQ3(e.target.value)} className="h-4 w-4 text-yellow-400" />
              No
            </label>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">4. Which services would you be most likely to use?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Puncture Repair','Jump Start','Car Wash','Battery Support','Towing Service'].map((service) => (
              <label key={service} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
                <input type="checkbox" value={service.toLowerCase().split(' ').join('')} checked={services.includes(service.toLowerCase().split(' ').join(''))} onChange={()=>toggleService(service.toLowerCase().split(' ').join(''))} className="h-4 w-4 text-yellow-400" />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">5. In which city do you live?</label>
          <input type="text" placeholder="Enter Your City" value={city} onChange={e=>setCity(e.target.value)} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200" />
        </div>

        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">6. Mobile Number (Optional)</label>
          <input type="tel" placeholder="Enter Mobile Number" value={mobile} onChange={e=>setMobile(e.target.value)} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200" />
        </div>

        <button type="submit" className="btn btn-primary w-full">Submit & Join Early Access</button>
        {status==='success' && <p className="text-green-600">Thanks! We've recorded your response.</p>}
        {status==='error' && <p className="text-red-600">Submission failed — try again later.</p>}
      </form>
    </div>
  )
}

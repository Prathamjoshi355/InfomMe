import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import SurveySection from './components/SurveySection'
import How from './components/How'
import AdminPanel from './components/AdminPanel'


export default function App(){
  // Check if admin panel is being accessed
  const isAdmin = window.location.pathname === '/admin'

  if (isAdmin) {
    return <AdminPanel />
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <SurveySection />
        <How />
      </main>
      
    </div>
  )
}

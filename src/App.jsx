import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import SurveySection from './components/SurveySection'
import How from './components/How'


export default function App(){
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

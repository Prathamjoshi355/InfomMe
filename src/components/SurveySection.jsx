import React from 'react'
import SurveyForm from './SurveyForm'

export default function SurveySection(){
  return (
    <section id="join" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] items-start">
          <div className="rounded-3xl bg-slate-100 p-10 shadow-xl">
            <h3 className="text-3xl font-semibold text-slate-900">Help Us Serve You Better</h3>
            <p className="mt-4 text-slate-600">We are building a smart platform for all your vehicle emergency needs. Please take 1 minute to answer a few questions.</p>
          <img src="https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782322535/image-removebg-preview_11_vsavup.png" alt="Survey" className="mt-6 w-full rounded-2xl object-cover" />
          </div>
          <SurveyForm />
        </div>
      </div>
    </section>
  )
}

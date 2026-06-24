import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 font-bold">
            V
          </div>
          <div>
            <h1 className="text-base font-bold tracking-widest">InformxMe</h1>
            <p className="text-sm text-slate-500">Roadside Assistance, Anytime</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-slate-700">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#about">About Us</a>
          <a className="btn btn-primary" href="#join">Join Early Access</a>
        </nav>
      </div>
    </header>
  )
}

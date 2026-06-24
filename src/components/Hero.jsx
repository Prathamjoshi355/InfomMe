import React from "react"

export default function Hero() {
  const heroImage =
    "https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782314232/6177d621-eb94-4861-aa2e-d97723f5a62b.png"

  return (
    <section
      className="relative bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 " />
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Stranded on the road? <span className="text-yellow-400">We've got your back!</span>
          </h2>
          <p className="text-lg text-black sm:text-xl text-slate-100 max-w-2xl">
            InformxMe connects you with nearby trusted professionals for all your vehicle needs.
          </p>
          <ul className="flex flex-wrap gap-3 text-sm sm:text-base">
           <li className="flex items-center gap-3 rounded-2xl px-4 py-3">
  <img
    src="https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782319118/images-removebg-preview_tsapme.png"
    alt=""
    className="w-6 h-6 object-contain flex-shrink-0"
  />

  <div>
    <p className="font-bold leading-none">Quick</p>
    <p className="font-bold leading-none">
      Response
    </p>
  </div>
</li>
<li className="flex items-center gap-3 rounded-2xl px-4 py-3">
  <img
    src="https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782320642/image-removebg-preview_ikghda.png"
    alt=""
    className="w-6 h-6 object-contain flex-shrink-0"
  />

  <div>
    <p className="font-bold leading-none">Trusted</p>
    <p className="font-bold leading-none">
      Experts
    </p>
  </div>
</li>
            <li className="flex items-center gap-3 rounded-2xl px-4 py-3">
  <img
    src="https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782320753/image-removebg-preview_1_jysg0s.png"
    alt=""
    className="w-9 h-9 object-contain flex-shrink-0"
  />

  <div>
    <p className="font-bold leading-none">Available</p>
    <p className="font-bold leading-none">
       24/7
    </p>
  </div>
</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a className="btn btn-primary" href="#join">Join Early Access</a>
            <a className="btn btn-ghost" href="#learn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

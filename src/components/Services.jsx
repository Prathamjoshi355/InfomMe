import React from "react";

const services = [
  {
    image:
      "https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782320962/image-removebg-preview_2_duxffl.png",
    title: "Puncture Repair",
    desc: "Quick puncture repair at your location.",
  },
  {
    image:
      "https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782321148/image-removebg-preview_3_r2l9qq.png",
    title: "Jump Start",
    desc: "Battery dead? We'll jump start your vehicle.",
  },
  {
    image:
      "https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782321213/image-removebg-preview_4_bt8xsc.png",
    title: "Car Wash",
    desc: "Professional car washing at your doorstep.",
  },
  {
    image:
      "https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782321313/image-removebg-preview_5_ref2ei.png",
    title: "Battery Support",
    desc: "Battery check & replacement support.",
  },
  {
    image:
      "https://res.cloudinary.com/dhy9pmo8s/image/upload/v1782321844/image-removebg-preview_10_mtc2jn.png",
    title: "Towing Service",
    desc: "Safe towing service when you need it most.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Services We Provide
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Fast, reliable and professional roadside assistance whenever
            and wherever you need it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl  flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-60 h-60 object-contain"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900 text-center">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600 text-center text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
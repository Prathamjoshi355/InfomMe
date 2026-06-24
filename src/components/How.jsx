
import React from "react";
import {
  ShieldCheck,
  BadgeDollarSign,
  Zap,
  Clock3,
  Smartphone,
  MapPin,
  UserCheck,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Verified",
    subtitle: "Professionals",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent",
    subtitle: "Pricing",
  },
  {
    icon: Zap,
    title: "Fast &",
    subtitle: "Reliable",
  },
  {
    icon: Clock3,
    title: "Available",
    subtitle: "24/7",
  },
];

const howItWorks = [
  {
    number: "1",
    icon: Smartphone,
    title: "Open the App",
  },
  {
    number: "2",
    icon: MapPin,
    title: "Select Service & Location",
  },
  {
    number: "3",
    icon: UserCheck,
    title: "Get Expert Assigned",
  },
  {
    number: "4",
    icon: CheckCircle,
    title: "Service Completed",
  },
];

export default function FooterSection() {
  return (
    <>
      {/* Why Choose + How It Works */}
      <section className="bg-[#071B3B] text-white rounded-3xl max-w-7xl mx-auto mt-12 overflow-hidden">
        <div className="grid lg:grid-cols-2">

          {/* Why Choose */}
          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-2xl font-bold mb-8">
              Why Choose InformxMe?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <div className="w-70     h-70 rounded-full  flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-9 h-9 text-white" />
                    </div>

                    <p className="text-sm font-medium">
                      {item.title}
                    </p>

                    <p className="text-sm text-white/70">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-center mb-8">
              How It Works
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="text-center relative"
                  >
                    <div className="text-white-400 font-bold text-sm mb-2">
                      {step.number}
                    </div>

                    <div className="w-14 h-14  rounded-full border border-white/20 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white   " />
                    </div>

                    <p className="text-xs text-white/90 leading-relaxed">
                      {step.title}
                    </p>

                    {index !== howItWorks.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-10 -right-5 w-4 h-4 text-white/40" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10 py-10">

            {/* Launch City */}
            <div>
              <p className="text-gray-500 mb-2">
                Launching Soon In
              </p>

              <h3 className="text-5xl font-extrabold text-[#071B3B] flex items-center gap-2">
                BHOPAL
                <MapPin className="w-8 h-8 text-[#F4B400]" />
              </h3>

              <p className="mt-3 text-gray-600">
                Stay tuned for a better &
                smarter roadside assistance
                experience.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <p className="text-gray-700">
                Join our early access community
              </p>

              <p className="text-gray-700">
                and be the first to know when
              </p>

              <p className="text-gray-700 mb-5">
                we launch!
              </p>

              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#071B3B] text-white flex items-center justify-center">
                  f
                </div>

                <div className="w-10 h-10 rounded-full bg-[#071B3B] text-white flex items-center justify-center">
                  i
                </div>

                <div className="w-10 h-10 rounded-full bg-[#071B3B] text-white flex items-center justify-center">
                  w
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold text-[#071B3B] mb-5">
                Have Questions?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5" />
                  <span>+91 91314 94302</span>
                </div>

                {/* <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5" />
                  <span>info@InformxMe.com</span>
                </div> */}  
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#071B3B] py-4">
          <p className="text-center text-white/70 text-sm">
            © 2026 InformxMe. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}


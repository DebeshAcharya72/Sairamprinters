import React from 'react';
import { CloudSun, Sliders, Sparkles, Truck } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  const features = [
    {
      icon: CloudSun,
      title: "Built for Industrial Conditions",
      desc: "Weather-resistant materials and durable printing engineered for demanding manufacturing, mining, and outdoor environments."
    },
    {
      icon: Sliders,
      title: "Custom Manufacturing",
      desc: "Signage designed to match individual plant layouts, specific safety standards, multilingual texts, and site requirements."
    },
    {
      icon: Sparkles,
      title: "Quality-Focused Production",
      desc: "Careful attention to visual contrast, high-durability substrates, crisp finishing, and day/night readability."
    },
    {
      icon: Truck,
      title: "Reliable Delivery & Installation",
      desc: "Coordinated pan-India supply and on-site installation support aligned with your plant schedule and safety standards."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-light-grey relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR ADVANTAGE"
          heading="Why Industries Trust Sairam Printer"
          description="Dedicated industrial craftsmanship and reliable execution built to keep high-risk manufacturing sites safe and compliant."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-safety-orange/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Orange Line Icon */}
                  <div className="w-12 h-12 rounded-xl bg-warm-bg border border-safety-orange/20 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-colors duration-200 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[1.7]" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3 font-heading group-hover:text-safety-orange transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-safety-orange/40 group-hover:bg-safety-orange group-hover:scale-125 transition-all" />
                  <span className="text-[11px] font-bold text-gray-400 group-hover:text-charcoal uppercase tracking-wider transition-colors">
                    Industrial Grade
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

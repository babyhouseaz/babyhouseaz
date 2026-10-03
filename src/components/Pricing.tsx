const plans = [
  {
    name: "Daycare",
    price: "$150",
    per: "/ month",
    color: "#ff4d85",
    features: [
      "Ages 1.5 – 2.5 years",
      "Morning & afternoon care",
      "Healthy meals included",
      "Professional caretakers",
      "Weekly progress reports",
    ],
    cta: "Get Started",
  },
  {
    name: "Playgroup",
    price: "$200",
    per: "/ month",
    color: "#4B4EFC",
    featured: true,
    features: [
      "Ages 2.5 – 4 years",
      "Structured play activities",
      "Healthy meals included",
      "Experienced teachers",
      "Monthly parent meetings",
    ],
    cta: "Get Started",
  },
  {
    name: "Kindergarten",
    price: "$250",
    per: "/ month",
    color: "#00cc66",
    features: [
      "Ages 4 – 6 years",
      "Full academic curriculum",
      "Extracurricular activities",
      "Certified educators",
      "Bi-weekly assessments",
    ],
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00cc66] font-bold uppercase tracking-wider text-sm mb-2">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Simple & Transparent <br className="hidden md:block" /> Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-[#4B4EFC] text-white scale-105 shadow-2xl"
                  : "bg-white text-slate-800"
              }`}
            >
              <div
                className="text-sm font-bold uppercase tracking-wider mb-4 px-4 py-1 rounded-full inline-block"
                style={{
                  backgroundColor: plan.featured ? "rgba(255,255,255,0.2)" : plan.color + "20",
                  color: plan.featured ? "white" : plan.color,
                }}
              >
                {plan.name}
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className={`text-lg ${plan.featured ? "text-blue-200" : "text-slate-400"}`}>{plan.per}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: plan.featured ? "rgba(255,255,255,0.25)" : plan.color }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-blue-100" : "text-slate-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-2xl font-bold text-lg transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: plan.featured ? "white" : plan.color,
                  color: plan.featured ? plan.color : "white",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

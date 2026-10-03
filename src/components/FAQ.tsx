"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is the school schedule for children?",
    a: "Our school runs Monday through Friday, from 7:30 AM to 3:00 PM. Extended care is available until 5:30 PM.",
  },
  {
    q: "What curriculum do you use?",
    a: "We use a play-based, child-centered curriculum that integrates academics, arts, and social-emotional learning.",
  },
  {
    q: "What is the student-to-teacher ratio?",
    a: "We maintain a maximum ratio of 8 students per teacher to ensure personalized attention for every child.",
  },
  {
    q: "Do you offer trial classes?",
    a: "Yes! We offer a free one-week trial so your child can experience our environment before you commit.",
  },
  {
    q: "What is the age range for enrollment?",
    a: "We accept children ages 1.5 to 6 years old, divided into Daycare, Playgroup, and Kindergarten programs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left */}
        <div>
          <p className="text-[#ff4d85] font-bold uppercase tracking-wider text-sm mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-slate-500 mb-8">
            Have questions? We have answers. Browse our most commonly asked questions below.
          </p>
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400">
            <span className="text-sm font-semibold">Image Placeholder (FAQ)</span>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-slate-800 hover:text-[#4B4EFC] transition-colors"
              >
                <span>{item.q}</span>
                <span
                  className={`ml-4 text-2xl font-light transition-transform duration-300 ${
                    open === i ? "rotate-45 text-[#4B4EFC]" : "text-slate-400"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

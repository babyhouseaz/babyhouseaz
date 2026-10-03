import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 px-4 mt-10 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">
        
        {/* CTA Banner */}
        <div className="bg-[#4B4EFC] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 mb-16 -mt-32 shadow-2xl">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Ready to Join Padora?
            </h3>
            <p className="text-blue-200 text-lg">Give your child the best start in life.</p>
          </div>
          <button className="bg-[#ffcc00] text-slate-800 font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
            Enroll Now
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-extrabold text-white">Padora</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A nurturing environment where children explore, learn, and grow every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Classes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Teachers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Sunshine Street, Baku, Azerbaijan</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>+994 50 000 00 00</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span>hello@padoraschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Padora School. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

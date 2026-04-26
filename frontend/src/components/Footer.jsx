import React from 'react';
import { MessageCircle, Globe, Terminal, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#06090e] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter Section */}
        <div className="bg-[#1A1C23] p-10 md:p-14 rounded-3xl mb-16 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Community And Grow With Nature!</h3>
          <div className="flex items-start md:items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 md:mt-0 shadow-[0_0_8px_#10B981]"></div>
            <p className="text-gray-300">
              Stay updated with the latest organic solutions, eco-friendly tips, and special offers from Atodya.
            </p>
          </div>

          <form action="mailto:info@atodya.in" method="POST" encType="text/plain" className="relative max-w-xl">
            <input
              type="email"
              placeholder="Your E-mail"
              required
              className="w-full bg-[#323640] text-white placeholder:text-gray-400 font-medium rounded-full py-5 pl-8 pr-16 outline-none focus:ring-2 focus:ring-accent transition-all shadow-inner"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent hover:bg-accent-light flex items-center justify-center rounded-full transition-all shadow-lg hover:scale-105">
              <Send size={20} className="text-white ml-[-2px]" />
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Atodya Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Atodya
              </span>
            </a>
            <p className="text-gray-400 max-w-sm">
              Empowering businesses to grow smarter and faster with cutting-edge AI and advanced analytics.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contacts</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@atodya.in" className="text-gray-400 hover:text-primary transition-colors">
                  info@atodya.in
                </a>
              </li>
              <li>
                <a href="mailto:hastibhalodia@atodya.in" className="text-gray-400 hover:text-primary transition-colors">
                  hastibhalodia@atodya.in
                </a>
              </li>
              <li>
                <a href="mailto:mahipatel@atodya.in" className="text-gray-400 hover:text-primary transition-colors">
                  mahipatel@atodya.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-gray-400">
                <img src="/linkedin_logo.webp" alt="linkedin" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-gray-400">
                <img src="/instagram_logo.webp" alt="instagram" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Atodya. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

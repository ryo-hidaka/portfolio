import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-24">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-wider">Contact</h3>
            <a 
              href="https://forms.gle/dtK3TgXDgoaRkDka7" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl text-gray-300 hover:text-white transition-colors group tracking-wider"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              ryoartist34@gmail.com
            </a>
          </div>
          <nav className="mt-12 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
              <li>
                <Link to="/" className="text-xl hover:text-[#3366cc] transition-colors tracking-wider">Works</Link>
              </li>
              <li>
                <Link to="/about" className="text-xl hover:text-[#3366cc] transition-colors tracking-wider">About</Link>
              </li>
              <li>
                <a href="#" className="text-xl hover:text-[#3366cc] transition-colors tracking-wider">Top</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-12 flex justify-between items-center">
          <p className="text-lg text-gray-400 tracking-widest">&copy; 2024 RYO HIDAKA. All rights reserved.</p>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full tracking-wider"
          >
            {/* <ArrowUp className="w-6 h-6" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}
import { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 詳細ページに遷移したときにメニューを閉じる
    if (location.pathname.includes('/work/')) {
      setIsWorksOpen(false);
      setIsAboutOpen(false);
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]);

  // ページ遷移時にトップにスクロールし、メニューを閉じる
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // すべてのメニューを閉じる
    setIsWorksOpen(false);
    setIsAboutOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsWorksOpen(false);
    setIsAboutOpen(false);
  };

  const handleAboutItemClick = (sectionId: string) => {
    if (location.pathname !== '/about') {
      navigate('/about', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
    setIsAboutOpen(false);
  };

  return (
    <header className="sticky top-0 w-full bg-[#f2f2f2]/90 backdrop-blur-sm z-50">
      <div className="container px-6 py-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-4xl font-bold tracking-widest hover:text-[#3366cc] transition-colors"
            onClick={() => {
              setIsWorksOpen(false);
              setIsAboutOpen(false);
              setIsMobileMenuOpen(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            RYO
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-16">
            <div className="relative">
              <button
                className="text-xl text-[#333333] flex items-center space-x-1 hover:text-[#3366cc] transition-colors tracking-wider"
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                  }
                  setIsWorksOpen(!isWorksOpen);
                }}
              >
                <span>Works</span>
                <ChevronDown size={20} className={`transition-transform ${isWorksOpen ? 'rotate-180' : ''}`} />
              </button>
              {isWorksOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button
                    onClick={() => scrollToSection('graphic-design')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Graphic Design
                  </button>
                  <button
                    onClick={() => scrollToSection('web-design')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Web Design
                  </button>
                  <button
                    onClick={() => scrollToSection('art')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Art
                  </button>
                  <button
                    onClick={() => scrollToSection('ai-development')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    AI Development
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="text-xl text-[#333333] flex items-center space-x-1 hover:text-[#3366cc] transition-colors tracking-wider"
                onClick={() => {
                  if (location.pathname !== '/about') {
                    navigate('/about');
                  }
                  setIsAboutOpen(!isAboutOpen);
                }}
              >
                <span>About</span>
                <ChevronDown size={20} className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button
                    onClick={() => handleAboutItemClick('profile')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => handleAboutItemClick('philosophy')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Philosophy
                  </button>
                  <button
                    onClick={() => handleAboutItemClick('career')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Career
                  </button>
                  <button
                    onClick={() => handleAboutItemClick('design-approach')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Design Approach
                  </button>
                  <button
                    onClick={() => handleAboutItemClick('skills')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 tracking-wider"
                  >
                    Skills
                  </button>
                </div>
              )}
            </div>
            <a href="#contact" className="text-xl text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider">Contact</a>
          </nav>

          {/* Mobile Navigation */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="container px-6 py-8 flex flex-col space-y-6">
            <div>
              <button
                className="text-2xl text-[#333333] flex items-center space-x-2 hover:text-[#3366cc] transition-colors tracking-wider"
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                  }
                  setIsWorksOpen(!isWorksOpen);
                }}
              >
                <span>Works</span>
                <ChevronDown size={24} className={`transition-transform ${isWorksOpen ? 'rotate-180' : ''}`} />
              </button>
              {isWorksOpen && (
                <div className="mt-4 space-y-4 pl-4">
                  <button
                    onClick={() => {
                      scrollToSection('ai-development');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    AI Development
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('web-design');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Web Design
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('graphic-design');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Graphic Design
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('art');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Art
                  </button>
                </div>
              )}
            </div>
            <div>
              <button
                className="text-2xl text-[#333333] flex items-center space-x-2 hover:text-[#3366cc] transition-colors tracking-wider"
                onClick={() => {
                  if (location.pathname !== '/about') {
                    navigate('/about');
                  }
                  setIsAboutOpen(!isAboutOpen);
                }}
              >
                <span>About</span>
                <ChevronDown size={24} className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutOpen && (
                <div className="mt-4 space-y-4 pl-4">
                  <button
                    onClick={() => {
                      handleAboutItemClick('profile');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      handleAboutItemClick('philosophy');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Philosophy
                  </button>
                  <button
                    onClick={() => {
                      handleAboutItemClick('career');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Career
                  </button>
                  <button
                    onClick={() => {
                      handleAboutItemClick('design-approach');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Design Approach
                  </button>
                  <button
                    onClick={() => {
                      handleAboutItemClick('skills');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider"
                  >
                    Skills
                  </button>
                </div>
              )}
            </div>
            <a href="#contact" className="text-2xl text-[#333333] hover:text-[#3366cc] transition-colors tracking-wider">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
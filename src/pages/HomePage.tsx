import { Link } from 'react-router-dom';

interface Work {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  details?: (string | JSX.Element)[];
  technologies?: string[];
  modalImage?: string[];
}

interface HomePageProps {
  works: {
    aiDevelopment: Work[];
    webDesign: Work[];
    graphicDesign: Work[];
    art: Work[];
  };
}

export function HomePage({ works }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442777/profile_photo_mifcmy.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15">
          <div className="container px-8 md:px-12 lg:px-20 h-full flex items-start pt-20 md:pt-0 md:items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">RYO HIDAKA</h1>
              <p className="text-xl tracking-widest">ポートフォリオ</p>
            </div>
          </div>
        </div>
      </section>
      {/* Works Section */}
      <section id="works" className="py-32 md:py-40 lg:py-48">
        <div className="container px-8 md:px-12 lg:px-20">
          {/* Grid Layout */}
          <div className="space-y-32 md:space-y-40 lg:space-y-48">
            {/* Graphic Design Section */}
            <div id="graphic-design">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">Graphic Design</h3>
                <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-x text-gray-500 tracking-widest">グラフィックデザイン</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.graphicDesign.map((work, index) => (
                  <Link 
                    key={index} 
                    to={`/work/graphicDesign/${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {Array.isArray(work.image) ? (
                          <>
                            <img 
                              src={work.image[0]}
                              alt={`${work.title} 1`}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={work.image[1]}
                              alt={`${work.title} 2`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                            className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Web Design Section */}
            <div id="web-design">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">Web Design</h3>
                <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-x text-gray-500 tracking-widest">ウェブデザイン</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.webDesign.map((work, index) => (
                  <Link 
                    key={index} 
                    to={`/work/webDesign/${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {Array.isArray(work.image) ? (
                          <>
                            <img 
                              src={work.image[0]}
                              alt={`${work.title} 1`}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={work.image[1]}
                              alt={`${work.title} 2`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                            className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Art Section */}
            <div id="art">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">Art</h3>
                <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-x text-gray-500 tracking-widest">アート</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.art.map((work, index) => (
                  <Link 
                    key={index} 
                    to={`/work/art/${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {Array.isArray(work.image) ? (
                          <>
                            <img 
                              src={work.image[0]}
                              alt={`${work.title} 1`}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={work.image[1]}
                              alt={`${work.title} 2`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* AI Development Section */}
            <div id="ai-development">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">AI Development</h3>
                <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-x text-gray-500 tracking-widest">AI駆動開発</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.aiDevelopment.map((work, index) => (
                  <Link 
                    key={index} 
                    to={`/work/aiDevelopment/${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {Array.isArray(work.image) ? (
                          <>
                            <img 
                              src={work.image[0]}
                              alt={`${work.title} 1`}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={work.image[1]}
                              alt={`${work.title} 2`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                            className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
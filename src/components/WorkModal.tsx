import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Work {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  details?: (string | JSX.Element)[];
  technologies?: string[];
  modalImage?: string[];
}

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  work: Work | null;
}

export function WorkModal({ isOpen, onClose, work }: WorkModalProps) {
  const [showDesigns, setShowDesigns] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowDesigns(false);
    }
  }, [isOpen]);

  if (!isOpen || !work) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-8 lg:p-20">
      <div 
        className="bg-white rounded-lg md:rounded-xl max-w-7xl w-full h-[90vh] md:h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container px-6 py-8 md:px-12 lg:px-20 md:py-12 lg:py-20 sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">{work.title}</h3>
              {work.subtitle && (
                <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-2 md:mt-3 lg:mt-4 tracking-wider">{work.subtitle}</p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-2 md:p-3 lg:p-4 hover:bg-gray-100 rounded-full transition-colors -mt-2 md:mt-0"
            >
              <X className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="container px-6 py-4 md:px-12 lg:px-20 md:py-4 lg:py-6">
            <div className="overflow-hidden rounded-lg md:rounded-xl mb-4 md:mb-6 lg:mb-8 bg-white">
              <div className="max-w-xl mx-auto">
                <div className="aspect-[16/10]">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {work.modalImage && work.modalImage.length > 0 && (
              <div className="mb-4 md:mb-6 lg:mb-8">
                <button
                  onClick={() => setShowDesigns(!showDesigns)}
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg text-base font-medium tracking-wider"
                >
                  {showDesigns ? 'デザイン一覧を閉じる' : 'デザイン一覧を見る'}
                </button>
                {showDesigns && (
                  <div className="mt-4">
                    {work.modalImage.map((img, index) => (
                      <div key={index} className="overflow-hidden max-w-xl mx-auto">
                        <img 
                          src={img} 
                          alt={`${work.title} デザイン ${index + 1}`}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {(work.description || work.details || work.technologies) && (
              <div className="space-y-6 md:space-y-8 lg:space-y-12">
                {work.description && (
                  <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] lg:grid-cols-[240px,1fr] gap-4 md:gap-8 lg:gap-12">
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3 tracking-wider">概要</h4>
                      <span className="text-sm md:text-base text-gray-500 tracking-widest">Overview</span>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2] md:leading-[2] lg:leading-[2] mt-20 tracking-wider text-justify">{work.description}</p>
                  </div>
                )}

                {work.details && work.details.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] lg:grid-cols-[240px,1fr] gap-4 md:gap-8 lg:gap-12">
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3 tracking-wider">詳細</h4>
                      <span className="text-sm md:text-base text-gray-500 tracking-widest">Details</span>
                    </div>
                    <ul className="space-y-3 md:space-y-4 lg:space-y-6">
                      {work.details.map((detail, index) => (
                        <li key={index} className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2] md:leading-[2] lg:leading-[2] mt-20 tracking-wider">{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {work.technologies && work.technologies.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] lg:grid-cols-[240px,1fr] gap-4 md:gap-8 lg:gap-12">
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3 tracking-wider">使用技術</h4>
                      <span className="text-sm md:text-base text-gray-500 tracking-widest">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {work.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gray-100 text-[#333333] rounded-lg text-xs md:text-sm lg:text-base mt-20 tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
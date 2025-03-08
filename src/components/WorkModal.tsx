import { X } from 'lucide-react';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  work: {
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    modalImage?: string[];
    details?: string[];
    technologies?: string[];
  } | null;
}

export function WorkModal({ isOpen, onClose, work }: WorkModalProps) {
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
                <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-2 md:mt-4 lg:mt-6 tracking-wider">{work.subtitle}</p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-2 md:p-3 lg:p-5 hover:bg-gray-100 rounded-full transition-colors -mt-2 md:mt-0"
            >
              <X className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="container px-6 py-8 md:px-12 lg:px-20 md:py-12 lg:py-20">
            <div className="overflow-hidden rounded-lg md:rounded-xl mb-8 md:mb-16 lg:mb-24 bg-white">
              {work.modalImage ? (
                <div className="flex flex-col">
                  {work.modalImage.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${work.title} ${index + 1}`}
                      className="w-full"
                    />
                  ))}
                </div>
              ) : (
                <div className="aspect-[16/9]">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              )}
            </div>
            
            {(work.description || work.details || work.technologies) && (
              <div className="space-y-12 md:space-y-16 lg:space-y-24">
                {work.description && (
                  <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-4 md:gap-12 lg:gap-24">
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 tracking-wider">概要</h4>
                      <span className="text-base md:text-lg text-gray-500 tracking-widest">Overview</span>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">{work.description}</p>
                  </div>
                )}

                {work.details && work.details.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-4 md:gap-12 lg:gap-24">
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 tracking-wider">詳細</h4>
                      <span className="text-base md:text-lg text-gray-500 tracking-widest">Details</span>
                    </div>
                    <ul className="space-y-4 md:space-y-6 lg:space-y-10">
                      {work.details.map((detail, index) => (
                        <li key={index} className="text-base md:text-lg lg:text-xl text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider">{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {work.technologies && work.technologies.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-4 md:gap-12 lg:gap-24">
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4">使用技術</h4>
                      <span className="text-base md:text-lg text-gray-500">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-5">
                      {work.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 md:px-6 md:py-3 lg:px-10 lg:py-5 bg-gray-100 text-[#333333] rounded-lg text-sm md:text-base lg:text-lg"
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
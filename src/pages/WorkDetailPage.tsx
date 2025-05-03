import { useParams, useNavigate } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LandingPageDetail } from '../components/works/LandingPageDetail';
import { ArtPassDetail } from '../components/works/ArtPassDetail';
import { DigiLigDetail } from '../components/works/DigiLigDetail';
import { BannerDesignDetail } from '../components/works/BannerDesignDetail';
import { BusinessCardDetail } from '../components/works/BusinessCardDetail';
import { LogoDesignDetail } from '../components/works/LogoDesignDetail';
import { PosterDesignDetail } from '../components/works/PosterDesignDetail';
import { AdvertisementDesignDetail } from '../components/works/AdvertisementDesignDetail';
import { TheSaunaDetail } from '../components/works/TheSaunaDetail';
import { DatenDetail } from '../components/works/DatenDetail';

interface Work {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  details?: (string | JSX.Element)[];
  technologies?: string[];
  modalImage?: string[];
  type: 'landingPage' | 'artPass' | 'digiLig' | 'other' | 'bannerDesign' | 'businessCard' | 'logoDesign' | 'posterDesign' | 'advertisementDesign' | 'theSauna' | 'daten';
}

interface WorkDetailPageProps {
  works: {
    [key: string]: Work[];
  };
}

export function WorkDetailPage({ works }: WorkDetailPageProps) {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const [showDesigns, setShowDesigns] = useState(false);
  
  // カテゴリーとIDから作品を取得
  const work = works[category || '']?.[parseInt(id || '0')];
  
  useEffect(() => {
    if (!work) {
      navigate('/');
    }
  }, [work, navigate]);

  if (!work) return null;

  // 作品タイプに応じて適切なコンポーネントを表示
  const renderWorkDetail = () => {
    switch (work.type) {
      case 'landingPage':
        return <LandingPageDetail />;
      case 'artPass':
        return <ArtPassDetail />;
      case 'digiLig':
        return <DigiLigDetail />;
      case 'bannerDesign':
        return <BannerDesignDetail />;
      case 'businessCard':
        return <BusinessCardDetail />;
      case 'logoDesign':
        return <LogoDesignDetail />;
      case 'posterDesign':
        return <PosterDesignDetail />;
      case 'advertisementDesign':
        return <AdvertisementDesignDetail />;
      case 'theSauna':
        return <TheSaunaDetail />;
      case 'daten':
        return <DatenDetail />;
      default:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">プロジェクト概要</h3>
                <span className="text-sm text-gray-500 tracking-widest">Overview</span>
              </div>
              <div className="mt-20">
                <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                  {work.description}
                </p>
              </div>
            </div>

            {work.details && work.details.slice(1).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">詳細</h3>
                  <span className="text-sm text-gray-500 tracking-widest">Details</span>
                </div>
                <div className="mt-20">
                  <ul className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify list-disc pl-6 space-y-2">
                    {work.details.slice(1).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {work.technologies && work.technologies.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">使用技術</h3>
                  <span className="text-sm text-gray-500 tracking-widest">Technologies</span>
                </div>
                <div className="mt-20">
                  <ul className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify list-disc pl-6 space-y-2">
                    {work.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-16 md:py-20 lg:py-0">
      <div className="container px-6 py-8 md:px-12 lg:px-20 md:py-12 lg:py-20">
        <div className="flex justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">{work.title}</h3>
            {work.subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-2 md:mt-3 lg:mt-4 tracking-wider">{work.subtitle}</p>
            )}
            {work.details && work.details[0] && typeof work.details[0] === 'object' && (
              <div className="mt-2 md:mt-3 lg:mt-4 flex items-center gap-2">
                <span className="text-gray-500">URL</span>
                {work.details[0]}
                <ArrowUpRight className="w-5 h-5 translate-y-[1.5px]" />
              </div>
            )}
          </div>
          <button 
            onClick={() => navigate('/')}
            className="p-2 md:p-3 lg:p-4 hover:bg-gray-100 rounded-full transition-colors -mt-2 md:mt-0"
          >
            <X className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>
        </div>
        
        <div className="overflow-hidden rounded-lg md:rounded-xl mb-8 md:mb-12 lg:mb-16 bg-white">
          <div className="max-w-xl mx-auto">
            <div className="aspect-[16/10]">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-contain p-2 cursor-pointer"
                onClick={() => window.open(work.image, '_blank')}
              />
            </div>
          </div>
        </div>

        {work.modalImage && work.modalImage.length > 0 && (
          <div className="mb-8 md:mb-12 lg:mb-16">
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
                      className="w-full cursor-pointer"
                      onClick={() => window.open(img, '_blank')}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {renderWorkDetail()}
      </div>
    </div>
  );
} 
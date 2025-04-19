import { useState, useEffect, useRef } from 'react';
import { Target, Shield, Palette, Lightbulb, Brain, Eye, Activity, Zap, Heart, Clock, Star } from 'lucide-react';

export function BannerDesignDetail() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={containerRef}>
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">プロジェクト概要</h3>
          <span className="text-sm text-gray-500 tracking-widest">Project Overview</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 p-4 rounded-lg flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                長野県野尻湖のゲストハウスLAMPが提供する「The Sauna」の架空プロモーションバナーデザイン。サウナ体験の本質的な価値と感覚的解放を視覚言語で表現し、「ととのい」という抽象的な体験を具体的かつ魅力的に伝えるビジュアルコミュニケーション設計を行いました。感性に訴えるデザイン要素と行動心理学に基づいた構成により、ユーザーの興味喚起から行動促進までを一貫して導く戦略的なプロモーション素材です。
              </p>
              
              {/* プロジェクト概要図 */}
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-lg font-semibold mb-4 text-blue-800">プロジェクト構成図</h4>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Target className="w-5 h-5 text-blue-600" />
                      </div>
                      <h5 className="font-medium text-blue-800">目的</h5>
                    </div>
                    <p className="text-sm text-gray-700">サウナ体験の本質的価値を視覚化し、ユーザーの興味喚起から行動促進までを導く</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-cyan-100 p-2 rounded-full">
                        <Palette className="w-5 h-5 text-cyan-600" />
                      </div>
                      <h5 className="font-medium text-cyan-800">アプローチ</h5>
                    </div>
                    <p className="text-sm text-gray-700">感性に訴えるデザイン要素と行動心理学に基づいた構成</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-teal-100 p-2 rounded-full">
                        <Shield className="w-5 h-5 text-teal-600" />
                      </div>
                      <h5 className="font-medium text-teal-800">成果</h5>
                    </div>
                    <p className="text-sm text-gray-700">戦略的なプロモーション素材による効果的なユーザー行動促進</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">感覚体験の視覚化戦略</h3>
          <span className="text-sm text-gray-500 tracking-widest">Visualization Strategy</span>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="bg-purple-50 p-4 rounded-lg flex-shrink-0">
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">コピーライティングと心理的アプローチ</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-4">
                「なぜ、今日を境にあなたの"ととのい"が変わるのか。」というコピーを中核に据え、以下の心理的効果を狙いました：
              </p>
              
              {/* コピーライティング効果図 */}
              <div className="mt-4 mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
                <h5 className="text-md font-semibold mb-4 text-purple-800">コピーライティング効果図</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Zap className="w-4 h-4 text-purple-600" />
                      </div>
                      <h6 className="font-medium text-purple-800">好奇心の喚起</h6>
                    </div>
                    <p className="text-sm text-gray-700">「なぜ」で始まる疑問形が脳の関心メカニズムを自然に活性化</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Clock className="w-4 h-4 text-purple-600" />
                      </div>
                      <h6 className="font-medium text-purple-800">時間的区切り</h6>
                    </div>
                    <p className="text-sm text-gray-700">「今日を境に」という表現が決断のタイミングを明示し、行動を促進</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Heart className="w-4 h-4 text-purple-600" />
                      </div>
                      <h6 className="font-medium text-purple-800">パーソナライズ</h6>
                    </div>
                    <p className="text-sm text-gray-700">「あなたの"ととのい"」と個人化することで共感と関与を強化</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Activity className="w-4 h-4 text-purple-600" />
                      </div>
                      <h6 className="font-medium text-purple-800">変化の約束</h6>
                    </div>
                    <p className="text-sm text-gray-700">「変わる」という変容を示唆し、新たな体験への期待を創出</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mt-4">
                このコピーは認知心理学における「情報ギャップ理論」を応用し、読み手の知的好奇心を刺激する設計としています。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg flex-shrink-0">
              <Eye className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">ビジュアル表現と感覚伝達</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-4">
                水面に浮かぶ人物の開放感あふれるビジュアルは、サウナ後の「ととのい」状態を視覚的に表現。このビジュアル選択には以下の意図を込めています：
              </p>
              
              {/* ビジュアル表現図 */}
              <div className="mt-4 mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <h5 className="text-md font-semibold mb-4 text-emerald-800">ビジュアル表現効果図</h5>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <Activity className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h6 className="font-medium text-emerald-800">身体感覚の共感誘発</h6>
                    </div>
                    <p className="text-sm text-gray-700">水に浮かぶ無重力感を視覚的に伝え、擬似体験を促進</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <Zap className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h6 className="font-medium text-emerald-800">開放と解放のメタファー</h6>
                    </div>
                    <p className="text-sm text-gray-700">広がる水面と空が心理的・身体的な解放感を象徴</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <Heart className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h6 className="font-medium text-emerald-800">自然との一体感</h6>
                    </div>
                    <p className="text-sm text-gray-700">自然環境との調和がもたらす精神的充足感を表現</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <Star className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h6 className="font-medium text-emerald-800">非日常空間の提示</h6>
                    </div>
                    <p className="text-sm text-gray-700">日常から離れた特別な体験価値を暗示</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { useState, useEffect, useRef } from 'react';
import { History, Eye, Type, Palette, Layout as LayoutIcon } from 'lucide-react';

export function PosterDesignDetail() {
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
    <div ref={containerRef} className="space-y-16 md:space-y-24 lg:space-y-32 container mx-auto px-2 md:px-4 lg:px-6">
      {/* プロジェクト概要 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">プロジェクト概要</h3>
          <span className="text-sm text-gray-500 tracking-widest">Overview</span>
        </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <History className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800">プロジェクトの目的</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            架空の展示会「知られざるお城の悲劇展」のチラシデザインとして制作しました。歴史的建造物に秘められた物語と悲劇を紹介する展示会の魅力を、視覚的言語で表現することに挑戦。東洋と西洋の文化的要素を融合させ、神秘的な雰囲気と情報の明確さを両立させたデザインです。展示への期待感と好奇心を喚起するビジュアルコミュニケーションを目指しました。
          </p>
        </div>
      </div>

      {/* デザインコンセプト */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">デザインコンセプト</h3>
          <span className="text-sm text-gray-500 tracking-widest">Design Concept</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <History className="w-6 h-6 text-blue-600" />
            </div>
              <h4 className="font-semibold text-blue-800">東西文化の対話的構成</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              日本語の縦書きタイポグラフィと西洋中世の城という異なる文化要素の統合により、新たな視覚体験を創出しました。直交する視覚軸（縦書きテキストと水平に広がる城の構図）が視覚的緊張感を生み出しています。
            </p>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-purple-800">神秘性と時間の隔たり</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              霧に包まれた城の写真処理により、時間を超えた物語性と謎めいた雰囲気を演出。デジタル処理によって現実と非現実の境界を曖昧にし、展示内容への想像力を刺激します。
            </p>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Type className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">視覚的階層と注目点</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              主要タイトルの「お城」部分をゴールドでハイライトすることで、視線の流れを誘導し情報の優先順位を明確に設計。暗色背景に映えるコントラストが記憶に残るデザイン要素となっています。
            </p>
          </div>
        </div>
      </div>

      {/* 色彩と構成要素 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">色彩と構成要素</h3>
          <span className="text-sm text-gray-500 tracking-widest">Color & Composition</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Palette className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800">色彩設計</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>深い青紫のトーンによる歴史的重みと悲劇性の表現</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>レンガ模様のフレームによる「過去への窓」の視覚化</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>光と影のコントラストによる物語性と悲劇的要素の暗示</span>
              </li>
                    </ul>
                  </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="font-semibold text-rose-800">タイポグラフィ設計</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>「知られざるお城の悲劇展」の白色縦書きによる和の美意識表現</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>「お城」部分のゴールド処理による展示テーマの強調</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>バイリンガル表記による国際的な視点の追加</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 技術的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Approach</span>
        </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <LayoutIcon className="w-6 h-6 text-slate-600" />
            </div>
            <h4 className="font-semibold text-slate-800">デジタル処理とレイアウト</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            Adobe Photoshopを用いた城のビジュアル処理（霧効果、色調補正、テクスチャ）とAdobe Illustratorでのタイポグラフィ設計を組み合わせ、幻想的でありながら情報が明確に伝わるデザインに仕上げました。黄金比に基づくレイアウト構成により、視覚的調和と情報の流れを最適化。印刷媒体として効果的に機能するよう、視認性と印象の強さを両立させています。
          </p>
        </div>
      </div>

      {/* デザインの成果と応用 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">デザインの成果と応用</h3>
          <span className="text-sm text-gray-500 tracking-widest">Results & Applications</span>
        </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Eye className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800">デザインの成果</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            このチラシデザインは単なる情報伝達を超え、展示会の世界観を先取りして体験させる「体験の前触れ」として機能します。謎めいた視覚表現と「知られざる」という言葉の組み合わせが好奇心を喚起し、来場を促す効果的なビジュアルコミュニケーションを実現。このデザイン言語は、ウェブサイト、チケット、展示カタログなど関連する媒体にも一貫して応用できる視覚システムとして設計されています。
          </p>
        </div>
      </div>
    </div>
  );
} 
import { useState, useEffect, useRef } from 'react';
import { Code, Layout as LayoutIcon, Palette, LineChart } from 'lucide-react';

export function LogoDesignDetail() {
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
              <LineChart className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800">プロジェクトの目的</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            「L」と「A」の文字を抽象化し、交差する線と計算された色彩のコントラストによって構成されたLine Artロゴは、西洋の抽象芸術と東洋の書道美学の融合を象徴しています。「バランス・アクト」と「ミックス・スティックス」という2024年のロゴデザイントレンドを取り入れながら、Line Artist ryoの芸術理念を視覚言語に翻訳しました。
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
                <LineChart className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800">文字の抽象化と線の表現</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              「Line Art」の「L」と「A」を強調したシンボルマークは、文字の持つ直線的要素を幾何学的に再構成しています。線の交差によって生まれる空間の緊張感は、筆の動きから生まれる東洋の書の躍動感と、西洋の構成主義的アプローチを融合させた表現です。
            </p>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-purple-800">戦略的な色彩選択</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              青（RGB:67, 81, 160）と赤紫（RGB:157, 49, 93）の対比は単なる美的選択ではなく、芸術的コンセプトを強化するための戦略的判断です。青の冷静さと知性、赤紫の情熱と創造性という相反する性質が一つの調和を生み出しています。
            </p>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">余白と構造の均衡</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              限られた正方形のフレーム内で線と色面が織りなす構造は、東洋の書道における「余白」の概念を現代的に解釈したものです。15°の倍数による角度設定と最小限のアンカーポイントによって、洗練された幾何学的均衡を実現しました。
            </p>
          </div>
        </div>
      </div>

      {/* 技術的実装 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的実装</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Implementation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Code className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800">スケーラビリティと汎用性</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>8×8のベースグリッドに基づいた構築</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>最小サイズ（印刷20mm/デジタル60px）での視認性確保</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>多様な媒体での一貫した表示対応</span>
              </li>
            </ul>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Palette className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="font-semibold text-rose-800">カラーシステムと視覚的一貫性</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>ブルー（RGB:67, 81, 160 / HEX:#4351A0）とレッドパープル（RGB:157, 49, 93 / HEX:#9D315D）の最適なコントラスト比</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>幾何学的なサンセリフフォントの採用</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>黄金比に基づく文字間隔の最適化</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* まとめ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">まとめ</h3>
          <span className="text-sm text-gray-500 tracking-widest">Summary</span>
        </div>
        <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <LayoutIcon className="w-6 h-6 text-slate-600" />
            </div>
            <h4 className="font-semibold text-slate-800">デザインの成果</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            このロゴデザインは、Line Artist ryoの芸術哲学である「西洋の抽象画と東洋の抽象表現の融合」を視覚的に伝えると同時に、商業的要素と芸術性を兼ね備えた実用的なシンボルとして機能します。バランスと緊張感、伝統と革新、東洋と西洋という対立概念の調和を図ることで、アーティストとしてのブランドアイデンティティを確立する重要な礎となっています。
          </p>
        </div>
      </div>
    </div>
  );
} 
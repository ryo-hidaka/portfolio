import { useState, useEffect, useRef } from 'react';
import { Target, Code, Layout as LayoutIcon, PenTool, Layers, Smartphone } from 'lucide-react';

export function BusinessCardDetail() {
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
      {/* 概要 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">概要</h3>
          <span className="text-sm text-gray-500 tracking-widest">Overview</span>
        </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800">プロジェクトの目的</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            この名刺デザインは、「Line Artist Ryo」としての芸術活動における第一印象を形作るビジュアルアイデンティティとして制作しました。限られたキャンバスの中に、書の流動性とデジタルデザインの精密さを融合させ、伝統と革新が交差する独自の芸術世界を表現しています。
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
                <PenTool className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800">筆と線の詩学</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              名刺の背景となる作品は、私自身の書道パフォーマンスから生まれた筆のストロークをデジタル処理したものです。勢いのある白い線が画面を舞うように動き、静寂の中の躍動感を表現しています。この有機的な線の動きが、私の芸術表現の根幹である「線の自由と力強さ」を視覚化しています。
            </p>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-purple-800">余白の美学</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              和紙のような繊細な質感を持つグレーの背景と、その上を自由に泳ぐ白線の対比は、日本美術における「余白の美」の現代的解釈です。意図的に設けた余白が、鑑賞者の想像力を誘い、作品との対話を促します。
            </p>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Layers className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">文字の共存</h4>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              表面では「日高 崚」の漢字を縦書きで力強く配置し、「line artist ryo」の英字を水平に添えることで、東洋と西洋、伝統と現代の美意識の融合を表現しています。裏面では実用的な情報を整然と配置しながらも、背景の筆ストロークが空間に動きを与え、機能性と芸術性の調和を実現しています。
            </p>
          </div>
        </div>
      </div>

      {/* 技術的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Approach</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Code className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800">デジタルと手技の融合</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>書道で描いた筆ストロークをスキャンし、Adobe Photoshopで色調補正とコントラスト強化</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>モノクロームのグラデーションによる奥行き感と立体感の演出</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>Adobe Illustratorでの精密なタイポグラフィ設計と余白のバランス調整</span>
              </li>
            </ul>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Layers className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="font-semibold text-rose-800">視覚的階層の構築</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>大きく力強い漢字と繊細な英字のコントラストによる視線誘導</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>情報の優先度に応じた文字サイズと配置の最適化</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>SNSアイコンの最小限のデザインによる現代的要素の導入</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 名刺がもたらす体験 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">名刺がもたらす体験</h3>
          <span className="text-sm text-gray-500 tracking-widest">Experience</span>
        </div>
        <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Smartphone className="w-6 h-6 text-slate-600" />
            </div>
            <h4 className="font-semibold text-slate-800">デジタルとアナログの融合</h4>
          </div>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            名刺を受け取った人は、単なる連絡先情報以上の体験を得ることができます。手に取った瞬間、私の作品世界の一端に触れ、書とデジタルアートが融合した独自の表現スタイルを直感的に理解できます。シンプルでありながら記憶に残るこのデザインは、会話の糸口となり、芸術的対話への入り口となります。
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-justify mt-6">
            モノクロームを基調としながらも豊かな表現を実現したこの名刺は、私の芸術活動の象徴として、ポートフォリオの重要な一部を担っています。同時に、このデザイン言語はウェブサイトやSNSプロフィール、展示会カタログなど、様々なメディアに一貫して展開することで、「Line Artist Ryo」としてのブランドアイデンティティを確立していきます。
          </p>
        </div>
      </div>
    </div>
  );
} 
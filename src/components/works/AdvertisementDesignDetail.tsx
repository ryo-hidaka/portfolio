import { useState, useEffect, useRef } from 'react';
import { Palette, Camera, Lightbulb, Layout, Eye, Layers, Globe, Target, ChevronRight, Monitor, PenTool } from 'lucide-react';

export function AdvertisementDesignDetail() {
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
          <span className="text-sm text-gray-500 tracking-widest">Project Overview</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-purple-800">プロジェクトの目的</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-purple-800">高級感の表現</h5>
                <p className="text-base text-gray-700">アルコールフリープレミアム飲料としての価値提案</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-purple-800">ブランド哲学</h5>
                <p className="text-base text-gray-700">素材の本質と職人技の視覚的物語化</p>
              </div>
            </div>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800">戦略的アプローチ</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-blue-800">視覚言語</h5>
                <p className="text-base text-gray-700">ワイン市場の洗練された美意識の転用</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-blue-800">統合アプローチ</h5>
                <p className="text-base text-gray-700">感性と理性に同時に訴求するデザイン</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* デザインコンセプトと戦略 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">デザインコンセプトと戦略</h3>
          <span className="text-sm text-gray-500 tracking-widest">Design Concept & Strategy</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800">伝統と職人技の表現</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>枯れた葡萄の木と瑞々しい葡萄の配置による時間軸の表現</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>職人の知恵と素材への敬意の視覚化</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>風化した表面による知識と経験の比喩</span>
              </li>
            </ul>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800">素材の誠実な提示</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>最小限の加工による自然素材の配置</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>産地直送の新鮮さの強調</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>自然本来の美しさの視覚化</span>
              </li>
            </ul>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Monitor className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="font-semibold text-rose-800">ワインの美学の転用</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>ワイン文化の象徴的要素の取り入れ</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>洗練された美意識の転用</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                <span>文化的価値の確立</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ビジュアル表現技法と美的判断 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">ビジュアル表現技法と美的判断</h3>
          <span className="text-sm text-gray-500 tracking-widest">Visual Expression & Aesthetic Judgment</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <PenTool className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-indigo-800">フラットレイ撮影技法</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-indigo-800 mb-2">俯瞰的配置</h5>
                <p className="text-base text-gray-700">現代的かつ洗練された商品提示方法</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-indigo-800 mb-2">SNS時代の表現</h5>
                <p className="text-base text-gray-700">フードフォトグラフィーのトレンドを反映</p>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Eye className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-cyan-800">質感のコントラストとハーモニー</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 text-cyan-500" />
                <div>
                  <h5 className="font-medium text-cyan-800">瑞々しさと乾いた質感</h5>
                  <p className="text-base text-gray-700">視覚的緊張感による複層的な価値表現</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 text-cyan-500" />
                <div>
                  <h5 className="font-medium text-cyan-800">調和の表現</h5>
                  <p className="text-base text-gray-700">異なる質感の素材による視覚的物語</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* タイポグラフィとテキスト設計 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">タイポグラフィとテキスト設計</h3>
          <span className="text-sm text-gray-500 tracking-widest">Typography & Text Design</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-emerald-800">詩的コピーと文化的価値</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-emerald-800">コピー設計</h5>
                <p className="text-base text-gray-700">「ワイン職人が紡いだ、百年の美学が贈る、大人の葡萄ジュース。」</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-emerald-800">重層的意味</h5>
                <p className="text-base text-gray-700">職人の手仕事、歴史的価値、成熟した味わいの暗示</p>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Layout className="w-6 h-6 text-fuchsia-600" />
              </div>
              <h4 className="font-semibold text-fuchsia-800">タイポグラフィの戦略</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 text-fuchsia-500" />
                <div>
                  <h5 className="font-medium text-fuchsia-800">白色縦書き</h5>
                  <p className="text-base text-gray-700">日本の伝統美と現代的なデザイン感覚の融合</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 text-fuchsia-500" />
                <div>
                  <h5 className="font-medium text-fuchsia-800">フォント選択</h5>
                  <p className="text-base text-gray-700">明朝体とセリフ書体による伝統と格式の表現</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技術的実装プロセス */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的実装プロセス</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Implementation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Camera className="w-6 h-6 text-lime-600" />
              </div>
              <h4 className="font-semibold text-lime-800">撮影技術と光源管理</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-lime-800">光源配置</h5>
                <p className="text-base text-gray-700">素材の質感を最大限に引き出す技術的工夫</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <h5 className="font-medium text-lime-800">反射管理</h5>
                <p className="text-base text-gray-700">葡萄の光沢感と透明感の表現</p>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Monitor className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-cyan-800">デジタル処理と最適化</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 text-cyan-500" />
                <div>
                  <h5 className="font-medium text-cyan-800">画像処理</h5>
                  <p className="text-base text-gray-700">色調補正、選択的シャープニング、質感強調</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <ChevronRight className="w-4 h-4 text-cyan-500" />
                <div>
                  <h5 className="font-medium text-cyan-800">印刷最適化</h5>
                  <p className="text-base text-gray-700">様々な印刷技術や紙質での再現性の考慮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 将来展望と応用可能性 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">将来展望と応用可能性</h3>
          <span className="text-sm text-gray-500 tracking-widest">Future Prospects & Applications</span>
        </div>
        <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Layers className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800">製品ラインナップの拡張</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-base text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                  <span>異なる品種の葡萄への展開</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                  <span>季節限定商品の差別化</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800">クロスメディア展開</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-base text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                  <span>パッケージデザインへの展開</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                  <span>ウェブサイトやSNSコンテンツ</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800">ブランド価値の確立</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-base text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                  <span>文化的価値の創造と浸透</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                  <span>独自の立ち位置の確立</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white/50 rounded-lg backdrop-blur-sm">
            <p className="text-base text-gray-700 leading-relaxed text-justify">
              この広告デザインは、プロダクトとしての葡萄ジュースの魅力を伝えるだけでなく、「Ensemble」というブランドが体現する文化的価値と美意識を可視化することで、消費者の心に残る印象的なビジュアルコミュニケーションを実現しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
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
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">プロジェクトの目的</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">高級感の表現</h5>
                <p className="text-sm text-gray-600">アルコールフリープレミアム飲料としての価値提案</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">ブランド哲学</h5>
                <p className="text-sm text-gray-600">素材の本質と職人技の視覚的物語化</p>
              </div>
            </div>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Palette className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">戦略的アプローチ</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">視覚言語</h5>
                <p className="text-sm text-gray-600">ワイン市場の洗練された美意識の転用</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">統合アプローチ</h5>
                <p className="text-sm text-gray-600">感性と理性に同時に訴求するデザイン</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PMとしての統合的視点 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての統合的視点</h3>
          <span className="text-sm text-gray-500 tracking-widest">Integrated PM Perspective</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">ターゲット層分析</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>高級ワイン愛好家の美意識分析</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>上質な素材と伝統の視覚的伝達</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>「大人の」市場的意味の最大化</span>
              </li>
            </ul>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">ブランド価値構築</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>「調和」の視覚的表現</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>伝統とクラフトマンシップの強化</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>物理的・文化的価値の訴求</span>
              </li>
            </ul>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Monitor className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">クロスメディア展開</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>効果的な色彩設計</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>異なる広告サイズへの対応</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>キービジュアルの汎用性</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 言語と視覚の共鳴関係 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">言語と視覚の共鳴関係</h3>
          <span className="text-sm text-gray-500 tracking-widest">Visual-Verbal Resonance</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <PenTool className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">メインコピー構造</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">ワイン職人</h5>
                <p className="text-sm text-gray-600">権威性と専門性の付与</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">百年の美学</h5>
                <p className="text-sm text-gray-600">歴史的価値と洗練された文化の暗示</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">大人の葡萄ジュース</h5>
                <p className="text-sm text-gray-600">製品カテゴリの再定義と成熟層へのターゲティング</p>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Eye className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">素材の本質を伝える視覚構成</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-blue-500" />
                <div>
                  <h5 className="font-medium text-blue-800">原材料の誠実な提示</h5>
                  <p className="text-sm text-gray-600">実際のブドウと枯れ木を加工最小限で配置</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-blue-500" />
                <div>
                  <h5 className="font-medium text-blue-800">時間の表現</h5>
                  <p className="text-sm text-gray-600">枯れ木の風化が表現する時間の重み</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-blue-500" />
                <div>
                  <h5 className="font-medium text-blue-800">質感のコントラスト</h5>
                  <p className="text-sm text-gray-600">ブドウの瑞々しさと枯れ木の乾いた質感の対比</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 商業的価値と視覚デザインの統合 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">商業的価値と視覚デザインの統合</h3>
          <span className="text-sm text-gray-500 tracking-widest">Integration of Commercial Value and Visual Design</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">市場ポジショニングの視覚的確立</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">ワイン的装飾要素</h5>
                <p className="text-sm text-gray-600">コルク栓、オープナー、伝統的なラベルデザイン</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">ボトルデザイン</h5>
                <p className="text-sm text-gray-600">ワインボトルを踏襲しつつ独自性のあるシルエット</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">商品配置</h5>
                <p className="text-sm text-gray-600">画面中央下方配置による重厚感と安定感の表現</p>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Layout className="w-6 h-6 text-rose-500" />
              </div>
              <h4 className="font-semibold">審美的判断と商業的判断の融合</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-rose-500" />
                <div>
                  <h5 className="font-medium text-rose-800">背景テクスチャ</h5>
                  <p className="text-sm text-gray-600">深みのあるブラウンと微妙な光沢感</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-rose-500" />
                <div>
                  <h5 className="font-medium text-rose-800">フラットレイ構成</h5>
                  <p className="text-sm text-gray-600">清潔で現代的な商品提示方法</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-rose-500" />
                <div>
                  <h5 className="font-medium text-rose-800">余白の戦略的活用</h5>
                  <p className="text-sm text-gray-600">十分な空間的余裕による高級感の醸成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技術的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的アプローチと実装プロセス</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Approach and Implementation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Camera className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">素材選定とビジュアル構築</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">素材の選定と収集</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• 高品質なブドウと枯れ木の画像素材の選定</li>
                  <li>• 商品イメージに合致する質感と色調の確保</li>
                  <li>• 著作権に配慮した素材の収集</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">画像処理と合成</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• 素材の切り抜きと背景処理</li>
                  <li>• 光源と陰影の調整による立体感の演出</li>
                  <li>• 質感の統一と全体的な調和の確保</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Monitor className="w-6 h-6 text-cyan-500" />
              </div>
              <h4 className="font-semibold">デジタル処理と最適化</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h5 className="font-medium text-cyan-800">Adobe Photoshop</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• 色調補正と階調調整による高級感の演出</li>
                  <li>• 選択的シャープニングによる質感強調</li>
                  <li>• レイヤー効果による光沢感と深みの表現</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h5 className="font-medium text-cyan-800">Adobe Illustrator</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• タイポグラフィ設定とレイアウト調整</li>
                  <li>• ブランドロゴの作成と配置の最適化</li>
                  <li>• 印刷用データフォーマットへの変換</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 応用と展望 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">応用と展望</h3>
          <span className="text-sm text-gray-500 tracking-widest">Applications & Future</span>
        </div>
        <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100 hover:scale-[1.02] hover:shadow-2xl' : 'translate-y-4 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Layers className="w-6 h-6 text-indigo-500" />
                </div>
                <h4 className="font-semibold">製品展開</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                  <span>異なる果実のシリーズ化</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                  <span>季節限定商品の差別化</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyan-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Globe className="w-6 h-6 text-cyan-500" />
                </div>
                <h4 className="font-semibold">ブランド価値</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                  <span>伝統と革新の融合</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                  <span>文化的価値の創造</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Target className="w-6 h-6 text-rose-500" />
                </div>
                <h4 className="font-semibold">市場戦略</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                  <span>オンライン展開</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                  <span>実店舗での体験設計</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              架空課題ではありますが、プレミアム飲料市場における差別化戦略として、製品の内在的価値と文化的文脈を融合させる視覚コミュニケーションの可能性を探究した作品です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
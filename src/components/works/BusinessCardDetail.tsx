import { useState, useEffect, useRef } from 'react';
import { Target, Code, Layout as LayoutIcon, Lightbulb, PenTool, Printer, Layers, Smartphone } from 'lucide-react';

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
      {/* プロジェクト概要 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">プロジェクト概要</h3>
          <span className="text-sm text-gray-500 tracking-widest">Overview</span>
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
                <h5 className="font-medium text-blue-800">アーティストの表現性</h5>
                <p className="text-sm text-gray-600">名刺という限られた空間でアーティストの作品性を表現</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">実用性の確保</h5>
                <p className="text-sm text-gray-600">コミュニケーションツールとしての機能性を維持</p>
              </div>
            </div>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <PenTool className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">デザインの特徴</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">モノクローム表現</h5>
                <p className="text-sm text-gray-600">筆のストロークによる洗練された視覚効果</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">文化的融合</h5>
                <p className="text-sm text-gray-600">東洋と西洋の美学を統合した表現</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 戦略的デザイン思考 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">戦略的デザイン思考</h3>
          <span className="text-sm text-gray-500 tracking-widest">Strategic Design Thinking</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Layers className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">文化的二元性の表現</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">縦書きと横書きの構造的対立</h5>
                <p className="text-sm text-gray-600">伝統的な日本語の縦書き配置と現代的な英語の横書き配置を同一空間に配することで、古典と現代の共存を視覚化</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">文字サイズのコントラスト</h5>
                <p className="text-sm text-gray-600">大きく力強い漢字と控えめながら洗練された英字のサイズ差が階層性と優先度を自然に表現</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">空間利用の対称性</h5>
                <p className="text-sm text-gray-600">左右の均衡を保ちながらも非対称な配置により視覚的な動きと緊張感を創出</p>
              </div>
            </div>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <PenTool className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">ビジュアル言語とアーティストアイデンティティ</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">流動的な白線</h5>
                <p className="text-sm text-gray-600">定型化されない有機的な線の動きがアーティストの自由な表現力を象徴</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">グレースケールの深度</h5>
                <p className="text-sm text-gray-600">黒から白までのグラデーションによる奥行きが平面的な名刺に立体感を付与</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">エネルギーの可視化</h5>
                <p className="text-sm text-gray-600">筆の勢いと動きの軌跡が創造的エネルギーを視覚的に表現</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技術的アプローチと実装プロセス */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的アプローチと実装プロセス</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Approach & Implementation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">デジタル技法とアナログ表現の融合</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">Adobe Illustratorでのベクター処理</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>精密なタイポグラフィ設定と配置</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>スケーラブルなロゴとテキスト要素の構築</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>異なる言語表記の最適なバランス調整</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">Adobe Photoshopでのラスター加工</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>手描き筆ストロークのデジタル変換と最適化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>微細なテクスチャ表現とグレースケール調整</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>印刷用CMYKプロファイルへの変換とカラーマネジメント</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Printer className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">印刷技術への配慮</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">用紙選択の戦略</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>中厚手のマットコート紙による触感と高級感の両立</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>インク吸収率を考慮した色調再現性の最適化</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">特殊印刷技術への対応</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>白インクの表現力を最大化する版下設計</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>微細な線の再現性を保証するためのデータ処理</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PMとしての総合的視点 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての総合的視点</h3>
          <span className="text-sm text-gray-500 tracking-widest">Integrated PM Perspective</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">ブランドアイデンティティの構造化</h4>
            </div>
            <p className="text-sm text-gray-600">アーティストの本質と作品性を視覚言語として体系化</p>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Printer className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">印刷工程を見据えたデータ設計</h4>
            </div>
            <p className="text-sm text-gray-600">最終成果物の品質を確保するための技術的配慮</p>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">機能とデザインの最適バランス</h4>
            </div>
            <p className="text-sm text-gray-600">情報伝達の明確さと視覚的魅力の両立</p>
          </div>
        </div>
      </div>

      {/* 成果と応用 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">成果と応用</h3>
          <span className="text-sm text-gray-500 tracking-widest">Results & Applications</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Lightbulb className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">ポータブルギャラリーとしての機能</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>初対面の印象形成における視覚的インパクトの創出</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>記憶に残るユニークなアイデンティティの確立</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>アーティストの作風を直接的に伝えるポートフォリオの一部としての役割</span>
              </li>
            </ul>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">視覚言語システムの拡張性</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>ウェブデザイン、アプリケーションUIへの応用</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>印刷媒体など様々なメディアへの展開</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>デジタルとフィジカルの境界を越えたブランド体験の一貫性確保</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
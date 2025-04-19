import { useState, useEffect, useRef } from 'react';
import { Target, Code, Layout as LayoutIcon, Lightbulb, PenTool, Printer, Smartphone, Palette, LineChart } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">ブランドアイデンティティ</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">Line Artの本質</h5>
                <p className="text-sm text-gray-600">直線的要素の交差という視覚言語への翻訳</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">スケーラビリティ</h5>
                <p className="text-sm text-gray-600">汎用性を備えたブランドマークの構築</p>
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
                <h5 className="font-medium text-purple-800">色彩理論</h5>
                <p className="text-sm text-gray-600">青と赤紫の戦略的活用による視覚的インパクト</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">幾何学的均衡</h5>
                <p className="text-sm text-gray-600">現代的で記憶に残るビジュアルアイデンティティ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* デザイン戦略とコンセプト */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">デザイン戦略とコンセプト</h3>
          <span className="text-sm text-gray-500 tracking-widest">Design Strategy & Concept</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LineChart className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">シンボルの構造</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>直線の交差による視覚表現</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>文字の抽象化と幾何学的再解釈</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>空間分割と閉じた枠組み</span>
              </li>
            </ul>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Palette className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">カラー戦略</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>補色に近い配色による視覚的振動</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>青の信頼性と赤紫の創造性</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>適切なコントラスト比の確保</span>
              </li>
            </ul>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <PenTool className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">タイポグラフィ</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                <span>幾何学的なサンセリフフォント</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                <span>最適化された文字間隔</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                <span>黄金比に基づく配置</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 技術的実装と設計プロセス */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的実装と設計プロセス</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Implementation & Design Process</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">ベクター構築</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">スケーラビリティ</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>あらゆるサイズ展開での鮮明さ保持</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>8x8のベースグリッドによる配置</span>
                  </li>
                </ul>
                      </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">最適化</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>最小限のアンカーポイント使用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>15°の倍数による角度設定</span>
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
              <h4 className="font-semibold">カラーシステム</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">技術仕様</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>ブルー: RGB(67, 81, 160) / HEX #4351A0</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>レッドパープル: RGB(157, 49, 93) / HEX #9D315D</span>
                  </li>
            </ul>
          </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">汎用性</h5>
                <ul className="text-sm text-gray-600 space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>最小クリアスペース: ロゴ高さの25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                    <span>最小サイズ: 印刷20mm / デジタル60px</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PMとしての統合的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての統合的アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">Integrated PM Approach</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">デザインシステム</h4>
            </div>
            <p className="text-sm text-gray-600">ロゴを起点としたビジュアルアイデンティティの体系化</p>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Printer className="w-6 h-6 text-purple-500" />
                      </div>
              <h4 className="font-semibold">技術的実装</h4>
                    </div>
            <p className="text-sm text-gray-600">多様なメディアとプラットフォームでの表示最適化</p>
                  </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">ブランドエクイティ</h4>
            </div>
            <p className="text-sm text-gray-600">視覚的差別化と記憶性を高める戦略的選択</p>
          </div>
        </div>
      </div>

      {/* 応用展開と成果 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">応用展開と成果</h3>
          <span className="text-sm text-gray-500 tracking-widest">Applications & Results</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Lightbulb className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">デジタル展開</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>ウェブサイトとSNSアイコン</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>アプリケーションアイコン</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>デジタルマーケティング素材</span>
              </li>
            </ul>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">物理的展開</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>名刺とレターヘッド</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>プロモーション資料</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>環境グラフィック</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
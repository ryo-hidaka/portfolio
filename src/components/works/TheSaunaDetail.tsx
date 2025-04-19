import { CheckCircle2, Code, LineChart, Palette, Target, Users, Lightbulb, Brain, Eye, Sparkles, Clock, Layers, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function TheSaunaDetail() {
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
        <div className={`transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">プロジェクト概要</h3>
          <span className="text-sm text-gray-500 tracking-widest">Overview</span>
        </div>
        <div className={`bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100 hover:scale-[1.02] hover:shadow-2xl' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Palette className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">The Sauna プロモーションバナー</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify">
                長野県野尻湖のゲストハウスLAMPが提供する「The Sauna」の架空プロモーションバナーデザイン。サウナ体験の本質的な価値と感覚的解放を視覚言語で表現し、「ととのい」という抽象的な体験を具体的かつ魅力的に伝えるビジュアルコミュニケーション設計を行いました。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <Clock className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:rotate-180" />
              <span className="text-sm">制作期間: 28時間</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <Code className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-110" />
              <span className="text-sm">個人開発</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <Palette className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-110" />
              <span className="text-sm">デザイン制作</span>
            </div>
          </div>
        </div>
      </div>

      {/* 感覚体験の視覚化戦略 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">感覚体験の視覚化戦略</h3>
          <span className="text-sm text-gray-500 tracking-widest">Visual Strategy</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">コピーライティングと心理的アプローチ</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                「なぜ、今日を境にあなたの"ととのい"が変わるのか。」というコピーを中核に据え、以下の心理的効果を狙いました：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Target className="w-5 h-5 text-blue-700" />
                    </div>
                    <h5 className="font-semibold">好奇心の喚起</h5>
                  </div>
                  <p className="text-sm text-gray-600">「なぜ」で始まる疑問形が脳の関心メカニズムを自然に活性化</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-blue-700" />
                    </div>
                    <h5 className="font-semibold">時間的区切り</h5>
                  </div>
                  <p className="text-sm text-gray-600">「今日を境に」という表現が決断のタイミングを明示し、行動を促進</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ビジュアル表現と感覚伝達 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">ビジュアル表現と感覚伝達</h3>
          <span className="text-sm text-gray-500 tracking-widest">Visual Expression</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Palette className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">色彩設計と感情訴求</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                深みのあるブルートーンを基調とした色彩設計には、以下の戦略的意図があります：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Target className="w-5 h-5 text-purple-700" />
                    </div>
                    <h5 className="font-semibold">心理的安定感</h5>
                  </div>
                  <p className="text-sm text-gray-600">青の持つ心拍数・血圧低下効果を活用した癒し感の演出</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Palette className="w-5 h-5 text-purple-700" />
                    </div>
                    <h5 className="font-semibold">水の連想強化</h5>
                  </div>
                  <p className="text-sm text-gray-600">サウナ体験における水風呂の重要性を色彩で強調</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Sparkles className="w-5 h-5 text-purple-700" />
                    </div>
                    <h5 className="font-semibold">高級感の創出</h5>
                  </div>
                  <p className="text-sm text-gray-600">深みのあるブルーが持つプレミアム感がブランド価値を向上</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Eye className="w-5 h-5 text-purple-700" />
                    </div>
                    <h5 className="font-semibold">視認性確保</h5>
                  </div>
                  <p className="text-sm text-gray-600">文字情報との適切なコントラスト比による可読性と視認性の向上</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* カラーパレット */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">カラーパレット</h3>
          <span className="text-sm text-gray-500 tracking-widest">Color Palette</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Palette className="w-5 h-5 text-blue-700" />
              </div>
              <h5 className="font-semibold">カラーパレット</h5>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h6 className="font-medium text-sm">ディープブルー</h6>
                  <p className="text-xs text-gray-600">#2563EB - 信頼性と安定感を表現</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h6 className="font-medium text-sm">サーフブルー</h6>
                  <p className="text-xs text-gray-600">#06B6D4 - 爽快感と開放感を表現</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <h6 className="font-medium text-sm">ピュアホワイト</h6>
                  <p className="text-xs text-gray-600">#FFFFFF - 清潔感と透明感を表現</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h5 className="text-md font-semibold mb-4">視覚的階層と注目点の設計</h5>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Target className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-sm">F型スキャンパターンを考慮した重要情報の配置</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Palette className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-sm">コントラスト比の調整による視線誘導</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Layers className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-sm">適切な余白設計による情報の区分けと読みやすさの確保</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-sm">CTAボタンの戦略的配置と視覚的強調</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 信頼性と独自性の構築 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">信頼性と独自性の構築</h3>
          <span className="text-sm text-gray-500 tracking-widest">Credibility & Uniqueness</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">社会的証明の戦略的活用</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                「SAUNACHELIN 2023 3位」という評価表示は、以下の効果を生み出します：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Target className="w-5 h-5 text-green-700" />
                    </div>
                    <h5 className="font-semibold">第三者評価</h5>
                  </div>
                  <p className="text-sm text-gray-600">外部権威からの評価による信頼性の即時的向上</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <LineChart className="w-5 h-5 text-green-700" />
                    </div>
                    <h5 className="font-semibold">具体的ランキング</h5>
                  </div>
                  <p className="text-sm text-gray-600">抽象的な評価ではなく具体的な順位による説得力強化</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Sparkles className="w-5 h-5 text-green-700" />
                    </div>
                    <h5 className="font-semibold">希少性の強調</h5>
                  </div>
                  <p className="text-sm text-gray-600">上位評価による特別感と選択価値の向上</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-green-700" />
                    </div>
                    <h5 className="font-semibold">時間的新鮮さ</h5>
                  </div>
                  <p className="text-sm text-gray-600">年号表記による最新性のアピール</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* デザイン要素と技術的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">デザイン要素と技術的アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">Design Elements & Technical Approach</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Code className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">制作プロセスと技術活用</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Palette className="w-5 h-5 text-indigo-700" />
                    </div>
                    <h5 className="font-semibold">Figma</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>ベースレイアウトとプロトタイピング</li>
                    <li>コンポーネント設計による変更効率化</li>
                    <li>バリエーション比較によるA/Bテスト準備</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Palette className="w-5 h-5 text-indigo-700" />
                    </div>
                    <h5 className="font-semibold">Adobe Illustrator</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>ベクターグラフィック制作</li>
                    <li>ロゴ調整と装飾要素の作成</li>
                    <li>スケーラビリティを確保したアセット設計</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Palette className="w-5 h-5 text-indigo-700" />
                    </div>
                    <h5 className="font-semibold">Adobe Photoshop</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>写真加工とビジュアル調整</li>
                    <li>色調補正とムード設定</li>
                    <li>複合レイヤー効果による質感表現</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PMとしての総合的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての総合的アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">PM Approach</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-violet-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Users className="w-8 h-8 text-violet-600" />
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                このプロジェクトでは、デザインの感性とエンジニアの論理思考を融合させ、以下の視点から総合的なアプローチを実現しました：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-violet-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-violet-100 p-2 rounded-full">
                      <LineChart className="w-5 h-5 text-violet-700" />
                    </div>
                    <h5 className="font-semibold">マーケティング戦略</h5>
                  </div>
                  <p className="text-sm text-gray-700">
                    顧客心理と行動プロセスを考慮したデザイン判断
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-violet-100 p-2 rounded-full">
                      <Brain className="w-5 h-5 text-violet-700" />
                    </div>
                    <h5 className="font-semibold">データに基づく設計</h5>
                  </div>
                  <p className="text-sm text-gray-700">
                    色彩心理学と視線トラッキング研究知見の応用
                  </p>
                </div>
                <div className="bg-violet-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-violet-100 p-2 rounded-full">
                      <Code className="w-5 h-5 text-violet-700" />
                    </div>
                    <h5 className="font-semibold">実装を見据えた設計</h5>
                  </div>
                  <p className="text-sm text-gray-700">
                    多様なデバイスとプラットフォームでの表示最適化を考慮
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { ArrowUpRight, CheckCircle2, Code, CreditCard, FileText, LineChart, Palette, PieChart, Target, Users, BookOpen, Lightbulb, Layers, Smartphone, Cpu, ArrowRight, Clock, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function DigiLigDetail() {
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
            <div className="bg-amber-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <BookOpen className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">デジタルハリウッド STUDIO by LIG</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify">
                「デジタルハリウッド STUDIO by LIG」のクリエイタースクール向けランディングページデザイン（架空プロジェクト）。教育機関のブランド価値と学習体験を視覚的に表現し、潜在的学生の入学意欲を高めるデザインソリューションを構築しました。デザインの美的感覚とユーザー心理の理解を融合させ、情報設計から視覚表現まで一貫した体験を創出しています。
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
              <Zap className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-110" />
              <span className="text-sm">AI駆動開発</span>
            </div>
          </div>
        </div>
      </div>

      {/* ブランド戦略とデザインコンセプト */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">ブランド戦略とデザインコンセプト</h3>
          <span className="text-sm text-gray-500 tracking-widest">Brand Strategy & Design Concept</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Lightbulb className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">DESIGN YOUR FUTURE SELF</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                「DESIGN YOUR FUTURE SELF」というキャッチコピーを中心に、自己成長と可能性の拡大というコアメッセージを前面に打ち出しました。このコピーは単なる技術習得を超えた、人生設計そのものへの関与を示唆し、スクールの教育理念を端的に表現しています。
              </p>
              
              <h5 className="text-md font-semibold mb-3">ビジュアル言語</h5>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify">
                オレンジゴールドを基調とした温かみのあるカラーパレットは、創造性と前向きなエネルギーを象徴すると同時に、教育機関としての信頼性と先進性のバランスを視覚的に表現。黒のアクセントカラーがプロフェッショナリズムと洗練さを加え、ターゲットオーディエンスである意欲的な成人学習者に訴求する配色設計としました。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Palette className="w-5 h-5 text-amber-700" />
                </div>
                <h5 className="font-semibold">カラーパレット</h5>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-sm">オレンジゴールド</h6>
                    <p className="text-xs text-gray-600">#F5A623 - 創造性と前向きなエネルギーを表現</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-black rounded-full flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-sm">黒</h6>
                    <p className="text-xs text-gray-600">#000000 - プロフェッショナリズムと洗練さを表現</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <h6 className="font-medium text-sm">白</h6>
                    <p className="text-xs text-gray-600">#FFFFFF - 明るさと開放感を表現</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <h6 className="font-medium text-sm mb-2">カラー比率</h6>
                  <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full flex">
                      <div className="w-1/2 bg-amber-500"></div>
                      <div className="w-1/4 bg-black"></div>
                      <div className="w-1/4 bg-white border-r border-gray-200"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-600">
                    <span>50%</span>
                    <span>25%</span>
                    <span>25%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Layers className="w-5 h-5 text-amber-700" />
                </div>
                <h5 className="font-semibold">視覚要素</h5>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                明るく開放的なオフィス環境とインタラクティブな学習風景の写真を戦略的に配置することで、実際の学習体験をビジュアライズ。抽象的な教育内容を具体的かつ魅力的に伝える視覚要素として機能させています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-[220px] flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-amber-700" />
                    </div>
                    <h6 className="font-medium text-sm">学習風景</h6>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-md flex items-center justify-center mb-2 flex-grow">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-600">インタラクティブな学習シーン</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <p className="text-xs text-gray-500">グループワークと個人学習のバランス</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-[220px] flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-amber-700" />
                    </div>
                    <h6 className="font-medium text-sm">オフィス環境</h6>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-md flex items-center justify-center mb-2 flex-grow">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-600">明るく開放的な空間</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <p className="text-xs text-gray-500">創造性を刺激する環境デザイン</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-4 pt-4 border-t border-amber-200">
                <h6 className="font-medium text-sm mb-3">視覚要素の効果</h6>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <Target className="w-3 h-3 text-amber-700" />
                      </div>
                      <span className="text-xs font-medium">信頼性</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-3 h-3 text-amber-700" />
                      </div>
                      <span className="text-xs font-medium">創造性</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-amber-700" />
                      </div>
                      <span className="text-xs font-medium">親近感</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* 情報設計と導線構築 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">情報設計と導線構築</h3>
          <span className="text-sm text-gray-500 tracking-widest">Information Architecture & User Flow</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Layers className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">ユーザーの情報処理プロセス</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                ユーザーの情報処理プロセスに配慮した段階的な情報設計を採用しました。
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h5 className="text-md font-semibold mb-4">セクション構成と心理的配慮</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'ヒーローセクション', desc: '強力なキャッチコピーと背景ビジュアルで第一印象を確立', icon: Target },
                { title: 'About', desc: 'スクール理念と特徴を簡潔に伝え、ブランド価値を理解させる', icon: FileText },
                { title: 'Reason', desc: '「なぜこのスクールを選ぶべきか」の根拠を論理的に提示', icon: CheckCircle2 },
                { title: 'Course', desc: '具体的なカリキュラム内容と習得スキルを可視化', icon: BookOpen },
                { title: 'Career Path', desc: 'Webデザイナーやネット動画ディレクターなどの明確なキャリアパスを提示', icon: ArrowUpRight },
                { title: 'Fee & Entry', desc: '費用対効果と入学プロセスの透明性を確保', icon: CreditCard }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <item.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <h6 className="font-semibold">{item.title}</h6>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h5 className="text-md font-semibold mb-4">視覚的階層と注目点の設計</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      {/* デザインプロセスと技術活用 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">デザインプロセスと技術活用</h3>
          <span className="text-sm text-gray-500 tracking-widest">Design Process & Technical Implementation</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">リサーチと戦略フェーズ</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                教育系ランディングページの市場調査と競合分析を実施。成功事例のパターンを抽出し、独自性と効果のバランスを検討しました。ペルソナ設定においては、キャリアチェンジを望む社会人とスキルアップを求める若手プロフェッショナルの両面を考慮した設計アプローチを採用。
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h5 className="text-md font-semibold mb-4">制作プロセス</h5>
            <div className="relative space-y-8">
              {/* 制作プロセスのステップ */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">1</div>
                  <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-purple-700 mb-1">リサーチと分析</h6>
                    <p className="text-sm text-gray-700 mb-2">教育系ランディングページの市場調査と競合分析を実施。成功事例のパターンを抽出し、独自性と効果のバランスを検討。</p>
                    <div className="flex items-center gap-2 text-xs text-purple-600">
                      <Clock className="w-3 h-3" />
                      <span>5時間</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">2</div>
                  <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-purple-700 mb-1">ペルソナ設定と戦略立案</h6>
                    <p className="text-sm text-gray-700 mb-2">キャリアチェンジを望む社会人とスキルアップを求める若手プロフェッショナルの両面を考慮した設計アプローチを採用。</p>
                    <div className="flex items-center gap-2 text-xs text-purple-600">
                      <Clock className="w-3 h-3" />
                      <span>10時間</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-purple-700 font-bold">3</div>
                  <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-purple-700 mb-1">デザイン制作と検証</h6>
                    <p className="text-sm text-gray-700 mb-2">情報設計から視覚表現まで一貫した体験を創出。ユーザーフローを検証し、改善点を洗い出し。</p>
                    <div className="flex items-center gap-2 text-xs text-purple-600">
                      <Clock className="w-3 h-3" />
                      <span>13時間</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* プロセスフロー図 */}
              {/* <div className="bg-purple-50 p-4 rounded-lg">
                <h6 className="font-medium text-sm mb-3">プロセスフロー</h6>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">1</div>
                    <span className="text-xs mt-1">リサーチ</span>
                  </div>
                  <div className="hidden md:block w-12 h-0.5 bg-purple-200"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">2</div>
                    <span className="text-xs mt-1">設計</span>
                  </div>
                  <div className="hidden md:block w-12 h-0.5 bg-purple-200"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center text-purple-700 font-bold">3</div>
                    <span className="text-xs mt-1">制作</span>
                  </div>
                </div>
              </div> */}

              {/* 制作のポイント */}
              {/* <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">制作のポイント</span>
                  <span className="text-lg font-bold text-purple-600">ユーザー心理の理解</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-purple-500 rounded-full transition-all duration-700 ${isVisible ? 'w-[100%]' : 'w-0'}`}
                    style={{ transitionDelay: '300ms' }}
                  />
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="mt-8">
            <h5 className="text-md font-semibold mb-4">制作ツールと技術活用</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Palette className="w-5 h-5 text-purple-700" />
                  </div>
                  <h5 className="font-semibold">Figma</h5>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>UI/UXデザインとプロトタイピング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>コンポーネント設計によるデザインシステム構築</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>インタラクティブプロトタイプによるユーザーフロー検証</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Palette className="w-5 h-5 text-purple-700" />
                  </div>
                  <h5 className="font-semibold">Adobe Illustrator</h5>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>ベクターグラフィック制作</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>ロゴ調整とアイコン設計</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>カスタムグラフィック要素の作成</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Palette className="w-5 h-5 text-purple-700" />
                  </div>
                  <h5 className="font-semibold">Adobe Photoshop</h5>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>写真加工とビジュアル調整</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>色調補正と統一感の創出</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>背景処理とビジュアルエフェクト適用</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UX最適化と応用可能性 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">UX最適化と応用可能性</h3>
          <span className="text-sm text-gray-500 tracking-widest">UX Optimization & Scalability</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Smartphone className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">モバイルファーストアプローチ</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                スマートフォンでの閲覧体験を最優先に考慮し、以下の要素に特に注力:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Smartphone className="w-5 h-5 text-green-700" />
                </div>
                <h5 className="font-semibold">モバイル最適化</h5>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-sm">タッチ操作に最適化された要素サイズとスペーシング</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-sm">スクロール時の視認性維持と情報の適切な分割</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-sm">限られた画面空間での情報優先順位の明確化</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Cpu className="w-5 h-5 text-green-700" />
                </div>
                <h5 className="font-semibold">将来的な拡張性</h5>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-sm">コンポーネントベースの設計による再利用性の高さ</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-sm">異なるデバイスサイズへの対応を前提としたレスポンシブ設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <span className="text-sm">アニメーションや動的要素の追加可能性を考慮したレイヤー構成</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PMとしての視点と成果 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての視点と成果</h3>
          <span className="text-sm text-gray-500 tracking-widest">PM Perspective & Results</span>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-violet-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Users className="w-8 h-8 text-violet-600" />
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify mb-6">
                このプロジェクトでは、デザイナーとしての美的感覚とエンジニアとしての実装知識を両立させることで、見た目の魅力だけでなく実装フェーズを見据えた現実的なデザインソリューションを提供しました。特に：
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-violet-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-violet-100 p-2 rounded-full">
                  <Code className="w-5 h-5 text-violet-700" />
                </div>
                <h5 className="font-semibold">実装効率</h5>
              </div>
              <p className="text-sm text-gray-700">
                フロントエンド開発の知見を活かした実装効率を考慮したデザイン設計
              </p>
            </div>
            
            <div className="bg-violet-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-violet-100 p-2 rounded-full">
                  <LineChart className="w-5 h-5 text-violet-700" />
                </div>
                <h5 className="font-semibold">根拠ある設計</h5>
              </div>
              <p className="text-sm text-gray-700">
                ユーザーデータと心理学的知見を組み合わせた根拠ある視覚設計
              </p>
            </div>
            
            <div className="bg-violet-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-violet-100 p-2 rounded-full">
                  <PieChart className="w-5 h-5 text-violet-700" />
                </div>
                <h5 className="font-semibold">長期的戦略</h5>
              </div>
              <p className="text-sm text-gray-700">
                教育機関の長期的ブランド価値向上を見据えたデザイン戦略
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-violet-50 p-6 rounded-lg">
            <p className="text-sm md:text-base text-[#333333] leading-[2.5] tracking-wider text-justify">
              架空プロジェクトながら、実際の教育機関のブランディングとマーケティング戦略に応用可能な普遍的な設計原則と視覚表現を追求した作品です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { useState, useEffect, useRef } from 'react';
import { Palette, Target, Code, Layout as LayoutIcon, ChevronRight, LineChart, Zap, Monitor, Lightbulb, BarChart, Brain, Rocket, Clock, Cloud } from 'lucide-react';

export function LandingPageDetail() {
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
          <span className="text-sm text-gray-500 tracking-widest">Project Overview</span>
        </div>
        <div className={`bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100 hover:scale-[1.02] hover:shadow-2xl' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
              <Palette className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">データ駆動型の高コンバージョン設計</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify">
                戦略的なデータ活用と視覚設計の融合により、高コンバージョン率を実現した不動産投資セミナーのランディングページ制作プロジェクト。デザインとエンジニアリングの両面からユーザー行動を促進する仕組みを構築しました。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 使用技術 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">使用技術</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technologies</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Code, title: 'Next.js', desc: 'フロントエンド開発', color: 'blue' },
            { icon: Palette, title: 'TailwindCSS', desc: 'スタイリング', color: 'purple' },
            // { icon: Database, title: 'PostgreSQL', desc: 'データベース', color: 'green' },
            // { icon: CreditCard, title: 'Stripe', desc: '決済処理', color: 'indigo' },
            { icon: Cloud, title: 'Vercel', desc: 'ホスティング', color: 'cyan' }
          ].map((tech, index) => (
            <div key={tech.title} 
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} 
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`${
                  tech.title === 'Next.js' ? 'bg-blue-50' : 
                  tech.title === 'TailwindCSS' ? 'bg-purple-50' : 
                  tech.title === 'PostgreSQL' ? 'bg-green-50' : 
                  tech.title === 'Stripe' ? 'bg-indigo-50' : 
                  'bg-cyan-50'
                } p-3 rounded-lg transform transition-all duration-200 hover:rotate-12`}>
                  <tech.icon className={`w-6 h-6 ${
                    tech.title === 'Next.js' ? 'text-blue-500' : 
                    tech.title === 'TailwindCSS' ? 'text-purple-500' : 
                    tech.title === 'PostgreSQL' ? 'text-green-500' : 
                    tech.title === 'Stripe' ? 'text-indigo-500' : 
                    'text-cyan-500'
                  }`} />
              </div>
                <h4 className="font-semibold">{tech.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI駆動開発アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">AI駆動開発アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">AI Development</span>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">AI開発ツール</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Bolt.new', desc: 'UIコンポーネント生成とTailwindCSS最適化' },
                    { title: 'Claude', desc: '要件定義、UXライティング' },
                    { title: 'Cursor', desc: 'コード補完・最適化' }
                  ].map((tool, index) => (
                    <div key={tool.title} 
                      className="bg-gray-50 p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <h5 className="font-semibold mb-2">{tool.title}</h5>
                      <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
                  ))}
              </div>
              </div>
            </div>
          </div>

        <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LineChart className="w-8 h-8 text-green-500" />
              </div>
              <div className="w-full">
                <h4 className="text-lg font-semibold mb-4">開発プロセスと時間効率</h4>
                <div className="relative space-y-8">
                  {/* 開発時間の比較 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium text-gray-600">AI駆動開発</div>
                      <div className="flex-1 relative">
                        <div className="h-12 bg-gray-50 rounded-lg overflow-hidden">
                          <div 
                            className={`h-full bg-green-100 rounded-lg transition-all duration-500 flex items-center justify-end pr-4`}
                            style={{ 
                              width: isVisible ? '10%' : '0%'
                            }}
                          >
                            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">16時間</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium text-gray-600">従来の開発</div>
                      <div className="flex-1 relative">
                        <div className="h-12 bg-gray-50 rounded-lg overflow-hidden">
                          <div 
                            className={`h-full bg-gray-200 rounded-lg transition-all duration-500 flex items-center justify-end pr-4`}
                            style={{ 
                              width: isVisible ? '100%' : '0%',
                              transitionDelay: '150ms'
                            }}
                          >
                            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">150時間</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 時間削減率 */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">時間削減率</span>
                      <span className="text-lg font-bold text-green-600">約93%削減</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-green-500 rounded-full transition-all duration-700 ${isVisible ? 'w-[93%]' : 'w-0'}`}
                        style={{ transitionDelay: '300ms' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Rocket className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">フェーズ別AI活用プロセス</h4>
                <p className="text-sm text-gray-500">AIを活用した効率的な開発プロセスの詳細</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { 
                  color: 'blue',
                  icon: Palette,
                  phase: '01',
                  title: 'デザインフェーズ',
                  time: '4時間',
                  items: [
                    'Bolt.newを用いたUIコンポーネント設計',
                    '複数デザインバリエーションの生成',
                    'レスポンシブデザインの自動調整'
                  ]
                },
                {
                  color: 'purple',
                  icon: Code,
                  phase: '02',
                  title: '開発フェーズ',
                  time: '8時間',
                  items: [
                    'Cursorによるコード生成と型安全性確保',
                    'サブスクリプションロジックの構築',
                    'API連携とデータフロー最適化'
                  ]
                },
                {
                  color: 'cyan',
                  icon: Cloud,
                  phase: '03',
                  title: 'デプロイフェーズ',
                  time: '4時間',
                  items: [
                    'CI/CDパイプラインの構築',
                    '画像最適化とCDNホスティング',
                    'SSL証明書の自動化'
                  ]
                }
              ].map((phase, index) => (
                <div 
                  key={phase.title}
                  className={`relative transform transition-all duration-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      phase.phase === '01' ? 'bg-blue-100' : 
                      phase.phase === '02' ? 'bg-purple-100' : 
                      'bg-cyan-100'
                    }`}>
                      <phase.icon className={`w-4 h-4 ${
                        phase.phase === '01' ? 'text-blue-500' : 
                        phase.phase === '02' ? 'text-purple-500' : 
                        'text-cyan-500'
                      }`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className={`font-semibold ${
                          phase.phase === '01' ? 'text-blue-900' : 
                          phase.phase === '02' ? 'text-purple-900' : 
                          'text-cyan-900'
                        }`}>{phase.title}</h5>
                        <div className="flex items-center gap-2">
                          <Clock className={`w-4 h-4 ${
                            phase.phase === '01' ? 'text-blue-400' : 
                            phase.phase === '02' ? 'text-purple-400' : 
                            'text-cyan-400'
                          }`} />
                          <span className={`text-sm font-medium ${
                            phase.phase === '01' ? 'text-blue-600' : 
                            phase.phase === '02' ? 'text-purple-600' : 
                            'text-cyan-600'
                          }`}>{phase.time}</span>
                        </div>
                      </div>
                      {/* プログレスバー */}
                      <div className="h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
                        <div 
                          className={`h-full ${
                            phase.phase === '01' ? 'bg-blue-400' : 
                            phase.phase === '02' ? 'bg-purple-400' : 
                            'bg-cyan-400'
                          } rounded-full transition-all duration-500`}
                          style={{ 
                            width: isVisible ? '100%' : '0%',
                            transitionDelay: `${(index + 1) * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* プロセス詳細 */}
                  <div className={`ml-16 p-4 ${
                    phase.phase === '01' ? 'bg-blue-50' : 
                    phase.phase === '02' ? 'bg-purple-50' : 
                    'bg-cyan-50'
                  } rounded-lg`}>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-3 transform transition-all duration-200 hover:translate-x-1"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            phase.phase === '01' ? 'bg-blue-500' : 
                            phase.phase === '02' ? 'bg-purple-500' : 
                            'bg-cyan-500'
                          } mt-2`} />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 接続線 */}
                  {index < 2 && (
                    <div className={`absolute left-[2.25rem] top-[5rem] h-[calc(100%+2rem)] w-px bg-gradient-to-b ${
                      phase.phase === '01' ? 'from-blue-200' : 
                      phase.phase === '02' ? 'from-purple-200' : 
                      'from-cyan-200'
                    } to-transparent`} />
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
      </div>

      {/* PMとしての統合的視点 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての統合的視点</h3>
          <span className="text-sm text-gray-500 tracking-widest">Integrated PM Perspective</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">目標設定</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>セミナー申し込み数の最大化</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>ブランド価値の向上</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>信頼性と魅力の両立</span>
              </li>
            </ul>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">戦略的アプローチ</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>データ駆動型の意思決定</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>視覚的信頼性の構築</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>ユーザー心理の活用</span>
              </li>
            </ul>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <BarChart className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">成果指標</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>コンバージョン率42%向上</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>直帰率18%減少</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>滞在時間1.5倍に増加</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 戦略と施策 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">戦略と施策</h3>
          <span className="text-sm text-gray-500 tracking-widest">Strategy & Implementation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">バリュープロポジション設計</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">明確なメッセージング</h5>
                <p className="text-sm text-gray-600">資産形成を知るためのセミナー</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">具体的ベネフィット</h5>
                <p className="text-sm text-gray-600">安定収入と資産形成の実現</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800">社会的証明</h5>
                <p className="text-sm text-gray-600">満足度93.3%、参加者500名以上</p>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LineChart className="w-6 h-6 text-rose-500" />
              </div>
              <h4 className="font-semibold">コンバージョン最適化</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-rose-500" />
                <div>
                  <h5 className="font-medium text-rose-800">視覚的信頼性</h5>
                  <p className="text-sm text-gray-600">色彩心理学に基づくデザイン</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-rose-500" />
                <div>
                  <h5 className="font-medium text-rose-800">CTA設計</h5>
                  <p className="text-sm text-gray-600">戦略的な配置と視認性の最適化</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                <ChevronRight className="w-4 h-4 text-rose-500" />
                <div>
                  <h5 className="font-medium text-rose-800">心理的トリガー</h5>
                  <p className="text-sm text-gray-600">特典とスカーシティ効果の活用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技術的アプローチ */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的アプローチ</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Approach</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">開発環境と最適化</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">フロントエンド</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• Next.jsとTypeScriptによる型安全な開発</li>
                  <li>• Core Web Vitalsの最適化</li>
                  <li>• TailwindCSSによるレスポンシブ設計</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800">パフォーマンス</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• 画像最適化とLazy Loading</li>
                  <li>• キャッシュ戦略の実装</li>
                  <li>• バンドルサイズの最適化</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Monitor className="w-6 h-6 text-cyan-500" />
              </div>
              <h4 className="font-semibold">デプロイメントと分析</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h5 className="font-medium text-cyan-800">CI/CD</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• Vercelを用いた自動デプロイ</li>
                  <li>• プレビュー環境の活用</li>
                  <li>• パフォーマンスモニタリング</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h5 className="font-medium text-cyan-800">データ分析</h5>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>• ユーザー行動の追跡</li>
                  <li>• A/Bテストの実施</li>
                  <li>• コンバージョン分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 成果と展望 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">成果と展望</h3>
          <span className="text-sm text-gray-500 tracking-widest">Results & Future</span>
        </div>
        <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100 hover:scale-[1.02] hover:shadow-2xl' : 'translate-y-4 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Zap className="w-6 h-6 text-indigo-500" />
                </div>
                <h4 className="font-semibold">主要成果</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                  <span>コンバージョン率の大幅向上</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                  <span>ユーザー体験の改善</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyan-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <Target className="w-6 h-6 text-cyan-500" />
                </div>
                <h4 className="font-semibold">学びと気づき</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                  <span>データと心理の重要性</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                  <span>技術とデザインの融合</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                  <LineChart className="w-6 h-6 text-rose-500" />
                </div>
                <h4 className="font-semibold">今後の展開</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                  <span>A/Bテストの継続</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                  <span>機能の段階的拡張</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              このプロジェクトでは、デザインとエンジニアリングの両方の知見を活かし、ユーザー心理と技術的実装の両面から最適解を導き出す過程が重要でした。特に、定量的データを視覚的に魅力的な形で表現することの重要性と、技術的制約の中でクリエイティブな解決策を見出す柔軟性の価値を再認識しました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
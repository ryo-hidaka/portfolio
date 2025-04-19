import { Clock, Code, Palette, Zap, Database, CreditCard, Cloud, Sparkles, LineChart, Brain, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ArtPassDetail() {
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
              <Palette className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">アートのサブスクリプションサービス</h4>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] tracking-wider text-justify">
                美術作品の複製画をサブスクリプション形式で楽しめるウェブアプリケーション「ArtPass」の個人開発プロジェクト。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <Clock className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:rotate-180" />
              <span className="text-sm">開発期間: 28時間</span>
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
            { icon: Database, title: 'PostgreSQL', desc: 'データベース', color: 'green' },
            { icon: CreditCard, title: 'Stripe', desc: '決済処理', color: 'indigo' },
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

      {/* AI駆動開発 */}
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
                            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">28時間</span>
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
                            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">250時間</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 時間削減率 */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">時間削減率</span>
                      <span className="text-lg font-bold text-green-600">約89%削減</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-green-500 rounded-full transition-all duration-700 ${isVisible ? 'w-[89%]' : 'w-0'}`}
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
                  time: '16時間',
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
                  time: '8時間',
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
                  {/* フェーズヘッダー - 近接原則でグループ化 */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className={`${
                      phase.phase === '01' ? 'bg-blue-50' : 
                      phase.phase === '02' ? 'bg-purple-50' : 
                      'bg-cyan-50'
                    } p-4 rounded-xl transform transition-all duration-200 hover:rotate-12 relative`}>
                      <phase.icon className={`w-6 h-6 ${
                        phase.phase === '01' ? 'text-blue-500' : 
                        phase.phase === '02' ? 'text-purple-500' : 
                        'text-cyan-500'
                      }`} />
                      <div className={`absolute -top-2 -right-2 w-6 h-6 ${
                        phase.phase === '01' ? 'bg-blue-500' : 
                        phase.phase === '02' ? 'bg-purple-500' : 
                        'bg-cyan-500'
                      } rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {phase.phase}
                      </div>
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
                      {/* プログレスバー - コントラスト原則で進捗を表現 */}
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

                  {/* プロセス詳細 - 整列原則で情報を整理 */}
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

                  {/* 接続線 - 反復原則で一貫性を表現 */}
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

      {/* AI活用の開発成果 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">AI活用の開発成果</h3>
          <span className="text-sm text-gray-500 tracking-widest">AI Development Results</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Sparkles,
              color: 'green',
              title: 'クオリティ向上',
              items: [
                '一貫したコーディング規約の自動適用',
                'エッジケースの自動検出による堅牢性',
                '最新のUXパターン提案による改善'
              ]
            },
            {
              icon: Brain,
              color: 'blue',
              title: '創造的問題解決',
              items: [
                '複数の実装アプローチの提案',
                '技術的課題の迅速な解決',
                'デザインとコードの効率的な連携'
              ]
            }
          ].map((result, index) => (
            <div key={result.title}
              className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${
                  result.color === 'green' ? 'bg-green-50' : 'bg-blue-50'
                } p-3 rounded-lg transform transition-all duration-200 hover:rotate-12`}>
                  <result.icon className={`w-6 h-6 ${
                    result.color === 'green' ? 'text-green-500' : 'text-blue-500'
                  }`} />
                </div>
                <h4 className="font-semibold">{result.title}</h4>
              </div>
              <ul className="space-y-4 text-sm text-gray-600">
                {result.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 transform transition-all duration-200 hover:-translate-x-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      result.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                    } mt-2`}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
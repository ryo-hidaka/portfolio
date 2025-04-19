interface PieceWork {
  title: string;
  image: string;
}

export function AboutPage() {
  const pieces: PieceWork[] = [
    {
      title: "Portrait Study",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Mountain Landscape",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Urban Architecture",
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Digital Abstract",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Sunset View",
      image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Forest Path",
      image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Abstract Art",
      image: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "City Lights",
      image: "https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Modern Design",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20">
          <div className="container px-8 md:px-12 lg:px-20 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">About me</h1>
              <p className="text-xl tracking-widest">私について</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-16 md:py-20 lg:py-24">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
            <div>
              {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Profile</h2> */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">Profile</h3>
              <div>
                <span className="text-sm text-gray-500 tracking-widest">自己紹介</span>
              </div>
            </div>
            <div className="mt-20">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 tracking-wider">RYO HIDAKA</h2>
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                ラインアーティスト・Webクリエイター・エンジニアとして、技術とデザインの境界を越えたソリューションを提供しています。「見る人それぞれが自分らしい表現を触発する」という創作哲学のもと、ユーザー体験を起点とした革新的なデザインと論理的な実装を一人二役で実現する統合的なアプローチを追求しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">Career</h2>
              <span className="text-sm text-gray-500 tracking-widest">経歴</span>
            </div>
            <div className="space-y-16">
              <div className="flex items-start mt-20">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2025</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">AI駆動型開発によるイノベーション</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify flex-grow">
                      <li>生成AIを活用した開発ワークフローの確立</li>
                      <li>Bolt.new / Claude / Cursorを組み合わせた効率的な制作環境の構築</li>
                      <li>従来比90%の開発期間短縮を実現したプロジェクト複数展開</li>
                    </ul>
                    <div className="w-full md:w-48 h-48 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2024</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">デザイン思考の体系的探究</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify flex-grow">
                      <li>「デジタルハリウッドSTUDIO by LIG」でUI/UXデザインを専門的に学習</li>
                      <li>ビジュアルデザインと情報設計の統合的アプローチを獲得</li>
                      <li>クライアント心理と視覚言語の関係性を研究</li>
                    </ul>
                    <div className="w-full md:w-48 h-48 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2021-2023</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">エンジニアとしての専門性確立</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify flex-grow">
                      <li>フロントエンド開発からバックエンド実装まで一貫した技術スタックの習得</li>
                      <li>Next.js、TypeScript、TailwindCSSを活用したモダンWeb開発の実践</li>
                      <li>パフォーマンス最適化とアクセシビリティに配慮した実装手法の確立</li>
                    </ul>
                    <div className="w-full md:w-48 h-48 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2019-2021</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">エンジニアとしての基盤形成</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify flex-grow">
                      <li>プログラミング基礎からWebアプリケーション開発までの体系的習得</li>
                      <li>データ構造とアルゴリズムの実践的理解</li>
                      <li>ユーザー中心設計の重要性を認識し、技術と体験の架け橋を模索</li>
                    </ul>
                    <div className="w-full md:w-48 h-48 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Section */}
      <section id="strength" className="py-16 md:py-20 lg:py-24">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">Strength</h2>
              <span className="text-sm text-gray-500 tracking-widest">強み</span>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="bg-[#f5f5f5] rounded-lg p-8 flex flex-col h-full">
                  <div className="w-full max-w-xs mb-6 mx-auto">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#3366cc] opacity-20"></div>
                      </div>
                      <div className="relative z-10 flex items-center justify-center mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 tracking-wider text-center mt-10">創造的視点</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify mb-6 flex-grow">
                    既存の枠組みを超えた発想と、異なる文化や表現様式の融合により、新たな価値を創出します。伝統的な日本の書道と西洋の抽象画を組み合わせた「Line Art」のように、一見相容れない要素から調和を見出す感性を大切にしています。
                  </p>
                  {/* <div className="w-full mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">創造性</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#3366cc] h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div> */}
                </div>
                
                <div className="bg-[#f5f5f5] rounded-lg p-8 flex flex-col h-full">
                  <div className="w-full max-w-xs mb-6 mx-auto">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#3366cc] opacity-20"></div>
                      </div>
                      <div className="relative z-10 flex items-center justify-center mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 tracking-wider text-center mt-10">問題解決能力</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify mb-6 flex-grow">
                    デザインとエンジニアリングの両面から課題にアプローチする複眼的視点を持つことで、表層的な美しさだけでなく、構造的な堅牢性と拡張性を兼ね備えたソリューションを構築します。
                  </p>
                  {/* <div className="w-full mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">問題解決</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#3366cc] h-3 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div> */}
                </div>
                
                <div className="bg-[#f5f5f5] rounded-lg p-8 flex flex-col h-full">
                  <div className="w-full max-w-xs mb-6 mx-auto">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#3366cc] opacity-20"></div>
                      </div>
                      <div className="relative z-10 flex items-center justify-center mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3366cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 tracking-wider text-center mt-10">細部のこだわり</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify mb-6 flex-grow">
                    プロジェクトのあらゆる要素において一貫した品質と美的センスを維持することを信条としています。名刺デザインのような小さな媒体から、複雑なWebアプリケーションまで、ユーザーとの接点すべてが体験の一部であるという認識に基づき、細部まで注意を払います。
                  </p>
                  {/* <div className="w-full mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">細部へのこだわり</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#3366cc] h-3 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Pieces Section */}
      <section id="nine-pieces" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">9 Pieces</h2>
            <span className="text-sm text-gray-500 tracking-widest">個人的な9つの作品や写真</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {pieces.map((piece, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
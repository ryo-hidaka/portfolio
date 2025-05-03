import { useEffect, useRef } from 'react';
import { PenTool, Palette, Code, History, Layers, Smartphone } from 'lucide-react';

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 何もしない（isVisible関連の処理を削除）
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fcfcfc]">
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">RYO HIDAKA</h1>
              <p className="text-xl tracking-widest">グラフィックデザイナー・ラインアーティスト</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-16 md:py-20 lg:py-24">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Profile</h2>
                <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-sm text-gray-500 tracking-widest">自己紹介</span>
            </div>
            <div className="mt-20">
              <p className="text-sm md:text-base lg:text-lg text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                書道の伝統とデジタルデザインの融合を探求するクリエイター。エンジニアとしてのバックグラウンドと書道家としての感性を組み合わせ、伝統と革新が交差する独自の表現世界を構築しています。「線の動きが物語る感情の軌跡」をテーマに、一本の線から広がる可能性と多様な解釈を大切にした作品制作を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-wider">Philosophy</h2>
              <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">創作哲学</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <PenTool className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">線の表現から広がる物語</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  私の作品では、書道で培った「線の表情」がデザインの核心となっています。一本の線が持つ強さ、弱さ、躍動感、静寂さといった表情の豊かさを現代のデザイン言語に翻訳することで、見る人それぞれの心に異なる物語を描きます。
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Palette className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">調和の探究</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  東洋の書の伝統と西洋のグラフィックデザイン、手仕事のぬくもりとデジタル技術の精緻さ、「答えが一つ」のエンジニアリングと「多様な解釈」を許容するアートの世界—相反する要素の間に新たな調和を見出すことが、私の創作活動の原動力です。
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Code className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">感性と論理の融合</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  エンジニアとしての経験から培った論理的思考と書道家として育んだ感性的表現を融合させることで、理性と感情の両面に訴えかけるデザインを追求しています。技術的な実現可能性と芸術的表現の両立を常に意識した制作プロセスを大切にしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-16 md:py-20 lg:py-24">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Career</h2>
              <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-sm text-gray-500 tracking-widest">経歴</span>
            </div>
            <div className="space-y-16">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2025 - 現在</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">グラフィックデザインへの転身</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                    <li>デジタルハリウッドSTUDIO by LIGにてグラフィックデザインを専門的に学習</li>
                    <li>Adobe Creative Suite（Photoshop、Illustrator）とFigmaの実践的活用</li>
                    <li>ブランディング、広告デザイン、タイポグラフィ、UI/UXデザインの習得</li>
                    <li>「Line Art」ブランドの立ち上げとアイデンティティ設計</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2018 - 現在</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">書道×デジタルアートの融合活動</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                    <li>伝統的書道技法とデジタル技術を組み合わせた独自の表現スタイル確立</li>
                    <li>SNSでの作品発信とコミュニティ構築（フォロワー約1,000人）</li>
                    <li>地域文化イベントでの作品展示と書道パフォーマンス</li>
                    <li>地元FMラジオ番組の企画サポートと吹奏楽団の演奏会ビジュアルデザイン</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div className="w-full">
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">2019 - 2024</span>
                    <div className="ml-4 h-1 flex-grow bg-[#3366cc]"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Webエンジニアとしての活動</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base lg:text-lg text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                    <li>フロントエンド開発（Vue.js、React）とバックエンド実装（Java、PHP）</li>
                    <li>UI/UXデザインの視点を取り入れたユーザー中心設計</li>
                    <li>基幹システム開発から業務アプリケーション設計まで幅広い開発経験</li>
                    <li>「答えが一つ」の世界から「多様な表現」の世界へのシフト</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach Section */}
      <section id="design-approach" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-wider">Design Approach</h2>
              <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">デザインアプローチ</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Layers className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">アナログとデジタル技術の融合</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  書道の筆による手仕事とデジタルツールの精緻さを組み合わせることで、温かみと先進性を兼ね備えた作品制作を行っています。手作業で生まれる偶発的な美しさをデジタル環境で最適化し、両者の長所を活かした表現を追求しています。
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <History className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">文化的文脈を意識したデザイン</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  日本の伝統美と国際的なデザイン言語を融合させ、文化的背景の異なる人々にも響くビジュアルコミュニケーションを目指しています。「Line Art」ブランディングや「Ensemble」広告デザインでは、国境を越えて共感される普遍的な美しさと文化的アイデンティティの両立を試みています。
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">物語性のあるビジュアル表現</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  単なる情報伝達や装飾を超え、見る人の想像力を刺激し物語を喚起するデザインを心がけています。「知られざるお城の悲劇展」ポスターでは、視覚的要素と言語的要素の相互作用により、展示内容への好奇心と期待感を高める表現を実現しました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 lg:py-24">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Skills & Expertise</h2>
              <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-sm text-gray-500 tracking-widest">スキルと専門領域</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 tracking-wider">デザインスキル</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>グラフィックデザイン（広告、ポスター、パンフレット）</li>
                  <li>ブランドアイデンティティ設計</li>
                  <li>タイポグラフィと文字組</li>
                  <li>UI/UXデザイン</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 tracking-wider">アート技法</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>書道（伝統的筆技法）</li>
                  <li>デジタルイラストレーション</li>
                  <li>写真撮影と画像編集</li>
                  <li>ミクストメディア表現</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 tracking-wider">ツール＆ソフトウェア</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>Adobe Photoshop & Illustrator</li>
                  <li>Figma</li>
                  <li>HTML/CSS</li>
                  <li>Vue.js & React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-wider">SNS</h2>
              <div className="w-20 h-1 mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">Social Media</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Instagram className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">Instagram</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  作品の制作過程や日常のインスピレーションを共有しています。フォローして最新の作品をご覧ください。
                </p>
                <a href="https://www.instagram.com/lineartistryo" target="_blank" rel="noopener noreferrer" className="mt-4 text-indigo-600 hover:text-indigo-800">
                  @lineartistryo
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Mail className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">Email</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  お仕事のご依頼やご質問など、お気軽にお問い合わせください。
                </p>
                <a href="mailto:ryoartist34@gmail.com" className="mt-4 text-indigo-600 hover:text-indigo-800">
                  ryoartist34@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-center leading-tight max-w-xs mx-auto mb-5">Portfolio</h3>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal text-center">
                  作品集やプロジェクトの詳細は、ポートフォリオサイトでご覧いただけます。
                </p>
                <a href="https://ryo-hidaka.com" target="_blank" rel="noopener noreferrer" className="mt-4 text-indigo-600 hover:text-indigo-800">
                  ryo-hidaka.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 9 Pieces Section */}
      {/* <section id="nine-pieces" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">9 Pieces</h2>
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
      </section> */}
    </div>
  );
}
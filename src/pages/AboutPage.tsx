import { useState } from 'react';
import { WorkModal } from '../components/WorkModal';

interface PieceWork {
  title: string;
  image: string;
}

export function AboutPage() {
  const [selectedPiece, setSelectedPiece] = useState<PieceWork | null>(null);

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
    <div className="min-h-screen bg-[#f2f2f2]">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Profile</h2>
              <span className="text-base text-gray-500 tracking-widest">自己紹介</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 mt-20 tracking-wider">RYO HIDAKA</h2>
              <p className="text-base md:text-lg lg:text-xl text-[#333333] leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                ラインアーティストとWebクリエイターとエンジニアとして活動しています。「見る人それぞれが自分らしい表現を触発する」を創作の核に据え、ユーザー体験を中心に据えた革新的なデザインソリューションを提供しています。常に新しい技術とデザインのトレンドをキャッチアップし、クライアントのニーズに最適なソリューションを提案することを心がけています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Career</h2>
              <span className="text-base text-gray-500 tracking-widest">経歴</span>
            </div>
            <div className="space-y-16">
              <div className="flex items-start mt-20">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold block mb-4 tracking-wider">2025</span>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">AIを活用した開発でアプリを複数デプロイ</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold block mb-4 tracking-wider">2024</span>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">「デジタルハリウッドSTUDIO by LIG」でデザインを勉強</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold block mb-4 tracking-wider">2021</span>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">エンジニアとして転職</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#3366cc] mt-2 mr-6"></div>
                <div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold block mb-4 tracking-wider">2019</span>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">エンジニアとして活動開始</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Section */}
      <section id="strength" className="py-16 md:py-20 lg:py-24">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[320px,1fr] gap-8 md:gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">Strength</h2>
              <span className="text-base text-gray-500 tracking-widest">強み</span>
            </div>
            <div className="space-y-16 md:space-y-20 lg:space-y-24 mt-20">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 tracking-wider">Creativity</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                  常に新しいアイデアを追求し、従来の概念にとらわれない斬新なデザインソリューションを生み出すことができます。伝統的な日本の書道と西洋の抽象画を融合させた「Line Art」のように、異なる文化や表現様式を組み合わせることで、独自の視点と価値を創造します。クライアントの要望を理解し、それを超える提案を心がけています。
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 tracking-wider">Problem Solving</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                  複雑な課題に対して、論理的思考と創造的アプローチを組み合わせた解決策を提供します。Webデザインからプログラミング、アート表現まで幅広いスキルを活かし、技術とデザインの両面からユーザーとクライアントの双方にとって最適な結果を導き出すことを重視しています。サブスクリプションモデルの「ArtPass」のように、新しいビジネスモデルとデザインを融合させたソリューションを構築できます。
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 tracking-wider">Focus</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-[2.5] md:leading-[2.5] lg:leading-[2.5] tracking-wider text-justify">
                  プロジェクトの細部まで注意を払い、質の高い成果物を提供することにこだわります。名刺デザインのようなシンプルな媒体から、複雑なWebアプリケーションまで、すべての要素において一貫した品質と美的センスを維持します。締め切りを厳守しながらも、妥協のない完成度を追求し、見る人それぞれが自分らしい表現を見出せる作品とプロダクトを生み出します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Pieces Section */}
      <section id="nine-pieces" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-8 md:px-12 lg:px-20">
          <div className="mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">9 Pieces</h2>
            <span className="text-base text-gray-500 tracking-widest">個人的な9つの作品や写真</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {pieces.map((piece, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setSelectedPiece(piece)}
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

      {/* Work Modal */}
      <WorkModal
        isOpen={!!selectedPiece}
        onClose={() => setSelectedPiece(null)}
        work={selectedPiece}
      />
    </div>
  );
}
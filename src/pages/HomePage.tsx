import { useState } from 'react';
import { WorkModal } from '../components/WorkModal';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
}

import namecardFront from '../assets/images/graphic_design/business_card1.png';
import namecardBack from '../assets/images/graphic_design/business_card2.png';
import logoPhoto from '../assets/images/graphic_design/logo_photo.png';
import flyerPhoto from '../assets/images/graphic_design/flyer_photo.png';
import adPhoto from '../assets/images/graphic_design/ad_photo.png';
import profilePhoto from '../assets/images/profile/profile_photo.png';
import artLove from '../assets/images/art/love.png';
import artLove5 from '../assets/images/art/love5.png';
import artPunishment from '../assets/images/art/punishment.png';
import artWindBlowing from '../assets/images/art/wind_blowing_fresh_verdure.png';
import webDesignPhoto1 from '../assets/images/web_design/web_design_photo1.png';
import webDesign1 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(1-1).png';
import webDesign2 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(2-1).png';
import webDesign3 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(3-1).png';
import webDesign4 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(4-1).png';
import webDesign5 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(5-1).png';
import webDesign6 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(6-1).png';
import webDesign7 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(7-1).png';
import webDesign8 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(8-1).png';
import webDesign9 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(9-1).png';
import webDesign10 from '../assets/images/web_design/web_design_photo_segmentation/web_design_photo.png_(1360x1092)_(10-1).png';
import bannerPhoto from '../assets/images/web_design/banner_photo.png';
import aiAssistant1 from '../assets/images/ai_development/artpass1.png';
import aiAssistant2 from '../assets/images/ai_development/artpass2.jpg';
import artpass1 from '../assets/images/ai_development/artpass_segmentation/artpass_(1-1).png';
import artpass2 from '../assets/images/ai_development/artpass_segmentation/artpass_(2-1).png';
import artpass3 from '../assets/images/ai_development/artpass_segmentation/artpass_(3-1).png';
import artpass4 from '../assets/images/ai_development/artpass_segmentation/artpass_(4-1).png';
import artpass5 from '../assets/images/ai_development/artpass_segmentation/artpass_(5-1).png';
import artpass6 from '../assets/images/ai_development/artpass_segmentation/artpass_(6-1).png';
import artpass7 from '../assets/images/ai_development/artpass_segmentation/artpass_(7-1).png';
import artpass8 from '../assets/images/ai_development/artpass_segmentation/artpass_(8-1).png';
import artpass9 from '../assets/images/ai_development/artpass_segmentation/artpass_(9-1).png';
import artpass10 from '../assets/images/ai_development/artpass_segmentation/artpass_(10-1).png';
import artpass11 from '../assets/images/ai_development/artpass_segmentation/artpass_(11-1).png';
import artpass12 from '../assets/images/ai_development/artpass_segmentation/artpass_(12-1).png';
import artpass13 from '../assets/images/ai_development/artpass_segmentation/artpass_(13-1).png';
import artpass14 from '../assets/images/ai_development/artpass_segmentation/artpass_(14-1).png';
import artpass15 from '../assets/images/ai_development/artpass_segmentation/artpass_(15-1).png';
import artpass16 from '../assets/images/ai_development/artpass_segmentation/artpass_(16-1).png';
import artpass17 from '../assets/images/ai_development/artpass_segmentation/artpass_(17-1).png';
import artpass18 from '../assets/images/ai_development/artpass_segmentation/artpass_(18-1).png';
import artpass19 from '../assets/images/ai_development/artpass_segmentation/artpass_(19-1).png';
import artpass20 from '../assets/images/ai_development/artpass_segmentation/artpass_(20-1).png';

import aiAnalytics1 from '../assets/images/ai_development/tax_consulting_landing_page1.png';
import taxConsulting1 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(1-1).png';
import taxConsulting2 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(2-1).png';
import taxConsulting3 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(3-1).png';
import taxConsulting4 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(4-1).png';
import taxConsulting5 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(5-1).png';
import taxConsulting6 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(6-1).png';
import taxConsulting7 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(7-1).png';
import taxConsulting8 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(8-1).png';
import taxConsulting9 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(9-1).png';
import taxConsulting10 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(10-1).png';
import taxConsulting11 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(11-1).png';
import taxConsulting12 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(12-1).png';
import taxConsulting13 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(13-1).png';
import taxConsulting14 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(14-1).png';
import taxConsulting15 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(15-1).png';
import taxConsulting16 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(16-1).png';
import taxConsulting17 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(17-1).png';
import taxConsulting18 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(18-1).png';
import taxConsulting19 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(19-1).png';
import taxConsulting20 from '../assets/images/ai_development/tax_consulting_landing_page_segmentation/tax_consulting_landing_page_(20-1).png';

interface Work {
  title: string;
  subtitle?: string;
  description?: string;
  image: StaticImageData | StaticImageData[] | string | string[];
  details?: string[];
  technologies?: string[];
  modalImage?: string[];
}

export function HomePage() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const works = {
    aiDevelopment: [
      {
        title: "Artpassアプリ",
        subtitle: "個人開発した複製画サブスクのArtpassアプリ",
        description: "美術作品の複製画をサブスクリプション形式で楽しめるウェブアプリケーション「ArtPass」の個人開発プロジェクト。「厳選されたアートで空間を変える」をコンセプトに、芸術作品を身近に楽しむための新しいサービスとして設計しました。会員はベーシック(¥2,900/月)、スタンダード(¥5,900/月)、プレミアム(¥9,900/月)の3つのプラン選択が可能で、定期的にアート作品を交換できるシステムを実装。ユーザーフローを「閲覧と選択」「配送」「アートを楽しむ」「いつでも交換」「お気に入り」という5ステップで視覚化し、サービスの利便性を直感的に伝えるUI/UXデザインに仕上げました。ユーザー管理からアート作品選択、プロフィール設定まで一貫したフロントエンド開発を担当し、Next.jsとVercelを活用したモダンな実装と、クリーンでミニマルなデザインを融合させたウェブアプリケーションです。",
        image: aiAssistant1,
        modalImage: [
          artpass1, artpass2, artpass3, artpass4, artpass5, 
          artpass6, artpass7, artpass8, artpass9, artpass10,
          artpass11, artpass12, artpass13, artpass14, artpass15,
          artpass16, artpass17, artpass18, artpass19, artpass20,
          aiAssistant2
        ],
        details: [
          "URL: https://artpass.vercel.app/",
          "美術複製画のサブスクリプションモデル設計と価格戦略",
          "モダンで直感的なUI/UXと芸術作品に焦点を当てたビジュアルデザイン",
          "Next.jsを用いたフロントエンド開発とVercelによるデプロイ",
          "会員管理システムとユーザープロフィール機能の実装",
        ],
        technologies: ["Next.js", "TailwindCSS", "PostgreSQL", "Stripe", "Vercel"]
      },
      {
        title: "ランディングページ",
        subtitle: "個人制作した不動産セミナーのランディングページ",
        description: "不動産投資セミナーのランディングページを個人制作した作品です。「資産形成を知るためのセミナー」という明確なバリュープロポジションを掲げ、不動産投資による安定収入と資産形成を訴求しています。ヘッダー部分には都市の高層ビル群をブルーのオーバーレイで処理した印象的なビジュアルを配置し、信頼性と先進性を表現。「満足度93.3%」「参加者数500名以上」という具体的な数値を提示することで社会的証明を強化し、Amazonギフトカード特典を明示することで申し込み促進を図っています。ウルトラマンション経営のセクションでは「34年」「99.1%」「31,000戸」という実績数値と5つの強みを視覚的に整理し、サービスの信頼性を高める情報設計を実現。コンバージョン率を高めるためのボタン配色や情報の階層構造にこだわり、ユーザーを自然にセミナー申し込みへと導く戦略的なデザインに仕上げました。",
        image: aiAnalytics1,
        modalImage: [
          taxConsulting1, taxConsulting2, taxConsulting3, taxConsulting4, taxConsulting5,
          taxConsulting6, taxConsulting7, taxConsulting8, taxConsulting9, taxConsulting10,
          taxConsulting11, taxConsulting12, taxConsulting13, taxConsulting14, taxConsulting15,
          taxConsulting16, taxConsulting17, taxConsulting18, taxConsulting19, taxConsulting20
        ],
        details: [
          "URL：https://tax-consulting-landing-page.vercel.app/",
          "信頼性を高める数値データと社会的証明の戦略的配置",
          "コンバージョン率向上のためのCTAボタン設計と特典訴求",
          "不動産投資の専門性と価値を伝える情報の階層構造化",
          "レスポンシブ対応とユーザーフレンドリーなUI/UX設計",
        ],
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"]
      }
    ],
    webDesign: [
      {
        title: "ランディングページデザイン",
        subtitle: "デジLIGの架空LP（スクール課題）",
        description: "クリエイタースクール「デジタルハリウッド STUDIO by LIG」の架空ランディングページデザイン（スクール課題）。「DESIGN YOUR FUTURE SELF」という力強いキャッチコピーを中心に、キャリア構築への意欲を喚起する構成に仕上げました。オレンジゴールドを基調とした温かみのあるカラーパレットと、明るく開放的なオフィス環境の写真を効果的に配置することで、創造的な学習環境を視覚的に表現。「About」「Reason」「Course」などの明確なセクション分けと論理的な情報設計により、ユーザーの理解を段階的に深める導線を設計しています。Webデザイナーやネット動画ディレクターなどの具体的なキャリアパスを提示し、実践的なフィードバックの重要性を強調することで、教育プログラムの価値を効果的に伝えています。モバイルフレンドリーな設計と直感的なナビゲーションにより、ユーザーエクスペリエンスを最適化したデザインソリューションです。",
        image: webDesignPhoto1,
        modalImage: [
          webDesign1, webDesign2, webDesign3, webDesign4, webDesign5,
          webDesign6, webDesign7, webDesign8, webDesign9, webDesign10
        ],
        details: [
          "ユーザーの感情に訴えかけるキャッチコピーとビジュアルの統合",
          "情報階層と視線誘導を考慮したセクション設計と空間構成",
          "教育機関のブランドイメージを反映したカラースキームと写真選定",
          "コンバージョン率向上を意識したCTAボタン配置と導線設計"
        ],
        technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"]
      },
      {
        title: "バナーデザイン",
        subtitle: "TheSaunaの架空バナー（スクール課題）",
        description: "長野県の野尻湖に位置するゲストハウスLAMPが提供する「The Sauna」の架空プロモーションバナーデザイン（スクール課題）。「なぜ、今日を境にあなたの\"ととのい\"が変わるのか。」という心理的に訴求力の高いコピーと、水面に浮かぶ人物の開放感あふれるビジュアルを組み合わせ、サウナ体験の本質的な価値を表現しました。深みのあるブルートーンの色彩設計と、躍動感のあるタイポグラフィで視覚的インパクトを創出。「SAUNACHELIN 2023 3位」という評価を示すことで信頼性と希少性を高め、「特別な水風呂体験」というユニークな価値提案を強調しています。直感的な導線設計により、ユーザーの行動喚起を自然に促す構成に仕上げました。",
        image: bannerPhoto,
        details: [
          "感情に訴える魅力的なコピーライティングとビジュアルの統合",
          "サウナの「ととのい」体験を視覚的に表現するカラーと構図",
          "信頼性を高める評価表示と独自性を強調する価値提案",
          "ユーザー心理に基づいたCTA（行動喚起）デザイン"
        ],
        technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"]
      }
    ],
    graphicDesign: [
      {
        title: "名刺デザイン",
        subtitle: "Line Artist Ryoの名刺",
        description: "Line Artist Ryoの名刺デザイン。モノクロームの筆のストロークを背景に配した洗練されたミニマルデザインです。表面には「日高 峻」という漢字名と「line artist ryo」という英字表記を対比させ、東洋と西洋の美学を融合させています。裏面には連絡先情報とSNSアカウントを整然と配置し、実用性と美しさを両立。アーティストの線画作品を思わせる流動的な白い筆跡が特徴的で、グレースケールの色調がプロフェッショナルな印象を与えています。縦書きと横書きを効果的に組み合わせることで、伝統とモダンの調和を表現し、持ち主のアイデンティティを端的に伝える名刺に仕上げました。",
        image: namecardFront,
        details: [
          "モノクロームの筆のストロークを用いた芸術的背景デザイン",
          "和文と英文の対比による文化的アイデンティティの表現",
          "表裏で統一感を保ちながら異なる情報構成を実現",
          "SNSアカウントなど現代的要素と伝統的書体の融合"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop"]
      },
      {
        title: "ロゴデザイン",
        subtitle: "アートジャンルLine Artのロゴ",
        description: "アートジャンルLine Artのロゴデザイン。「L」と「A」の文字をモチーフにした幾何学的なシンボルマークと、シンプルなワードマークを組み合わせたデザインです。青と赤紫のコントラストが鮮やかなカラーブロックと白いラインの交差により、現代的で洗練された印象を創出しています。直線的な要素を用いることでLine Artというジャンル名を視覚的に表現しつつ、異なる角度と太さの線を組み合わせることで動的な緊張感を生み出しました。シンボルマークの四角形フレームは安定感と統一感をもたらし、多様なアプリケーションでの使用に適した汎用性の高いデザインに仕上げています。ミニマリズムの美学を取り入れながらも、独自性と記憶に残る視覚的アイデンティティを実現しました。",
        image: logoPhoto,
        details: [
          "「L」と「A」を抽象化した幾何学的シンボルマークの開発",
          "青と赤紫のコントラストによる視認性と現代性の表現",
          "直線と角度を活用したLine Artの本質の視覚化",
          "さまざまな用途に対応できるシンプルで汎用性の高いデザイン"
        ],
        technologies: ["Adobe Illustrator"]
      },
      {
        title: "ポスターデザイン",
        subtitle: "架空の「お城の悲劇展」のイベントポスター（スクール課題）",
        description: "架空の「お城の悲劇展」のイベントポスターデザイン（スクール課題）。中世の城をメインビジュアルに据え、神秘的で物語性のある雰囲気を創出しました。日本語の縦書きタイポグラフィと西洋建築の対比により、異文化融合の視覚的効果を実現。「知られざるお城の悲劇展」というテーマに合わせ、ダークブルーのトーンと煙霧効果で謎めいた印象を強調しています。展示会情報を明確に伝えながらも、芸術性を失わないバランス設計を心がけました。縦長フォーマットと余白の効果的な活用により、情報の階層性と視線誘導を実現。歴史的題材を現代的デザインで表現することで、伝統と革新の融合を試みた作品です。",
        image: flyerPhoto,
        details: [
          "歴史的建造物を主題にした神秘的な世界観の構築",
          "和洋の視覚要素を組み合わせた独創的な文化融合表現",
          "縦書きタイポグラフィと画像配置による視線誘導設計",
          "色彩とトーン調整による物語性と謎めいた雰囲気の演出"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop"]
      },
      {
        title: "広告デザイン",
        subtitle: "架空の葡萄飲料のポスター（スクール課題）",
        description: "架空の「勝沼葡萄工房」が手がける「Ensemble」という葡萄ジュースの広告デザイン（スクール課題）。深みのあるブラウンと紫の色調で高級感を演出し、ワインのような洗練された大人の飲料としてのポジショニングを表現しました。メインコピー「ワイン職人が紡いだ、百年の美学が贈る、大人の葡萄ジュース。」により、製品の本質と価値を端的に伝えています。実際のブドウと枯れ木を組み合わせた自然素材のフラットレイで素材感を強調し、製品ボトルをセンターに配置することで視線の焦点を明確化。上品なタイポグラフィとミニマルなロゴデザインにより、シンプルながらも奥深い製品イメージを構築しました。高級食品市場をターゲットにした、芸術性と商業性を兼ね備えた広告表現です。",
        image: adPhoto,
        details: [
          "高級感と伝統を表現するカラーパレットと素材選定",
          "製品ストーリーを凝縮した魅力的なコピーライティング",
          "自然素材を活用した本格的な商品撮影とスタイリング",
          "ターゲット層の審美眼に訴える洗練されたビジュアル設計"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop"]
      }
    ],
    art: [
      {
        title: "ダテンシの愛",
        subtitle: "抽象画と漢字の融合したアート作品",
        description: "調律の狂ったピアノから紡がれる不協和音のように、この作品は歪みながらも美しい愛を表現しています。深い翠の闇を背景に、白く踊る文字は、狂気と愛らしさ、そして孤独が混ざり合う感情を映し出しています。ダンテンシの奏でる音楽のように、どこか切なく、でも確かに心に響く愛の形を描きました。",
        image: artLove,
        details: [
          "サイズ：333mm×242mm",
          "コンセプト：東洋の書道と西洋の抽象表現の融合"
        ],
        technologies: ["アクリル", "不透明水彩ペン", "キャンバス"]
      },
      {
        title: "愛",
        subtitle: "抽象画と漢字の融合したアート作品",
        description: "オレンジ、グリーン、ブルーが織りなす色彩豊かな空間に、白く輝く「愛」の文字が浮かび上がります。まるで様々な愛の形が重なり合うように、色彩が優しく混ざり合い、その中心で踊る文字が愛おしさを表現しています。透明感のある筆致と鮮やかな色使いが、人々の心に宿る純粋な想いを映し出しています。",
        image: artLove5,
        details: [
          "サイズ：333mm×242mm",
          "コンセプト：東洋の「愛」の文字と多色彩抽象背景の調和"
        ],
        technologies: ["アクリル", "キャンバス"]
      },
      {
        title: "プロポーズという名の罰",
        subtitle: "抽象画と漢字の融合したアート作品",
        description: "漆黒の闇のような深い背景に、歪んだ形で描かれた「罰」の文字が浮かび上がります。愛の中で生まれる歪みや醜さを、激しい筆致と色彩の対比で表現し、感情がほとばしる瞬間を映し出しています。腐りゆく愛の形を、生々しい筆のタッチと力強い漢字で象徴的に描き出しています。",
        image: artPunishment,
        details: [
          "サイズ：333mm×242mm",
          "コンセプト：プロポーズという美しい瞬間に潜む不安と恐怖の対比"
        ],
        technologies: ["アクリル", "不透明水彩ペン", "キャンバス"]
      },
      {
        title: "青嵐",
        subtitle: "抽象画と漢字の融合したアート作品",
        description: "荒々しい筆致で描かれた青の波打つ背景は、春の嵐の激しさを表現しています。その中を白く浮かび上がる「青嵐」の文字は、春特有の強い風と清々しさを映し出しています。うねるような青のグラデーションと力強い書が織りなす空間が、春の訪れを告げる自然の荒々しい生命力を表現しています。",
        image: artWindBlowing,
        details: [
          "サイズ：333mm×242mm",
          "コンセプト：春の訪れを告げる青嵐の力強さと清涼感の表現"
        ],
        technologies: ["アクリル", "キャンバス"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src={profilePhoto}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15">
          <div className="container px-8 md:px-12 lg:px-20 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">RYO HIDAKA</h1>
              <p className="text-xl tracking-widest">ポートフォリオ</p>
            </div>
          </div>
        </div>
      </section>
      {/* Works Section */}
      <section id="works" className="py-32 md:py-40 lg:py-48">
        <div className="container px-8 md:px-12 lg:px-20">
          {/* Grid Layout */}
          <div className="space-y-32 md:space-y-40 lg:space-y-48">
            {/* AI Development Section */}
            <div id="ai-development">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">AI Development</h3>
                <span className="text-x text-gray-500 tracking-widest">AI駆動開発</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.aiDevelopment.map((work, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedWork(work)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {Array.isArray(work.image) ? (
                          <>
                            <img 
                              src={work.image[0]}
                              alt={`${work.title} 1`}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={work.image[1]}
                              alt={`${work.title} 2`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                            className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Web Design Section */}
            <div id="web-design">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">Web Design</h3>
                <span className="text-x text-gray-500 tracking-widest">WEBデザイン</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.webDesign.map((work, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedWork(work)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {Array.isArray(work.image) ? (
                          <>
                            <img 
                              src={work.image[0]}
                              alt={`${work.title} 1`}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={work.image[1]}
                              alt={`${work.title} 2`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                            className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Graphic Design Section */}
            <div id="graphic-design">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">Graphic Design</h3>
                <span className="text-x text-gray-500 tracking-widest">グラフィックデザイン</span>
              </div>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.graphicDesign.map((work, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedWork(work)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        {index === 0 ? (
                          <>
                            <img 
                              src={work.image}
                              alt={work.title}
                              className="w-1/2 h-full object-contain"
                            />
                            <img 
                              src={namecardBack}
                              alt={`${work.title} 裏面`}
                              className="w-1/2 h-full object-contain"
                            />
                          </>
                        ) : (
                        <img 
                          src={work.image}
                          alt={work.title}
                            className="w-full h-full object-contain"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Art Section */}
            <div id="art">
              <div className="mb-16 md:mb-20 lg:mb-24">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">Art</h3>
                <span className="text-x text-gray-500 tracking-widest">アート</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {works.art.map((work, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedWork(work)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] bg-white flex items-center justify-center">
                        <img 
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold mb-3 tracking-wider">{work.title}</h4>
                      <p className="text-x text-gray-600 tracking-wider leading-[2.5] md:leading-[2.5] lg:leading-[2.5] text-justify">{work.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Modal */}
      <WorkModal
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        work={selectedWork ? {
          ...selectedWork,
          image: Array.isArray(selectedWork.image) 
            ? selectedWork.image[0].toString()
            : selectedWork.image.toString(),
          modalImage: selectedWork.modalImage
        } : null}
      />
    </div>
  );
}
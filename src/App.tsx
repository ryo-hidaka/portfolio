import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkDetailPage } from './pages/WorkDetailPage';

interface Work {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  category: string;
  type: 'landingPage' | 'artPass' | 'digiLig' | 'other' | 'bannerDesign' | 'businessCard' | 'logoDesign' | 'posterDesign' | 'advertisementDesign' | 'theSauna' | 'daten';
  technologies?: string[];
  modalImage?: string[];
  details?: (string | JSX.Element)[];
}

type Works = {
  aiDevelopment: Work[];
  webDesign: Work[];
  graphicDesign: Work[];
  art: Work[];
}

const namecardFront = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442772/business_card1_r4cvu9.png';
// const namecardBack = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442773/business_card2_kb2atq.png';
const logoPhoto = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442773/logo_photo_p8fqxc.png';
const flyerPhoto = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442771/flyer_photo_ex9jey.png';
const adPhoto = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442772/ad_photo_kr8iah.png';
// const profilePhoto = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442777/profile_photo_mifcmy.jpg';
const artLove = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442772/love_vmhk6b.png';
const artLove5 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442772/love5_aebp2i.png';
const artPunishment = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442772/punishment_apxwd2.png';
const artWindBlowing = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442772/wind_blowing_fresh_verdure_peh1eh.png';
const webDesignPhoto1 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442776/web_design_photo1_nfwp35.png';
const webDesign1 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741490752/tax_consulting_landing_page__1-1_xhobtj.png';
const webDesign2 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741490751/tax_consulting_landing_page__2-1_smlomh.png';
const webDesign3 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741490750/tax_consulting_landing_page__3-1_ggl3ul.png';
const bannerPhoto = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442775/banner_photo_qseuqf.png';
const aiAssistant = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442775/artpass1_x5fgei.png';
const artpassDesign1 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741497794/artpass__1-1_ttifjn.png';
const artpassDesign2 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741497792/artpass__2-1_rqi4mx.png';
const artpassDesign3 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741497792/artpass__3-1_tnhzso.png';
const aiAnalytics1 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741442774/tax_consulting_landing_page1_itnama.png';
const taxConsultingDesign1 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741498346/tax_consulting_landing_page__1-1_gs6gy8.png';
const taxConsultingDesign2 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741498339/tax_consulting_landing_page__2-1_ztmr3g.png';
const taxConsultingDesign3 = 'https://res.cloudinary.com/dfrcjj3e4/image/upload/v1741498338/tax_consulting_landing_page__3-1_p3xrp3.png';

const works: Works = {
  aiDevelopment: [
    {
      id: 'art-pass',
      category: 'web',
      title: "Artpassアプリ",
      subtitle: "個人開発した複製画サブスクのArtpassアプリ",
      description: "美術作品の複製画をサブスクリプション形式で楽しめるウェブアプリケーション「ArtPass」の個人開発プロジェクト。「厳選されたアートで空間を変える」をコンセプトに、芸術作品を身近に楽しむための新しいサービスとして設計しました。会員はベーシック(¥2,900/月)、スタンダード(¥5,900/月)、プレミアム(¥9,900/月)の3つのプラン選択が可能で、定期的にアート作品を交換できるシステムを実装。ユーザーフローを「閲覧と選択」「配送」「アートを楽しむ」「いつでも交換」「お気に入り」という5ステップで視覚化し、サービスの利便性を直感的に伝えるUI/UXデザインに仕上げました。ユーザー管理からアート作品選択、プロフィール設定まで一貫したフロントエンド開発を担当し、Next.jsとVercelを活用したモダンな実装と、クリーンでミニマルなデザインを融合させたウェブアプリケーションです。",
      image: aiAssistant,
      modalImage: [artpassDesign1, artpassDesign2, artpassDesign3],
      details: [
        <a href="https://artpass.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-gray-600">https://artpass.vercel.app/</a>,
        "美術複製画のサブスクリプションモデル設計と価格戦略",
        "モダンで直感的なUI/UXと芸術作品に焦点を当てたビジュアルデザイン",
        "Next.jsを用いたフロントエンド開発とVercelによるデプロイ",
        "会員管理システムとユーザープロフィール機能の実装",
      ],
      technologies: ["Next.js", "TailwindCSS", "PostgreSQL", "Stripe", "Vercel"],
      type: 'artPass' as const
    },
    {
      id: 'landing-page',
      category: 'web',
      title: "不動産投資セミナーLP",
      subtitle: "データ駆動型の高コンバージョン設計",
      description: "不動産投資セミナーのランディングページを個人制作した作品です。PMとしてデザインとエンジニアリングの両面から最適解を導き出し、戦略的なデータ活用と視覚設計の融合により高コンバージョン率を実現しました。「資産形成を知るためのセミナー」という明確なバリュープロポジションを掲げ、不動産投資による安定収入と資産形成を訴求。ヘッダー部分には都市の高層ビル群をブルーのオーバーレイで処理した印象的なビジュアルを配置し、金融・不動産業界で信頼と安定を象徴する色彩心理学に基づいた無意識レベルでの信頼性向上を実現。「満足度93.3%」「参加者数500名以上」という具体的な数値をファーストビューに配置し、科学的根拠に基づく信頼性を構築。ウルトラマンション経営のセクションでは「34年」の運営実績、「99.1%」の高い入居率、「31,000戸」の管理実績という数値と5つの強みを視覚的に整理し、情報の階層構造を明確化。Amazonギフトカード特典と「残り席数」表示によるスカーシティ効果を活用し、視認性の高いコントラスト比を持つCTAボタン配色とスクロール深度に応じた戦略的なCTA配置により、ユーザーを自然にセミナー申し込みへと導く導線設計を実現しました。",
      image: aiAnalytics1,
      modalImage: [taxConsultingDesign1, taxConsultingDesign2, taxConsultingDesign3],
      details: [
        <a href="https://www.tax-consulting-landing-page.net/" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-gray-600">https://www.tax-consulting-landing-page.net/</a>,
        "信頼性を高める数値データと社会的証明の戦略的配置",
        "コンバージョン率向上のためのCTAボタン設計と特典訴求",
        "不動産投資の専門性と価値を伝える情報の階層構造化",
        "レスポンシブ対応とユーザーフレンドリーなUI/UX設計",
      ],
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
      type: 'landingPage' as const
    }
  ],
  webDesign: [
    {
      id: 'digi-lig',
      category: 'web',
      title: "ランディングページデザイン",
      subtitle: "デジLIGの架空LP（スクール課題）",
      description: "クリエイタースクール「デジタルハリウッド STUDIO by LIG」の架空ランディングページデザイン（スクール課題）。「DESIGN YOUR FUTURE SELF」という力強いキャッチコピーを中心に、キャリア構築への意欲を喚起する構成に仕上げました。オレンジゴールドを基調とした温かみのあるカラーパレットと、明るく開放的なオフィス環境の写真を効果的に配置することで、創造的な学習環境を視覚的に表現。「About」「Reason」「Course」などの明確なセクション分けと論理的な情報設計により、ユーザーの理解を段階的に深める導線を設計しています。Webデザイナーやネット動画ディレクターなどの具体的なキャリアパスを提示し、実践的なフィードバックの重要性を強調することで、教育プログラムの価値を効果的に伝えています。モバイルフレンドリーな設計と直感的なナビゲーションにより、ユーザーエクスペリエンスを最適化したデザインソリューションです。",
      image: webDesignPhoto1,
      modalImage: [webDesign1, webDesign2, webDesign3],
      details: [
        "ユーザーの感情に訴えかけるキャッチコピーとビジュアルの統合",
        "情報階層と視線誘導を考慮したセクション設計と空間構成",
        "教育機関のブランドイメージを反映したカラースキームと写真選定",
        "コンバージョン率向上を意識したCTAボタン配置と導線設計"
      ],
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      type: 'digiLig'
    },
    {
      id: 'the-sauna',
      category: 'web',
      title: "バナーデザイン",
      subtitle: "TheSaunaの架空バナー（スクール課題）",
      description: "長野県野尻湖のゲストハウスLAMPが提供する「The Sauna」の架空プロモーションバナーデザイン。サウナ体験の本質的な価値と感覚的解放を視覚言語で表現し、「ととのい」という抽象的な体験を具体的かつ魅力的に伝えるビジュアルコミュニケーション設計を行いました。",
      image: bannerPhoto,
      details: [
        "感情に訴える魅力的なコピーライティングとビジュアルの統合",
        "サウナの「ととのい」体験を視覚的に表現するカラーと構図",
        "信頼性を高める評価表示と独自性を強調する価値提案",
        "ユーザー心理に基づいたCTA（行動喚起）デザイン"
      ],
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      type: 'theSauna'
    },
    // {
    //   id: 'banner-design',
    //   category: 'design',
    //   title: "バナーデザイン",
    //   subtitle: "TheSaunaの架空バナー（スクール課題）",
    //   description: "長野県の野尻湖に位置するゲストハウスLAMPが提供する「The Sauna」の架空プロモーションバナーデザイン（スクール課題）。「なぜ、今日を境にあなたの\"ととのい\"が変わるのか。」という心理的に訴求力の高いコピーと、水面に浮かぶ人物の開放感あふれるビジュアルを組み合わせ、サウナ体験の本質的な価値を表現しました。深みのあるブルートーンの色彩設計と、躍動感のあるタイポグラフィで視覚的インパクトを創出。「SAUNACHELIN 2023 3位」という評価を示すことで信頼性と希少性を高め、「特別な水風呂体験」というユニークな価値提案を強調しています。直感的な導線設計により、ユーザーの行動喚起を自然に促す構成に仕上げました。",
    //   image: bannerPhoto,
    //   details: [
    //     "感情に訴える魅力的なコピーライティングとビジュアルの統合",
    //     "サウナの「ととのい」体験を視覚的に表現するカラーと構図",
    //     "信頼性を高める評価表示と独自性を強調する価値提案",
    //     "ユーザー心理に基づいたCTA（行動喚起）デザイン"
    //   ],
    //   technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    //   type: 'bannerDesign'
    // }
  ],
  graphicDesign: [
    {
      id: 'business-card',
      category: 'design',
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
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
      type: 'businessCard'
    },
    {
      id: 'logo-design',
      category: 'design',
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
      technologies: ["Adobe Illustrator"],
      type: 'logoDesign'
    },
    {
      id: 'poster-design',
      category: 'design',
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
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
      type: 'posterDesign'
    },
    {
      id: 'advertisement-design',
      category: 'design',
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
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
      type: 'advertisementDesign'
    }
  ],
  art: [
    {
      id: 'daten',
      category: 'art',
      title: "ダテンシの愛",
      subtitle: "抽象画と漢字の融合したアート作品",
      description: "「愛」という漢字を中心に、抽象的な表現と文字の持つ意味を融合させたアート作品。深紅、漆黒、純白の3色を用いて、愛の持つ多面的な感情を表現しています。",
      image: artLove,
      type: 'daten'
    },
    {
      id: 'other-2',
      category: 'other',
      title: "愛",
      subtitle: "抽象画と漢字の融合したアート作品",
      description: "オレンジ、グリーン、ブルーが織りなす色彩豊かな空間に、白く輝く「愛」の文字が浮かび上がります。まるで様々な愛の形が重なり合うように、色彩が優しく混ざり合い、その中心で踊る文字が愛おしさを表現しています。透明感のある筆致と鮮やかな色使いが、人々の心に宿る純粋な想いを映し出しています。",
      image: artLove5,
      details: [
        "サイズ：333mm×242mm",
        "コンセプト：東洋の「愛」の文字と多色彩抽象背景の調和"
      ],
      technologies: ["アクリル", "キャンバス"],
      type: 'daten'
    },
    {
      id: 'other-3',
      category: 'other',
      title: "プロポーズという名の罰",
      subtitle: "抽象画と漢字の融合したアート作品",
      description: "漆黒の闇のような深い背景に、歪んだ形で描かれた「罰」の文字が浮かび上がります。愛の中で生まれる歪みや醜さを、激しい筆致と色彩の対比で表現し、感情がほとばしる瞬間を映し出しています。腐りゆく愛の形を、生々しい筆のタッチと力強い漢字で象徴的に描き出しています。",
      image: artPunishment,
      details: [
        "サイズ：333mm×242mm",
        "コンセプト：プロポーズという美しい瞬間に潜む不安と恐怖の対比"
      ],
      technologies: ["アクリル", "不透明水彩ペン", "キャンバス"],
      type: 'daten'
    },
    {
      id: 'other-4',
      category: 'other',
      title: "青嵐",
      subtitle: "抽象画と漢字の融合したアート作品",
      description: "荒々しい筆致で描かれた青の波打つ背景は、春の嵐の激しさを表現しています。その中を白く浮かび上がる「青嵐」の文字は、春特有の強い風と清々しさを映し出しています。うねるような青のグラデーションと力強い書が織りなす空間が、春の訪れを告げる自然の荒々しい生命力を表現しています。",
      image: artWindBlowing,
      details: [
        "サイズ：333mm×242mm",
        "コンセプト：春の訪れを告げる青嵐の力強さと清涼感の表現"
      ],
      technologies: ["アクリル", "キャンバス"],
      type: 'daten'
    }
  ]
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f2f2f2]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage works={works} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/:category/:id" element={<WorkDetailPage works={works} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { useState, useEffect, useRef } from 'react';
import { Target, Code, Layout as LayoutIcon, Lightbulb, Brain, Image, Type, Globe, History, Eye, Heart, MessageSquare, ExternalLink, Cpu } from 'lucide-react';

export function PosterDesignDetail() {
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
              <h4 className="font-semibold">プロジェクトの目的</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">歴史的建造物の物語性</h5>
                <p className="text-sm text-gray-600">神秘性を視覚言語で表現し、好奇心を喚起</p>
          </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800">情報設計</h5>
                <p className="text-sm text-gray-600">展示会の本質的価値と情報の明確性を両立</p>
            </div>
            </div>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Globe className="w-6 h-6 text-purple-500" />
                    </div>
              <h4 className="font-semibold">文化的融合</h4>
                  </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">東洋と西洋の融合</h5>
                <p className="text-sm text-gray-600">縦書きタイポグラフィと西洋建築の統合</p>
                </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800">新たな美学</h5>
                <p className="text-sm text-gray-600">異文化融合による戦略的ビジュアルコミュニケーション</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 視覚言語と文化的二元性 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">視覚言語と文化的二元性</h3>
          <span className="text-sm text-gray-500 tracking-widest">Visual Language & Cultural Duality</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <History className="w-6 h-6 text-blue-500" />
            </div>
              <h4 className="font-semibold">東西文化の対話的構成</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>直交する視覚軸：縦書きテキストと水平に広がる城の構図</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>文化的対比：和のタイポグラフィと洋の建築物の融合</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>時間軸の交差：古代日本と中世ヨーロッパの時間的交差</span>
              </li>
            </ul>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Type className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">階層的タイポグラフィ設計</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>メインタイトル：「知られざるお城の悲劇展」の白色縦書き表記</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>視覚的強調：「お城」部分のゴールド処理による注目点創出</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>補足情報：展示詳細と説明文の適切な配置</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>欧文サイドノート：左余白に配置した英文テキスト</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 情感デザインと心理的訴求 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">情感デザインと心理的訴求</h3>
          <span className="text-sm text-gray-500 tracking-widest">Emotional Design & Psychological Appeal</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="font-semibold">視覚的物語性</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                <span>霧がかった城：煙霧効果による神秘性と時間の隔たりの表現</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                <span>暗色トーン：ダークブルーの色調による悲劇性と歴史の重みの示唆</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                <span>光と影のコントラスト：城の上部に残る光と下部の暗さによる象徴的表現</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                <span>フレーム構造：レンガ模様の枠取りによる「過去への窓」としての機能</span>
              </li>
              </ul>
          </div>
          
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Eye className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-semibold">心理的没入感の設計</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>謎の提示：「知られざる」という言葉と霧がかった視覚表現による好奇心喚起</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>感情的予告：「悲劇」という言葉と全体の暗色調による感情的期待値の設定</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>時間的区切り：明確な会期表示（2022.5.2-8）による限定性と希少価値の強調</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>サブテキスト：「秘められた悲劇の舞台が2022年、幕開けがれる」という物語的予告</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 技術的実装と情報設計 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">技術的実装と情報設計</h3>
          <span className="text-sm text-gray-500 tracking-widest">Technical Implementation & Information Design</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">デジタルツールの戦略的活用</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>Adobe Photoshop：城のビジュアルに対する雰囲気処理（煙霧効果、色調補正、粒状感）</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>Adobe Illustrator：精密なタイポグラフィ配置と文字間調整</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>レイヤーマスク：画像と背景の緻密な融合</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>黄金比：全体レイアウトの構築</span>
              </li>
                    </ul>
                  </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <LayoutIcon className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="font-semibold">実用的情報設計</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>開催期間：中央下部に大きく視認性高く配置された日付（2022.5.2-8）</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>開館時間：ポスター下部に明記された時間帯（10:00-17:00）</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>休館日：必要情報として簡潔に示された休館情報（月曜日）</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                <span>主催・後援：組織情報と問い合わせ先の適切な配置</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PMとしての統合的視点 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">PMとしての統合的視点</h3>
          <span className="text-sm text-gray-500 tracking-widest">Integrated Perspective as PM</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="font-semibold">コンセプト設計</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                <span>神秘的雰囲気という抽象概念をデジタルツールで具現化</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                <span>異なる文化圏の悲劇という展示テーマの本質を視覚的に前景化</span>
              </li>
            </ul>
          </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Cpu className="w-6 h-6 text-green-500" />
                      </div>
              <h4 className="font-semibold">複数文化要素の統合</h4>
                    </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>東洋と西洋、古代と中世、テキストとビジュアルという異種要素の調和</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                <span>文化的対比を単なる美的実験ではなく戦略的選択として実装</span>
              </li>
            </ul>
                  </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Brain className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-semibold">美的表現と機能的要件</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>芸術表現を損なわずに必要情報を明確に伝える設計バランス</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span>実用性と芸術性のバランスを実現した統合デザイン</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 成果と応用 */}
      <div className="space-y-8">
        <div className={`transform transition-all duration-300 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">成果と応用</h3>
          <span className="text-sm text-gray-500 tracking-widest">Results & Applications</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <MessageSquare className="w-6 h-6 text-indigo-500" />
              </div>
              <h4 className="font-semibold">展示予告としての期待感</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                <span>展示内容の直接的説明ではなく、暗示と象徴による興味喚起</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                <span>視覚的記憶点の創出による記憶への残存性の向上</span>
              </li>
            </ul>
      </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pink-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <Image className="w-6 h-6 text-pink-500" />
        </div>
              <h4 className="font-semibold">文化施設としてのブランド</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2" />
                <span>学術性と芸術性を兼ね備えた文化イベントとしての品位確立</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2" />
                <span>独特の構図と色彩処理による記憶への残存性の向上</span>
              </li>
                    </ul>
                  </div>

          <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-50 p-4 rounded-lg transform transition-all duration-200 hover:rotate-12">
                <ExternalLink className="w-6 h-6 text-amber-500" />
              </div>
              <h4 className="font-semibold">応用可能性</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>歴史的・文化的コンテンツを現代的文脈で再提示する視覚言語システム</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <span>デジタル展示、ウェブデザイン、出版物など多様なメディアへの応用</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
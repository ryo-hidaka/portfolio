import { useState, useEffect, useRef } from 'react';
import { Palette, Layers, ArrowRight } from 'lucide-react';

export function DatenDetail() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

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
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="space-y-16 py-8">
        {/* プロジェクト概要セクション */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">作品概要</h2>
            <p className="text-lg text-gray-600">
              「ダテンシの愛」は、抽象的な表現と漢字の融合を通じて、愛の多面的な性質を探求するアート作品です。
              伝統的な書道の要素と現代アートの手法を組み合わせることで、愛の普遍的なメッセージを視覚的に表現しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">抽象表現とシンボリズム</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 流動的な筆致による感情の表現</li>
                <li>• 漢字「愛」の解体と再構築</li>
                <li>• 色彩の重なりによる深層的な意味の創出</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">技法と素材</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• アクリル絵具とインクの混合技法</li>
                <li>• テクスチャーの重層的な構築</li>
                <li>• 和紙とキャンバスの融合</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">表現方法</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 抽象的形態による感情の具現化</li>
                <li>• 書道の動きを活かした筆致</li>
                <li>• 余白の効果的な活用</li>
              </ul>
            </div>
          </div>
        </section>

        {/* カラーパレットセクション */}
        <section className="space-y-8">
          <div className="flex items-center space-x-2">
            <Palette className="w-8 h-8 text-gray-700" />
            <h2 className="text-3xl font-bold">カラーパレット</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-full h-24 bg-[#DC2626] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">ディープレッド</h3>
              <p className="text-gray-600 mt-2">
                情熱と強い感情を表現する基調色。愛の力強さと深さを象徴します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-full h-24 bg-[#000000] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">ジェットブラック</h3>
              <p className="text-gray-600 mt-2">
                漢字の骨格を形成し、作品に重厚さと深みを与えます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-full h-24 bg-[#FFFFFF] rounded-lg mb-4 border"></div>
              <h3 className="text-xl font-semibold">ピュアホワイト</h3>
              <p className="text-gray-600 mt-2">
                余白として機能し、他の要素を引き立てる役割を果たします。
              </p>
            </div>
          </div>
        </section>

        {/* 制作プロセスと技術的アプローチ */}
        <section className="space-y-8">
          <div className="flex items-center space-x-2">
            <Layers className="w-8 h-8 text-gray-700" />
            <h2 className="text-3xl font-bold">制作プロセスと技術的アプローチ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">コンセプトデザイン</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>漢字「愛」の構造分析と再解釈</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>抽象的要素との調和点の探求</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>色彩計画の立案</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">制作技法</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>レイヤー構築による深度表現</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>墨と絵具の混合技法の開発</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>テクスチャー処理の工夫</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">視覚効果</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>動的な筆致による視線誘導</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>コントラストによる空間表現</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>余白の戦略的配置</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
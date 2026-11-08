import type { Lang } from './ui';

export interface FaqItem {
  category: string;
  question: string;
  acceptedAnswer: string;
}

export interface LocalizedFaqSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  faqs: FaqItem[];
}

export const faqTranslations: Record<Lang, LocalizedFaqSection> = {
  en: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions About Chemical Equation Balancing',
    subtitle: 'Clear, authoritative answers to common chemistry questions on balancing reactions, charges, stoichiometry, and limiting reagents.',
    faqs: [
      {
        category: 'Overview',
        question: 'What is the chemical equation balancer?',
        acceptedAnswer: '<p>A <strong>chemical equation balancer</strong> is an online chemistry tool that balances chemical reaction equations by determining the correct whole-number stoichiometric coefficients for all reactants and products. Our balancer uses an exact rational linear algebra algorithm (Gaussian elimination) to satisfy both the Law of Conservation of Mass and net electrical charge conservation, supporting state phases (s, l, g, aq), detailed algebraic steps, and bidirectional stoichiometry calculations.</p>'
      },
      {
        category: 'Free Tool',
        question: 'Is there a free chemical equation balancer?',
        acceptedAnswer: '<p>Yes! <strong>balancechemicalequation.com</strong> provides a 100% free online chemical equation balancer. It requires no registration, download, or subscription, and includes an interactive 18-column periodic table keypad, step-by-step mathematical balancing derivations, and a full stoichiometry and limiting reagent calculator directly in your web browser.</p>'
      },
      {
        category: 'Ionic & Redox',
        question: 'How to balance charges in chemical equations?',
        acceptedAnswer: '<p>To balance charges in ionic or redox chemical equations:</p><ol><li><strong>Calculate Net Charge:</strong> Sum the charges of all ions on the reactant side and product side (e.g., Fe<sup>2+</sup> has +2, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> has −2).</li><li><strong>Balance Mass First:</strong> Balance the atoms of all elements other than hydrogen and oxygen.</li><li><strong>Balance Charge in Acidic Solution:</strong> Add hydrogen ions (H<sup>+</sup>) to the more negative side to equalize the net charges, then add water (H<sub>2</sub>O) to balance hydrogen and oxygen atoms.</li><li><strong>Balance Charge in Basic Solution:</strong> Add hydroxide ions (OH<sup>−</sup>) to equalize charges and water (H<sub>2</sub>O) to balance atoms.</li><li><strong>Using Our Balancer:</strong> You can enter ionic charges directly (e.g., <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>), and our algebraic solver automatically constructs a charge-conservation equation row to balance both mass and charge simultaneously.</li></ol>'
      },
      {
        category: 'Basics',
        question: 'How to balance chemical equations?',
        acceptedAnswer: '<p>To balance chemical equations, follow these fundamental steps:</p><ol><li><strong>Write Unbalanced Equation:</strong> State the correct chemical formulas for all reactants on the left and products on the right separated by a reaction arrow (&rarr;).</li><li><strong>Count Atoms on Both Sides:</strong> List the number of atoms for each chemical element on the reactant side and the product side.</li><li><strong>Add Stoichiometric Coefficients:</strong> Place whole-number coefficients in front of chemical formulas to make the total atom count equal on both sides.</li><li><strong>Never Change Subscripts:</strong> Changing subscripts (like turning H<sub>2</sub>O into H<sub>2</sub>O<sub>2</sub>) alters the chemical identity of the substance. Only change coefficients.</li><li><strong>Reduce to Lowest Terms:</strong> Ensure the coefficients are the smallest possible whole numbers (coprime).</li></ol>'
      },
      {
        category: 'Step by Step',
        question: 'How to balance chemical equations step by step?',
        acceptedAnswer: '<p>To balance chemical equations step by step using the algebraic method:</p><ol><li><strong>Step 1 (Variable Assignment):</strong> Assign an algebraic variable coefficient to each reactant and product (e.g., <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O).</li><li><strong>Step 2 (Element Equations):</strong> Write an equation for each element equating left and right atoms:<ul><li>Carbon: 3<em>a</em> = <em>c</em></li><li>Hydrogen: 8<em>a</em> = 2<em>d</em> &rarr; <em>d</em> = 4<em>a</em></li><li>Oxygen: 2<em>b</em> = 2<em>c</em> + <em>d</em></li></ul></li><li><strong>Step 3 (Solve the System):</strong> Let <em>a</em> = 1. Then <em>c</em> = 3, <em>d</em> = 4, and 2<em>b</em> = 2(3) + 4 = 10, so <em>b</em> = 5.</li><li><strong>Step 4 (Clear Fractions):</strong> Multiply by the least common denominator if fractions arise. Here all numbers are integers: 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</li><li><strong>Step 5 (Final Audit):</strong> Verify that the total number of atoms on the reactant side equals the product side.</li></ol>'
      },
      {
        category: 'Scientific Law',
        question: 'Why do we balance chemical equations?',
        acceptedAnswer: '<p>We balance chemical equations to obey the <strong>Law of Conservation of Mass</strong>, formulated by Antoine Lavoisier in 1789, which establishes that matter cannot be created or destroyed in an ordinary chemical reaction. A balanced chemical equation ensures that every atom present in the starting materials is accounted for in the resulting products. Furthermore, balanced equations are mathematically required to calculate mole ratios, predict product yields, determine reactant requirements, and solve laboratory stoichiometry problems.</p>'
      },
      {
        category: 'Chemistry Rules',
        question: 'What rules are used to balance a chemical equation?',
        acceptedAnswer: '<p>The key rules used to balance chemical equations are:</p><ol><li><strong>Subscript Invariance:</strong> Never change the subscripts in a chemical formula. Only adjust the stoichiometric coefficients in front of compounds.</li><li><strong>Whole-Number Coefficients:</strong> Coefficients must be positive whole numbers in lowest terms (no fractions in final equations).</li><li><strong>Atom Conservation:</strong> The number of atoms of each element on the reactant side must equal the number of atoms on the product side.</li><li><strong>Net Charge Conservation:</strong> In ionic and oxidation-reduction reactions, the total electrical charge on the left must equal the total electrical charge on the right.</li><li><strong>Balance Elements in Compounds First:</strong> Balance elements that appear in only one reactant and one product first, leaving pure elements (like O<sub>2</sub>, H<sub>2</sub>) for last.</li><li><strong>Polyatomic Ions:</strong> If a polyatomic ion (such as SO<sub>4</sub><sup>2−</sup> or NO<sub>3</sub><sup>−</sup>) remains intact on both sides, balance it as a single unit.</li></ol>'
      },
      {
        category: 'Stoichiometry & Yield',
        question: 'What is a limiting reagent and percent yield?',
        acceptedAnswer: '<p><strong>Limiting Reagent (or Limiting Reactant):</strong> The reactant in a chemical reaction that is completely consumed first. It dictates the maximum theoretical amount of product that can be formed. Any reactant remaining unreacted after the limiting reagent is spent is the <em>excess reagent</em>.</p><p><strong>Theoretical Yield:</strong> The calculated maximum amount of product that can form based on the limiting reagent.</p><p><strong>Percent Yield:</strong> A measure of practical reaction efficiency, calculated as: <code>Percent Yield = (Actual Yield / Theoretical Yield) &times; 100%</code>. Our online stoichiometry calculator computes limiting reactants and theoretical percent yield automatically.</p>'
      }
    ]
  },

  es: {
    eyebrow: 'Preguntas Frecuentes',
    title: 'Preguntas Frecuentes sobre el Balanceo de Ecuaciones Químicas',
    subtitle: 'Respuestas claras y rigurosas a las dudas más comunes sobre balanceo, cargas eléctricas, estequiometría y reactivo limitante.',
    faqs: [
      {
        category: 'General',
        question: '¿Qué es el balanceador de ecuaciones químicas?',
        acceptedAnswer: '<p>Un <strong>balanceador de ecuaciones químicas</strong> es una herramienta en línea que determina los coeficientes estequiométricos enteros correctos para todos los reactivos y productos. Nuestro balanceador utiliza eliminación gaussiana exacta con matrices racionales para satisfacer la Ley de Conservación de la Masa y la conservación de la carga eléctrica, admitiendo fases (s, l, g, aq), pasos matemáticos y cálculos de estequiometría en tiempo real.</p>'
      },
      {
        category: 'Herramienta Gratuita',
        question: '¿Existe un balanceador de ecuaciones químicas gratuito?',
        acceptedAnswer: '<p>¡Sí! <strong>balancechemicalequation.com</strong> ofrece un balanceador de ecuaciones químicas 100% gratuito. No requiere registro, descarga ni suscripción, e incluye teclado de tabla periódica interactivo, pasos de resolución algebraica detallados y calculadora completa de estequiometría y reactivo limitante directamente en el navegador.</p>'
      },
      {
        category: 'Iónico y Redox',
        question: '¿Cómo balancear cargas en ecuaciones químicas?',
        acceptedAnswer: '<p>Para balancear cargas en reacciones iónicas o redox:</p><ol><li><strong>Calcular la Carga Neta:</strong> Suma las cargas de todos los iones en el lado de los reactivos y de los productos (ej. Fe<sup>2+</sup> tiene +2, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> tiene −2).</li><li><strong>Balancear la Masa Primero:</strong> Balancea los átomos de todos los elementos distintos de hidrógeno y oxígeno.</li><li><strong>Balancear Cargas en Medio Ácido:</strong> Agrega iones hidrógeno (H<sup>+</sup>) al lado con menor carga para igualar la carga neta, y luego agua (H<sub>2</sub>O) para balancear H y O.</li><li><strong>Balancear Cargas en Medio Básico:</strong> Agrega iones hidróxido (OH<sup>−</sup>) y agua para compensar.</li><li><strong>Con Nuestro Balanceador:</strong> Puedes escribir las cargas directamente (ej. <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>) y nuestro algoritmo resuelve masa y carga en forma simultánea.</li></ol>'
      },
      {
        category: 'Básicos',
        question: '¿Cómo balancear ecuaciones químicas?',
        acceptedAnswer: '<p>Para balancear ecuaciones químicas, sigue estos pasos esenciales:</p><ol><li><strong>Escribir la Ecuación sin Balancear:</strong> Escribe las fórmulas químicas de reactivos a la izquierda y productos a la derecha separados por una flecha (&rarr;).</li><li><strong>Contar Átomos en Ambos Lados:</strong> Haz un inventario del número de átomos de cada elemento en reactivos y productos.</li><li><strong>Añadir Coeficientes Estequiométricos:</strong> Coloca números enteros delante de las fórmulas para igualar los átomos.</li><li><strong>Nunca Cambiar Subíndices:</strong> Alterar los subíndices (como cambiar H<sub>2</sub>O por H<sub>2</sub>O<sub>2</sub>) destruye la identidad de la molécula. Solo modifica coeficientes.</li><li><strong>Simplificar a la Mínima Expresión:</strong> Comprueba que los coeficientes sean los enteros positivos más pequeños posibles (coprimos).</li></ol>'
      },
      {
        category: 'Paso a Paso',
        question: '¿Cómo balancear ecuaciones químicas paso a paso?',
        acceptedAnswer: '<p>Para balancear paso a paso mediante el método algebraico:</p><ol><li><strong>Paso 1 (Asignar Variables):</strong> Asigna una incógnita a cada compuesto (ej. <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O).</li><li><strong>Paso 2 (Ecuaciones por Elemento):</strong> Iguala átomos de reactivos y productos: Carbono: 3<em>a</em> = <em>c</em>; Hidrógeno: 8<em>a</em> = 2<em>d</em> &rarr; <em>d</em> = 4<em>a</em>; Oxígeno: 2<em>b</em> = 2<em>c</em> + <em>d</em>.</li><li><strong>Paso 3 (Resolver el Sistema):</strong> Si <em>a</em> = 1, entonces <em>c</em> = 3, <em>d</em> = 4, y 2<em>b</em> = 2(3) + 4 = 10 &rarr; <em>b</em> = 5.</li><li><strong>Paso 4 (Eliminar Fracciones):</strong> Multiplica por el común denominador si aparecen fracciones. En este caso son enteros: 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</li><li><strong>Paso 5 (Auditoría Final):</strong> Verifica el conteo total de cada átomo en ambos lados.</li></ol>'
      },
      {
        category: 'Ley Científica',
        question: '¿Por qué debemos balancear las ecuaciones químicas?',
        acceptedAnswer: '<p>Balanceamos ecuaciones químicas para cumplir con la <strong>Ley de Conservación de la Masa</strong> (formulada por Antoine Lavoisier en 1789), la cual demuestra que la materia no se crea ni se destruye en una reacción ordinaria. Una ecuación balanceada garantiza que cada átomo presente al inicio se conserve en los productos resultantes. Además, es matemáticamente obligatoria para calcular razones molares, rendimientos y resolver problemas estequiométricos.</p>'
      },
      {
        category: 'Reglas',
        question: '¿Cuáles son las reglas para balancear una ecuación química?',
        acceptedAnswer: '<p>Las reglas clave son:</p><ol><li><strong>Invarianza de Subíndices:</strong> Nunca modifiques los subíndices de una fórmula.</li><li><strong>Coeficientes Enteros:</strong> Deben ser números enteros positivos en su mínima expresión.</li><li><strong>Conservación de Átomos:</strong> El número de átomos de cada elemento a la izquierda debe ser igual al de la derecha.</li><li><strong>Conservación de Carga:</strong> En reacciones iónicas y redox, la carga neta total de reactivos debe igualar la de productos.</li><li><strong>Compuestos Primero:</strong> Balancea primero los elementos que aparecen en un solo reactivo y producto, dejando para el final las sustancias simples como O<sub>2</sub> o H<sub>2</sub>.</li></ol>'
      },
      {
        category: 'Estequiometría',
        question: '¿Qué es el reactivo limitante y el porcentaje de rendimiento?',
        acceptedAnswer: '<p><strong>Reactivo Limitante:</strong> Es el reactivo que se consume por completo primero en la reacción, determinando la cantidad máxima teórica de producto que puede formarse. El reactivo que queda sin reaccionar se denomina <em>reactivo en exceso</em>.</p><p><strong>Rendimiento Teórico:</strong> La cantidad máxima de producto calculada a partir del reactivo limitante.</p><p><strong>Porcentaje de Rendimiento:</strong> Mide la eficiencia de la reacción: <code>% Rendimiento = (Rendimiento Real / Rendimiento Teórico) &times; 100%</code>.</p>'
      }
    ]
  },

  ja: {
    eyebrow: 'よくある質問 (FAQ)',
    title: '化学反応式の係数合わせに関するよくある質問',
    subtitle: '係数合わせの手順、未定係数法、イオン反応式の電荷保存、化学量論や限界反応物に関する疑問にわかりやすく回答します。',
    faqs: [
      {
        category: '概要',
        question: '化学反応式 計算機とは何ですか？',
        acceptedAnswer: '<p><strong>化学反応式 計算機（バランサー）</strong>とは、反応物と生成物の化学量論係数（整数比）を自動的に計算し、化学反応式のバランスを合わせるオンラインツールです。有理数ガウス消去法による未定係数法アルゴリズムを採用し、質量保存の法則と電荷保存則を同時に満たします。状態記号（s, l, g, aq）の入力や双方向の化学量論計算にも対応しています。</p>'
      },
      {
        category: '無料利用',
        question: '無料で使える化学反応式の計算機はありますか？',
        acceptedAnswer: '<p>はい！<strong>balancechemicalequation.com</strong> は登録不要・完全無料のオンライン化学反応式計算機です。ブラウザ上で動作し、18族の元素周期表キーパッド、未定係数法の詳細なステップ解説、化学量論および限界反応物・収率計算機を自由にご利用いただけます。</p>'
      },
      {
        category: 'イオン・酸化還元',
        question: 'イオン反応式や酸化還元反応で電荷のバランスを合わせるには？',
        acceptedAnswer: '<p>イオン反応式や酸化還元反応で電荷を合わせる手順：</p><ol><li><strong>全電荷の計算：</strong>反応物側と生成物側の全電荷の合計を求めます（例: Fe<sup>2+</sup>は+2、Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>は-2）。</li><li><strong>水素・酸素以外の原子を合わせる：</strong>主要な元素の原子数を先に合わせます。</li><li><strong>酸性水溶液の場合：</strong>電荷を合わせるために水素イオン（H<sup>+</sup>）を加え、水素と酸素の原子数を合わせるために水（H<sub>2</sub>O）を加えます。</li><li><strong>塩基性水溶液の場合：</strong>水酸化物イオン（OH<sup>−</sup>）と水（H<sub>2</sub>O）を用いて電荷と原子数を合わせます。</li><li><strong>本計算機の機能：</strong><code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code> のように電荷を直接入力すれば、プログラムが行列の制約式として自動処理し、原子数と電荷を同時に満たす係数を算出します。</li></ol>'
      },
      {
        category: '基本手順',
        question: '化学反応式の係数を合わせる手順は？',
        acceptedAnswer: '<p>化学反応式の係数を合わせる基本手順：</p><ol><li><strong>未完成の式を書く：</strong>左側に反応物、右側に生成物の化学式を書き、矢印（&rarr;）で結びます。</li><li><strong>両辺の各原子数を数える：</strong>左右に存在する元素ごとの原子数をリストアップします。</li><li><strong>化学式の前に係数（整数）をつける：</strong>左右の原子数が一致するように係数を決定します。</li><li><strong>下付き数字は絶対に変更しない：</strong>H<sub>2</sub>O を H<sub>2</sub>O<sub>2</sub> に変えるなど下付き数字を変更してはいけません。</li><li><strong>最小の整数比にする：</strong>係数全体を最も簡単な整数比（互いに素）に約分します。</li></ol>'
      },
      {
        category: '未定係数法',
        question: '未定係数法で段階的に係数を合わせる方法は？',
        acceptedAnswer: '<p>未定係数法による解法手順：</p><ol><li><strong>ステップ1（文字係数の設定）：</strong>各物質の前に文字係数を置きます（例: <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O）。</li><li><strong>ステップ2（元素ごとの等式作成）：</strong><ul><li>炭素 (C): 3<em>a</em> = <em>c</em></li><li>水素 (H): 8<em>a</em> = 2<em>d</em> &rarr; <em>d</em> = 4<em>a</em></li><li>酸素 (O): 2<em>b</em> = 2<em>c</em> + <em>d</em></li></ul></li><li><strong>ステップ3（連立方程式を解く）：</strong><em>a</em> = 1 と仮定すると、<em>c</em> = 3、<em>d</em> = 4、2<em>b</em> = 2(3) + 4 = 10 より <em>b</em> = 5 となります。</li><li><strong>ステップ4（整数化）：</strong>係数がすべて整数なら完了です（1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O）。</li><li><strong>ステップ5（検算）：</strong>両辺の原子数が一致していることを確認します。</li></ol>'
      },
      {
        category: '化学の法則',
        question: 'なぜ化学反応式の係数を合わせなければならないのですか？',
        acceptedAnswer: '<p>1789年にアントワーヌ・ラボアジエが提唱した<strong>「質量保存の法則」</strong>に従うためです。通常の化学変化では原子が消滅したり新たに生まれたりすることはありません。バランスの取れた反応式は、実験室で必要な試薬の量（グラム）やモル比を正しく算出し、生成物の収量を予測するための不可欠な前提となります。</p>'
      },
      {
        category: 'ルール',
        question: '化学反応式を書く際の重要なルールは何ですか？',
        acceptedAnswer: '<p>主なルール：</p><ol><li><strong>下付き文字の不変性：</strong>化学式自体の下付き数字は変更できません。</li><li><strong>係数は最小の正の整数：</strong>係数は最も簡単な整数比で表記します。</li><li><strong>原子数保存：</strong>反応物側の原子数と生成物側の原子数は元素ごとに等しくなければなりません。</li><li><strong>電荷保存：</strong>イオン反応式では両辺の全電荷の和が等しくなければなりません。</li><li><strong>単体は後回し：</strong>化合物に含まれる元素を先に合わせ、O<sub>2</sub> や H<sub>2</sub> などの単体は最後に調整するとスムーズに解けます。</li></ol>'
      },
      {
        category: '化学量論・収率',
        question: '限界反応物（制限試薬）とパーセント収率とは何ですか？',
        acceptedAnswer: '<p><strong>限界反応物（制限試薬）：</strong>化学反応において最初に完全に消費されてしまう反応物のことです。生成しうる生成物の最大量（理論収量）を決定づけます。消費されずに残る反応物は<em>過剰反応物</em>と呼ばれます。</p><p><strong>理論収量：</strong>限界反応物の量から化学量論的に計算される生成物の最大予想量です。</p><p><strong>パーセント収率：</strong>実験の効率を示す指標で、<code>収率(%) = (実際の回収量 / 理論収量) &times; 100%</code> で計算されます。</p>'
      }
    ]
  },

  fr: {
    eyebrow: 'Foire Aux Questions (FAQ)',
    title: "Questions Fréquentes sur l'Équilibrage des Équations Chimiques",
    subtitle: "Des réponses claires et rigoureuses à vos interrogations sur la méthode algébrique, la conservation des charges et la stœchiométrie.",
    faqs: [
      {
        category: 'Général',
        question: "Qu'est-ce qu'un équilibreur d'équation chimique ?",
        acceptedAnswer: "<p>Un <strong>équilibreur d'équation chimique</strong> est un outil en ligne permettant de calculer les coefficients stœchiométriques entiers qui équilibrent une réaction. Notre moteur utilise l'élimination de Gauss avec des fractions rationnelles exactes pour respecter la loi de conservation de la masse et la conservation des charges électriques, avec prise en charge des états physiques (s, l, g, aq) et de la stœchiométrie en temps réel.</p>"
      },
      {
        category: 'Outil Gratuit',
        question: "Existe-t-il un équilibreur d'équations chimiques gratuit en ligne ?",
        acceptedAnswer: "<p>Oui ! <strong>balancechemicalequation.com</strong> est un outil 100 % gratuit, accessible directement depuis votre navigateur sans inscription. Il intègre un tableau périodique interactif, la dérivation mathématique pas à pas et un calculateur de réactif limitant et de rendement.</p>"
      },
      {
        category: 'Redox & Ions',
        question: "Comment équilibrer les charges dans une équation chimique ?",
        acceptedAnswer: "<p>Pour équilibrer les charges électriques dans une réaction ionique ou d'oxydoréduction :</p><ol><li><strong>Calculer la charge nette :</strong> Faites la somme des charges des ions côté réactifs et côté produits (ex. Fe<sup>2+</sup> vaut +2, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> vaut −2).</li><li><strong>Équilibrer les atomes :</strong> Équilibrez les éléments autres que l'hydrogène et l'oxygène.</li><li><strong>En milieu acide :</strong> Ajoutez des protons H<sup>+</sup> pour compenser la charge, puis de l'eau H<sub>2</sub>O pour équilibrer l'hydrogène et l'oxygène.</li><li><strong>En milieu basique :</strong> Utilisez les ions hydroxyde OH<sup>−</sup> et l'eau.</li><li><strong>Avec notre outil :</strong> Saisissez directement les charges (ex. <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>) et le solveur équilibre simultanément masse et charges.</li></ol>"
      },
      {
        category: 'Méthode',
        question: 'Comment équilibrer une équation chimique ?',
        acceptedAnswer: "<p>Pour équilibrer une réaction chimique :</p><ol><li><strong>Écrire l'équation brute :</strong> Écrivez les réactifs à gauche et les produits à droite séparés par une flèche (&rarr;).</li><li><strong>Compter les atomes :</strong> Listez le nombre d'atomes de chaque élément de chaque côté.</li><li><strong>Ajuster les coefficients :</strong> Placez des nombres entiers devant les formules pour égaliser les quantités.</li><li><strong>Ne jamais toucher aux indices :</strong> Changer H<sub>2</sub>O en H<sub>2</sub>O<sub>2</sub> modifie la molécule. Seuls les coefficients peuvent être changés.</li><li><strong>Réduire au plus petit rapport entier :</strong> Simplifiez pour obtenir les plus petits entiers premiers entre eux.</li></ol>"
      },
      {
        category: 'Algèbre',
        question: 'Comment équilibrer étape par étape avec la méthode algébrique ?',
        acceptedAnswer: "<p>Avec la méthode algébrique :</p><ol><li><strong>Attribuer des inconnues :</strong> <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O.</li><li><strong>Poser le système d'équations :</strong> Carbone : 3<em>a</em> = <em>c</em> ; Hydrogène : 8<em>a</em> = 2<em>d</em> &rarr; <em>d</em> = 4<em>a</em> ; Oxygène : 2<em>b</em> = 2<em>c</em> + <em>d</em>.</li><li><strong>Résoudre :</strong> Poser <em>a</em> = 1, d'où <em>c</em> = 3, <em>d</em> = 4 et <em>b</em> = 5.</li><li><strong>Éliminer les fractions :</strong> Tous les coefficients sont entiers : 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</li><li><strong>Contrôler :</strong> Vérifiez le compte d'atomes final.</li></ol>"
      },
      {
        category: 'Loi Fondamentale',
        question: 'Pourquoi doit-on équilibrer les équations chimiques ?',
        acceptedAnswer: "<p>Pour respecter la <strong>Loi de Conservation de la Masse</strong> formulée par Lavoisier en 1789 : aucun atome ne peut être créé ou détruit. Une équation équilibrée est indispensable pour déterminer les proportions molaires, préparer des solutions et calculer le rendement théorique au laboratoire.</p>"
      },
      {
        category: 'Règles',
        question: "Quelles sont les règles essentielles d'équilibrage ?",
        acceptedAnswer: "<p>Les règles cardinales sont :</p><ol><li><strong>Invariance des indices moléculaires :</strong> Ne jamais modifier les chiffres en indice.</li><li><strong>Coefficients entiers :</strong> Les nombres stœchiométriques doivent être des entiers positifs minimaux.</li><li><strong>Conservation atomique :</strong> Même nombre d'atomes de chaque élément des deux côtés.</li><li><strong>Conservation de charge :</strong> Même charge électrique totale à gauche et à droite.</li><li><strong>Corps simples en dernier :</strong> Équilibrez O<sub>2</sub> ou H<sub>2</sub> à la fin.</li></ol>"
      },
      {
        category: 'Stœchiométrie',
        question: "Qu'est-ce qu'un réactif limitant et le rendement ?",
        acceptedAnswer: "<p><strong>Réactif Limitant :</strong> Le réactif entièrement consommé en premier, qui plafonne la quantité de produit pouvant être formée. Le réactif restant est le <em>réactif en excès</em>.</p><p><strong>Rendement Théorique :</strong> La quantité maximale calculée de produit.</p><p><strong>Pourcentage de Rendement :</strong> <code>Rendement (%) = (Masse réelle / Masse théorique) &times; 100%</code>.</p>"
      }
    ]
  },

  de: {
    eyebrow: 'Häufig gestellte Fragen (FAQ)',
    title: 'Häufig gestellte Fragen zum Ausgleichen chemischer Gleichungen',
    subtitle: 'Präzise Antworten zu Reaktionsgleichungen, Massenerhaltung, algebraischem Ausgleichen und Stöchiometrie.',
    faqs: [
      {
        category: 'Überblick',
        question: 'Was ist der chemische Gleichungs-Rechner?',
        acceptedAnswer: '<p>Ein <strong>chemischer Gleichungs-Rechner</strong> ist ein Online-Werkzeug, das stöchiometrische Koeffizienten ermittelt, um Reaktionsgleichungen auszugleichen. Unser Rechner nutzt exakte rationale Gauß-Elimination, um Massenerhaltung und elektrische Ladungserhaltung zeitgleich zu erfüllen, inklusive Aggregatzuständen und Stöchiometrie-Berechnungen.</p>'
      },
      {
        category: 'Kostenlose Nutzung',
        question: 'Gibt es einen kostenlosen Online-Rechner für chemische Gleichungen?',
        acceptedAnswer: '<p>Ja! <strong>balancechemicalequation.com</strong> ist zu 100 % kostenlos und ohne Registrierung nutzbar. Er enthält ein interaktives 18-Spalten-Periodensystem, Schritt-für-Schritt-Lösungswege sowie Berechnungen zu limitierenden Reagenzien und Ausbeuten.</p>'
      },
      {
        category: 'Ladungen & Redox',
        question: 'Wie gleicht man Ladungen in chemischen Gleichungen aus?',
        acceptedAnswer: '<p>Zum Ausgleichen von Ionen- und Redoxgleichungen:</p><ol><li><strong>Gesamtladung berechnen:</strong> Summieren Sie die Ionenladungen auf Edukt- und Produktseite.</li><li><strong>Atome ausgleichen:</strong> Gleichen Sie alle Elemente außer H und O aus.</li><li><strong>Im sauren Milieu:</strong> Protonen (H<sup>+</sup>) ergänzen, um Ladungen auszugleichen, danach Wasser (H<sub>2</sub>O) für die H- und O-Atome.</li><li><strong>Im basischen Milieu:</strong> Hydroxidionen (OH<sup>−</sup>) und Wasser verwenden.</li><li><strong>Mit unserem Tool:</strong> Ladungen direkt eingeben (z. B. <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>), der Rechner löst Atom- und Ladungsbilanz zeitgleich.</li></ol>'
      },
      {
        category: 'Grundlagen',
        question: 'Wie gleicht man chemische Gleichungen aus?',
        acceptedAnswer: '<p>Grundschritte zum Ausgleichen:</p><ol><li><strong>Ungleichung notieren:</strong> Edukte links, Produkte rechts mit Reaktionspfeil (&rarr;).</li><li><strong>Atomanzahl zählen:</strong> Atome jedes Elements auf beiden Seiten erfassen.</li><li><strong>Stöchiometrische Vorfaktoren setzen:</strong> Ganze Zahlen vor die Formeln schreiben.</li><li><strong>Niemals Tiefzahlen ändern:</strong> Indizes dürfen nicht verändert werden.</li><li><strong>Auf kleinste ganze Zahlen kürzen:</strong> Das kleinste ganzzahlige Verhältnis wählen.</li></ol>'
      },
      {
        category: 'Schritt für Schritt',
        question: 'Wie funktioniert das algebraische Ausgleichen Schritt für Schritt?',
        acceptedAnswer: '<p>Algebraisches Verfahren:</p><ol><li><strong>Variablen zuweisen:</strong> <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O.</li><li><strong>Elementgleichungen aufstellen:</strong> C: 3<em>a</em> = <em>c</em>; H: 8<em>a</em> = 2<em>d</em>; O: 2<em>b</em> = 2<em>c</em> + <em>d</em>.</li><li><strong>Gleichungssystem lösen:</strong> Setze <em>a</em> = 1 &rarr; <em>c</em> = 3, <em>d</em> = 4, <em>b</em> = 5.</li><li><strong>Ganzzahligkeit prüfen:</strong> 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</li><li><strong>Kontrollieren:</strong> Überprüfen der Atombilanz.</li></ol>'
      },
      {
        category: 'Naturgesetz',
        question: 'Warum müssen chemische Gleichungen ausgeglichen werden?',
        acceptedAnswer: '<p>Um das <strong>Gesetz von der Erhaltung der Masse</strong> (Lavoisier 1789) zu befolgen: Atome können weder entstehen noch vergehen. Ausgeglichene Gleichungen sind zwingende Voraussetzung für quantitative Molberechnungen im Labor.</p>'
      },
      {
        category: 'Regeln',
        question: 'Welche Regeln gelten beim Aufstellen von Reaktionsgleichungen?',
        acceptedAnswer: '<p>Wichtige Regeln:</p><ol><li><strong>Index-Unveränderlichkeit:</strong> Formel-Tiefzahlen bleiben fix.</li><li><strong>Ganzzahlige Koeffizienten:</strong> Kleinste teilerfremde positive Zahlen.</li><li><strong>Atomerhaltung:</strong> Anzahl jedes Elements links = rechts.</li><li><strong>Ladungserhaltung:</strong> Gesamtladung links = rechts.</li><li><strong>Elementare Stoffe zuletzt:</strong> O<sub>2</sub> oder H<sub>2</sub> erst am Schluss ausgleichen.</li></ol>'
      },
      {
        category: 'Stöchiometrie',
        question: 'Was versteht man unter limitierendem Reagenz und Ausbeute?',
        acceptedAnswer: '<p><strong>Limitierendes Reagenz:</strong> Der Ausgangsstoff, der zuerst vollständig verbraucht wird und die maximale Produktmenge (theoretische Ausbeute) festlegt. Nicht umgesetzte Reste sind <em>Überschussreagenzien</em>.</p><p><strong>Prozentuale Ausbeute:</strong> <code>Ausbeute (%) = (Praktische Ausbeute / Theoretische Ausbeute) &times; 100%</code>.</p>'
      }
    ]
  },

  pt: {
    eyebrow: 'Perguntas Frequentes (FAQ)',
    title: 'Perguntas Frequentes sobre Balanceamento de Equações Químicas',
    subtitle: 'Respostas detalhadas sobre balanceamento, conservação de cargas, método algébrico e estequiometria.',
    faqs: [
      {
        category: 'Visão Geral',
        question: 'O que é um balanceador de equações químicas?',
        acceptedAnswer: '<p>Um <strong>balanceador de equações químicas</strong> é uma ferramenta online que calcula os coeficientes inteiros necessários para igualar o número de átomos de reagentes e produtos. Nosso sistema utiliza eliminação gaussiana exata para assegurar a Lei de Conservação da Massa e da carga elétrica, com suporte a estados físicos (s, l, g, aq) e cálculos de estequiometria em tempo real.</p>'
      },
      {
        category: 'Gratuito',
        question: 'Existe um balanceador de equações químicas gratuito online?',
        acceptedAnswer: '<p>Sim! O <strong>balancechemicalequation.com</strong> é 100% gratuito e não exige cadastro. Inclui teclado interativo com a tabela periódica completa, passos de resolução algébrica e calculadora de reagente limitante diretamente no navegador.</p>'
      },
      {
        category: 'Iônico & Redox',
        question: 'Como balancear cargas em equações químicas?',
        acceptedAnswer: '<p>Para balancear cargas em equações iônicas ou redox:</p><ol><li><strong>Calcular a carga líquida:</strong> Some as cargas de todos os íons nos reagentes e produtos.</li><li><strong>Balancear os átomos principais:</strong> Acerte todos os elementos com exceção de H e O.</li><li><strong>Meio Ácido:</strong> Adicione H<sup>+</sup> para igualar as cargas e H<sub>2</sub>O para os átomos de H e O.</li><li><strong>Meio Básico:</strong> Utilize íons hidróxido OH<sup>−</sup> e água.</li><li><strong>No nosso balanceador:</strong> Insira as cargas (ex: <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>) para balanceamento atômico e elétrico simultâneo.</li></ol>'
      },
      {
        category: 'Princípios',
        question: 'Como balancear equações químicas?',
        acceptedAnswer: '<p>Passos fundamentais:</p><ol><li><strong>Escrever a equação não balanceada:</strong> Reagentes à esquerda e produtos à direita (&rarr;).</li><li><strong>Contar os átomos:</strong> Liste a quantidade de cada elemento dos dois lados.</li><li><strong>Ajustar os coeficientes estequiométricos:</strong> Coloque números inteiros antes das fórmulas.</li><li><strong>Nunca altere os números subscritos:</strong> Alterar H<sub>2</sub>O para H<sub>2</sub>O<sub>2</sub> muda a substância.</li><li><strong>Simplificar para os menores inteiros:</strong> Os coeficientes finais devem ser primos entre si.</li></ol>'
      },
      {
        category: 'Passo a Passo',
        question: 'Como balancear equações químicas passo a passo pelo método algébrico?',
        acceptedAnswer: '<p>Método algébrico:</p><ol><li><strong>Atribuir incógnitas:</strong> <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O.</li><li><strong>Equações por elemento:</strong> C: 3<em>a</em> = <em>c</em>; H: 8<em>a</em> = 2<em>d</em>; O: 2<em>b</em> = 2<em>c</em> + <em>d</em>.</li><li><strong>Resolver o sistema:</strong> Se <em>a</em> = 1, então <em>c</em> = 3, <em>d</em> = 4 e <em>b</em> = 5.</li><li><strong>Eliminar frações:</strong> Todos são inteiros: 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</li><li><strong>Auditoria final:</strong> Verifique o número de átomos de cada espécie.</li></ol>'
      },
      {
        category: 'Lei Científica',
        question: 'Por que devemos balancear equações químicas?',
        acceptedAnswer: '<p>Para obedecer à <strong>Lei da Conservação da Massa</strong> (Lavoisier, 1789): a matéria não se cria nem se destrói em reações ordinárias. Uma equação balanceada é matematicamente indispensável para calcular proporções em mol e prever o rendimento de produtos.</p>'
      },
      {
        category: 'Regras',
        question: 'Quais regras devem ser seguidas para balancear equações?',
        acceptedAnswer: '<p>Regras principais:</p><ol><li><strong>Invariância dos subscritos:</strong> Não mude os índices atômicos.</li><li><strong>Coeficientes inteiros mínimos:</strong> Devem ser inteiros positivos na proporção mais simples.</li><li><strong>Conservação atômica:</strong> Mesma quantidade de cada elemento em ambos os lados.</li><li><strong>Conservação de carga:</strong> Carga elétrica total mantida.</li><li><strong>Substâncias simples por último:</strong> Deixe O<sub>2</sub> ou H<sub>2</sub> para a etapa final.</li></ol>'
      },
      {
        category: 'Estequiometria',
        question: 'O que é reagente limitante e rendimento percentual?',
        acceptedAnswer: '<p><strong>Reagente Limitante:</strong> O reagente totalmente consumido primeiro, limitando a quantidade teórica máxima de produto. O restante é o <em>reagente em excesso</em>.</p><p><strong>Rendimento Percentual:</strong> <code>Rendimento (%) = (Rendimento Real / Rendimento Teórico) &times; 100%</code>.</p>'
      }
    ]
  },

  ko: {
    eyebrow: '자주 묻는 질문 (FAQ)',
    title: '화학 반응식 계수 맞추기에 대해 자주 묻는 질문',
    subtitle: '미정계수법 원리, 이온 반응식 전하 균형, 화학양론 및 한계 반응물에 대한 명쾌한 답변을 확인하세요.',
    faqs: [
      {
        category: '개요',
        question: '화학 반응식 계산기란 무엇인가요?',
        acceptedAnswer: '<p><strong>화학 반응식 계산기</strong>는 화학 반응물과 생성물의 원자 수와 전하를 보존하기 위해 화학양론 정수 계수를 자동으로 구해주는 온라인 도구입니다. 본 계산기는 유리수 가우스 소거법을 기반으로 미정계수법을 완벽히 구현하여 상태 기호(s, l, g, aq) 및 실시간 화학양론 연동을 지원합니다.</p>'
      },
      {
        category: '무료 도구',
        question: '무료로 이용할 수 있는 화학 반응식 계산기가 있나요?',
        acceptedAnswer: '<p>네! <strong>balancechemicalequation.com</strong>은 별도의 회원가입이나 프로그램 설치 없이 100% 무료로 제공됩니다. 18족 인터랙티브 주기율표 키패드, 단계별 수학적 풀이 과정, 실시간 한계 반응물 및 수득률 계산기까지 웹 브라우저에서 즉시 이용할 수 있습니다.</p>'
      },
      {
        category: '이온 & 산화환원',
        question: '이온 반응식에서 전하 균형은 어떻게 맞추나요?',
        acceptedAnswer: '<p>이온 반응식 및 산화 환원 반응에서 전하 균형을 맞추는 방법:</p><ol><li><strong>총 전하량 계산:</strong> 반응물 쪽과 생성물 쪽 이온들의 전하 총합을 각각 계산합니다.</li><li><strong>질량 보존 우선:</strong> H와 O를 제외한 주요 원소의 원자 수를 먼저 맞춥니다.</li><li><strong>산성 용액:</strong> 전하를 맞추기 위해 양쪽에 H<sup>+</sup> 이온을 더하고, H와 O를 맞추기 위해 H<sub>2</sub>O를 추가합니다.</li><li><strong>염기성 용액:</strong> OH<sup>−</sup> 이온과 물 분자를 사용하여 전하와 원자 수를 맞춥니다.</li><li><strong>계산기 기능 활용:</strong> <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>와 같이 이온 전하를 직접 입력하면 엔진이 전하 보존 제약식을 행렬에 자동 추가하여 동시에 풀어냅니다.</li></ol>'
      },
      {
        category: '기본 원리',
        question: '화학 반응식의 계수는 어떻게 맞추나요?',
        acceptedAnswer: '<p>화학 반응식 계수 맞추기 기본 단계:</p><ol><li><strong>미완성 식 작성:</strong> 반응물은 왼쪽에, 생성물은 오른쪽에 화살표(&rarr;)로 연결합니다.</li><li><strong>원자 수 확인:</strong> 양변에 있는 각 원소의 원자 수를 셉니다.</li><li><strong>화학식 앞에 계수 추가:</strong> 양변의 원자 수가 같아지도록 정수 계수를 붙입니다.</li><li><strong>아래첨자 수정 금지:</strong> H<sub>2</sub>O를 H<sub>2</sub>O<sub>2</sub>로 바꾸는 등 화학식 자체를 변경해선 안 됩니다.</li><li><strong>가장 간단한 정수비로 약분:</strong> 최종 계수들이 서로소인 가장 작은 정수비가 되도록 합니다.</li></ol>'
      },
      {
        category: '미정계수법',
        question: '미정계수법으로 단계별 계수 맞추는 방법은?',
        acceptedAnswer: '<p>미정계수법 풀이 단계:</p><ol><li><strong>문자 계수 배정:</strong> <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O</li><li><strong>원소별 보존식 구성:</strong> 탄소: 3<em>a</em> = <em>c</em>; 수소: 8<em>a</em> = 2<em>d</em>; 산소: 2<em>b</em> = 2<em>c</em> + <em>d</em></li><li><strong>방정식 풀기:</strong> <em>a</em> = 1로 두면 <em>c</em> = 3, <em>d</em> = 4, <em>b</em> = 5가 도출됩니다.</li><li><strong>정수 확인:</strong> 모든 계수가 정수이므로 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O가 됩니다.</li><li><strong>최종 검산:</strong> 양변의 원자 수가 일치하는지 확인합니다.</li></ol>'
      },
      {
        category: '과학 법칙',
        question: '화학 반응식의 계수를 맞춰야 하는 이유는 무엇인가요?',
        acceptedAnswer: '<p>1789년 라부아지에가 밝혀낸 <strong>질량 보존 법칙</strong>에 따라 화학 반응 전후에 원자가 소멸되거나 새로 생기지 않기 때문입니다. 계수를 맞춘 반응식은 실험실에서 필요한 물질의 양(그램 및 몰)을 계산하고 반응 수득률을 예측하는 데 필수적입니다.</p>'
      },
      {
        category: '규칙',
        question: '화학 반응식을 완성할 때 지켜야 할 규칙은 무엇인가요?',
        acceptedAnswer: '<p>핵심 규칙:</p><ol><li><strong>아래첨자 불변:</strong> 분자식의 아래첨자는 바꿀 수 없습니다.</li><li><strong>가장 간단한 정수 계수:</strong> 양의 정수로 나타내며 분수가 없어야 합니다.</li><li><strong>원자 수 보존:</strong> 모든 원소의 원자 수가 양변에서 같아야 합니다.</li><li><strong>전하 보존:</strong> 알짜 전하 총량이 양변에서 같아야 합니다.</li><li><strong>홑원소 물질은 나중에:</strong> O<sub>2</sub>나 H<sub>2</sub> 같은 단체는 가장 마지막에 맞추는 것이 편리합니다.</li></ol>'
      },
      {
        category: '화학양론',
        question: '한계 반응물과 수득률이란 무엇인가요?',
        acceptedAnswer: '<p><strong>한계 반응물:</strong> 반응 과정에서 가장 먼저 완전히 소모되어 생성물의 최대 생성량(이론적 수득량)을 결정짓는 반응물입니다. 반응 후 남은 물질은 <em>초과 반응물</em>입니다.</p><p><strong>백분율 수득률:</strong> <code>수득률(%) = (실제 수득량 / 이론적 수득량) &times; 100%</code>로 계산됩니다.</p>'
      }
    ]
  },

  it: {
    eyebrow: 'Domande Frequenti (FAQ)',
    title: 'Domande Frequenti sul Bilanciamento delle Equazioni Chimiche',
    subtitle: 'Risposte dettagliate e affidabili su conservazione della massa, metodo algebrico, reazioni redox e stechiometria.',
    faqs: [
      {
        category: 'Panoramica',
        question: "Cos'è il bilanciatore di equazioni chimiche?",
        acceptedAnswer: "<p>Un <strong>bilanciatore di equazioni chimiche</strong> è uno strumento online che calcola i corretti coefficienti stechiometrici interi per reagenti e prodotti. Utilizza l'algoritmo di eliminazione gaussiana esatta con numeri razionali per garantire la conservazione della massa e della carica elettrica, supportando stati fisici (s, l, g, aq) e stechiometria in tempo reale.</p>"
      },
      {
        category: 'Gratuito',
        question: "Esiste un bilanciatore di equazioni chimiche gratuito online?",
        acceptedAnswer: "<p>Sì! <strong>balancechemicalequation.com</strong> è utilizzabile al 100% gratuitamente senza registrazione. Include la tavola periodica a 18 colonne, passaggi matematici dettagliati e calcolatore del reagente limitante direttamente nel browser.</p>"
      },
      {
        category: 'Ioni & Redox',
        question: 'Come bilanciare le cariche nelle equazioni chimiche?',
        acceptedAnswer: "<p>Per bilanciare le cariche in reazioni ioniche e redox:</p><ol><li><strong>Calcolare la carica netta:</strong> Somma le cariche degli ioni nei reagenti e nei prodotti.</li><li><strong>Bilanciare gli atomi principali:</strong> Bilancia tutti gli elementi tranne H e O.</li><li><strong>In ambiente acido:</strong> Aggiungi H<sup>+</sup> per pareggiare le cariche e H<sub>2</sub>O per gli atomi di idrogeno e ossigeno.</li><li><strong>In ambiente basico:</strong> Utilizza ioni idrossido OH<sup>−</sup> e acqua.</li><li><strong>Con il nostro calcolatore:</strong> Inserisci direttamente le cariche (es. <code>Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O</code>) per bilanciare massa e carica simultaneamente.</li></ol>"
      },
      {
        category: 'Basi',
        question: 'Come si bilanciano le equazioni chimiche?',
        acceptedAnswer: "<p>Passaggi fondamentali per il bilanciamento:</p><ol><li><strong>Scrivere l'equazione non bilanciata:</strong> Reagenti a sinistra e prodotti a destra separati dalla freccia (&rarr;).</li><li><strong>Contare gli atomi:</strong> Fai l'inventario degli atomi di ciascun elemento su entrambi i lati.</li><li><strong>Aggiungere i coefficienti:</strong> Scrivi numeri interi davanti alle formule.</li><li><strong>Non modificare mai i pedici:</strong> Cambiare H<sub>2</sub>O in H<sub>2</sub>O<sub>2</sub> altera la sostanza.</li><li><strong>Ridurre ai minimi termini:</strong> Assicurati che i coefficienti siano i minimi interi positivi (coprimi).</li></ol>"
      },
      {
        category: 'Passo dopo Passo',
        question: 'Come bilanciare passo dopo passo con il metodo algebrico?',
        acceptedAnswer: "<p>Metodo algebrico:</p><ol><li><strong>Assegnare variabili:</strong> <em>a</em>C<sub>3</sub>H<sub>8</sub> + <em>b</em>O<sub>2</sub> &rarr; <em>c</em>CO<sub>2</sub> + <em>d</em>H<sub>2</sub>O.</li><li><strong>Equazioni per elemento:</strong> C: 3<em>a</em> = <em>c</em>; H: 8<em>a</em> = 2<em>d</em>; O: 2<em>b</em> = 2<em>c</em> + <em>d</em>.</li><li><strong>Risolvere il sistema:</strong> Ponendo <em>a</em> = 1, si ottiene <em>c</em> = 3, <em>d</em> = 4 e <em>b</em> = 5.</li><li><strong>Eliminare frazioni:</strong> Tutti i valori sono interi: 1 C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</li><li><strong>Controllo finale:</strong> Verifica il conteggio degli atomi.</li></ol>"
      },
      {
        category: 'Legge Scientifica',
        question: 'Perché dobbiamo bilanciare le equazioni chimiche?',
        acceptedAnswer: "<p>Per rispettare la <strong>Legge di Conservazione della Massa</strong> di Lavoisier (1789): la materia non si crea né si distrugge. Un'equazione bilanciata è indispensabile per calcolare i rapporti in moli e le quantità stechiometriche in laboratorio.</p>"
      },
      {
        category: 'Regole',
        question: 'Quali sono le regole per bilanciare una reazione chimica?',
        acceptedAnswer: "<p>Regole fondamentali:</p><ol><li><strong>Invarianza dei pedici:</strong> Non toccare i pedici delle formule.</li><li><strong>Coefficienti interi minimi:</strong> Numeri interi positivi ridotti ai minimi termini.</li><li><strong>Conservazione atomica:</strong> Stesso numero di atomi per elemento a sinistra e a destra.</li><li><strong>Conservazione della carica:</strong> Carica elettrica totale conservata.</li><li><strong>Sostanze elementari per ultime:</strong> Lascia O<sub>2</sub> o H<sub>2</sub> come ultimo passaggio.</li></ol>"
      },
      {
        category: 'Stechiometria',
        question: "Cos'è il reagente limitante e la resa percentuale?",
        acceptedAnswer: "<p><strong>Reagente Limitante:</strong> Il reagente che si esaurisce per primo e determina la massima quantità teorica di prodotto ottenibile. La sostanza restante è il <em>reagente in eccesso</em>.</p><p><strong>Resa Percentuale:</strong> <code>Resa (%) = (Resa Effettiva / Resa Teorica) &times; 100%</code>.</p>"
      }
    ]
  }
};

export function getFaqJsonLd(lang: Lang) {
  const section = faqTranslations[lang] || faqTranslations.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': section.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.acceptedAnswer,
      },
    })),
  };
}


import type { Lang } from './ui';

export interface GuideSection {
  number: string;
  tag: string;
  title: string;
  paragraphs: string[];
  callouts?: { title: string; desc: string }[];
  phaseTable?: { phase: string; symbol: string; desc: string; example: string }[];
}

export interface LocalizedGuide {
  eyebrow: string;
  mainTitle: string;
  intro: string;
  sections: GuideSection[];
}

export const guideTranslations: Record<Lang, LocalizedGuide> = {
  en: {
    eyebrow: 'Comprehensive Chemistry Guide',
    mainTitle: 'Mastering Chemical Reactions: The Ultimate Guide to Our Chemical Equation Balancer',
    intro: 'Chemical reactions represent the foundational language of chemistry, detailing how atoms rearrange to transform reactant species into new chemical products. Whether you are a high school chemistry student encountering stoichiometry for the first time, an AP or IB Chemistry student working through multi-step redox reactions, or a university researcher preparing quantitative solutions in the laboratory, having access to an accurate and versatile chemical equation balancer is essential. Our online chemical equation balancer combines exact rational linear algebra with real-time stoichiometric modeling to provide immediate, error-free reaction analysis.',
    sections: [
      {
        number: '01',
        tag: 'Fundamental Science',
        title: 'Why You Must Balance Chemical Equations: The Law of Conservation of Mass',
        paragraphs: [
          'At the center of every chemical transformation lies the Law of Conservation of Mass, first definitively articulated by French chemist Antoine Lavoisier in 1789. The law dictates that in any closed system, matter can neither be created nor destroyed through chemical processes. Consequently, the total mass of the reactants must strictly equal the total mass of the products, which requires that the total quantity of each chemical element\'s atoms remains identical on both sides of the reaction arrow.',
          'When writing unbalanced chemical equations, formulas reflect the actual molecular stoichiometry of individual compounds, defined by subscripts such as H2O, Fe2O3, or Ca(OH)2. A critical rule in chemistry is that you can never change the subscripts of a chemical formula to balance an equation, as altering subscripts modifies the fundamental chemical identity of the substance. Instead, we adjust stoichiometric coefficients—the whole numbers placed in front of chemical formulas. This is where an intuitive equation balancer becomes invaluable, allowing users to balance chemical equations with mathematical certainty rather than tedious trial-and-error inspection.'
        ],
        callouts: [
          {
            title: 'Subscripts are Invariant',
            desc: 'Changing H2O to H2O2 transforms harmless water into toxic hydrogen peroxide. Never alter subscripts in chemical formulas.'
          },
          {
            title: 'Coefficients Scale Moles',
            desc: 'Stoichiometric coefficients (e.g. 2H2 + O2 → 2H2O) preserve compound identity while equating atoms and moles.'
          }
        ]
      },
      {
        number: '02',
        tag: 'States of Matter',
        title: 'Incorporating Physical Phases: (s), (l), (g), and (aq)',
        paragraphs: [
          'A complete chemical equation conveys not only atom stoichiometry but also the physical state of each participating compound under reaction conditions. Specifying states of matter helps chemists predict whether a precipitate forms, a gas is liberated, or a phase separation occurs.',
          'Our chemical equation balancer fully supports all standard IUPAC physical state notations. You can append phase indicators directly to formulas, such as NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq).'
        ],
        phaseTable: [
          { phase: 'Solid', symbol: '(s)', desc: 'Precipitates, metals, minerals, ionic crystals', example: 'CaCO3(s)' },
          { phase: 'Liquid', symbol: '(l)', desc: 'Pure liquids, elemental mercury, liquid water', example: 'H2O(l), Br2(l)' },
          { phase: 'Gas', symbol: '(g)', desc: 'Vapors, atmospheric gases, gaseous products', example: 'CO2(g), O2(g)' },
          { phase: 'Aqueous', symbol: '(aq)', desc: 'Species dissolved in water solution (hydrated ions)', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: 'Mathematical Rigor',
        title: 'The Algebraic Method: Gaussian Elimination and Rational Matrices',
        paragraphs: [
          'While the inspection method works well for simple two-component reactions, complex reactions (such as redox reactions in acidic or basic solutions, and industrial cracking) can take dozens of minutes through guesswork. Our balancing engine uses the algebraic method powered by exact rational Gaussian elimination.',
          'Each element generates a conservation equation. For example, for a reaction aA + bB -> cC + dD, conservation of each element produces a row in a homogeneous linear system A·x = 0. By computing the nullspace basis using exact integer fraction arithmetic, our engine avoids floating-point inaccuracies and immediately yields the smallest positive coprime integer coefficients.'
        ]
      },
      {
        number: '04',
        tag: 'Advanced Chemistry',
        title: 'Balancing Redox and Net Ionic Reactions with Electrical Charges',
        paragraphs: [
          'In oxidation-reduction (redox) chemistry and electrochemistry, mass conservation alone is insufficient: total electrical charge must also be strictly conserved. In a balanced net ionic equation, the sum of charges on the reactant side must equal the sum of charges on the product side.',
          'You can enter superscripts and charges directly into our balancer (e.g. Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). The engine automatically treats net charge as an additional conservation constraint, ensuring both atomic balance and electrochemical charge balance simultaneously.'
        ]
      },
      {
        number: '05',
        tag: 'Quantitative Chemistry',
        title: 'From Balanced Equations to Stoichiometry, Limiting Reagents, and Percent Yield',
        paragraphs: [
          'A balanced chemical equation serves as the quantitative recipe for laboratory preparation. The stoichiometric coefficients represent molar ratios, which connect macroscopic laboratory measurements (mass in grams) with microscopic molecular quantities (moles and molecules).',
          'Our interactive Stoichiometry Matrix automatically links equation coefficients with IUPAC standard atomic weights. When you enter a mass or mole value for any compound, all other reactants and products update instantly. The Limiting Reagent calculator compares stoichiometric ratios against available quantities, identifying the limiting reactant, theoretical yield, and excess unreacted reagents.'
        ]
      },
      {
        number: '06',
        tag: 'Real-World Impact',
        title: 'Real-World Applications: Industry, Environment, and Medicine',
        paragraphs: [
          'Balanced chemical equations are indispensable across modern scientific disciplines. In chemical engineering, the Haber-Bosch synthesis of ammonia (N2 + 3H2 -> 2NH3) requires precise stoichiometric balancing to feed billions of people through nitrogen fertilizer production.',
          'In environmental science, balancing equations for combustion (CH4 + 2O2 -> CO2 + 2H2O) and atmospheric acid rain formation (SO3 + H2O -> H2SO4) allows climate scientists to quantify greenhouse gas emissions and calculate environmental impact accurately.'
        ]
      }
    ]
  },

  es: {
    eyebrow: 'Guía Completa de Química',
    mainTitle: 'Dominando las Reacciones Químicas: Guía Definitiva del Balanceador de Ecuaciones',
    intro: 'Las reacciones químicas representan el lenguaje fundamental de la química, describiendo cómo se reorganizan los átomos para transformar reactivos en nuevos productos químicos. Ya seas un estudiante de secundaria aprendiendo estequiometría por primera vez, un alumno de química avanzada resolviendo reacciones redox complejas, o un investigador preparando soluciones cuantitativas en el laboratorio, contar con un balanceador de ecuaciones químicas preciso y versátil es indispensable. Nuestra herramienta combina álgebra lineal exacta con modelado estequiométrico en tiempo real para ofrecer un análisis inmediato y sin errores.',
    sections: [
      {
        number: '01',
        tag: 'Ciencia Fundamental',
        title: 'Por Qué Debemos Balancear Ecuaciones Químicas: La Ley de Conservación de la Masa',
        paragraphs: [
          'En el centro de toda transformación química se encuentra la Ley de Conservación de la Masa, enunciada por el químico francés Antoine Lavoisier en 1789. Esta ley establece que en cualquier sistema cerrado, la materia no se crea ni se destruye mediante procesos químicos ordinarios. Por lo tanto, la masa total de los reactivos debe ser exactamente igual a la masa total de los productos, lo que exige que el número total de átomos de cada elemento químico sea idéntico en ambos lados de la flecha de reacción.',
          'Al escribir ecuaciones sin balancear, las fórmulas moleculares se expresan mediante subíndices fijos (como H2O, Fe2O3 o Ca(OH)2). Una regla inquebrantable de la química es que nunca se deben cambiar los subíndices de una fórmula química para balancear una reacción, ya que alterar los subíndices cambia la identidad misma de la sustancia. En su lugar, ajustamos los coeficientes estequiométricos (los números enteros colocados delante de cada fórmula). Nuestro balanceador de ecuaciones en línea permite balancear reacciones con absoluta certeza matemática en lugar de depender del tedioso método de tanteo.'
        ],
        callouts: [
          {
            title: 'Los Subíndices son Invariables',
            desc: 'Cambiar H2O a H2O2 transforma agua inocua en peróxido de hidrógeno tóxico. Jamás modifiques los subíndices de una fórmula.'
          },
          {
            title: 'Los Coeficientes Escalan Moles',
            desc: 'Los coeficientes estequiométricos (ej. 2H2 + O2 → 2H2O) conservan las especies químicas e igualan átomos y moles.'
          }
        ]
      },
      {
        number: '02',
        tag: 'Estados de Agregación',
        title: 'Incorporación de Fases Físicas: (s), (l), (g) y (aq)',
        paragraphs: [
          'Una ecuación química completa indica no solo la relación atómica sino también el estado físico de cada sustancia en las condiciones de reacción. Especificar los estados de la materia ayuda a predecir la formación de precipitados sólidos, desprendimiento de gases o disoluciones acuosas.',
          'Nuestro balanceador de ecuaciones admite plenamente la notación estándar de fases IUPAC. Puedes agregar indicadores de fase directamente a las fórmulas, por ejemplo: NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq).'
        ],
        phaseTable: [
          { phase: 'Sólido', symbol: '(s)', desc: 'Precipitados, metales, cristales iónicos, sales insolubles', example: 'CaCO3(s)' },
          { phase: 'Líquido', symbol: '(l)', desc: 'Líquidos puros, mercurio elemental, agua líquida', example: 'H2O(l), Br2(l)' },
          { phase: 'Gas', symbol: '(g)', desc: 'Vapores, gases atmosféricos, productos gaseosos', example: 'CO2(g), O2(g)' },
          { phase: 'Acuoso', symbol: '(aq)', desc: 'Sustancias disueltas en agua (iones hidratados)', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: 'Rigor Matemático',
        title: 'El Método Algebraico: Eliminación Gaussiana y Matrices Racionales',
        paragraphs: [
          'Aunque el método de tanteo (inspección) funciona para reacciones muy simples, las reacciones complejas (como procesos redox en medio ácido o básico, síntesis industrial o combustión de hidrocarburos pesados) pueden llevar mucho tiempo mediante ensayo y error. Nuestro motor utiliza el método algebraico respaldado por eliminación gaussiana exacta con fracciones racionales.',
          'Cada elemento químico genera una ecuación de conservación lineal. Para una reacción aA + bB -> cC + dD, el balance de cada elemento forma una fila en una matriz homogénea A·x = 0. Al calcular la base del espacio nulo mediante aritmética de enteros exactos, nuestro software evita errores de redondeo decimal y entrega de inmediato los coeficientes enteros coprimos más pequeños posibles.'
        ]
      },
      {
        number: '04',
        tag: 'Química Avanzada',
        title: 'Balanceo de Reacciones Redox e Iónicas con Cargas Eléctricas',
        paragraphs: [
          'En reacciones de oxidorreducción (redox) y electroquímica, la conservación de la masa no es suficiente: la carga eléctrica neta también debe conservarse rigurosamente. En una ecuación iónica neta balanceada, la suma algebraica de las cargas de los reactivos debe ser idéntica a la suma de las cargas de los productos.',
          'Puedes ingresar superíndices y cargas directamente en nuestro balanceador (ej. Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). El motor incorpora la carga neta como una fila de restricción adicional, resolviendo simultáneamente el balance de átomos y el balance electroquímico.'
        ]
      },
      {
        number: '05',
        tag: 'Química Cuantitativa',
        title: 'De la Ecuación Balanceada a la Estequiometría, Reactivo Limitante y Rendimiento',
        paragraphs: [
          'Una ecuación química balanceada es la receta cuantitativa del laboratorio. Los coeficientes estequiométricos representan razones molares, las cuales conectan las masas medibles en la balanza (gramos) con el número microscópico de partículas (moles y moléculas).',
          'Nuestra matriz interactiva de estequiometría vincula automáticamente los coeficientes con los pesos atómicos estándar de la IUPAC. Al escribir la masa o moles de cualquier reactivo o producto, todos los demás valores se recalculan en tiempo real. La calculadora de reactivo limitante compara las proporciones molares contra las cantidades disponibles e identifica el reactivo que se consume primero, el rendimiento teórico y los excesos sobrantes.'
        ]
      },
      {
        number: '06',
        tag: 'Aplicaciones Reales',
        title: 'Aplicaciones en el Mundo Real: Industria, Medio Ambiente y Medicina',
        paragraphs: [
          'El balanceo de ecuaciones químicas es indispensable en toda la ciencia moderna. En la industria química, la síntesis de amoníaco mediante el proceso Haber-Bosch (N2 + 3H2 -> 2NH3) requiere proporciones exactas para producir los fertilizantes que alimentan a miles de millones de personas.',
          'En ciencias ambientales, balancear reacciones de combustión (CH4 + 2O2 -> CO2 + 2H2O) y de formación de lluvia ácida (SO3 + H2O -> H2SO4) permite a los científicos cuantificar las emisiones de gases de efecto invernadero y modelar el impacto ambiental con exactitud.'
        ]
      }
    ]
  },

  ja: {
    eyebrow: '化学反応式・総合学習ガイド',
    mainTitle: '化学反応式をマスターする：係数合わせと化学量論の完全解説',
    intro: '化学反応式は、物質を構成する原子がどのように組み変わって新たな生成物を生み出すかを記述する、化学の基礎言語です。高校化学で初めて係数合わせやモル計算を学ぶ方から、大学入試や定期試験で酸化還元反応式に挑む受験生、研究室で正確な溶液調製や化学量論計算を行う研究者まで、正確で使いやすい化学反応式計算機は不可欠です。本ツールは、有理数ガウス消去法による厳密な未定係数法とリアルタイムの化学量論モデルを組み合わせ、確実で迅速な解を提供します。',
    sections: [
      {
        number: '01',
        tag: '化学の基本原理',
        title: 'なぜ化学反応式の係数を合わせる必要があるのか：質量保存の法則',
        paragraphs: [
          'あらゆる化学変化の根底には、1789年にフランスの化学者アントワーヌ・ラボアジエによって確立された「質量保存の法則」が存在します。この法則は、閉じた系において化学反応の前後で物質の総質量は変化しないことを示しています。したがって、反応物側の各元素の原子総数は、生成物側の原子総数と完全に一致していなければなりません。',
          '未完成の化学反応式では、化合物の組成は H2O、Fe2O3、Ca(OH)2 などの化学式（下付き数字）によって固定されています。化学における最重要規則の一つは、「反応式を合わせるために下付き数字を変更してはならない」ということです。下付き数字を変えると、物質そのものが別の化合物に変わってしまいます。代わりに、化学式の前にある「化学量論係数（整数）」を調整します。当計算機を使用すれば、試行錯誤（目算法）に頼ることなく、数学的に正確な係数を即座に算出できます。'
        ],
        callouts: [
          {
            title: '下付き数字は変更不可',
            desc: 'H2O を H2O2 に変えると、無害な水から有毒な過酸化水素になってしまいます。下付き文字は絶対に固定です。'
          },
          {
            title: '係数はモル数の倍率を表す',
            desc: '化学式の前の係数（例: 2H2 + O2 → 2H2O）を調整することで、物質の性質を保ったまま原子数とモル数を等しく揃えます。'
          }
        ]
      },
      {
        number: '02',
        tag: '物質の状態記号',
        title: '状態記号の活用：(s), (l), (g), (aq)',
        paragraphs: [
          '完成された化学反応式は、原子の比率だけでなく、反応条件における各物質の物理的状態（状態記号）も明示します。状態記号を記述することで、沈殿が生じるか、気体が発生するか、溶液中で反応が起きているかを正確に予測できます。',
          '本計算機は、IUPAC標準の状態記号を完全サポートしています。化学式の後ろに状態記号を直接入力できます（例: NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq)）。'
        ],
        phaseTable: [
          { phase: '固体 (Solid)', symbol: '(s)', desc: '沈殿物、金属、結晶性イオン化合物', example: 'CaCO3(s)' },
          { phase: '液体 (Liquid)', symbol: '(l)', desc: '純粋な液体、常温の臭素や水', example: 'H2O(l), Br2(l)' },
          { phase: '気体 (Gas)', symbol: '(g)', desc: '気体分子、蒸気、発生するガス', example: 'CO2(g), O2(g)' },
          { phase: '水溶液 (Aqueous)', symbol: '(aq)', desc: '水に溶解した電解質・水和イオン', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: '厳密な数学解法',
        title: '未定係数法：ガウス消去法と有理数行列による自動計算',
        paragraphs: [
          '単純な反応では「目算法」でも係数を合わせられますが、過マンガン酸カリウムの酸化還元反応や複雑な無機反応では、試行錯誤に長時間を費やしてしまうことがあります。本ツールは、厳密な「未定係数法」を行列演算（ガウス消去法）によって解いています。',
          '各元素の原子数保存に基づいて多元一次連立方程式を構築し、有理数（分数）演算を用いて零空間（カーネル）基底ベクトルを計算します。これにより、浮動小数点計算特有の丸め誤差を排除し、最小の正の互いに素な整数係数を瞬時に導き出します。'
        ]
      },
      {
        number: '04',
        tag: '発展・応用化学',
        title: 'イオン反応式と酸化還元（電荷の保存則）',
        paragraphs: [
          '酸化還元反応や電気化学では、原子の数だけでなく「全体の電気的な電荷」も保存されなければなりません。バランスの取れたイオン反応式では、反応物全体の電荷の合計と、生成物全体の電荷の合計が完全に一致する必要があります。',
          '本計算機では、上付き文字やイオン電荷（例: Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O）を直接入力可能です。アルゴリズムが電荷保存を行列の制約式として自動追加し、原子数と電荷の両方を同時に満たす解を算出します。'
        ]
      },
      {
        number: '05',
        tag: '定量化学・実験計算',
        title: '化学反応式から化学量論（モル計算）・限界反応物・収率へ',
        paragraphs: [
          'バランスの取れた反応式は、実験室における「配合レシピ」です。係数の比はそのまま「物質量（モル）の比」を表し、天秤で測るグラム（質量）や気体の体積（リットル）とミクロな分子数を直接結びつけます。',
          '当サイトの双方向「化学量論マトリックス」は、IUPAC標準原子量データと直結しています。いずれかの化合物の質量やモル数を入力すると、他の全物質の必要量・生成量が即座に連動計算されます。さらに「限界反応物計算」により、どの試薬が先に消費され、何グラムの過剰分が残るかも一目で確認できます。'
        ]
      },
      {
        number: '06',
        tag: '実社会での応用',
        title: '産業・環境・医療における化学反応式の実際',
        paragraphs: [
          '化学反応式の係数合わせは、現代社会を支える様々な分野の基盤です。工業化学では、アンモニアを合成するハーバー・ボッシュ法（N2 + 3H2 -> 2NH3）において厳密な化学量論比で原料を投入し、世界人口を支える窒素肥料が大量生産されています。',
          '環境科学分野では、メタンなどの炭化水素の燃焼式（CH4 + 2O2 -> CO2 + 2H2O）や酸性雨の原因物質の生成式（SO3 + H2O -> H2SO4）をもとに、温室効果ガス排出量や環境負荷が定量的に算出されています。'
        ]
      }
    ]
  },

  fr: {
    eyebrow: 'Guide Complet de Chimie',
    mainTitle: "Maîtriser les Réactions Chimiques : Le Guide Ultime de l'Équilibreur d'Équations",
    intro: "Les réactions chimiques constituent le langage fondamental de la chimie, détaillant comment les atomes se réorganisent pour transformer les réactifs en nouveaux produits. Que vous soyez un élève découvrant la stœchiométrie pour la première fois, un étudiant préparant des concours exigeants sur des réactions d'oxydoréduction, ou un chercheur au laboratoire, disposer d'un équilibreur d'équations chimiques fiable et polyvalent est indispensable. Notre outil combine l'algèbre linéaire exacte avec la modélisation stœchiométrique en temps réel pour vous offrir des résultats instantanés et rigoureux.",
    sections: [
      {
        number: '01',
        tag: 'Science Fondamentale',
        title: "Pourquoi Équilibrer une Équation Chimique : La Loi de Conservation de la Masse",
        paragraphs: [
          "Au cœur de toute réaction chimique réside la loi de conservation de la masse, énoncée par le chimiste français Antoine Lavoisier en 1789 : « Rien ne se perd, rien ne se crée, tout se transforme ». Dans un système clos, la matière ne peut être ni créée ni détruite. La masse totale des réactifs doit être rigoureusement égale à la masse totale des produits, ce qui exige que le nombre d'atomes de chaque élément chimique soit strictement identique des deux côtés de l'équation.",
          "Dans une équation non équilibrée, les formules chimiques sont définies par des indices fixes (tels que H2O, Fe2O3 ou Ca(OH)2). Une règle absolue en chimie est de ne jamais modifier les indices des formules chimiques pour équilibrer une équation, car changer un indice altère la nature même de la substance. On ajuste uniquement les coefficients stœchiométriques (les nombres entiers placés devant chaque formule). Notre équilibreur d'équations en ligne vous garantit une solution mathématique exacte sans tâtonnement."
        ],
        callouts: [
          {
            title: 'Les Indices sont Invariables',
            desc: "Remplacer H2O par H2O2 transforme de l'eau potable en peroxyde d'hydrogène toxique. Ne modifiez jamais les indices."
          },
          {
            title: 'Les Coefficients Multiplient les Moles',
            desc: 'Les coefficients stœchiométriques (ex. 2H2 + O2 → 2H2O) préservent les molécules tout en égalisant atomes et moles.'
          }
        ]
      },
      {
        number: '02',
        tag: 'États Physiques',
        title: 'Prise en Compte des États Physiques : (s), (l), (g) et (aq)',
        paragraphs: [
          "Une équation chimique complète indique non seulement les proportions atomiques mais aussi l'état physique de chaque espèce dans les conditions réactionnelles. Préciser les états de la matière permet d'anticiper la formation d'un précipité solide, le dégagement d'un gaz ou une réaction en phase aqueuse.",
          "Notre équilibreur prend en charge les notations IUPAC standard des états physiques. Vous pouvez écrire directement : NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq)."
        ],
        phaseTable: [
          { phase: 'Solide', symbol: '(s)', desc: 'Précipités, métaux, cristaux ioniques, poudres', example: 'CaCO3(s)' },
          { phase: 'Liquide', symbol: '(l)', desc: 'Liquides purs, mercure métallique, eau liquide', example: 'H2O(l), Br2(l)' },
          { phase: 'Gaz', symbol: '(g)', desc: 'Gaz atmosphériques, vapeurs, produits gazeux', example: 'CO2(g), O2(g)' },
          { phase: 'Aqueux', symbol: '(aq)', desc: 'Espèces dissoutes dans l\'eau (ions hydratés)', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: 'Rigueur Mathématique',
        title: 'La Méthode Algébrique : Élimination de Gauss et Matrices Rationnelles',
        paragraphs: [
          "Bien que la méthode par tâtonnement (inspection) convienne aux réactions très simples, les équations complexes (redox en milieu acide ou basique, craquage d'hydrocarbures) demandent un temps excessif. Notre outil applique la méthode algébrique rigoureuse via l'élimination de Gauss sur des matrices rationnelles.",
          "Chaque élément chimique génère une équation de conservation linéaire. Pour une réaction aA + bB -> cC + dD, la conservation de chaque élément forme une ligne d'un système linéaire homogène A·x = 0. En résolvant le noyau de cette matrice avec une arithmétique de fractions entières, l'outil élimine toute erreur d'arrondi et calcule instantanément les plus petits entiers naturels premiers entre eux."
        ]
      },
      {
        number: '04',
        tag: 'Chimie Avancée',
        title: 'Équilibrage des Réactions Redox et Ioniques avec Charges Électriques',
        paragraphs: [
          "En oxydoréduction et en électrochimie, la conservation de la masse ne suffit pas : la charge électrique nette doit aussi être rigoureusement conservée. Dans une équation ionique nette équilibrée, la somme des charges des réactifs doit être égale à la somme des charges des produits.",
          "Vous pouvez saisir directement les charges ioniques (ex. Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). Le moteur traite la conservation de charge comme une contrainte matricielle supplémentaire, équilibrant simultanément la matière et les électrons."
        ]
      },
      {
        number: '05',
        tag: 'Chimie Quantitative',
        title: 'De l\'Équation Équilibrée à la Stœchiométrie, au Réactif Limitant et au Rendement',
        paragraphs: [
          "Une équation chimique équilibrée constitue la recette quantitative du laboratoire. Les coefficients représentent des rapports molaires qui relient la masse mesurée en grammes sur la balance aux quantités microscopiques en moles et molécules.",
          "Notre matrice stœchiométrique interactive relie automatiquement les coefficients équilibrés aux masses atomiques IUPAC 2024. Modifiez la quantité ou l'unité d'un composé, et tous les autres réactifs et produits se recalculent aussitôt. Le calculateur de réactif limitant identifie la substance épuisée en premier, le rendement théorique et l'excès restant."
        ]
      },
      {
        number: '06',
        tag: 'Applications Pratiques',
        title: 'Applications Concrètes : Industrie, Environnement et Médecine',
        paragraphs: [
          "L'équilibrage des réactions chimiques est la clé de voûte des procédés industriels modernes. Dans l'industrie des engrais, le procédé Haber-Bosch (N2 + 3H2 -> 2NH3) produit l'ammoniac essentiel pour nourrir des milliards d'êtres humains grâce à des rapports stœchiométriques rigoureux.",
          "En sciences environnementales, équilibrer la combustion des hydrocarbures (CH4 + 2O2 -> CO2 + 2H2O) et la formation des pluies acides (SO3 + H2O -> H2SO4) permet aux chercheurs de quantifier précisément les émissions de gaz à effet de serre et l'empreinte carbone."
        ]
      }
    ]
  },

  de: {
    eyebrow: 'Ausführlicher Chemie-Leitfaden',
    mainTitle: 'Chemische Reaktionen meistern: Der umfassende Leitfaden zum Reaktionsgleichungen-Rechner',
    intro: 'Chemische Reaktionen bilden das grundlegende Fundament der Chemie und beschreiben, wie sich Atome neu anordnen, um Edukte in neue chemische Produkte zu verwandeln. Ganz gleich, ob Sie als Schüler im Chemieunterricht erstmals mit Stöchiometrie in Berührung kommen, als Abiturient komplexe Redoxgleichungen lösen oder im universitären Labor quantitative Lösungen ansetzen: Ein präziser und vielseitiger Rechner zum Ausgleichen chemischer Reaktionsgleichungen ist unverzichtbar. Unser Online-Tool verbindet exakte lineare Algebra mit Echtzeit-Stöchiometrie für fehlerfreie und sofortige Analysen.',
    sections: [
      {
        number: '01',
        tag: 'Grundlagenforschung',
        title: 'Warum chemische Gleichungen ausgeglichen werden müssen: Das Gesetz von der Erhaltung der Masse',
        paragraphs: [
          'Im Zentrum jeder chemischen Stoffumwandlung steht das 1789 von Antoine Lavoisier formulierte Gesetz von der Erhaltung der Masse: In einem geschlossenen System kann bei chemischen Vorgängen Materie weder erschaffen noch vernichtet werden. Demzufolge muss die Gesamtmasse der Ausgangsstoffe (Edukte) stets exakt der Gesamtmasse der Endstoffe (Produkte) entsprechen. Dies erfordert, dass die Gesamtanzahl der Atome jedes einzelnen chemischen Elements auf beiden Seiten des Reaktionspfeils identisch ist.',
          'In ungeglichenen Gleichungen spiegeln chemische Formeln feste stöchiometrische Zusammensetzungen wider (definiert durch Tiefzahlen wie H2O, Fe2O3 oder Ca(OH)2). Eine unumstößliche Grundregel der Chemie lautet: Tiefzahlen dürfen niemals verändert werden, um eine Gleichung auszugleichen, da dies die Substanz in einen völlig anderen Stoff verwandeln würde. Stattdessen passen wir die stöchiometrischen Koeffizienten an (die ganzen Zahlen vor den Formeln). Unser Ausgleicher berechnet diese Koeffizienten mit mathematischer Sicherheit statt langwierigem Raten durch Probieren.',
        ],
        callouts: [
          {
            title: 'Tiefzahlen sind unveränderlich',
            desc: 'Aus H2O durch Ändern des Index H2O2 zu machen, verwandelt harmloses Wasser in giftiges Wasserstoffperoxid. Niemals Indizes verändern.'
          },
          {
            title: 'Koeffizienten skalieren Stoffmengen',
            desc: 'Stöchiometrische Vorfaktoren (z. B. 2H2 + O2 → 2H2O) erhalten die chemische Identität und gleichen Atome und Mol aus.'
          }
        ]
      },
      {
        number: '02',
        tag: 'Aggregatzustände',
        title: 'Angabe von Aggregatzuständen: (s), (l), (g) und (aq)',
        paragraphs: [
          'Eine vollständige Reaktionsgleichung vermittelt neben der Atombilanz auch den physikalischen Zustand jeder beteiligten Substanz unter Reaktionsbedingungen. Dies ermöglicht Vorhersagen darüber, ob Niederschläge ausfallen, Gase entweichen oder Reaktionen in wässriger Lösung stattfinden.',
          'Unser Rechner unterstützt sämtliche standardmäßigen IUPAC-Phasenangaben. Sie können Phasensymbole direkt an die Formel anhängen: NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq).'
        ],
        phaseTable: [
          { phase: 'Fest (Solid)', symbol: '(s)', desc: 'Niederschläge, Metalle, Salzkristalle, Mineralien', example: 'CaCO3(s)' },
          { phase: 'Flüssig (Liquid)', symbol: '(l)', desc: 'Reine Flüssigkeiten, flüssiges Brom, Wasser', example: 'H2O(l), Br2(l)' },
          { phase: 'Gasförmig (Gas)', symbol: '(g)', desc: 'Dämpfe, Gase, flüchtige Reaktionsprodukte', example: 'CO2(g), O2(g)' },
          { phase: 'Wässrig (Aqueous)', symbol: '(aq)', desc: 'In Wasser gelöste Elektrolyte (hydratisierte Ionen)', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: 'Mathematische Exaktheit',
        title: 'Die algebraische Methode: Gauß-Algorithmus und rationale Matrizen',
        paragraphs: [
          'Während einfache Reaktionen durch bloßes Hinsehen (Inspektionsmethode) gelöst werden können, scheitert dieses Vorgehen bei mehrstufigen Redoxreaktionen oder industriellen Synthesen oft an Zeitaufwand und Komplexität. Unsere Rechenmaschine nutzt die algebraische Methode mittels exakter Gauß-Elimination über rationalen Zahlen.',
          'Jedes Element bildet eine Erhaltungsgleichung. Für aA + bB -> cC + dD generiert jedes Atom eine Zeile im linearen Gleichungssystem A·x = 0. Durch Berechnung der Nullraum-Basis mit exakter Bruch-Arithmetik werden Rundungsfehler vermieden und unmittelbar kleinste ganzzahlige, teilerfremde Koeffizienten ermittelt.'
        ]
      },
      {
        number: '04',
        tag: 'Fortgeschrittene Chemie',
        title: 'Ausgleichen von Redox- und Ionengleichungen mit elektrischen Ladungen',
        paragraphs: [
          'Bei Redoxreaktionen und in der Elektrochemie genügt die Atombilanz allein nicht: Auch die elektrische Gesamtladung muss streng erhalten bleiben. In einer ausgeglichenen Nettogit-Ionengleichung muss die Summe aller Ionenladungen auf der Eduktseite exakt gleich der Ladungssumme auf der Produktseite sein.',
          'Sie können Ionenladungen direkt eingeben (z. B. Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). Der Algorithmus bindet die Ladungsbilanz als zusätzliche Matrixzeile ein und gleicht Masse und elektrische Ladung zeitgleich aus.'
        ]
      },
      {
        number: '05',
        tag: 'Quantitative Chemie',
        title: 'Von der Gleichung zur Stöchiometrie, limitierendem Reagenz und Ausbeute',
        paragraphs: [
          'Eine ausgeglichene Reaktionsgleichung dient als quantitatives Rezept im Chemielabor. Die Koeffizienten definieren Stoffmengenverhältnisse (Mol), die makroskopische Labormessungen (Gramm auf der Waage) mit mikroskopischen Teilchenzahlen verbinden.',
          'Unsere Stöchiometriematrix koppelt Gleichungskoeffizienten mit aktuellen IUPAC-Atommassen. Ändern Sie Gramm oder Mol für eine Substanz, passen sich alle anderen Werte sofort an. Der Rechner für limitierende Reagenzien identifiziert die zuerst aufgebrauchte Komponente, berechnet die theoretische Ausbeute und den verbleibenden Überschuss.'
        ]
      },
      {
        number: '06',
        tag: 'Reale Anwendungen',
        title: 'Bedeutung in Industrie, Umwelttechnik und Alltag',
        paragraphs: [
          'Ausgeglichene Reaktionsgleichungen sind das Rückgrat der chemischen Industrie. Beim Haber-Bosch-Verfahren zur Ammoniaksynthese (N2 + 3H2 -> 2NH3) ist die exakte Einhaltung stöchiometrischer Verhältnisse erforderlich, um Stickstoffdünger für die weltweite Ernährungssicherheit herzustellen.',
          'In der Umweltanalytik ermöglicht das Ausgleichen von Verbrennungsgleichungen (CH4 + 2O2 -> CO2 + 2H2O) und Bildungsreaktionen von saurem Regen (SO3 + H2O -> H2SO4) die exakte Erfassung von Treibhausgasen und Schadstoffemissionen.'
        ]
      }
    ]
  },

  pt: {
    eyebrow: 'Guia Completo de Química',
    mainTitle: 'Dominando Reações Químicas: O Guia Definitivo do Balanceador de Equações',
    intro: 'As reações químicas constituem a linguagem fundamental da química, descrevendo com precisão como os átomos se rearranjam para transformar reagentes em novos produtos. Seja você um estudante do ensino médio aprendendo estequiometria, um vestibulando resolvendo equações de oxirredução complexas, ou um pesquisador preparando soluções laboratoriais, contar com um balanceador de equações químicas rápido e confiável é essencial. Nossa ferramenta online reúne álgebra linear exata e estequiometria bidirecional em tempo real para análises imediatas e livres de erros.',
    sections: [
      {
        number: '01',
        tag: 'Ciência Fundamental',
        title: 'Por Que Balancear Equações Químicas: A Lei da Conservação da Massa',
        paragraphs: [
          'No centro de qualquer transformação química está a Lei da Conservação da Massa, formulada por Antoine Lavoisier em 1789: «Na natureza, nada se cria, nada se perde, tudo se transforma». Em um sistema fechado, a matéria não pode ser criada nem destruída por processos químicos. Consequentemente, a massa total dos reagentes deve ser estritamente igual à massa total dos produtos, o que exige que a quantidade de átomos de cada elemento seja exatamente a mesma nos dois lados da equação.',
          'Ao escrever equações não balanceadas, as fórmulas químicas são representadas por índices fixos (como H2O, Fe2O3 ou Ca(OH)2). Uma regra fundamental da química é nunca alterar os índices de uma fórmula para balancear uma reação, pois isso alteraria a própria identidade química da substância. Em vez disso, ajustamos os coeficientes estequiométricos (os números inteiros colocados à frente das fórmulas). Nosso balanceador online calcula esses coeficientes com rigor matemático em milissegundos.'
        ],
        callouts: [
          {
            title: 'Subscritos são Inalteráveis',
            desc: 'Mudar H2O para H2O2 transforma água potável em peróxido de hidrogênio tóxico. Nunca altere os números subscritos.'
          },
          {
            title: 'Coeficientes Multiplicam Mols',
            desc: 'Os coeficientes estequiométricos (ex: 2H2 + O2 → 2H2O) mantêm os compostos originais e igualam o número de átomos e mols.'
          }
        ]
      },
      {
        number: '02',
        tag: 'Estados Físicos',
        title: 'Inclusão dos Estados Físicos da Matéria: (s), (l), (g) e (aq)',
        paragraphs: [
          'Uma equação química completa informa não apenas a proporção atômica, mas também o estado físico de cada composto nas condições da reação. Especificar os estados físicos permite prever a formação de precipitados sólidos, liberação de gases ou processos em meio aquoso.',
          'Nosso balanceador aceita todas as notações de fase recomendadas pela IUPAC. Você pode incluir o estado físico diretamente na fórmula: NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq).'
        ],
        phaseTable: [
          { phase: 'Sólido', symbol: '(s)', desc: 'Precipitados, metais, cristais iônicos, minerais', example: 'CaCO3(s)' },
          { phase: 'Líquido', symbol: '(l)', desc: 'Líquidos puros, mercúrio metálico, água líquida', example: 'H2O(l), Br2(l)' },
          { phase: 'Gasoso', symbol: '(g)', desc: 'Vapores, gases atmosféricos, produtos gasosos', example: 'CO2(g), O2(g)' },
          { phase: 'Aquoso', symbol: '(aq)', desc: 'Substâncias dissolvidas em água (íons hidratados)', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: 'Rigor Matemático',
        title: 'O Método Algébrico: Eliminação Gaussiana e Matrizes Racionais',
        paragraphs: [
          'Embora o método das tentativas (inspeção) funcione bem para reações elementares, reações complexas (como oxirredução em meio ácido ou básico e combustão de hidrocarbonetos pesados) tornam-se exaustivas por tentativa e erro. Nosso motor aplica o método algébrico estruturado por eliminação gaussiana exata com frações racionais.',
          'Cada elemento químico gera uma equação de conservação. Para aA + bB -> cC + dD, o balanço de cada átomo define uma linha da matriz homogênea A·x = 0. Ao calcular a base do núcleo matricial com aritmética inteira exata, eliminam-se imprecisões de arredondamento, retornando os menores inteiros primos entre si.'
        ]
      },
      {
        number: '04',
        tag: 'Química Avançada',
        title: 'Balanceamento de Reações Redox e Iônicas com Cargas Elétricas',
        paragraphs: [
          'Na química de oxirredução (redox) e na eletroquímica, balancear apenas os átomos não é suficiente: a carga elétrica líquida também deve ser rigorosamente conservada. Em uma equação iônica balanceada, a soma das cargas dos reagentes deve igualar a soma das cargas dos produtos.',
          'Você pode inserir cargas e íons diretamente (ex: Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). Nosso software inclui a conservação de cargas como uma restrição matemática adicional, garantindo equilíbrio atômico e eletrônico conjunto.'
        ]
      },
      {
        number: '05',
        tag: 'Química Quantitativa',
        title: 'Da Equação Balanceada à Estequiometria, Reagente Limitante e Rendimento',
        paragraphs: [
          'A equação química balanceada é a receita quantitativa do laboratório químico. Os coeficientes estabelecem as proporções molares que conectam medições de massa em gramas com quantidades microscópicas de matéria em mols e moléculas.',
          'Nossa Matriz Estequiométrica Interativa integra coeficientes estequiométricos com massas atômicas IUPAC 2024. Altere a massa ou o número de mols de qualquer substância para recalcular os demais componentes instantaneamente. O módulo de reagente limitante identifica o componente que se consome por completo primeiro e determina os reagentes em excesso.'
        ]
      },
      {
        number: '06',
        tag: 'Aplicações no Mundo Real',
        title: 'Aplicações Práticas: Indústria, Meio Ambiente e Farmácia',
        paragraphs: [
          'O balanceamento de equações químicas é indispensável na sociedade tecnológica atual. Na indústria de fertilizantes, a síntese de amônia pelo processo Haber-Bosch (N2 + 3H2 -> 2NH3) requer proporções estequiométricas rigorosas para garantir a alimentação de bilhões de pessoas.',
          'Em ciências ambientais, o balanceamento de reações de combustão (CH4 + 2O2 -> CO2 + 2H2O) e de formação da chuva ácida (SO3 + H2O -> H2SO4) permite calcular com precisão as emissões de gases de efeito estufa e planejar medidas de controle de poluição.'
        ]
      }
    ]
  },

  ko: {
    eyebrow: '화학 반응식 종합 가이드',
    mainTitle: '화학 반응식 완벽 정복: 계수 맞추기와 화학양론의 모든 것',
    intro: '화학 반응식은 반응물 물질이 원자 재배열을 통해 새로운 생성물로 변환되는 과정을 서술하는 화학의 가장 핵심적인 언어입니다. 화학을 처음 접하며 화학양론과 몰 개념을 공부하는 학생부터, 시험 대비를 위해 복잡한 산화 환원 반응식을 푸는 수험생, 실험실에서 정확한 시약 양을 계산하고 반응 수득률을 관리하는 연구자까지, 신뢰할 수 있는 화학 반응식 계산기는 필수적입니다. 본 사이트의 온라인 계산기는 유리수 가우스 소거법을 활용한 정확한 미정계수법과 실시간 화학양론 엔진을 결합하여 오차 없는 정답을 즉시 제공합니다.',
    sections: [
      {
        number: '01',
        tag: '기초 과학 원리',
        title: '화학 반응식의 계수를 맞춰야 하는 이유: 질량 보존 법칙',
        paragraphs: [
          '모든 화학 변화의 바탕에는 1789년 프랑스의 화학자 앙투안 라부아지에가 확립한 "질량 보존 법칙"이 자리 잡고 있습니다. 이 법칙에 따르면 닫힌계에서 일어나는 화학 반응 전후의 총질량은 언제나 일정하게 보존됩니다. 따라서 반응물에 존재하는 각 원소의 원자 총수는 생성물에 존재하는 해당 원소의 원자 총수와 반드시 정확히 같아야 합니다.',
          '미완성된 반응식에서 각 화합물은 H2O, Fe2O3, Ca(OH)2와 같이 정해진 화학식(아래첨자)을 갖습니다. 화학에서 절대 어겨서는 안 되는 기본 원칙은 "반응식 계수를 맞추기 위해 아래첨자를 임의로 바꿔서는 안 된다"는 점입니다. 아래첨자를 변경하면 물질의 본질 자체가 완전히 다른 물질로 바뀌어 버립니다. 대신 화학식 앞에 놓이는 정수 계수(화학양론 계수)만을 조절해야 합니다. 본 계산기를 이용하면 번거로운 눈대중(관찰법) 대신 수학적 확실성을 바탕으로 빠르게 계수를 맞출 수 있습니다.'
        ],
        callouts: [
          {
            title: '아래첨자는 변경 불가',
            desc: 'H2O를 H2O2로 바꾸면 마시는 물이 독성 과산화수소로 변합니다. 화학식의 아래첨자는 절대로 수정해서는 안 됩니다.'
          },
          {
            title: '계수는 몰수 배율을 의미',
            desc: '화학식 앞의 계수(예: 2H2 + O2 → 2H2O)를 조절함으로써 화합물의 조성을 해치지 않고 원자수와 몰수를 완벽히 일치시킵니다.'
          }
        ]
      },
      {
        number: '02',
        tag: '물질의 상태',
        title: '물질의 상태 기호 표기법: (s), (l), (g), (aq)',
        paragraphs: [
          '완성도 높은 화학 반응식은 원자의 수량비뿐만 아니라 반응 조건에서 각 물질이 어떤 물리적 상태에 있는지를 함께 표기합니다. 상태 기호를 기재하면 침전이 형성되는지, 기체가 방출되는지, 수용액 상에서 반응이 진행되는지를 직관적으로 파악할 수 있습니다.',
          '본 계산기는 IUPAC 표준 상태 기호를 완벽히 지원합니다. 화학식 뒤에 직접 상태 기호를 붙여 입력할 수 있습니다(예: NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq)).'
        ],
        phaseTable: [
          { phase: '고체 (Solid)', symbol: '(s)', desc: '침전물, 금속, 이온 결정, 불용성 염', example: 'CaCO3(s)' },
          { phase: '액체 (Liquid)', symbol: '(l)', desc: '순수한 액체, 액체 상태의 브로민 및 순수한 물', example: 'H2O(l), Br2(l)' },
          { phase: '기체 (Gas)', symbol: '(g)', desc: '대기 중 기체, 기화된 증기, 발생 기체', example: 'CO2(g), O2(g)' },
          { phase: '수용액 (Aqueous)', symbol: '(aq)', desc: '물에 용해된 전해질 및 수화된 이온', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: '수학적 엄밀성',
        title: '미정계수법: 가우스 소거법과 유리수 행렬 연산',
        paragraphs: [
          '간단한 반응은 관찰법(눈대중)으로도 쉽게 맞출 수 있지만, 여러 원소가 복잡하게 얽힌 산화 환원 반응이나 탄화수소 연소 반응은 눈대중으로 풀기 매우 어렵습니다. 본 엔진은 미정계수법을 행렬 연산(가우스 소거법)으로 정밀하게 구현했습니다.',
          '각 원소의 보존 조건을 일차 연립방정식으로 세운 뒤, 정확한 분수 연산을 통해 행렬의 영공간(Nullspace) 기저를 구합니다. 이를 통해 컴퓨터 부동 소수점 오차를 완전히 배제하고, 가장 작은 양의 서로소 정수 계수를 단 1밀리초 만에 계산해 냅니다.'
        ]
      },
      {
        number: '04',
        tag: '심화 화학',
        title: '산화 환원 및 알짜 이온 반응식의 전하 균형 맞추기',
        paragraphs: [
          '산화 환원 반응과 전기화학에서는 원자 수의 보존뿐만 아니라 "전체 알짜 전하의 보존" 역시 엄격하게 지켜져야 합니다. 완성된 이온 반응식에서는 반응물 쪽의 총 전하량 합과 생성물 쪽의 총 전하량 합이 완벽히 일치해야 합니다.',
          '본 계산기에는 이온의 전하와 위첨자를 직접 입력할 수 있습니다(예: Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). 알고리즘이 전하 보존식을 행렬의 추가 조건으로 자동 편입하여 원자 수와 전하 균형을 동시에 풀어냅니다.'
        ]
      },
      {
        number: '05',
        tag: '정량 화학 및 실험',
        title: '반응식에서 화학양론, 한계 반응물 및 백분율 수득률까지',
        paragraphs: [
          '균형 맞춘 화학 반응식은 실험실에서의 "정량 레시피"입니다. 화학양론 계수는 물질 간의 "몰비"를 뜻하며, 저울로 측정하는 거시적 질량(그램)과 미시적 입자 수(몰 및 분자 수)를 상호 변환해 줍니다.',
          '본 사이트의 대화형 화학양론 매트릭스는 최신 IUPAC 표준 원자량 데이터와 유기적으로 연결되어 있습니다. 어느 한 화합물의 질량이나 몰수를 입력하면 다른 모든 물질의 소모량과 생성량이 실시간으로 계산됩니다. 또한 한계 반응물 계산기를 통해 먼저 고갈되는 물질과 이론적 수득량을 바로 확인할 수 있습니다.'
        ]
      },
      {
        number: '06',
        tag: '실생활 및 산업 응용',
        title: '산업 공정, 환경 과학 및 의학에서의 실제 응용',
        paragraphs: [
          '화학 반응식 계산은 현대 산업과 과학의 전 분야에서 필수적으로 활용됩니다. 비료 산업에서 암모니아를 합성하는 하버-보슈 공정(N2 + 3H2 -> 2NH3)은 엄밀한 화학양론적 계량에 기반하여 인류를 먹여 살리는 식량 생산을 가능하게 했습니다.',
          '환경 과학 분야에서는 화석연료 연소 반응식(CH4 + 2O2 -> CO2 + 2H2O)과 산성비 유발 반응식(SO3 + H2O -> H2SO4)을 토대로 온실가스 배출량과 환경 영향도를 정밀하게 계산하고 있습니다.'
        ]
      }
    ]
  },

  it: {
    eyebrow: 'Guida Completa alla Chimica',
    mainTitle: 'Padroneggiare le Reazioni Chimiche: La Guida Definitiva al Bilanciatore di Equazioni',
    intro: 'Le reazioni chimiche rappresentano il linguaggio essenziale della chimica, descrivendo il modo in cui gli atomi si riorganizzano per trasformare i reagenti in nuovi prodotti. Che tu sia uno studente delle superiori che affronta per la prima volta la stechiometria, uno studente universitario alle prese con reazioni redox complesse o un ricercatore in laboratorio, avere a disposizione un bilanciatore di equazioni chimiche affidabile e versatile è indispensabile. Il nostro strumento online combina algebra lineare esatta ed elaborazione stechiometrica in tempo reale per offrirti risultati immediati e privi di errori.',
    sections: [
      {
        number: '01',
        tag: 'Principi Fondamentali',
        title: 'Perché Bisogna Bilanciare le Equazioni: La Legge di Conservazione della Massa',
        paragraphs: [
          'Al centro di ogni trasformazione chimica risiede la Legge di Conservazione della Massa, formulata dal chimico francese Antoine Lavoisier nel 1789: «Nulla si crea, nulla si distrugge, tutto si trasforma». In un sistema chiuso, la materia non può essere creata né distrutta mediante reazioni chimiche ordinarie. Pertanto, la massa totale dei reagenti deve essere rigorosamente uguale alla massa totale dei prodotti, il che richiede che il numero totale di atomi di ciascun elemento rimanga identico sui due lati della freccia di reazione.',
          'Nelle equazioni non bilanciate, le formule riflettono la composizione fissa delle molecole (definita da indici numerici come H2O, Fe2O3 o Ca(OH)2). Una regola fondamentale della chimica impone di non modificare mai gli indici per bilanciare una reazione, poiché farlo cambierebbe l\'identità della sostanza. Si modificano invece i coefficienti stechiometrici (i numeri interi posti davanti a ogni formula). Il nostro bilanciatore online permette di determinare questi coefficienti con certezza matematica assoluta anziché procedere per tentativi.'
        ],
        callouts: [
          {
            title: 'Gli Indici sono Invariabili',
            desc: 'Cambiare H2O in H2O2 trasforma acqua innocua in perossido di idrogeno tossico. Non modificare mai gli indici.'
          },
          {
            title: 'I Coefficienti Moltiplicano le Moli',
            desc: 'I coefficienti stechiometrici (es. 2H2 + O2 → 2H2O) conservano l\'identità chimica e uguagliano atomi e moli.'
          }
        ]
      },
      {
        number: '02',
        tag: 'Stati Fisici',
        title: 'Gli Stati Fisici della Materia: (s), (l), (g) e (aq)',
        paragraphs: [
          'Un\'equazione chimica completa indica non solo il rapporto tra gli atomi ma anche lo stato fisico di ciascuna sostanza nelle condizioni di reazione. Specificare gli stati della materia aiuta a prevedere la precipitazione di un solido, lo sviluppo di un gas o le reazioni in soluzione acquosa.',
          'Il nostro bilanciatore supporta pienamente tutte le notazioni di fase standard IUPAC. È possibile inserire le fasi direttamente nelle formule: NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq).'
        ],
        phaseTable: [
          { phase: 'Solido', symbol: '(s)', desc: 'Precipitati, metalli, cristalli ionici, minerali', example: 'CaCO3(s)' },
          { phase: 'Liquido', symbol: '(l)', desc: 'Liquidi puri, mercurio elementare, acqua liquida', example: 'H2O(l), Br2(l)' },
          { phase: 'Gassoso', symbol: '(g)', desc: 'Vapori, gas atmosferici, prodotti gassosi', example: 'CO2(g), O2(g)' },
          { phase: 'Acquoso', symbol: '(aq)', desc: 'Specie disciolte in acqua (ioni idratati)', example: 'HCl(aq), NaCl(aq)' }
        ]
      },
      {
        number: '03',
        tag: 'Rigore Matematico',
        title: 'Il Metodo Algebrico: Eliminazione Gaussiana e Matrici Razionali',
        paragraphs: [
          'Mentre il metodo a vista (per tentativi) può essere sufficiente per reazioni molto semplici, le equazioni complesse (come le reazioni redox in ambiente acido o basico e la combustione di idrocarburi complessi) richiedono troppo tempo. Il nostro motore utilizza il metodo algebrico basato sull\'eliminazione gaussiana esatta con numeri razionali.',
          'Ogni elemento chimico genera un\'equazione lineare di conservazione. Per una reazione aA + bB -> cC + dD, la conservazione di ciascun elemento forma una riga nel sistema lineare omogeneo A·x = 0. Risolvendo la base del nucleo mediante aritmetica esatta con frazioni, il software elimina ogni errore di arrotondamento e produce all\'istante i minimi coefficienti interi positivi coprimi.'
        ]
      },
      {
        number: '04',
        tag: 'Chimica Avanzata',
        title: 'Bilanciamento di Reazioni Redox e Ioniche con Cariche Elettriche',
        paragraphs: [
          'Nelle reazioni di ossidoriduzione (redox) e in elettrochimica, bilanciare gli atomi non è sufficiente: anche la carica elettrica netta deve essere rigorosamente conservata. In un\'equazione ionica netta bilanciata, la somma algebrica delle cariche sui reagenti deve essere uguale a quella sui prodotti.',
          'È possibile inserire direttamente le cariche ioniche (es. Fe^2+ + Cr2O7^2- + H+ -> Fe^3+ + Cr^3+ + H2O). L\'algoritmo integra la conservazione della carica come riga vincolare aggiuntiva, risolvendo contemporaneamente il bilancio di massa e di carica.'
        ]
      },
      {
        number: '05',
        tag: 'Chimica Quantitativa',
        title: 'Dall\'Equazione Bilanciata alla Stechiometria, Reagente Limitante e Resa',
        paragraphs: [
          'Un\'equazione chimica bilanciata funge da ricetta quantitativa per il lavoro di laboratorio. I coefficienti rappresentano rapporti molari, che collegano la massa misurata in grammi sulla bilancia con il numero microscopico di particelle in moli e molecole.',
          'La nostra Matrice Stechiometrica Interattiva collega automaticamente i coefficienti con i pesi atomici standard IUPAC 2024. Inserendo la massa o le moli di qualsiasi composto, tutti gli altri componenti si ricalcolano all\'istante. Il modulo per il reagente limitante identifica la specie consumata per prima, la resa teorica e gli eccessi residui.'
        ]
      },
      {
        number: '06',
        tag: 'Applicazioni Pratiche',
        title: 'Applicazioni nel Mondo Reale: Industria, Ambiente e Medicina',
        paragraphs: [
          'Il bilanciamento delle equazioni chimiche è indispensabile per la società contemporanea. Nella produzione industriale di fertilizzanti, il processo Haber-Bosch per la sintesi dell\'ammoniaca (N2 + 3H2 -> 2NH3) richiede rigorose proporzioni stechiometriche per consentire la nutrizione di miliardi di persone.',
          'Nelle scienze ambientali, bilanciare le reazioni di combustione (CH4 + 2O2 -> CO2 + 2H2O) e di formazione delle piogge acide (SO3 + H2O -> H2SO4) consente ai ricercatori di quantificare le emissioni di gas serra e l\'impatto ecologico.'
        ]
      }
    ]
  }
};


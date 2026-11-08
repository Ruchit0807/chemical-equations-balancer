import type { Lang } from './ui';

export interface ReactionTypeGuideItem {
  name: string;
  formula: string;
  desc: string;
  example: string;
}

export const reactionGuideTranslations: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ReactionTypeGuideItem[];
}> = {
  en: {
    eyebrow: 'Reaction Types Reference',
    title: 'Major Types of Chemical Reactions',
    subtitle: 'Reference guide for the fundamental reaction classifications recognized and classified by our engine.',
    items: [
      {
        name: 'Synthesis (Combination)',
        formula: 'A + B → AB',
        desc: 'Two or more elements or simpler compounds unite to produce a single product.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: 'Decomposition',
        formula: 'AB → A + B',
        desc: 'A single complex compound breaks down into two or more elements or simpler substances.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: 'Single Replacement',
        formula: 'A + BC → B + AC',
        desc: 'A more reactive elemental metal or halogen displaces another from a compound.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: 'Double Replacement',
        formula: 'AB + CD → AD + CB',
        desc: 'Two ionic compounds in solution exchange cations and anions to form a precipitate or gas.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: 'Combustion',
        formula: 'Fuel + O₂ → CO₂ + H₂O',
        desc: 'Exothermic oxidation of hydrocarbons releasing thermal energy, light, carbon dioxide, and water.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: 'Acid-Base Neutralization',
        formula: 'HA + BOH → BA + H₂O',
        desc: 'Proton transfer between acid and base forming water and an ionic salt.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  es: {
    eyebrow: 'Referencia de Reacciones',
    title: 'Principales Tipos de Reacciones Químicas',
    subtitle: 'Guía de referencia de las clasificaciones químicas fundamentales identificadas por nuestro algoritmo.',
    items: [
      {
        name: 'Síntesis (Combinación)',
        formula: 'A + B → AB',
        desc: 'Dos o más sustancias simples se unen para originar un único producto más complejo.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: 'Descomposición',
        formula: 'AB → A + B',
        desc: 'Un único reactivo se descompone en dos o más sustancias más simples.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: 'Desplazamiento Simple',
        formula: 'A + BC → B + AC',
        desc: 'Un elemento libre más reactivo desplaza a otro elemento de un compuesto.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: 'Doble Desplazamiento',
        formula: 'AB + CD → AD + CB',
        desc: 'Dos compuestos iónicos en solución acuosa intercambian sus iones formando un precipitado.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: 'Combustión',
        formula: 'Combustible + O₂ → CO₂ + H₂O',
        desc: 'Oxidación rápida y exotérmica de hidrocarburos liberando energía térmica, dióxido de carbono y vapor de agua.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: 'Neutralización Ácido-Base',
        formula: 'HA + BOH → BA + H₂O',
        desc: 'Transferencia de protones entre un ácido y una base para formar agua y una sal iónica.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  ja: {
    eyebrow: '反応の分類リファレンス',
    title: '主要な化学反応の種類と分類',
    subtitle: '本計算エンジンが自動判別する代表的な化学反応の分類と特徴です。',
    items: [
      {
        name: '化合（合成反応）',
        formula: 'A + B → AB',
        desc: '2種類以上の単体や単純な化合物が結合して、1種類の生成物を生じる反応。',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: '分解反応',
        formula: 'AB → A + B',
        desc: '1種類の化合物が2種類以上の単体やより単純な物質に分かれる反応。',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: '単置換反応（置換）',
        formula: 'A + BC → B + AC',
        desc: 'イオン化傾向の高い金属やハロゲンの単体が、化合物中の他の元素を追い出して入れ替わる反応。',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: '複置換反応',
        formula: 'AB + CD → AD + CB',
        desc: '溶液中の2種類の化合物が陽イオンと陰イオンを交換し、沈殿や気体を生じる反応。',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: '燃焼反応',
        formula: '炭化水素 + O₂ → CO₂ + H₂O',
        desc: '物質が酸素と激しく反応し、熱や光を放ちながら二酸化炭素と水を生成する酸化反応。',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: '中和反応（酸塩基）',
        formula: '酸 + 塩基 → 塩 + H₂O',
        desc: '酸からの水素イオン（H⁺）と塩基からの水酸化物イオン（OH⁻）が結合して水と塩を生成する反応。',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  fr: {
    eyebrow: 'Classification des Réactions',
    title: 'Principaux Types de Réactions Chimiques',
    subtitle: 'Guide de référence des réactions fondamentales reconnues par notre algorithme.',
    items: [
      {
        name: 'Synthèse (Combinaison)',
        formula: 'A + B → AB',
        desc: 'Deux corps simples ou composés s\'unissent pour former un produit unique plus complexe.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: 'Décomposition',
        formula: 'AB → A + B',
        desc: 'Un composé unique se scinde en deux ou plusieurs corps simples ou substances.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: 'Simple Déplacement',
        formula: 'A + BC → B + AC',
        desc: 'Un élément plus réactif déplace un autre élément au sein d\'un composé chimique.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: 'Double Déplacement',
        formula: 'AB + CD → AD + CB',
        desc: 'Deux composés ioniques en solution échangent leurs ions pour former un précipité solide.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: 'Combustion',
        formula: 'Combustible + O₂ → CO₂ + H₂O',
        desc: 'Oxydation vive d\'hydrocarbures libérant chaleur, lumière, dioxyde de carbone et vapeur d\'eau.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: 'Neutralisation Acide-Base',
        formula: 'HA + BOH → BA + H₂O',
        desc: 'Transfert de protons entre un acide et une base formant de l\'eau et un sel ionique.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  de: {
    eyebrow: 'Reaktionstypen-Übersicht',
    title: 'Wichtige Typen chemischer Reaktionen',
    subtitle: 'Referenzübersicht der grundlegenden Reaktionstypen, die von unserem Rechner erkannt werden.',
    items: [
      {
        name: 'Synthese (Kombination)',
        formula: 'A + B → AB',
        desc: 'Zwei oder mehr Ausgangsstoffe vereinigen sich zu einem einzigen neuen Reaktionsprodukt.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: 'Zersetzung (Analyse)',
        formula: 'AB → A + B',
        desc: 'Eine komplexe Verbindung zerfällt in zwei oder mehr einfachere Stoffe.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: 'Einfache Substitution',
        formula: 'A + BC → B + AC',
        desc: 'Ein reaktiveres elementares Metall oder Nichtmetall verdrängt ein anderes aus einer Verbindung.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: 'Doppelte Umsetzung',
        formula: 'AB + CD → AD + CB',
        desc: 'Zwei gelöste Ionenverbindungen tauschen ihre Ionenpartner und bilden einen Niederschlag.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: 'Verbrennung',
        formula: 'Brennstoff + O₂ → CO₂ + H₂O',
        desc: 'Exotherme Reaktion von Kohlenwasserstoffen mit Sauerstoff unter Freisetzung von Kohlendioxid und Wasser.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: 'Säure-Base-Neutralisation',
        formula: 'HA + BOH → BA + H₂O',
        desc: 'Protonenübertragung zwischen Säure und Base unter Bildung von Wasser und einem Salz.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  pt: {
    eyebrow: 'Referência de Reações',
    title: 'Principais Tipos de Reações Químicas',
    subtitle: 'Guia de referência das reações fundamentais reconhecidas e classificadas pelo nosso motor.',
    items: [
      {
        name: 'Síntese (Adição)',
        formula: 'A + B → AB',
        desc: 'Duas ou mais substâncias simples se unem para formar um único produto.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: 'Decomposição (Análise)',
        formula: 'AB → A + B',
        desc: 'Um único reagente se divide em duas ou mais substâncias mais simples.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: 'Simples Troca (Deslocamento)',
        formula: 'A + BC → B + AC',
        desc: 'Uma substância simples mais reativa desloca outro elemento de uma substância composta.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: 'Dupla Troca',
        formula: 'AB + CD → AD + CB',
        desc: 'Dois compostos iônicos em solução trocam seus íons, formando precipitado insolúvel ou gás.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: 'Combustão',
        formula: 'Combustível + O₂ → CO₂ + H₂O',
        desc: 'Oxidação rápida de hidrocarbonetos liberando calor, luz, dióxido de carbono e água.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: 'Neutralização Ácido-Base',
        formula: 'HA + BOH → BA + H₂O',
        desc: 'Transferência de prótons entre ácido e base, gerando água e um sal inorgânico.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  ko: {
    eyebrow: '반응 분류 레퍼런스',
    title: '주요 화학 반응의 종류와 특징',
    subtitle: '본 계산 엔진이 반응식을 분석하여 자동으로 분류하는 핵심 화학 반응 유형입니다.',
    items: [
      {
        name: '화합 (합성 반응)',
        formula: 'A + B → AB',
        desc: '둘 이상의 원소나 화합물이 결합하여 하나의 새로운 화합물을 생성하는 반응.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: '분해 반응',
        formula: 'AB → A + B',
        desc: '하나의 화합물이 둘 이상의 더 간단한 물질로 나누어지는 반응.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: '치환 (단일 치환 반응)',
        formula: 'A + BC → B + AC',
        desc: '반응성이 더 큰 원소가 화합물 속의 다른 원소를 밀어내고 자리를 바꾸는 반응.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: '복분해 (이중 치환 반응)',
        formula: 'AB + CD → AD + CB',
        desc: '수용액 속 두 이온 화합물이 양이온과 음이온을 서로 맞바꾸어 침전이나 기체를 형성하는 반응.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: '연소 반응',
        formula: '탄화수소 + O₂ → CO₂ + H₂O',
        desc: '물질이 산소와 빠르게 결합하여 열과 빛을 내며 이산화 탄소와 물을 생성하는 발열 산화 반응.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: '중화 반응 (산-염기)',
        formula: '산 + 염기 → 염 + H₂O',
        desc: '산의 수소 이온(H⁺)과 염기의 수산화 이온(OH⁻)이 반응하여 물과 염을 생성하는 반응.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  },

  it: {
    eyebrow: 'Classificazione Reazioni',
    title: 'Principali Tipi di Reazioni Chimiche',
    subtitle: 'Guida di riferimento alle categorie fondamentali di reazioni chimiche analizzate dal nostro motore.',
    items: [
      {
        name: 'Sintesi (Combinazione)',
        formula: 'A + B → AB',
        desc: 'Due o più sostanze semplici si combinano per formare un unico prodotto più complesso.',
        example: '2H₂ + O₂ → 2H₂O'
      },
      {
        name: 'Decomposizione',
        formula: 'AB → A + B',
        desc: 'Un unico composto si scinde in due o più sostanze elementari o più semplici.',
        example: '2H₂O₂ → 2H₂O + O₂'
      },
      {
        name: 'Scambio Semplice',
        formula: 'A + BC → B + AC',
        desc: 'Un elemento più reattivo sostituisce un altro elemento presente in un composto.',
        example: 'Zn + 2HCl → ZnCl₂ + H₂'
      },
      {
        name: 'Doppio Scambio',
        formula: 'AB + CD → AD + CB',
        desc: 'Due composti ionici in soluzione scambiano anioni e cationi formando un precipitato insolubile o gas.',
        example: 'AgNO₃ + NaCl → AgCl + NaNO₃'
      },
      {
        name: 'Combustione',
        formula: 'Combustibile + O₂ → CO₂ + H₂O',
        desc: 'Ossidazione rapida ed esotermica di idrocarburi con liberazione di calore, luce, CO₂ e vapore acqueo.',
        example: 'CH₄ + 2O₂ → CO₂ + 2H₂O'
      },
      {
        name: 'Neutralizzazione Acido-Base',
        formula: 'HA + BOH → BA + H₂O',
        desc: 'Trasferimento protonico tra un acido e una base per formare acqua e un sale ionico.',
        example: 'HCl + NaOH → NaCl + H₂O'
      }
    ]
  }
};

export const localizedReactionTypeMap: Record<Lang, Record<string, string>> = {
  en: {
    'Combustion': 'Combustion',
    'Synthesis (Combination)': 'Synthesis (Combination)',
    'Decomposition': 'Decomposition',
    'Acid-Base Neutralization': 'Acid-Base Neutralization',
    'Single Replacement': 'Single Replacement',
    'Double Replacement': 'Double Replacement',
    'Oxidation-Reduction (Redox)': 'Oxidation-Reduction (Redox)',
    'Chemical Reaction': 'Chemical Reaction',
  },
  es: {
    'Combustion': 'Combustión',
    'Synthesis (Combination)': 'Síntesis (Combinación)',
    'Decomposition': 'Descomposición',
    'Acid-Base Neutralization': 'Neutralización Ácido-Base',
    'Single Replacement': 'Desplazamiento Simple',
    'Double Replacement': 'Doble Desplazamiento',
    'Oxidation-Reduction (Redox)': 'Oxidación-Reducción (Redox)',
    'Chemical Reaction': 'Reacción Química',
  },
  ja: {
    'Combustion': '燃焼反応',
    'Synthesis (Combination)': '化合（合成反応）',
    'Decomposition': '分解反応',
    'Acid-Base Neutralization': '中和反応（酸塩基）',
    'Single Replacement': '単置換反応',
    'Double Replacement': '複置換反応',
    'Oxidation-Reduction (Redox)': '酸化還元反応 (Redox)',
    'Chemical Reaction': '化学反応',
  },
  fr: {
    'Combustion': 'Combustion',
    'Synthesis (Combination)': 'Synthèse (Combinaison)',
    'Decomposition': 'Décomposition',
    'Acid-Base Neutralization': 'Neutralisation Acide-Base',
    'Single Replacement': 'Simple Déplacement',
    'Double Replacement': 'Double Déplacement',
    'Oxidation-Reduction (Redox)': 'Oxydoréduction (Redox)',
    'Chemical Reaction': 'Réaction Chimique',
  },
  de: {
    'Combustion': 'Verbrennung',
    'Synthesis (Combination)': 'Synthese (Kombination)',
    'Decomposition': 'Zersetzung',
    'Acid-Base Neutralization': 'Säure-Base-Neutralisation',
    'Single Replacement': 'Einfache Substitution',
    'Double Replacement': 'Doppelte Umsetzung',
    'Oxidation-Reduction (Redox)': 'Redoxreaktion',
    'Chemical Reaction': 'Chemische Reaktion',
  },
  pt: {
    'Combustion': 'Combustão',
    'Synthesis (Combination)': 'Síntesis (Adição)',
    'Decomposition': 'Decomposição',
    'Acid-Base Neutralization': 'Neutralização Ácido-Base',
    'Single Replacement': 'Simples Troca',
    'Double Replacement': 'Dupla Troca',
    'Oxidation-Reduction (Redox)': 'Oxirredução (Redox)',
    'Chemical Reaction': 'Reação Química',
  },
  ko: {
    'Combustion': '연소 반응',
    'Synthesis (Combination)': '화합 (합성 반응)',
    'Decomposition': '분해 반응',
    'Acid-Base Neutralization': '중화 반응',
    'Single Replacement': '치환 반응',
    'Double Replacement': '복분해 반응',
    'Oxidation-Reduction (Redox)': '산화 환원 반응',
    'Chemical Reaction': '화학 반응',
  },
  it: {
    'Combustion': 'Combustione',
    'Synthesis (Combination)': 'Sintesi (Combinazione)',
    'Decomposition': 'Decomposizione',
    'Acid-Base Neutralization': 'Neutralizzazione Acido-Base',
    'Single Replacement': 'Scambio Semplice',
    'Double Replacement': 'Doppio Scambio',
    'Oxidation-Reduction (Redox)': 'Ossidoriduzione (Redox)',
    'Chemical Reaction': 'Reazione Chimica',
  },
};


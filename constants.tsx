
import { Question, ParadigmType, PersonaData } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "在探讨社会问题时，你认为最理想的解决路径是：",
    options: [
      { text: "通过法律与制度的渐进改良。", type: ParadigmType.Rational },
      { text: "优先发展生产力，解决物质匮乏。", type: ParadigmType.Pragmatic },
      { text: "拆解既有权力结构，实现本质公平。", type: ParadigmType.Deconstruction },
      { text: "包容边缘声音，建立情感连接。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 2,
    text: "当你听到“为了大局着想”时，你的第一直觉是：",
    options: [
      { text: "怀疑这个“大局”背后隐藏的利益博弈。", type: ParadigmType.Deconstruction },
      { text: "只要程序合法，必要的牺牲可以讨论。", type: ParadigmType.Rational },
      { text: "关心在宏大叙事下被牺牲的每个个体。", type: ParadigmType.Inclusion },
      { text: "计算这种方案在现实中的损益比。", type: ParadigmType.Pragmatic }
    ]
  },
  {
    id: 3,
    text: "关于“真理”的存在方式，你更愿意相信：",
    options: [
      { text: "真理是客观的逻辑推导与实证验证。", type: ParadigmType.Rational },
      { text: "真理往往是历史胜利者编写的解释权。", type: ParadigmType.Deconstruction },
      { text: "真理是流动、多元且碎片化的经验。", type: ParadigmType.Inclusion },
      { text: "真理就是那种能在现实中解决问题的观点。", type: ParadigmType.Pragmatic }
    ]
  },
  {
    id: 4,
    text: "面对网络争议，你通常关注的焦点是：",
    options: [
      { text: "哪种建议在现实中更具可操作性。", type: ParadigmType.Pragmatic },
      { text: "论证过程是否逻辑严密、证据可信。", type: ParadigmType.Rational },
      { text: "谁被边缘化了，谁的声音没被听见。", type: ParadigmType.Inclusion },
      { text: "这场争论背后反映了什么样的权力操控。", type: ParadigmType.Deconstruction }
    ]
  },
  {
    id: 5,
    text: "你如何理解“传统”对现代社会的价值？",
    options: [
      { text: "它是用于巩固既得利益的文化迷思。", type: ParadigmType.Deconstruction },
      { text: "它是人类理性长期演化的文明契约。", type: ParadigmType.Rational },
      { text: "它是我们可以随时调用的实用工具箱。", type: ParadigmType.Pragmatic },
      { text: "它是承载个体记忆的经验博物馆。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 6,
    text: "当“公平”被提起，你最在乎的是：",
    options: [
      { text: "规则的一致性。底线规则对所有人平等。", type: ParadigmType.Rational },
      { text: "生存的保障。物质基础高于空洞的口号。", type: ParadigmType.Pragmatic },
      { text: "差异的容忍。考虑到弱势群体的特殊困境。", type: ParadigmType.Inclusion },
      { text: "结构的批判。反思规则本身的不平等。", type: ParadigmType.Deconstruction }
    ]
  },
  {
    id: 7,
    text: "你认为“知识”最迷人的地方在于：",
    options: [
      { text: "识破社会谎言和权力陷阱的敏锐。", type: ParadigmType.Deconstruction },
      { text: "在混沌中建立清晰的逻辑秩序。", type: ParadigmType.Rational },
      { text: "作为改变客观世界的实用利刃。", type: ParadigmType.Pragmatic },
      { text: "理解他者痛苦、消除偏见的共情。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 8,
    text: "如果法律与个人道德冲突，你会觉得：",
    options: [
      { text: "优先维护法律，制度动摇代价更大。", type: ParadigmType.Rational },
      { text: "寻求务实折中方案，降低社会成本。", type: ParadigmType.Pragmatic },
      { text: "这说明法律本身就是特定权力的产物。", type: ParadigmType.Deconstruction },
      { text: "人性考量应高于冷冰冰的法律条文。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 9,
    text: "你最不信任的那类“正确观点”通常是：",
    options: [
      { text: "逻辑混乱、全凭感性冲动煽动的。", type: ParadigmType.Rational },
      { text: "看似中立但回避权力分配问题的。", type: ParadigmType.Deconstruction },
      { text: "高尚宏大但在现实中毫无操作性的。", type: ParadigmType.Pragmatic },
      { text: "带有强烈排他性、抹杀差异性的。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 10,
    text: "你理想中的未来世界底色更接近：",
    options: [
      { text: "温情互助，每个人都被充分尊重。", type: ParadigmType.Inclusion },
      { text: "高效繁荣，技术消灭了物质匮乏。", type: ParadigmType.Pragmatic },
      { text: "彻底透明，没有人拥有不公特权。", type: ParadigmType.Deconstruction },
      { text: "理性有序，拥有一套完美的共识法则。", type: ParadigmType.Rational }
    ]
  },
  {
    id: 11,
    text: "关于“教育”的核心使命，你的选择是：",
    options: [
      { text: "教授现实技能，让学生更有产出价值。", type: ParadigmType.Pragmatic },
      { text: "培养客观思维，让学生具备逻辑判断力。", type: ParadigmType.Rational },
      { text: "唤醒共情能力，引导学生理解多元社会。", type: ParadigmType.Inclusion },
      { text: "赋予批判武器，学会质疑既有制度。", type: ParadigmType.Deconstruction }
    ]
  },
  {
    id: 12,
    text: "当你的核心信念被挑战时，你倾向于：",
    options: [
      { text: "要求对方提供证据，进行逻辑博弈。", type: ParadigmType.Rational },
      { text: "衡量对方的观点是否在现实中更管用。", type: ParadigmType.Pragmatic },
      { text: "审视对方立场所代表的价值观冲突。", type: ParadigmType.Deconstruction },
      { text: "反思自己的偏见，尝试感受对方的境遇。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 13,
    text: "谈到“人工智能”的风险，你最担心：",
    options: [
      { text: "法律真空导致的算法责任权属不明。", type: ParadigmType.Rational },
      { text: "技术巨头借算法实现的话语垄断。", type: ParadigmType.Deconstruction },
      { text: "自动化导致失业带来的现实生存危机。", type: ParadigmType.Pragmatic },
      { text: "隐性偏见对边缘群体的进一步伤害。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 14,
    text: "你认为语言的主要局限在于：",
    options: [
      { text: "语言本身就是一套带有偏见的分类系统。", type: ParadigmType.Deconstruction },
      { text: "不够严密，容易产生语义歧义和误导。", type: ParadigmType.Rational },
      { text: "过于抽象，脱离了具体的生产劳动。", type: ParadigmType.Pragmatic },
      { text: "无法传达个体生命深处最独特的痛苦。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 15,
    text: "关于“正义”，你认为最接近的定义是：",
    options: [
      { text: "能让大多数人获益的资源分配方式。", type: ParadigmType.Pragmatic },
      { text: "一套像物理规律一样稳定运行的契约。", type: ParadigmType.Rational },
      { text: "对边缘弱小者极致的理解与保护。", type: ParadigmType.Inclusion },
      { text: "对绝对权威持续不断的拆解与反抗。", type: ParadigmType.Deconstruction }
    ]
  },
  {
    id: 16,
    text: "你在评价一个人的表达水平时，首要指标是：",
    options: [
      { text: "逻辑是否闭环，论证是否经得起推敲。", type: ParadigmType.Rational },
      { text: "是否敢于挑战陈词滥调，指出背后的猫腻。", type: ParadigmType.Deconstruction },
      { text: "是否提供了切实可行的行动指南。", type: ParadigmType.Pragmatic },
      { text: "是否充满共鸣感，能连接不同的人。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 17,
    text: "对于“贫穷”的根源，你倾向于归因：",
    options: [
      { text: "生产分配不均与效率提升不明显。", type: ParadigmType.Pragmatic },
      { text: "社会分配规则与契约保障不完善。", type: ParadigmType.Rational },
      { text: "深层的话语剥夺与结构性不公。", type: ParadigmType.Deconstruction },
      { text: "社会对他者生命处境的系统性忽视。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 18,
    text: "当互联网出现“反转新闻”，你的反应是：",
    options: [
      { text: "等待更完整的证据链和权威调查报告。", type: ParadigmType.Rational },
      { text: "分析是谁在操纵舆论，目的为何。", type: ParadigmType.Deconstruction },
      { text: "觉得这种无效率的争吵在浪费社会资源。", type: ParadigmType.Pragmatic },
      { text: "心痛于真相反转背后被消费的个人悲剧。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 19,
    text: "你如何看待“身份政治”和标签化？",
    options: [
      { text: "应强调普世公民权，不应做差异化对待。", type: ParadigmType.Rational },
      { text: "标签是权力为了方便管理而人为建构的。", type: ParadigmType.Deconstruction },
      { text: "看这些标签能否争取到具体的物质利益。", type: ParadigmType.Pragmatic },
      { text: "尊重基于独特身份的生活经验与自我表达。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 20,
    text: "团队协作中如果有人表现不佳，你会：",
    options: [
      { text: "按事先约定的考核规则进行处理。", type: ParadigmType.Rational },
      { text: "寻找补救办法，保证最终产出目标。", type: ParadigmType.Pragmatic },
      { text: "反思公司的压榨结构是否导致了他的低效。", type: ParadigmType.Deconstruction },
      { text: "询问他是否遇到具体困难，给予情感支持。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 21,
    text: "关于“艺术品”的评价，你最认可：",
    options: [
      { text: "解构主流审美，释放被压抑的创造力。", type: ParadigmType.Deconstruction },
      { text: "在逻辑与构图上达到完美的和谐感。", type: ParadigmType.Rational },
      { text: "能产生显著社会效应或改善生活质量。", type: ParadigmType.Pragmatic },
      { text: "传达那些语言无法表达的细腻情感。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 22,
    text: "你认为一个人成熟的标志是：",
    options: [
      { text: "理智控制情绪，学会按证据和规则办事。", type: ParadigmType.Rational },
      { text: "学会务实，专注解决物质与效率问题。", type: ParadigmType.Pragmatic },
      { text: "看透社会套路，保持清醒的怀疑力。", type: ParadigmType.Deconstruction },
      { text: "变得宽厚包容，体谅每个生命的不易。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 23,
    text: "如果世界末日将至，你最想留给未来文明的是：",
    options: [
      { text: "一套严密公正的社会运行准则底稿。", type: ParadigmType.Rational },
      { text: "揭露文明权力运作导致崩溃的备忘录。", type: ParadigmType.Deconstruction },
      { text: "关于基础生产与科学技术的实用手册。", type: ParadigmType.Pragmatic },
      { text: "记录普通人痛苦与温情的日记和影像。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 24,
    text: "面对“性别议题”，你通常的做法是：",
    options: [
      { text: "依据法律谈具体的权益分配，追求公平。", type: ParadigmType.Rational },
      { text: "专注解决具体的就业、育儿等现实问题。", type: ParadigmType.Pragmatic },
      { text: "拆解“性别”概念在话语体系中的建构。", type: ParadigmType.Deconstruction },
      { text: "倾听个体在具体境遇下的真实焦虑。", type: ParadigmType.Inclusion }
    ]
  },
  {
    id: 25,
    text: "你认为社会最危险的倾向是：",
    options: [
      { text: "非理性的感性冲动无视法律与程序。", type: ParadigmType.Rational },
      { text: "绝对的思想垄断抹杀了所有的差异性。", type: ParadigmType.Inclusion },
      { text: "低效分配导致大多数人陷入生存焦虑。", type: ParadigmType.Pragmatic },
      { text: "固化的权力结构通过精致叙事合理化。", type: ParadigmType.Deconstruction }
    ]
  }
];

export const PERSONAS: Record<ParadigmType, PersonaData> = {
  [ParadigmType.Rational]: {
    name: "理性派",
    mentor: "罗尔斯 (John Rawls)",
    avatar: "rawls.jpg",
    quote: "讲道理、看证据。如果没有公平的规则，自由只是强者的特权。",
    intro: "你是坚定的逻辑主义者。在你看来，无论是争论还是合作，都得先讲规矩、对齐事实。你拒绝感性煽动，只相信论证的严密性。",
    traits: [
      "说话讲逻辑，做事有章法",
      "重视规则的公平性，拒绝双标",
      "能快速从情绪垃圾中提取核心事实"
    ],
    limitations: [
      "有时显得太冷静，给人以“缺乏温度”的错觉",
      "在面对逻辑无法解释的情感冲突时，会感到无所适从",
      "容易为了维护程序的正义，而忽视了某些极端的现实苦难"
    ],
    books: ["《正义论》", "《学会提问》", "《简单的逻辑学》"],
    color: "#1e3a8a" // Deep Maillard Blue
  },
  [ParadigmType.Deconstruction]: {
    name: "解构派",
    mentor: "福柯 (Michel Foucault)",
    avatar: "foucault.jpg",
    quote: "看穿套路，直戳痛点。任何被标榜为‘理所当然’的事，背后都有权力在运作。",
    intro: "你有一双“X光”般的眼睛。你从不轻信任何权威或所谓的常识，总能一眼看穿那些高尚说辞背后的利益交换与权力操弄。",
    traits: [
      "擅长拆穿谎言和各种“主义”下的潜规则",
      "对社会流行语和洗脑文案保持高度警惕",
      "天生具备批判性思维，总能从边缘视角看问题"
    ],
    limitations: [
      "由于思考太深且总是持怀疑态度，容易陷入持续的虚无与焦虑",
      "非常擅长“拆台”，但在提出建设性的替代方案时较弱",
      "表达往往太犀利且不留情面，容易在沟通中把话聊死"
    ],
    books: ["《规训与惩罚》", "《娱乐至死》", "《疯癫与文明》"],
    color: "#0f172a" // Deepest Navy
  },
  [ParadigmType.Pragmatic]: {
    name: "务实派",
    mentor: "马克思 (Karl Marx)",
    avatar: "marx.jpg",
    quote: "有用最重要。哲学家们只是用不同的方式解释世界，而问题在于改变世界。",
    intro: "你是绝对的实干派。比起优美动听但悬浮的口号，你更在意实际的结果。你认为世界的改变靠的是物质、资源和实实在在的行动。",
    traits: [
      "效率第一，结果导向，极度讨厌虚头巴脑的讨论",
      "非常看重物质基础、经济规律和方案的可操作性",
      "能迅速把复杂的宏大叙事拆解为可执行的具体动作"
    ],
    limitations: [
      "容易因为过于专注利益与结果，被误解为“功利主义”或“利己”",
      "对于非物质的、纯思辨性的交流往往缺乏足够的耐心",
      "为了追求整体的高效率运行，有时会下意识地牺牲掉个体的感受"
    ],
    books: ["《资本论》", "《贫穷的本质》", "《搞定》"],
    color: "#92400e" // Maillard Amber/Brown
  },
  [ParadigmType.Inclusion]: {
    name: "包容派",
    mentor: "德里达 (Jacques Derrida)",
    avatar: "derrida.jpg",
    quote: "在乎每个人的感受。差异不是敌人，是我们理解世界的起点。",
    intro: "你是温暖且深刻的沟通者。你反对任何“一刀切”的结论，致力于在主流叙事的缝隙中寻找多元的可能性。",
    traits: [
      "尊重每个人的独特性，反对给任何活生生的人打标签",
      "是极佳的倾听者，总能察觉到对方没说出口的委屈和处境",
      "善于从碎片化、感性的视角中发现被大众忽视的细节美感"
    ],
    limitations: [
      "因为过度在意每个人的感受和意见，容易在决策时陷入犹豫不决",
      "由于心智极度敏感且富于同理，常常会内耗到筋疲力竭",
      "在需要进行冷酷的逻辑辩论或权力博弈时，会表现得过于温和"
    ],
    books: ["《论文字学》", "《偏见的本质》", "《你当像鸟飞往你的山》"],
    color: "#334155" // Muted Slate Blue
  }
};

/**
 * The 6 named, attested forms of Karuppu Swamy (build-spec.md §1.3, §3.1).
 *
 * Tradition speaks of 108 forms — that number is devotional [BELIEF], not documented.
 * These six are the real, attested catalogue. In the monochrome direction (plan.md §7)
 * the gods carry no colour — only a NAME and a MOTION. The `act` is the brief for each
 * god's video clip; until the clips exist, the blurred photo stands in.
 */

export type FormId = "sangili" | "periya" | "chinna" | "mangadu" | "sangani" | "vettai";

export interface KaruppuForm {
  id: FormId;
  num: string;
  /** English name. */
  name: string;
  /** Tamil name (rendered typographically, never generated). */
  tamil: string;
  /** Short distinguishing trait. */
  epithet: string;
  /** Where this form is most honoured. */
  region: string;
  /** Card still in /public. */
  image: string;
  /** A reverent one-paragraph description. */
  description: string;
  /** The divine act this form is known for — the brief for the deferred motion clip. */
  act: string;
  /**
   * Reserved video slot — the god's "motion." Empty for now; drop a path here
   * (e.g. "/video/sangili.mp4") later and every MotionSlot for this form plays
   * it with no code change. The landing shows it blurred; the sanctum, clear.
   */
  video?: string;
  /** True where a claim is devotional/unverified and must be tagged on the site. */
  verify?: boolean;
}

export const forms: KaruppuForm[] = [
  {
    id: "sangili",
    num: "01",
    name: "Sangili Karuppan",
    tamil: "சங்கிலி கருப்பன்",
    epithet: "The chain-bound protector",
    region: "Tamil Nadu · Malaysia · Singapore",
    image: "/img/forms/sangili-karuppu.jpeg",
    description:
      "Bound in heavy iron chains, Sangili Karuppan is the fiercest protective form — the guardian who carries his own restraint as a vow. Borne across the seas by Tamil labourers, he became one of the most beloved deities of the Malaysian and Singaporean diaspora.",
    act: "Strains against the iron chains until they snap, releasing a ring of protective fire that seals the darkness away.",
  },
  {
    id: "periya",
    num: "02",
    name: "Periya Karuppu",
    tamil: "பெரிய கருப்பு",
    epithet: "The great elder",
    region: "Tamil Nadu",
    image: "/img/forms/periya-karuppu.jpeg",
    description:
      "The elder and greater — larger of frame, fuller of beard, draped in ornate garlands. Periya Karuppu is the commanding presence among the guardians, the senior voice whose word settles disputes and whose stride shakes the ground.",
    act: "Raises the aruval overhead and strikes the earth, sending a molten copper-amber shockwave rippling outward.",
  },
  {
    id: "chinna",
    num: "03",
    name: "Chinna Karuppu",
    tamil: "சின்ன கருப்பு",
    epithet: "The young and swift",
    region: "Tamil Nadu",
    image: "/img/forms/chinna-karuppu.jpeg",
    description:
      "The younger one — lean, alert, agile and swift to answer the call. Where the elder commands, Chinna Karuppu moves: lighter in adornment, quicker in step, cool as the blue-white flame of burning camphor.",
    act: "Moves at impossible divine speed, leaving cool camphor-blue light trails and a flurry of lightning-fast strikes.",
  },
  {
    id: "mangadu",
    num: "04",
    name: "Mangadu Karuppu",
    tamil: "மாங்காடு கருப்பு",
    epithet: "Guardian of the grove",
    region: "Mangadu, Tamil Nadu",
    image: "/img/forms/mangadu-karuppu.jpeg",
    description:
      "Stationed at the wilderness boundary — the kāṭu — where the village ends and the grove begins, Mangadu Karuppu keeps watch with his sword raised in vigilance. His is the sacred green of the neem, the protector of the threshold.",
    act: "Summons the wilderness — glowing roots and a spectral horse and hound rise within a dome of sacred-green energy.",
  },
  {
    id: "sangani",
    num: "05",
    name: "Sangani Baba",
    tamil: "சங்கனி பாபா",
    epithet: "The ocean-crossed",
    region: "Trinidad · Guyana · Suriname",
    image: "/img/forms/sangani-baba.jpeg",
    description:
      "Carried across the kala pani — the dark waters — to the Indo-Caribbean, Karuppu is honoured here as Sangani Baba in folk shrines from Trinidad to Suriname. A guardian who followed his people to the far shore and stayed.",
    act: "Opens a swirling indigo-violet portal above a dark ocean, sending spirit-lights streaming toward distant shores.",
    verify: true,
  },
  {
    id: "vettai",
    num: "06",
    name: "Vettai Karuppu",
    tamil: "வேட்டை கருப்பு",
    epithet: "The divine hunter",
    region: "Tamil Nadu",
    image: "/img/forms/vettai-karuppu.jpeg",
    description:
      "The hunter of the night, lean and fierce, who runs down evil with his hunting dog (vettai naai) at his heel and a bow of cold light in hand. His is the spectral grey of moonlit mist and cremation-ground ash.",
    act: "Strides through moonlit mist tracking a fleeing shadow, then looses a bow of cold light to pin it as the hound lunges.",
    verify: true,
  },
];

export const formById = (id: string): KaruppuForm | undefined =>
  forms.find((f) => f.id === id);

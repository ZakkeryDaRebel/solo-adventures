export const Alignment = {
  LG: "Lawful Good",
  NG: "Neutral Good",
  CG: "Chaotic Good",
  LN: "Lawful Neutral",
  TN: "True Neutral",
  CN: "Chaotic Neutral",
  LE: "Lawful Evil",
  NE: "Neutral Evil",
  CE: "Chaotic Evil",
  UA: "Unaligned",
  // Have to create the reverse so that the code
  //   can register that LG is Lawful Good, etc.
  ["Lawful Good"]: "LG",
  ["Neutral Good"]: "NG",
  ["Chaotic Good"]: "CG",
  ["Lawful Neutral"]: "LN",
  ["True Neutral"]: "TN",
  ["Chaotic Neutral"]: "CN",
  ["Lawful Evil"]: "LE",
  ["Neutral Evil"]: "NE",
  ["Chaotic Evil"]: "CE",
  ["Unaligned"]: "UA",
} as const;

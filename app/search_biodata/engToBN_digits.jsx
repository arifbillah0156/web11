export default function convertToBanglaDigits(input) {
  const englishToBanglaMap = {
    0: "0",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return input.replace(/\d/g, (digit) => englishToBanglaMap[digit]);
}

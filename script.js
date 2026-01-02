function convertToRoman(num) {
  if (num === 0) return "";

  const symbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let i = 0; i < symbols.length; i++) {
    const [roman, value] = symbols[i];

    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

module.exports = convertToRoman;

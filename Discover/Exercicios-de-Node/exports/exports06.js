function getFlagValue(a) {
  var namer = process.argv[3] || "Nome padrão";
  let greeting = process.argv[5] || "Saudação padrão";
  return { namer, greeting };
};

module.exports = getFlagValue;
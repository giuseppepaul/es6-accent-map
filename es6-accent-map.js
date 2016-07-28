const testChars = {
  'é': 'e',
  'å': 'a',
  'î': 'FOO',
  'ñ': 'BAR'
};

const normaliseString = (str, charMap) => {
    let normalised = str;
    Object.keys(charMap).forEach(function(key) {
      normalised = normalised.replace(new RegExp(key, 'g'), charMap[key]);
    });
    return normalised;
};

console.log(normaliseString("åå éé îñ", testChars));

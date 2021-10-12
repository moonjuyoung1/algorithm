const getLengthOfStr = (str) => {
  if (str.indexOf(str[0], 1)) {
    const number = str.indexOf(str[0], 1);
    if (number === -1) {
      return 0;
    } else {
      return number;
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      for (let v = 1; v < str.length; i++) {
        if (str[i] === str[v]) {
          if (i + 1 > str.length - v) {
            return i + 1;
          } else {
            return str.length - v;
          }
        }
      }
    }
  }
};

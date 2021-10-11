function number() {
  let arr = [];
  for (i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

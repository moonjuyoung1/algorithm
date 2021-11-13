function solution(d, budget) {
  d.sort((a, b) => a - b);
  const result = [];
  d.forEach((el) => {
    result.push(el);
    const resultSum = result.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);

    if (resultSum > budget) {
      result.pop();
    }
  });
  return result.length;
}

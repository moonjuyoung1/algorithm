function solution(N, stages) {
  let result = [];
  let number = stages.length;

  let num = [];
  for (let i = 1; i < N + 2; i++) {
    result.push(stages.filter((element) => i === element).length);
  }

  for (let i = 0; i < N; i++) {
    num.push({ idx: i + 1, ratio: result[i] / number });

    number -= result[i];
  }

  num.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1;
    } else if (a.ratio < b.ratio) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  return num.map((ele) => ele.idx);
}

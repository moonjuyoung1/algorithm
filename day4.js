function solution(arr1, arr2) {
  var answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];

    for (let v = 0; v < arr1[0].length; v++) {
      let sum = arr1[i][v] + arr2[i][v];
      answer[i].push(sum);
    }
  }

  return answer;
}

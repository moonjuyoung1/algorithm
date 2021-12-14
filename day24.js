// nums는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

function topK(nums, k) {
  const result = {};
  let answer = [];
  nums.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  const sortable = [];
  for (let num in result) {
    sortable.push([num, result[num]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (let i = 0; i < k; i++) {
    let value = sortable[i][0];
    value = Number(value);

    answer.push(value);
  }

  return answer;
}
topK([2, 1, 3, 2, 2, 3], 2);

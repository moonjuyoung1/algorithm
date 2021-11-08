// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
//만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let v = i + 1; v < numbers.length; v++) {
      answer.push(numbers[i] + numbers[v]);
      answer.sort((a, b) => a - b);
    }
  }
  const result = new Set(answer);
  answer = [...result];
  return answer;
}

function solution(p, c) {
  const sum = p.concat(c);

  for (let i = 0; i < p.length; i++) {
    for (let v = 0; v < c.length; v++) {
      if (p[i] === c[v]) {
        p.splice(i, 1);

        i--;

        console.log(p);
      }
    }
  }
}

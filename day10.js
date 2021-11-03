// 정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
  let result;
  for (var i = 1; i < 10000000; i++) {
    if (n === i * i) {
      result = (i + 1) * (i + 1);
    }
  }
  if (result === undefined) {
    result = -1;
  }
  return result;
}

solution(3);

// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

function solution(n) {
  var answer = 0;
  answer = (n + "").split("");
  answer.sort((a, b) => b - a);
  answer = answer.join("");
  answer = Number(answer);

  return answer;
}

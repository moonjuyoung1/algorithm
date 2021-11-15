// 없는 숫자 더하기

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.forEach((number) => {
    result = result.filter((element) => element !== number);
  });
  result = result.reduce(function (sum, currValue) {
    return sum + currValue;
  });
  return result;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);

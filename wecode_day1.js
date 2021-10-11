// twoSum함수에 숫자배열과 '특정 수'를 인자로 넘기면, 더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.

// nums: 숫자 배열
// target: 두 수를 더해서 나올 수 있는 합계
// return: 두 수의 index를 가진 숫자 배열

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let v = i + 1; v < nums.length; v++) {
      if (nums[i] + nums[v] === target) {
        return [i, v];
      }
    }
  }
};

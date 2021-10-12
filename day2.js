// 숫자로 이루어진 배열인 nums를 인자로 전달합니다. 숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

function moreThanHalf(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = nums.filter((element) => element === nums[i]).length;
    if (count > nums.length / 2) {
      return nums[i];
    }
  }
}

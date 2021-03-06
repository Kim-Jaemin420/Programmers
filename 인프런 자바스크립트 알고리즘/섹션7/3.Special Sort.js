// 내 답
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < 0 && arr[j] < 0 && arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 강사님 답
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

/////////////////////////////////////////////
// 2회차 풀이
////////////////////////////////////////////
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1 - i; j++) {
      if (arr[j] < 0 && arr[j - 1] > 0)
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return answer;
}

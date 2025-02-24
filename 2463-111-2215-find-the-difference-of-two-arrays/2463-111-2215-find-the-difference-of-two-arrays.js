/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    return [Array.from(set1).filter(num => !set2.has(num)), Array.from(set2).filter(num => !set1.has(num))];
};

/*
문제 이해
- 입력 : 정수로 구성된 배열1, 배열2
    - 길이는 1 이상, 1000 이하
- 출력 : 2개의 배열을 요소로 갖는 2차원 배열 (요소1은 배열 1에 있지만 배열 2에 없는 요소로 구성, 요소2는 그 반대)
    - 음수일수도, 양수일수도 있음

접근
- 배열1의 요소가 배열2에 포함여부를 판단한다
    - 아이디어 : 포함 여부를 판단할 때 "Set" 자료구조를 많이 활용하는데, 때에 따라 더 나은 방법을 떠오를 수 있도록 이외 다른 옵션도 알아두면 좋겠다.    
    - 고민 : 양쪽을 서로 검사해야 하는가?

기타
- 문제 유형이 해시맵이라는 걸 봤는데 개의치 말고 생각해보기
*/

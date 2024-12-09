/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

/*
# sort 메소드에 대해 알 수 있었던 문제 (mdn 한 번 더 체크)

## 왜 sort()는 'sort된 원본 배열의 참조'를 return하는가?: (새로 알게된 사실) 'in-place algorithm'이라는 알고리즘을 사용하기 때문.
- 컴퓨터과학에서 in-place algorithm는 알고리즘이 입력 자체를 변환하는 것으로, 새롭게 공간을 할당하지 않음. 즉 원본을 직접 조작하는 방식임.
- mdn 원문: The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.
- 참고) 원본 영향 없이 sort 하는 방법은 몇가지 있는데, spread 연산자와 함께 sort()를 사용하거나 Array.prototype.toSorted()를 고려하는 방법도 있다.
    - 전자는 원본을 복사해서 새로운 배열을 참조해서 sort 하는 것. 후자는 원본 자체를 참조해도 원본 영향 없이 정렬된 복사본이 반환되도록 하는 것.

## 참고) Sort stability (2019년 이후 부터). 몰랐는데 이렇게 예상치 못한 결과를 주의하는 관점 중요하겠다.
- 이전에는 동점이 발생하면, sort()가 원본의 정렬 순서를 보장해주지 못하고 동점 요소간의 순서가 바뀌는 경우도 있었다고 한다.
- version 10 (or ECMAScript 2019) 부터는 동점이 발생하면, 정렬 이전의 순서를 보장해준다고 한다.
- mdn 원문: It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

## 다중 조건으로 정렬도 가능하다. 최근 DB에서 정렬 기능 구현하면서, 데이터 쿼리할 때 사용했었는데 이런 원리와 유사한 맥락으로 보인다.
- data.sort((a, b) => a.가격 - b.가격 || a.이름.localeCompare(b.이름));
    - 위 가격 낮은 순 정렬후, 가격 같으면 이름순 정렬하는 로직

## sort 내부 동작도 알아두면 좋으니 나중에 체크하기
- 특히 흥미롭게 생각하는 부분은 "브라우저별 sort 함수의 구현체가 다르지만 ECMAScript 명세를 지킨다."의 내용.
- 참고) https://1ilsang.dev/posts/array-prototype-sort

## sort의 매개변수로 들어오는 compareFn은 2개의 인자를 받으며 호출된다. 둘 다 비교대상이 됨.
// e.g.
const items = [
  { name: "갑", value: 21 },
  { name: "을", value: -37 },
];
items.sort((a, b) => a.value - b.value);
// [
//   { name: '을', value: -37 },
//   { name: '갑', value: 21 },
// ]
*/

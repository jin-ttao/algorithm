/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const length = nums.length;
    const size = new Set(nums).size;

    return length !== size;
};

/*
### 문제 정의
- input: 정수를 포함한 배열 nums
- output: 배열 안에 중복 요소가 1개라도 있으면 true, 아니라면 false (boolean)

### 접근
요소의 개수를 세는 방법도 있겠지만, 최대한 복잡도가 낮은 방법이 뭘까?
- JS에서 중복 제거를 위해 자주 사용하는 Set 객체를 활용하고, length와 size를 비교해보자.

### 리서치 해보니
- 왜 Set 객체를 사용하는 것이 복잡도가 낮은 방법일까? => 정확히 하자면, 순회하는 과정이 빠를 수 있는 것.
- Set 객체의 특성을 이해하는 데에 'hash table'가 굉장히 중요한 개념.
- Set 객체는 내부적으로 hash table를 사용하는 자료구조임. 이에 따른 trade-off도 발생.
    - 때문에 속도가 array 보다 빠름.
    - hash table를 유지하기 위해 추가적인 정보를 유지해야 할 수 있어서 큰 데이터 집합에서는 array 대비 메모리 사용량 차이가 날 수 있음. (공간 복잡도)
- 그럼 왜 hash table로 구성하면 빠를까?

함께 비교되는 대상으로 map 객체도 있는데,
애플리케이션에 어떤 자료구조를 쓸지 의사결정을 할 수 있어야 한다고 함. 당연히 trade-off가 있을 수 있으니 근거가 분명해야 함.
=> 그럼 단순하고 작은 데이터에서는 배열을 사용하는 것이 더 나은 선택일 수 있겠다. 늘 Set, Map 같은 hash table 기반 객체가 정답은 아닐 것.
참고 https://medium.com/@dm_md/unveiling-the-speed-of-javascript-collections-set-vs-map-vs-array-vs-object-3f6e44f24505
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    
    if (!list2) {
        return list1;
    }
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

/*
- input: 정렬된 linked list 2개
- output: 2개의 linked list가 합쳐진 후 정렬된 하나의 linked list

## 3rd 풀이
- linked list의 value 비교후 재귀 호출

## 2nd 풀이
- 둘 중 하나의 linked list의 node를 꼽아 다른 linked list에 삽입하는 방법
    - 하나의 node를 꼽는다
    - 들어갈 위치를 찾는다
    - 들어갈 위치를 찾으면 그 이후의 node들을 옮겨, 꼽힌 node를 head로 하여 연결한다.
    > 포인터 이동이 복잡해져서 다른 방법 시도.

## 1st 풀이
const mergeTwoLists = function(list1, list2) {
    const list = [...list1, ...list2];    
    return list.sort((a, b) => a - b);
};

- 간단한 문제로 생각했지만, 단순한 문제가 아니었음.
- Error: list1 is not iterable. 에러 확인. console.log(list1[0]);도 해보니 undefined 출력됨.
*/

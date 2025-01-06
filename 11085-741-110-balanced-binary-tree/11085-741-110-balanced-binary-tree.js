/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = function(root) {
    if (root == null) {
        return true;
    }

	if (getHeight(root) == -1) {
        return false;
    }

	return true;
}

const getHeight = function(root) {
	if (root == null) {
        return 0;
    }

	const leftHeight = getHeight(root.left);
	const rightHeight = getHeight(root.right);

	if (leftHeight == -1 || rightHeight == -1) {
        return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

	return Math.max(leftHeight, rightHeight) + 1;
};

/*
- 함수의 역할을 분리해보는 접근을 활용해보자. 함수가 해내야 할 것이 명확히 보여서 구조를 짜기 좋다.
    - 최종 결과를 출력할 함수 isBalanced
    - height 연산할 함수 getHeight

- node.val이 아니라 node를 검사해야 하는 이유는?
    - 이진 트리에서 null 체크는 node 자체의 존재 여부를 확인하는 것이 기본 패턴이라고 함.
    - 왜 표준인지는 더 찾아봐야 하는데 현재 발견하지 못 함.

- 초기 문제 풀 때, 클로저를 활용하는 접근으로 생각했으나, 틀린 접근이었다.
    - 자바스크립트에서 클로저는 함수 선언 때 마다 발생함. (함수 호출이 아님)
        - MDN "In JavaScript, closures are created every time a function is created, at function creation time."
    - 이 부분이 명확하지 않은 상태에서, 동일한 변수를 참조하면서 함수을 호출을 개별로 한다는 이유로 다른 클로저가 형성될거라 생각함. => 결론: 다른 함수의 실행 컨텍스트이더라도 변수가 다시 초기화 되지 않았음.
        - 이전 고민 기록
            - 내부 함수 안에서 외부 변수 height를 참조하고 있을 때, 해당 height 변수 + 1를 처리하는 함수를 따로 호출한다고 하자.
            - 두번째 호출에서 변수 height를 참조하려고 할 때, 이전 업데이트된 height 값을 기억하지 않을까? 아니면, 실행 컨텍스트가 끝나기 때문에 left 호출이 끝나면 right에서는 다시 height가 다시 0으로 초기화 될까?
*/

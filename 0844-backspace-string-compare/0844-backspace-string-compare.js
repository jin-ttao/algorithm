/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    const getStrRemained = function(str) {
        const stack = [];
        
        for (const char of str) {
            if (char === "#") {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }
        
        return stack.join("");
    };

    return getStrRemained(s) === getStrRemained(t);
};

/*
- stack 더 익숙해지기
- "같다"를 문제 맥락에 맞추어서 재정의 하고 생각해보기
    - 두 string이 같은지 여부를 반환하는 문제.
    - 이 문제에서는 "같다" 표현을 "# 기준으로 char 제거하고, 동일 index에 동일 char가 있다"로 표현을 바꿀 수 있음.
    - 이 접근이 효과가 없는 문제도 있겠지만, 이 문제에서는 덕분에 'index를 찾아내자'는 좋은 시작점을 찾을 수 있었음.
    - 문제에 주어진 워딩이나 고유명사를 그대로 생각하기 보다, 맥락에 맞추어서 변환해서 생각이 필요할 수도 있음.
- 테스트 케이스 중 가장 쉽고 단순한 것 부터 맞출 것. 하나씩 수정ㄱㄱ.
    - 테스트 케이스가 총 3가지였는데, 한 번에 모든 케이스를 맞추려고 함.
- 메소드 의존도 줄일 것. 조건문과 반복문 만으로 알고리즘 문제 풀기에 충분함.
    - string에서 특정 index를 제거하고 남은 결과를 반환해야 해서, array의 splice() 역할을 하는 string 메소드가 있는지 찾아봄.
    - 공식 문서에서 찾지 못 했는데, 문득 메소드에 의존하고 있다는 느낌을 받아서 직접 구현해야겠다고 생각함.
    - string을 초기화 하고, 특정 조건에서만 해당 string에 addition assignment 연산자(`+=``)를 적용하는 방법으로 구현함.
- `indexOf()`의 optional parameter인 start position을 잘 사용하면, 불필요한 중첩 반복을 피할 수 있음.
    - string 메소드 `indexOf()`는 searchString이 여러 개 있어도 그 중 첫 index를 반환한다는 점 유의.
*/

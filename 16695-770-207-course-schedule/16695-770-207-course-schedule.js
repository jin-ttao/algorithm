/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [course, prereq] of prerequisites) {
        graph[course].push(prereq);
    }

    const visited = new Set();
    const visiting = new Set();

    const hasCycle = function(course) {
        if (visiting.has(course)) {
            return true;
        }
        if (visited.has(course)) {
            return false;
        }

        visiting.add(course);

        for (const prereq of graph[course]) {
            if (hasCycle(prereq)) {
                return true;
            }
        }

        visiting.delete(course);
        visited.add(course);

        return false;
    };

    for (let course = 0; course < numCourses; course++) {
        if (hasCycle(course)) {
            return false;
        }
    }

    return true;
};

/*
# 첫 풀이

### 문제정의
- input: 완료해야 하는 수업 수, 수업 간의 선후관계
    - 선후관계는 a 하려면 b 먼저 해야 함.
- output: 주어진 조건, 선후관계를 충족하며 완료할 수 있을지 결과를 boolean 타입으로 반환

### 접근
- 중요: 먼저 완료해야 하는 수업이 또다른 수업을 들어야 하는 조건이라면, 아무 수업도 듣지 못하는 케이스가 있음.
- 핵심: 후행 수업 a에 포함 안되고, 수업 b에만 존재하는 것이 있어야 하나라도 완료할 수 있음.
    - a 없고 b에만 있는 수업을 찾을 것. => b가 아예 없다면 완료할 수 있는 수업이 하나도 없으므로 항상 false 반환.
    - true는 언제 나오나?: b에만 있는 수업이 1개 이상 있고, 해당 b 수업으로 풀 수 있는 a 수업의 개수를 더한 값을 numCourses와 비교한 값을 반환.

### 코드
const canFinish = function(numCourses, prerequisites) {
    const a = [];
    const b = [];
    const bCanFinish = [];

    if (prerequisites.length > 0) {
        for (const course of prerequisites) {
            a.push(course[0]);
            b.push(course[1]);
        }

        const aSet = new Set(a);
        const bSet = new Set(b);

        bSet.forEach(b => {
            if (!aSet.has(b)) {
                bCanFinish.push(b);
            }
        });   
    }

    if (bCanFinish.length === 0) {
        return false;
    }
    
    const aCanFinish = prerequisites.map((course, i) => {
        if (bCanFinish.includes(course[1])) {
            return course[0];
        }
    });
    
    return (bCanFinish.length + aCanFinish.length >= numCourses);
};
*/

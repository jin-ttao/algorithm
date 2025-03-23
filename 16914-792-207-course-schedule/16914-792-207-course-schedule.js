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

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    let currentInterval = intervals[0];
    result.push(currentInterval);

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = currentInterval;
        const [nextStart, nextEnd] = intervals[i];

        if (nextStart <= currentEnd) {
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            currentInterval = intervals[i];
            result.push(currentInterval);
        }
    }
    
    return result;
};

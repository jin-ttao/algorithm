/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

const insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i += 1;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i += 1;
    }

    result.push(newInterval);

    while (i < n) {
        result.push(intervals[i]);
        i += 1;
    }

    return result;
};


/*
### 접근
1. 구간 찾기 (시작점, 다음 시작점 비교)
2. start, end 비교해서 newInterval의 start, end가 어디로 들어가야 하는지 확인 후 교체가 필요하다면 해당 위치에 재할당

## 1차 시도
const insert = function(intervals, newInterval) {
    const intervalsCopied = [...intervals];
    const starts = intervalsCopied.map(interval => interval[0]);

    const getIndex = function (num) {
        for (let i = 0; i < starts.length; i++) {
            if (i === starts.length - 1) {
                return i;
            }
            if (starts[i] <= num && starts[i + 1] >= num) {
                return i;
            }
        }
    };
    const indexStart = getIndex(newInterval[0]);
    const indexEnd = getIndex(newInterval[1]);

    const insertInterval = function (index, el) {
        if (intervalsCopied[index][0] > el) {
            intervalsCopied[index][0] = el;
        }
        if (intervalsCopied[index][1] < el) {
            intervalsCopied[index][1] = el;
        }    
    };
    insertInterval(indexStart, newInterval[0]);
    insertInterval(indexEnd, newInterval[1]);

    return intervalsCopied;
};
*/

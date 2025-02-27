
const RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/*
특정 시간 내 최근 요청을 카운트 하는 `RecentCounter` class 있음.
초기화 : 최근 요청 없음
시간 t(ms)에 새로운 요청 추가함
지난 3,000ms 내에 발생한 요청 수를 반환함 (새로운 요청 포함)
*/
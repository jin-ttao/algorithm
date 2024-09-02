/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // ### 타이머 걸어둘 함수 선언
		// t초 후에, 배열 args의 요소들을 개별 인수로 전달해서 함수 fn 호출
	const timeout = setTimeout(() => // setTimeout 함수는 t밀리초 후에, 콜백 함수 호출
		 fn(...args)
	, t)

	// ### 취소할 함수 선언
		// clearTimeout(timeout)을 호출하여 타이머를 취소하는 cancelFn 함수
	const cancelFn = () => clearTimeout(timeout);

	// ### 최종 취소함수를 반환
	return cancelFn;
};


/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
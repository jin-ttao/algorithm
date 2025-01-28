/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

/*
### 문제정의
- input: 0, 양의 정수를 요소로 갖는 배열
- output: 뒤 요소에서 앞 요소를 뺐을 때 가장 큰 양의 값 (양의 값이 없을 때 0 반환)

### 접근
- 최대값, 최소값 개념을 활용하는 것이 계산 횟수를 줄일 수 있을 것이라 판단
    - 가장 큰 수와 가장 작은 수를 활용

### 기타
- 배열 정수에서 가장 적은 요소를 골라서 그 뒤에 가장 큰 요소를 구한다. 그 차이를 반환한다.
- 일일이 차이를 구하는 접근은 단순하고 비효율적일거라 추측. 최대값과 최소값 관점에서 봐야하나.
- 배열 요소를 한바퀴는 순회해야 하나? 요소마다 이 이후에 가장 큰 값과의 차이를 모두 계산한 값을 요소로 하는 배열 만들기.
- 또 조건 중 하나가 이익 안나면, 즉 감소하기만하면 0반환. 내림차순이면 바로 0 반환하면 됨.
- index 간 차이를 확인하는 이러한 문제에도 패턴이 있을까?

### 이번 풀이 (오답)
const maxProfit = function(prices) {
    const remain = [...prices];

    for (let i = 0; i < prices.length; i++) {
        remain.shift();

        if (remain.length === 0) {
            return 0;
        }

        const max = Math.max(...remain);
        if (prices[i] >= max) {
            continue;
        }

        const indexOfMax = remain.findIndex(el => el === max);
        const remainBeforeMax = remain.slice(i, indexOfMax);
        const min = Math.min(...remainBeforeMax);
        if (prices[i] <= min) {
            console.log(i)
            return max - prices[i];
        }
    }
};


### 이전 풀이
var maxProfit = function(prices) {
    if (prices == null || prices.length <= 1) return 0;
    
    let minPriceBuy = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        minPriceBuy = Math.min(minPriceBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minPriceBuy);
    }
    
    return profit;
};
*/
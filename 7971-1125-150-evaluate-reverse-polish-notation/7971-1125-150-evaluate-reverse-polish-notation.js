/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    const tokensOperated = [...tokens];

    const getResult = function(o1, o2, operator) {
        o1 = typeof o1 === "number" ? o1 : Number(o1);
        o2 = typeof o2 === "number" ? o2 : Number(o2);

        switch(operator) {
            case "+":
                return o1 + o2;
            case "-":
                return o1 - o2;
            case "*":
                return o1 * o2;
            case "/":
                return Math.trunc(o1 / o2);
        }
    };

    let i = 0;
    while (tokensOperated.length > 1) {
        if (Number(tokensOperated[i]) * 0 !== 0) {
            const result = getResult(tokensOperated[i - 2], tokensOperated[i - 1], tokensOperated[i]);
            tokensOperated.splice(i - 2, 3, result);

            i = 0;
        } else {
            i += 1;
        }
    }

    return Number(tokensOperated[0]);
};

/*
# 250209
*/

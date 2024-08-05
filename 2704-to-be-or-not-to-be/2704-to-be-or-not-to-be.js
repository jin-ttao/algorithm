function expect(val) {
    return {
        toBe: function(val2) {
            if (val !== val2) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(val2) {
            if (val === val2) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}
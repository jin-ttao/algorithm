/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
    if (gain.length === 1) {
        return Math.max(0, gain[0]);
    }

    let altitude = 0;
    let max = 0;

    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        max = max >= altitude ? max : altitude;
    }

    return max;
};

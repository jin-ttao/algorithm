/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    const distances = [];
    const getDistanceFromOrigin = function(x, y) {
        if (typeof x !== "number" && typeof y !== "number") {
            return;
        }

        return Math.pow(x, 2) + Math.pow(y, 2);
    };


    points.forEach((point, i) => {
        distances.push({
            index: i,
            distance: getDistanceFromOrigin(point[0], point[1])
        });
    });


    distances.sort((a, b) => a.distance - b.distance);


    return distances.slice(0, k).map(item => points[item.index]);
};

const removeFromArray = function(arr, ...toRemove) {
    let result = [];
    for (item of arr) {
        if (!toRemove.find(arg => arg === item)) {
            result.push(item);
        }
    }           
    return result;
    };

// Do not edit below this line
module.exports = removeFromArray;

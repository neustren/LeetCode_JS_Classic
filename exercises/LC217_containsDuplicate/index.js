const containsDuplicate = nums => {
    let cache = {}
    let response = false;
    nums.forEach((item) => {
        if (cache[item]) {
            response = true
        } else {
            cache[item] = true
        }
    })
    return response
};

module.exports = containsDuplicate;
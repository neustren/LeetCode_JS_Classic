const productExceptSelf = nums => {

    if (nums.length > 0) {
        let zero = false
        let zeroArray = nums.filter((item) => {
            return item == 0
        }).length
        if (zeroArray > 0) {
            zero = true
        }

        if (zeroArray > 1) {
            return nums.map((item) => {
                return 0
            })
        } else {


            var calc = nums.reduce((total, item) => {
                if (total == 0) total = 1
                return item == 0 ? total : total * item
            })


            var res = nums.map((num, index) => {
                if (zero) {
                    return num == 0 ? calc : 0
                }
                return calc / num
            })
            return res
        }
    } else {
        return []
    }
};

console.log(productExceptSelf([0, 2, 3, 4]))
module.exports = productExceptSelf;
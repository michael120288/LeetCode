/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
    for(let num of nums){
        obj[num] = obj[num] + 1 || 1
    }
    for(let el in obj){
        if(obj[el] === 1){
            return el
        }
    }
};
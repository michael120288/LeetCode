/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {}
    for(let num of nums){
        obj[num] = obj[num] + 1 || 1
    }

    for(let el in obj){
        if(obj[el] > Math.floor(nums.length / 2)){
            return el
        }
    }
};
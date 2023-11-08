var map = function(arr, fn) {
    const res = []

    for (const i in arr){
        res.push(fn(arr[i],Number(i)))
    }
    return res
};

var map = function(arr,fn){
    const res = new Array(arr.length)

    for(const i in arr){
        arr[i]= fn(arr[i],Number(i))
    }
    return res
}
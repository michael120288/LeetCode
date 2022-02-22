var isValid = function (s){
    let obj = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let array = []
    for(let char of s){
        if(obj[char]){
            array.push(obj[char])
        }else{
            if(array.pop() !== char) return false
        }
    }
    return (!array.length)
}

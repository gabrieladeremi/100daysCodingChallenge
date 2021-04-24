function duplicateCount(text){
    const textArr = text.toLowerCase().split('');
    const textObj = {};
    for(let i = 0; i < textArr.length; i += 1) {
        if (textObj[textArr[i]]) {
            textObj[textArr[i]] += 1
        } else {
            textObj[textArr[i]] = 1
        }
    }
    let count = 0
    for (const key in textObj) {
        if (textObj[key] > 1) {
            count += 1
        }
    }
    return count
    
}

console.log(duplicateCount("aabBcde"))
function mumble (s){
    input = s.toLowerCase().split('')

    let newArray = []
    for(let n = 0; n < input.length; n++){
        let start = input[n].toUpperCase()
        let d = input[n].repeat(n);
        start+=d
        newArray.push(start)
    }
    return newArray.join('-');

}
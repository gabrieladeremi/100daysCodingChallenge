function dontGiveMeFive(start, end){
    let d = 5
  const num = [...Array(1+end-start).keys()].map(v => start+v)
  console.log(num);
  let c = num.toString().split(',')
  console.log(c);
  let presentArr = num
  .map((item) => item.toString())
  .filter((item) => item.indexOf(d.toString()) !== -1);
  console.log(presentArr)
    let p = c.filter((el) => !presentArr.includes(el));
    console.log(p)

    return p.length
}

console.log(dontGiveMeFive(1, 40));
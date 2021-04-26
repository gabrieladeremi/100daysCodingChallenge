/**
 * You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]
 */

const numberWithDigitInside = (x, d) => {
    const numArr = Array.from(Array(x).keys()).map((i) => i + 1);
    let presentArr = numArr
      .map((item) => item.toString())
      .filter((item) => item.indexOf(d.toString()) !== -1);
    if (presentArr.length === 0) {
      return [0, 0, 0];
    } else
    return [
        presentArr.length,
        presentArr.reduce((acc, item) => (acc += +item), 0),
        presentArr.reduce((acc, item) => (acc *= +item), 1),
    ];
}
console.log(numberWithDigitInside(5, 6));
    
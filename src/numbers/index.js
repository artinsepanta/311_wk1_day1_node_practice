const isEven = (num) => {
  // write code for numbers.isEven
  return num%2===0;
}



const numbers=[1,2,3,4,5,6];
const sum = (accumulator, currentValue) =>{
  accumulator + currentValue;
  console.log(numbers.reduce(sum))
}




const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}
function SumOfMultiples(num){
  let numTest =3;
  let numTest2 =5;
  let sum =0;
  for(let i=3; i<num; i++){
    if(i%numTest == 0 || i%numTest2==0){
      sum= sum+i;
    }
  }
  return sum
}
console.log(SumOfMultiples(10))
console.log(SumOfMultiples(100))

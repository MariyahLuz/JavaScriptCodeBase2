function getSecondLargest(nums) {
    for(let i=0; i<nums.length; i++){
        var max = Math.max.apply(null, nums);//function for getting maximum element in array
        nums.splice(nums.indexOf(max), 1);// removes max element
        return Math.max.apply(null, nums);
    }
  
}
console.log(getSecondLargest([5, 7, 10, 15, 9, 14, 17]))
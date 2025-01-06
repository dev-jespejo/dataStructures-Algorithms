
function twoSum(nums, target){

    const length = nums.length;

    for(let i=0; i< length; i++){
        for(let j=1; j<length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }

}

function twoSum2(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; 
       
        if (complement in numMap) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }
}

console.log(twoSum2([2, 7, 11, 15], 9)); 
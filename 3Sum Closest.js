var threeSumClosest = function(nums, target) {
    var len = nums.length,
        minDiff = Number.MAX_VALUE,
        diff,
        left,
        right,
        i,
        j;
        
    nums.sort(function(a, b) {
        return a - b;
    });
    
    for (i = 0; i < len; i++) {
        left = i + 1;
        right = len - 1;
        
        while (left < right) {
            diff = target - nums[i] - nums[left] - nums[right];
            
            if (diff === 0) {
                return target;
            } else if (diff > 0) {
                left++;
            } else {
                right--;
            }
            
            if (Math.abs(diff) < Math.abs(minDiff)) {
                minDiff = diff;
            }
        }
    }
    
    return target - minDiff;
};

const res = threeSumClosest([1,2,3,4,-1,-3], 10)
console.log('***************   ', res)
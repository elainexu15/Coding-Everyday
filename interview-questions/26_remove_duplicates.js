//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array

function removeDuplicates(nums) {
  // handle the case when the input array is empty
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // initialse k to 1 as the first element is always unique

  //start iterating from the second element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      // if the current element is different from the previous one
      nums[k] = nums[i]; // place the unique element at index k
      k += 1; // increment k to reflect the new number of unique elements
    }
  }
  return k; //return the number of unique elements
}

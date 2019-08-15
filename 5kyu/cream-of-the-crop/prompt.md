# Cream of the Crop

Write

> function topFrequent(nums, k){}

that takes in array of numbers nums and a number k and returns an array with the k most frequent numbers in nums

For example

> topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 1) === [1]
> topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 2) ===  [1, 2]
> topFrequent([1, 1, 1, 5, 5, 2, 2, 3], 3) === [1, 5, 2] // When nums have the same frequency, return it based on index
> topFrequent([9, 8, 7, 6, 5, 4, 3, 2, 1], 100) === [9, 8, 7, 6, 5, 4, 3, 2, 1]
// k is larger than nums length, so everything is returned

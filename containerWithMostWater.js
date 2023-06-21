//Given an array of non-negative integers representing the heights of vertical lines,
//find two lines that together with the x-axis forms a container that holds the most water.

function containerWithMostWater(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  //while the left pointer is less than the right pointer, calculate the area and update the maxArea
  while (left < right) {
    //calculate the area
    let area = Math.min(heights[left], heights[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    //move the left or right pointer depending on which one is smaller
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const res = containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);
module.exports = containerWithMostWater;

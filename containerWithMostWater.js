function containerWithMostWater(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    let area = Math.min(heights[left], heights[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
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
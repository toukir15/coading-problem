// PW2.01.01 Two Sum


const findTarget = (arr, target) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && (arr[i] + arr[j]) == target) {
                result = [i, j]
                return result
            }
        }
    }
}
const nums = [3, 3]
const target = 6
console.log(findTarget(nums, target))
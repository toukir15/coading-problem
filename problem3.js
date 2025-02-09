// PW2.01.05 Search Insert Position


const searchInsertPosition = (numbers, target) => {
    let index;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == target) {
            index = i
            return index
        }
    }

}

const numbers = [1, 3, 5, 6]
const target = 5
console.log(searchInsertPosition(numbers, target))
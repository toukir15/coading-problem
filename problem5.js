// longest - substring - without - repeating - characters

var lengthOfLongestSubstring = function (s) {
    let maxLength = 0, subStr = "";

    for (let char of s) {
        if (subStr.includes(char)) {
            subStr = subStr.split(char).pop();
        }
        subStr += char;
        maxLength = subStr.length;
    }

    return maxLength;
};



console.log(lengthOfLongestSubstring("abcabcbbbwwertyui"))
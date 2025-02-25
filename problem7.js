function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let current = romanMap[s[i]];

        if (current < prevValue) {
            result -= current;
        } else {
            result += current;
        }

        prevValue = current;
    }

    return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));  

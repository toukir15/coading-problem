function isValid(s) {
    const stack = [];
    const brackets = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in brackets) {
            let top = stack.pop();
            if (top !== brackets[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));   

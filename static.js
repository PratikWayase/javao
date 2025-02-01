
// calccaulte facto of number with static methos

class MathUtils {
    static factorial(n) {
        if (n < 0) return undefined;
        return n === 0 ? 1 : n * MathUtils.factorial(n-1)
    }
}

console.log(MathUtils.factorial(5))
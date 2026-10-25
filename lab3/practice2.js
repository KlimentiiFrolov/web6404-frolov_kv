function makeAdder(n) {
    return function add_x(x){
        return n+x;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3));  // 8
console.log(add5(7));  // 12
console.log(add10(3)); // 13


function createStepCounter(step) {
    let count = 0;

    return function add_1(){
        count += step;

        return count
    }
}

const counter = createStepCounter(3);

console.log(counter()); // 3
console.log(counter()); // 6
console.log(counter()); // 9

const first = createStepCounter(2);
const second = createStepCounter(5);

console.log(first());  // 2
console.log(first());  // 4
console.log(second()); // 5
console.log(first());  // 6
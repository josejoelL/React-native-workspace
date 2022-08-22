function count(): Function {
    let startAt: number = 0;

    return (action: string): number => {
        if (action === "add") {
            startAt += 1;
        } else if (action === "remove") {
            startAt -= 1;
        }

        return startAt;
    };
}

const counter: Function = count();
console.log(counter()); // 0
console.log(counter("add")); // 1
console.log(counter("add")); // 2
console.log(counter("add")); // 3
console.log(counter("remove")); // 2
console.log(counter("remove")); // 1
console.log(counter("remove")); // 0
function subtractAndAdd(first, second, third) {

    function sum(a, b) {
        return a + b;
    }

    let adding = sum(first, second)

    function decrese(c, d) {
        return c - d;
    }

    let decreasing = decrese(adding, third);

    console.log(decreasing);

}

subtractAndAdd(23, 6, 10);
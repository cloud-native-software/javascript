function test1() {
    console.log("---------- Test 1 ----------")
    for (let i = 0; i < 10; i++) {
        let p1 = new Promise((a, b) => {
            console.log(`XXX 1.1: ${i}`)
            a(i)
            console.log(`XXX 1.2: ${i}`)
        })

        p1.then(e => console.log(`XXX 1: ${e}`))
    }
}

function test2() {
    console.log("---------- Test 2 ----------")

    async function asyncTest(i) {
        console.log(`--- 2.1: ${i}`)
        return i
    }

    for (let i = 0; i < 10; i++) {
        asyncTest(i).then(e => console.log(`--- 2: ${e}`))
    }
}

console.log("========== START ==========")
test1()
test2()
console.log("========== END ==========")

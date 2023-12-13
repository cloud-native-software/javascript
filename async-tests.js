function test1() {
    console.log("---------- Test 1 ----------")
    for (let i = 0; i < 5; i++) {
        new Promise((resolve, reject) => {
                console.log(`XXX 1.1: ${i}`)
                resolve(i)
                console.log(`XXX 1.2: ${i}`)
            }
        ).then(e => console.log(`XXX 1: ${e}`))
    }
}

function test2() {
    console.log("---------- Test 2 ----------")

    async function asyncTest(i) {
        console.log(`--- 2.1: ${i}`)
        return i
    }

    for (let i = 0; i < 5; i++) {
        asyncTest(i).then(e => console.log(`--- 2: ${e}`))
    }
}

function test3() {
    console.log("---------- Test 3 ----------")

    async function asyncTest(i) {
        console.log(`/// 3.1: ${i}`)

        await new Promise((resolve, reject) => {
            console.log(`/// 3.2`)
            resolve(333)
        }).then(e => console.log(`/// 3.3: ${e}`))

        console.log(`/// 3.4: ${i}`)

        return i
    }

    for (let i = 0; i < 5; i++) {
        asyncTest(i).then(e => console.log(`/// 3: ${e}`))
    }
}

console.log("========== START ==========")
test1()
test2()
test3()
console.log("========== END ==========")

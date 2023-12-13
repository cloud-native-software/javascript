function orderFood() {
    console.log("Food ordering")
    return new Promise((resolve, reject) => {
        console.log("Call pizzeria")
        resolve("PIZZA")
        console.log("Ordering pizza done!")
    })
}

function showering() {
    console.log("Showering...")
}

function eatFood(food) {
    console.log(`Eating ${food}...`)
    console.log("Eaten!")
}

function sleep() {
    console.log("Sleeping...")
}

async function main() {
    let foodPromise = orderFood()
    showering()
    console.log("Waiting for food")
    let food = await foodPromise
    eatFood(food)
    sleep()
}

main()

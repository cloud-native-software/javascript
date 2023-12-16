const fs = require('fs').promises;

async function main() {
    console.log(1)
    let json = await fs.readFile('array.json', 'utf-8');
    console.log(json)
    console.log(2)
}

main()

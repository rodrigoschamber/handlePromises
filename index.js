const fs = require('fs')

/*callback
fs.readFile('./teste1.txt', (error, content) => {
    fs.readFile('./teste2.txt', (error2, content2) => {
        console.log(error, String(content))
        console.log(error2, String(content2))
    })
})
*/

readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (error, content) => {
        if (error){
            reject(error)
        } else {
            resolve(content)
        }
    })
})

/*promises
readFile('./teste1.txt').then((content) => {
    console.log(String(content))
    return readFile('./teste2.txt').then((content) => {
        console.log(String(content))
    })
})
*/

const init = async() => {
    try {
            const content = await readFile('./teste1.txt')
            const content2 = await readFile('./teste2.txt')
            return String(content) + '\n' + String(content2)
    } catch (error) {
        console.log(error)
    }
}

init().then((content) => {
    console.log(content)
})
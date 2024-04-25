const colors = require('colors')

const numWords = parseInt(process.argv[2]) || 3

const colorOptions = [
    'black',
    'white',
    'green',
    'blue',
    'magenta'
]


const init = async () => {
    const {generate} = await import ('random-words')

    const words = generate(numWords)


    const result = words
        .map(word => {
            const randomIndex = Math.floor(Math.random() * colorOptions.length)
            const randomColor = colorOptions[randomIndex]
            return colors[randomColor](word)
        } )
        .join(' ')
    
    
        console.log(result)

}

init()
const fs =require('fs')

const writeFileJSON = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content))
}

const readFileJSON = (filename) => {
    const data = fs.readFileSync(filename, 'utf-8')
    return JSON.parse(data, null, 2)
}

module.exports = {
    writeFileJSON,
    readFileJSON
}
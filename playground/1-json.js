const fs = require('fs')

const data = JSON.parse(fs.readFileSync('1-json.json', { encoding: 'utf-8' }))
data.name = 'Joker'
data.age = 24

fs.writeFileSync('1-json.json', JSON.stringify(data))
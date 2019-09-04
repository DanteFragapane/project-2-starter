const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'public/data/progression.json')

const progressionJson = []

for (let i = 0; i < 10; i++) {
  const json = {}
  json.level = i + 1
  if (i === 9) {
    json.hp = 20
  } else {
    json.hp = 8 + i
  }
  if (json.level === 10) {
    json.energy = 9
  } else {
    if (json.level % 2 === 0) {
      json.energy = 2.5 + i / 2
    } else {
      json.energy = 2.5 + json.level / 2
    }
  }
  json.experience = 0 + i * 300
  if (json.experience === 0) {
    json.experiencePerKill = 150
  } else {
    json.experiencePerKill = json.experience / 2
  }
  progressionJson.push(json)
}

console.log(progressionJson)
fs.writeFile(file, JSON.stringify(progressionJson), (err) => {
  if (err) console.error(err)
})

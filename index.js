const SETUP = {
  prisonersAmount: 100,
  allowedAttempts: 50,
  bulkRuns: 1000
}

console.log(SETUP)

const getRandomNumber = () => Math.floor(Math.random() * SETUP.prisonersAmount) + 1

class Prisoner {
  constructor(number) {
    this.number = number
    this.attempts = 0
  }

  takeTurn(room, boxNumber = this.number) {
    let foundNumber = room[boxNumber].open()
    this.attempts += 1
    if (this.attempts > SETUP.allowedAttempts) return false
    if (foundNumber == this.number) return true
    return this.takeTurn(room, foundNumber)
  }
}

class Box {
  constructor(number) {
    this.number = number
  }

  open() {
    return this.number
  }
}

const generatePrisoners = (prisonersAmount) => {
  let prisoners = {}
  for(let i = 1; i <= prisonersAmount; i++) {
    prisoners[i] = new Prisoner(i)
  }
  return prisoners
}

const generateRoom = (prisonersAmount) => {
  let room = {}
  let draftedNumbers = []

  while(draftedNumbers.length < prisonersAmount) {
    let randomNumber = getRandomNumber()
    if (draftedNumbers.indexOf(randomNumber) === -1) draftedNumbers.push(randomNumber)
  }

  for(let i = 1; i <= prisonersAmount; i++) {
    room[i] = new Box(draftedNumbers[i-1])
  }

  return room
}

const setupChallenge = () => {
  const prisoners = generatePrisoners(SETUP.prisonersAmount)
  const room = generateRoom(SETUP.prisonersAmount)

  return [prisoners, room]
}

const runChallenge = () => {
  let [prisoners, room] = setupChallenge()
  let result = 'pass'

  for(let i = 1; i <= SETUP.prisonersAmount; i++) {
    if(!prisoners[i].takeTurn(room)) {
      result = 'fail'
      return result
    }
  }

  return result
}

const runBulkChallenge = (amount) => {
  let bulkResult = {
    pass: 0,
    fail: 0,
    average: 0
  }

  for(let i = 0; i < amount; i++) {
    bulkResult[runChallenge()]++
  }

  bulkResult.average = bulkResult.pass / amount
  return bulkResult
}

let result = runBulkChallenge(SETUP.bulkRuns)
console.log(result)

module.exports = runBulkChallenge
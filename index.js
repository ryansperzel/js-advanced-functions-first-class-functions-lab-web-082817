// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const arr = []
  arr.push(drivers[0])
  arr.push(drivers[1])
  return arr
}

const returnLastTwoDrivers = function (drivers) {
  const arr = []
  arr.push(drivers[drivers.length - 2], drivers[drivers.length - 1])
  // arr.push(drivers[drivers.length - 1])
  return arr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function (fare) {
    return num * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fun) {
  return fun(drivers)
}

const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = drivers => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (fareMultiplier) => {
    return (value) => {
        return fareMultiplier * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const fareQuintupler = createFareMultiplier(5)

const selectDifferentDrivers = (drivers, selectingDrivers) => {
    return selectingDrivers(drivers)
}
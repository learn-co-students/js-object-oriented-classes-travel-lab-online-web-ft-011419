class Driver {

    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled(){
        const eastWest = ["1st Avenue", "2nd Avenue", "3rd Avenue", "Lexington Avenue", "Park", "Madison Avenue", "5th Avenue"]

        const blocksSt = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)

        const beginningHor = eastWest.findIndex(ave => ave === this.beginningLocation.horizontal)

        const endingHor = eastWest.findIndex(ave => ave === this.endingLocation.horizontal)

        const totalHor = Math.abs(endingHor - beginningHor)

        return totalHor + blocksSt
    }

    estimatedTime(peak){
        const total = this.blocksTravelled()

        if (peak === true){
            return total / 2
        }
        else {
            return total / 3
        }
    }
}
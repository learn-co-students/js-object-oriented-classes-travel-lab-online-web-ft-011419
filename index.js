let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver{
  constructor(name,startDate){  
    this.name = name
    this.startDate  = new Date(startDate )
  }
  yearsExperienceFromBeginningOf(year) {
   const  startYear = this.startDate
    const endYear = new Date (year,0) 
    return endYear.getFullYear() - startYear.getFullYear()
  
  }
 

  

}
// passing an object with properites
class Route{
  constructor(beginningLocation,endingLocation){
  this.beginningLocation = beginningLocation 
  this.endingLocation = endingLocation
  }
  blocksTravelled(){ 
   let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    let vertical = (this.endingLocation.vertical)- (this.beginningLocation.vertical)
    return horizontal + vertical
  }
  estimatedTime(peakHours){
    if (peakHours) {
      return this.blocksTravelled() /2
    } else{ 
        return this.blocksTravelled() / 3
      }   
  }
// please submit

}





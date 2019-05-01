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
class Route{
  constructor(beginningLocation,endingLocation){
  this.beginningLocation = beginningLocation 
  this.endingLocation = endingLocation
  }
  blocksTravelled(){

  }

}





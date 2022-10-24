// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }

//   const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

  function getAverage(marks){

    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }

  console.log(getAverage([1,2,3,4,5,6]))



  // reduce is good 
// var getAverage = ( m ) => parseInt(m.reduce((a, b)=> a + b)/ m.length)
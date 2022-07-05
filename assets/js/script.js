
   var delayInMilliseconds = 3500; //5 second


window.onload = function grow() {

  $( "#Astronaut" ).addClass( 'grow');
  setTimeout(function () {
 
    $( "#Astronaut" ).removeClass( 'grow');

  }, delayInMilliseconds);
  

  
}

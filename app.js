window.addEventListener('load', () => {
const preload = document.querySelector('.preload');
preload.classList.add('preload-finish');

});


$(document).ready(function(){
  $(' .feat-part1').waypoint(function(direction){
      $(' .feat-part1').addClass('animated fadeInLeft')
  }, {

      offset : '55%'
  });

  $(' .feat-part2').waypoint(function(direction){
    $(' .feat-part2').addClass('animated fadeInUp')
}, {

    offset : '55%'
});

$(' .feat-part3').waypoint(function(direction){
  $(' .feat-part3').addClass('animated fadeInRight')
}, {

  offset : '55%'
});

$(' .frame').waypoint(function(direction){
  $(' .frame').addClass('animated zoomIn')
}, {

  offset : '55%'
});

$(' .head-img').waypoint(function(direction){
  $(' .head-img').addClass('animated zoomIn')
}, {

  offset : '55%'
});
  
  
});

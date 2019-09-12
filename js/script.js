// Event link
$('.page-scroll').on('click', function(e){
  //ambil isi href
  var tujuan = $(this).attr('href');
  //ambil elemen ybs
  var elementTujuan = $(tujuan);
  //animasi scroll
  $('html, body').animate({
  scrollTop: elementTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo');

  e.preventDefault();
});

//Parallax
//About
$(window).on('load', function(){
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
})

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  //jumbotron
  $('.jumbotron img').css({
      'transform': 'translate(0px,'+ wScroll/4 +'%)'
  });

  $('.jumbotron h1').css({
      'transform': 'translate(0px,'+ wScroll/2 +'%)'
  });

  $('.jumbotron p').css({
      'transform': 'translate(0px,'+ wScroll/1.2 +'%)'
  });

  //portofolio
  if(wScroll > $('.portofolio').offset().top - 250){
    $('.portofolio .img-thumbnail').each(function(i){
      setTimeout(function(){
        $('.portofolio .img-thumbnail').eq(i).addClass('muncul');
      }, 300 * (i+1));
    });
  }



});



$(function () {
  
  //gnb에 마우스엔터
  var isMouseOnGnb = false; // 마우스가 .gnb 위에 있는지 추적하는 플래그
  $('.gnb').on('mouseenter', function () {
    isMouseOnGnb = true;
    // 여기에 마우스가 .gnb 위로 이동했을 때 실행할 추가 로직을 넣을 수 있습니다.
    let classValue = $('.header').hasClass('up');
    if (classValue) {
      $('.header').addClass('upOn');
    } else {
      $('.header').removeClass('upOn').addClass('on');
    };
    $('.gnb').css("height","334px"); 
    $('.dep2').stop().slideDown(500);
    $('.header-bg').stop().slideDown(400);
  }).on('mouseleave', function () {
    isMouseOnGnb = false;
    // 여기에 마우스가 .gnb를 떠났을 때 실행할 추가 로직을 넣을 수 있습니다.
    let classValue = $('.header').hasClass('up');

    if (classValue) {
      $('.header-bg').stop().slideUp(500, function () {
        $('.header').removeClass('upOn');
      });
      $('.dep2').stop().slideUp(200);
    } else {
      $('.header-bg').stop().slideUp(500, function () {
        $('.header').removeClass('on');
      });
      $('.dep2').stop().slideUp(200);
    }
    $('.gnb').css("height","114px");
  });

  /* fullpage */

  $('#fullpage').fullpage({
    menu: '.right_menu',
    anchors: ['firstPage', 'secondPage', 'thirdPage',
      'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage',
      'eighthPage'],   


    afterLoad: function (origin, destination, direction, trigger) {
      if (destination.index == 0 || destination.index == 3 || destination.index == 4 || destination.index == 6 || destination.index == 7) {
        $('.header').removeClass('up upOn');
        $('#right_nav').removeClass('up');
      }else if (destination.index == 2 || destination.index == 5) {
        $('.header').removeClass('on').addClass('up');
        $('#right_nav').addClass('up');
      } else if (destination.index == 1) {
        $('.header').removeClass('up upOn'); // 'on' 클래스를 여기서 추가하지 않음
        $('#right_nav').removeClass('up');
        $('.content-top-box').delay(0).animate({ top: 0, opacity: 1 }, 500);
        $('.content-bottom-box').delay(300).animate({ top: 0, opacity: 1 }, 500);
      }else if (destination.index == 8) {
        $('#right_nav').addClass('up');
      } 
      if (isMouseOnGnb) {
        // 마우스가 .gnb 위에 있을 경우에만 실행할 로직
        // 예: 헤더에 특정 클래스를 추가하거나 제거하는 로직
        if (destination.index == 0 || destination.index == 3 || destination.index == 4 || destination.index == 6 || destination.index == 7) {
          $('.header').removeClass('up upOn').addClass('on');
        } else if (destination.index == 2 || destination.index == 5) {
          $('.header').removeClass('on').addClass('upOn');
        }
    }
    },//afterload콜백

    /* onLeave: function(origin, destination, direction, trigger){
      var origin = this;
  
      //구역 2를 떠난 후
      if(origin.index == 0 && direction =='down'){
        $('.header').removeClass('on')
      }  
      else if(origin.index == 1 && direction == 'down'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 2 && direction == 'down'){
        $('.header').removeClass('upOn')
      }
      else if(origin.index == 2 && direction == 'up'){
        $('.header').removeClass('upOn')
      }
      else if(origin.index == 3 && direction == 'down'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 3 && direction == 'up'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 4 && direction == 'down'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 4 && direction == 'up'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 5 && direction == 'down'){
        $('.header').removeClass('upOn')
      }
      else if(origin.index == 5 && direction == 'up'){
        $('.header').removeClass('upOn')
      }
      else if(origin.index == 6 && direction == 'down'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 6 && direction == 'up'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 7 && direction == 'down'){
        $('.header').removeClass('on')
      }
      else if(origin.index == 7 && direction == 'up'){
        $('.header').removeClass('on')
      }
    } */

  });//fullpage.js
});//jQ end
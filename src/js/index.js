$('document').ready(() => {
  $('.arg-vid-slider').slick({
    vertical: true,
    slidesToShow: 2,
    infinite: false,
    arrows: false,
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();

    const slideno = $(this).data('slide');
    // const count = $('a[data-slide]').length;
    $('.item__badge').removeClass('active');
    $('.item__desc').removeClass('active');
    $(this).find('.item__badge').addClass('active');
    $(this).find('.item__desc').addClass('active');
    // console.log($('.site .q')[1]);
    console.log($('.site img').height());
    switch (+slideno) {
      case 2:
        return fnGoTOSlide(50);
      case 3:
        return fnGoTOSlide(900);
      case 4:
        return fnGoTOSlide(600);
      case 5:
        return fnGoTOSlide(1200);
      case 6:
        return fnGoTOSlide($('.site img').height());
      default:
        return fnGoTOSlide(0);
    }

    function fnGoTOSlide(n) {
      // $('.site').animate({ scrollTop: $('.site').scrollTop() + n });
      console.log();
      $('.site').animate({
        scrollTop: n,
      });
    }

    // $('.arg-vid-slider').slick(
    //   'slickGoTo',
    //   +slideno > 3 ? slideno - 2 : slideno - 1
    // );
  });
});

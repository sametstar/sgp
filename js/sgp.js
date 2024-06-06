/* Js for SGP by M. Hürel Çobanoğlu */

/* Hürel Lightbox */
var $spinner = '<div class="spinner"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>';
$(document).on('click', 'img[data-hurel_lbx]', function(){
    var
    $ths = $(this),
    $src = $ths.attr('data-lbx'),
    $lbx =
    '<div class="hurel-lbx">'+
        '<div class="overlay"></div>'+
        '<div class="lbx-content">'+
            '<img class="lbx-image" src="'+$src+'" alt="">'+
            '<div class="preloader absolute">'+$spinner+'</div>'+
        '</div>'+
        '<div class="btn-close"></div>'+
    '</div>';
    $lbg =
    '<div class="hurel-lbx">'+
        '<div class="overlay"></div>'+
        '<div class="lbx-content lbx-gallery">'+
            '<div id="hurelLightbox" class="lbx-carousel carousel slide" data-interval="false">'+
                '<div class="carousel-inner"></div>'+
            '</div>'+
        '</div>'+
        '<div class="preloader">'+$spinner+'</div>'+
        '<div class="nav-prv" href="#hurelLightbox" data-slide="prev"></div>'+
        '<div class="nav-nxt" href="#hurelLightbox" data-slide="next"></div>'+
        '<div class="btn-close"></div>'+
    '</div>';
    // Img Source
    if ($ths.data('lbx')) {
        $('html,body').addClass('lbx-overflow');
        if($ths.data('hurel_lbx') == 'multiple'){
            $('body').append($lbg);
            $('img[data-hurel_lbx]').each(function(){
                $srcG = $(this).attr('data-lbx');
                $carouselItem =
                '<div class="carousel-item" data-lbxinfo="'+$srcG+'">'+
                    '<img class="lbx-image" src="'+$srcG+'" alt="">'+
                '</div>';
                $('.lbx-carousel .carousel-inner').append($carouselItem);
                setTimeout(function(){
                    $('.lbx-carousel').find($('[data-lbxinfo="'+$src+'"]')).addClass('active');
                },1);
            });
            $('.preloader').css({transform: 'scale(0)', transition: 'all ease-in-out 200ms'});
            setTimeout(function(){
                $('.preloader').css({transform: 'scale(1)'});
            },1);
        }
        else {
            $('body').append($lbx);
        }
        $('body > *:not(.hurel-lbx)').css({filter: 'blur(0)', transition: 'all ease-in-out 200ms'});
        $('.lbx-content, .btn-close').css({transform: 'scale(0)', transition: 'all ease-in-out 200ms'});
        $('.nav-prv, .nav-nxt').css({transform: 'translate(0, -50%) scale(0)', transition: 'all ease-in-out 200ms'});
        setTimeout(function(){
            $('body > *:not(.hurel-lbx)').css({filter: 'blur(8px)'});
            $('.lbx-content, .btn-close').css({transform: 'scale(1)'});
            $('.nav-prv, .nav-nxt').css({transform: 'translate(0, -50%) scale(1)'});
            setTimeout(function(){
                $('.lbx-content, .btn-close, .nav-prv, .nav-nxt').removeAttr('style');
            },200);
        },1);
        $('.lbx-image').on("load", function(){
            setTimeout(function(){
                $('.preloader').fadeOut(300);
            },900);
        });
    }
});
$(document).on('click', '.hurel-lbx .overlay, .hurel-lbx .btn-close', function(){
    $('.lbx-content, .btn-close').css({transform: 'scale(1)', transition: 'all ease-in-out 200ms'});
    $('.nav-prv, .nav-nxt').css({transform: 'translate(0, -50%) scale(1)', transition: 'all ease-in-out 200ms'});
    setTimeout(function(){
        $('body > *:not(.hurel-lbx)').css({filter: 'blur(0)'});
        $('.lbx-content, .btn-close').css({transform: 'scale(0)'});
        $('.nav-prv, .nav-nxt').css({transform: 'translate(0, -50%) scale(0)'});
        setTimeout(function(){
            $('.lbx-content, .btn-close, .nav-prv, .nav-nxt').removeAttr('style');
            $('.hurel-lbx').remove();
        },200);
    },1);
    $('html,body').removeClass('lbx-overflow');
});
$(document).on('click', '.hurel-lbx .nav-prv, .hurel-lbx .nav-nxt', function(){
    $('.preloader').show();
    setTimeout(function(){
        $('.preloader').fadeOut(300);
    },900);
});
/* End of Hürel Lightbox */

$(document).ready(function(){

    // PRELOADER
    $('body').append($spinner);

    // SMOOTH SCROLL PERMALINKS
    $('a.smooth-scroll[href*="#"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, target.offset().top);
            }
        }
    });
    // ./SMOOTH SCROLL PERMALINKS

    // RANDOM IMAGE on LANDING
    var randomLandingImage = ['slider1.jpg', 'slider3.jpg', 'slider2.jpg', 'slider4.jpg'];
    $('<img src="imgs/opening/' + randomLandingImage[Math.floor(Math.random() * randomLandingImage.length)] + '" alt="SG ▶︎ P Stüdyo">').appendTo('#randomLandingImage .random-image');
    var randomHeroText = [
        '<h1>Good content isn’t about good storytelling. <span class="color-sgp-red">It’s about telling a true story well.</span></h1><h5 class="signature">Ann Handley</h5>',
        '<h1>You can never go wrong by <span class="color-sgp-red">investing in communities</span> and the human beings within them.</h1><h5 class="signature">Pam Moore</h5>',
        '<h1><span class="color-sgp-red">Less is more.</span> Keeping it simple takes time and effort.</h1><h5 class="signature">Jeff Bullas</h5>',
        '<h1>Marketing’s job is never done. It’s about perpetual motion. We must continue to <span class="color-sgp-red">innovate every day.</span></h1><h5 class="signature">Beth Comstock</h5>',
        '<h1><span class="color-sgp-red">Content builds relationships.</span> Relationships are built on trust. Trust drives revenue.</h1><h5 class="signature">Andrew Davis</h5>',
    ];
    $('#randomLandingImage .hero .randomize').html(randomHeroText[Math.floor(Math.random() * randomHeroText.length)]);
    $('#randomLandingImage .hero .action-btn').css('min-width',$('#randomLandingImage .hero .signature').width() + 48 + 'px');
    // ./RANDOM IMAGE on LANDING

    // SCROLL & PARALLAX
    $(window).scroll(function(){
        var
        winH = $(window).height(),
        mouseScroll = $(window).scrollTop();

        $('.hero').css({"opacity": 1 - mouseScroll / winH * 2});

        if ($(window).width() > 991) {
            if(mouseScroll >= 90) {
                $(".navbar-container").addClass('sticky');
            }
            else {
                $(".navbar-container").removeClass('sticky');
            }
            if ($(".content-corporate-tv").length){
                $('.content-corporate-tv').css({"right": -55 + mouseScroll / winH * 75 + '%'});
            }
        }
    });

    $('.spinner').fadeOut(100,function(){
        $(this).remove();
        $('body > .container-fluid').css({opacity: 1});
    });
    $('#randomLandingImage .hero h1').addClass('ready');
    setTimeout(function(){
        $('#randomLandingImage .hero .signature').addClass('ready');
    },300);
    setTimeout(function(){
        $('#randomLandingImage .hero .signature').addClass('border-anim');
    },600);
    setTimeout(function(){
        $('#randomLandingImage .hero .action-btn, #randomLandingImage .play-icon-btn').addClass('ready');
    },900);
});

$(document).on('click','.play-btn',function(){
    var
    $this = $(this),
    src = $this.attr('data-src'),
    vidFrame = '<iframe class="lazy-vimeo" src="https://player.vimeo.com/video/'+src+'?autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>';
    $this.parent().after(vidFrame);
    $this.parent().fadeOut();
    $this.parent().siblings('.video-cover-img').fadeOut();
});
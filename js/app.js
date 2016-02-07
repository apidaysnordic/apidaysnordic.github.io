(function ($) {
    'use strict';

    var $navbar = $('.navbar');

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($navbar.offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        var navHeight = parseInt($navbar.height(), 10);
        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this),
                target = $anchor.data('target') || $anchor.attr('href');

            event.preventDefault();

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - navHeight
            }, 1200, 'easeInOutQuart');

        });
        $navbar.find('a').on('click', function () {
            $('.navbar-main-collapse.in').collapse('hide');
        });
    });

    // We look for any tweets and then make sure the text is processed
    $('.tweet:not(.processed)').each(function () {
        this.innerHTML = processTweetLinks(this.innerHTML);
        if (this.classList) {
            this.classList.add('processed');
        }
    });
    // http://stackoverflow.com/questions/8020739/regex-how-to-replace-twitter-links
    function processTweetLinks(text) {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
        text = text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
        exp = /(^|\s)#(\w+)/g;
        text = text.replace(exp, "$1<a href='http://search.twitter.com/search?q=%23$2' target='_blank'>#$2</a>");
        exp = /(^|\s)@(\w+)/g;
        text = text.replace(exp, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>");
        return text;
    }

    // Setup Carousel
    $('.carousel .item').each(function () {
        var $this = $(this);
        var $next = $this.next();

        // If the last, duplicate the first
        if (!$next.length) {
            $next = $this.siblings(':first');
        }
        $next.children(':first-child').clone().appendTo($this);

        if ($next.next().length > 0) {
            $next.next().children(':first-child').clone().appendTo($this);
        }
        else {
            $this.siblings(':first').children(':first-child').clone().appendTo($this);
        }
    });

    // Only start playing once the user has scrolled down to it
    //$('.carousel')
    //    .carousel({interval: 5000, pause: false})
    //    .carousel('pause')
    //    .closest('section')
    //    .one('mouseenter', function () {
    //        $('.carousel').carousel('cycle');
    //    });

    $('#back-button').click(function () {
        parent.history.back();
        return false;
    });

})(jQuery);

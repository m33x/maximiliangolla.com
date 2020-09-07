/*jslint browser: true */
/*global window, $, alert*/

$(document).ready(function () {
    'use strict';

    $(".smooth-scroll").on('click', 'a', function (e) {
        var link = $(this).attr('href');
        // Is there an HTML anchor in the hyperlink?
        if (link.indexOf("#") >= 0) {
            e.preventDefault();
            var hash = link.split('#')[1];
            $('body,html').animate({
                scrollTop: $(link).offset().top - 70
            }, 700);
            window.location.hash = hash;
        }
    });

});
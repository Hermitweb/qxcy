'use strict';

$(document).ready(function() {

    $('.main-content').scroll3D();

});

function resizeImages() {
    $(function(e) {
        var screenWeight = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        $("[name=pageImg]").css("width", screenWeight).css("height", screenHeight);
        $("#pageUl").css("bottom", screenHeight >> 1);
    });
}

function toPage(idx) {
    $('.page1-wenzi').removeClass('fadeInUpBig').eq(idx - 1).addClass('fadeInUpBig');
}
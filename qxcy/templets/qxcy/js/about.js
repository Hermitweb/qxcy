window.onload = function() {
    //获取 li 也就是选项卡选项tab
    var nav = document.getElementById('about_nav');
    var oNav = nav.getElementsByTagName('li');
    //获取 包裹在about_container里面的section（内容）
    var about_container = document.getElementById('about_container');
    var oDiv = about_container.getElementsByClassName('about_tab');
    //使用 循环依次得到li 
    for (var i = 0; i < oNav.length; i++) {
        oNav[i].index = i;
        //每一次得到li后执行鼠标点击操作则触发函数function 
        oNav[i].onclick = function() { //此处除了可以使用onclick，还可以使用onmouseover
            //在li的个数内依次展示内容 
            for (var i = 0; i < oNav.length; i++) {
                oNav[i].className = '';
                oDiv[i].style.display = "none";
            }
            this.className = 'about_active';
            oDiv[this.index].style.display = "block"
        }
        for (var m = 1; m < oNav.length; m++) {
            oNav[m].className = '';
            oDiv[m].style.display = "none";
        }

    }
    var Can1 = window.location.hash;
    var Shu1 = "#jianjie";
    var Shu2 = "#huanjin";
    var Shu3 = "#liuyan";
    console.log(Can1);
    if (Can1 == Shu1) {
        $('#jianjie').css("display", "block");
        $('#jianjie').siblings().css("display", "none");
    } else if (Can1 == Shu2) {
        $('#huanjin').css("display", "block");
        $('#huanjin').siblings().css("display", "none");
    } else if (Can1 == Shu3) {
        $('#liuyan').css("display", "block");
        $('#liuyan').siblings().css("display", "none");
    } else {
        $('#jianjie').css("display", "block");
        $('#jianjie').siblings().css("display", "none");
    }



};
(function() {

    var nav = $('nav'),
        menu = $('nav h1'),
        main = $('main'),
        open = false,
        hover = false;

    menu.on('click', function() {
        open = !open ? true : false;
        nav.toggleClass('menu-active');
        main.toggleClass('menu-active');
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
        console.log(open);
    });
    menu.hover(
        function() {
            if (!open) {
                nav.addClass('menu-hover');
                main.addClass('menu-hover');
            }
        },
        function() {
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
        }
    );
    $(function() {
        $("#addresstu").mouseover(function() {
            $("#addresstu img").addClass("animated pulse")
        });
        $('#addresstu').mouseout(function() {
            $("#addresstu img").removeClass("animated pulse")
        });
        $("main").click(function() {
            open = false;
            if (open == false) {
                open = true
            } else {
                open = true
            }
            open = !open ? true : false;
            $("nav").removeClass("menu-active");
            $("main").removeClass("menu-active");
            console.log(open)
        })
    });

})();

(function($) {
    function floatLabel(inputType) {
        $(inputType).each(function() {
            var $this = $(this);
            $this.focus(function() {
                $this.next().addClass('active');
            });
            $this.blur(function() {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    }
    floatLabel('.floatLabel');
}(jQuery));
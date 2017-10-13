//定义模块
var animate = (function () {

    return {
        showDialog: function () {
            alert("动画已结束。");
        },
        showAndHide: function () {
            var headOne = $(".header-one");
            headOne.slideUp(3000).delay(5000).fadeIn(3000, animate.showDialog);
            headOne.slideUp(3000).fadeIn(3000, animate.showDialog);
        },
        showAndHide1: function () {
            var headOne = $(".header-one");

            headOne.hide(3000);
            //headOne.slideToggle(3000);
            headOne.show(5000).slideUp(3000).slideDown(3000).fadeOut(5000).fadeIn(2000, animate.showDialog);

        },
        showImg: function () {
            var images = $("img");
            images.fadeTo(3000, 0.3, animate.showDialog);
            //headOne.slideToggle(3000);
            //headOne.show(5000).slideUp(3000).slideDown(3000).fadeOut(5000).fadeIn(2000, animate.showDialog);
        },
        animate1: function () {
            var headOne = $(".header-one");
            headOne.animate({
                height: "300px"
            }, 2000);
        }


    }
})();

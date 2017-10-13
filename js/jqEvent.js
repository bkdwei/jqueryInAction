//定义模块
var jqEvent = (function () {

    return {
        hideImg: function () {
            $("#demo").click(function () {
                $("img").hide(500).show(300);
            })
        },
        hidePa1: function () {
            $("#demo1").click(function () {
                $("P").hide(500).show(300);
            })
        },
        hidePa2: function () {
            $("#demo2").bind("click", function () {
                $("h1").slideToggle();
            })
        },
        hidePa3: function () {

            $("#demo3").one("click", function () {

                $("p[class='dengRu']").hide(100).show(300).animate({
                    fontSize: "30em",
                    color: "#0099cc"
                });
            })
        },
        hidePa4: function () {

            $("#demo4").click(function () {
                $("<p>这是一个新标签。</p>").insertAfter("#demo4");
            });
            $("span").click(function (event) {
                event.stopPropagation();
                alert("阻止事件冒泡！");
            });
        },
        hidePa5: function () {
            $("#input1").select(function () {
                $("#input1").after("文本被选中！");
            });
            $("#button1").click(function () {
                $("#input1").trigger("select！");
            });
        },
        hidePa6: function () {
            $("h3").hover(function () {
                $("h3").css("background-color", "yellow");
            }, function () {
                $("h3").css("background-color", "pink");
            });
        },
        hidePa7: function () {
            $("#danJi").toggle(function () {
                $("body").css("background-color", "green");
            });

        }


    }
})();

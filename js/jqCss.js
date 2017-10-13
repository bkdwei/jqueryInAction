//定义模块
var jqCss = (function () {
    return {
        jqCss1: function () {
            $("#button1").click(function () {
                $("p").css("color", "green");
            });
        },
        jqCss2: function () {
            $("#button2").click(function () {
                alert($("#p1").css("color"));
            });
        },
        jqCss3: function () {
            $("#button3").click(function () {
                $("p").css("color", function () {
                    return "blue";
                });
            });
        },
        jqCss4: function () {
            $("div").click(function () {
                $(this).css(
                    "width",
                    function (index, value) {
                        return parseFloat(value) * 1.2;
                    }
                );
            });
        },
        jqCss5: function () {
            $("#button5").click(function () {
                $("p").css({
                    "color": "white",
                    "background-color": "#98bf21",
                    "font-family": "Arial",
                    "font-size": "30px",
                    "padding": "10px"
                });
            });
        }
    };
})();

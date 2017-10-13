var domAction = (function () {

    return {
        appendDom: function () {
            var p1 = $("<p>链接</p>");
            var input1 = $("<input type='password' >none</input>");
            var button1 = $("<input type='button'value='按钮' >none</input>");
            var select1 = $("<select></select>");
            $("a").append(p1);
            $("a").append(input1);
            $("a").append(button1);
            $("a").append(select1);
        },
        removeDom1: function () {
            $("p:eq(0)").remove();
            $("p:eq(0)").append($("span").clone());
            $("p:eq(1)").replaceWith($("button"));
            $("img").wrap("<a href='http://bkdwei.com'></a>");
        }
    }
})();

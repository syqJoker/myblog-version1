$(function () {
    $("#test").click(function () {
        var $box = popBox('<p class="box-title">高级搜索</p>');
    })
    function popBox(htm) {
        if ($(".popBox").length) {
            console.log("已存在.popBox");
            return;
        }
        var box = '<div class="popBox"></div>',
            fa = '<a id="close"><i class="fa fa-times"></i></a>',
            $box = $(box);
        $box.append(htm).find(".box-title").append(fa);
        $box.close = function (callback) {
            if (callback) {
                try {
                    callback();
                }
                catch (e) {
                    console.log(e);
                }
            }
            $box.remove();
        }
        $box.find("a#close").click(function () {
            $box.close();
        })
        $(document.body).append($box);
        var disparity;
        if (disparity = $box.width() - 498) {
            $box.css("left", $box.css("left").replace("px", "") - disparity / 2);
        }
        if (disparity = $box.height() - 298) {
            $box.css("top", $box.css("top").replace("px", "") - disparity / 2);
        }
        return $box;
    }
})

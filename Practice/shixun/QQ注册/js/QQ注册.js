$(function () {
    var $i = 1
    $('body').everyTime(5000, function () {
        var url = ""
        if ($i == 1) {
            url = "background-image: url(" + "'img/01-2.jpg'" + ")"
        }
        else if ($i == 2) {
            url = "background-image: url(" + "'img/01-3.jpg'" + ")"
        }
        else if ($i == 3) {
            url = "background-image: url(" + "'img/01-4.jpg'" + ")"
        }
        else {
            url = "background-image: url(" + "'img/01-1.jpg'" + ")"
        }
        $(".left-pic").attr("style", url)
        $i = $i + 1
        if ($i == 5) {
            $i = 1
        }
    })

    $(".lang").mouseover(function () {
        $(this).children(".up").attr("style", "")
        $(this).children(".down").attr("style", "display: none;")
        $(this).children("ul").attr("style", "")
    })
    $(".lang").mouseout(function () {
        $(this).children(".up").attr("style", "display: none;")
        $(this).children(".down").attr("style", "")
        $(this).children("ul").attr("style", "display: none;")
    })

    var $check_img_order = 1
    $(".agree label").click(function () {
        if ($check_img_order == 1) {
            $(this).children("img:first").attr("style", "")
            $(this).children("img:last").attr("style", "display: none")
            $check_img_order = 0
        } else {
            $(this).children("img:first").attr("style", "display: none")
            $(this).children("img:last").attr("style", "")
            $check_img_order = 1
        }
    })

    $(".nickname").focus(function () {
        $(".error-nickname").parent("div").hide("slow")
        $(this).removeClass("error-border")
    })

    $(".nickname").blur(function () {
        if ($(this).val().length === 0) {
            $(".error-nickname").parent("div").show("slow")
            $(this).addClass("error-border")
        }
    })

    $(".password").focus(function () {
        $(".error-password").parent("div").hide("slow")
        $(".password-tips-group").show("slow")
        $(this).addClass("error-border")

    })

    $(".password").blur(function () {
        if ($(this).val().length === 0) {
            $(".error-password").parent("div").show("slow")
            $(".password-tips-group").hide("slow")
            $(this).addClass("error-border")
        }
    })

    $(".tel").focus(function () {
        $(".send-code-area").show()
        if ($(this).val().length !== 0) {
            $(".error-tel").parent("div").hide("slow")
            $(".find").show("slow")
        }
    })

    $(".tel").blur(function () {
        if ($(this).val().length !== 0) {
            var str = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/
            if (!str.test($(this).val())) {
                $(".error-tel").parent("div").show("slow")
                $(".find").hide("slow")
                $(this).addClass("error-border")
            } else {
                $(".find").show("slow")
                $(".error-tel").parent("div").hide("slow")
                $(this).removeClass("error-border")
            }
        } else {
            $(this).removeClass("error-border")
            $(".send-code-area").hide()
        }
    })
})

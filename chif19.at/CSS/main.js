let height = $(window).scrollTop()
let bodyHeight = $("body").height()

$(document).scroll(function() {
    height = $(window).scrollTop()

    $("#chifNormal").css({
        "opacity": 30 / height
    })

    $("#chifOrange").css({
        "position": "relative",
        "top": height - height / 5,
        "opacity": 120 / height
    })

    if(height<=0){
        $("#chifOrange").css({
            "opacity": 100
        })
    }
})
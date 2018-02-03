FontAwesomeConfig = { autoReplaceSvg: 'nest' };

$(document).ready(function () {
    var active = $(".active");
    var item = $(".menu_list li");
    var clicked = $(".menu_list li.clicked");
    ClickedColorPicker();

    function ClickedColorPicker() {
        clicked = $(".menu_list li.clicked")
        clicked.css("background-color", $("#" + clicked.data("item")).css("background-color"));
    };

    $(".menu").click(function () {
        active.css("transform", "scale(0.8)");
        $(".container .nav").toggle().animate({ width: '75%' }, "fast");
        $(".container .overlay").fadeIn();
    })

    $("#close, .container .overlay").on("click", function () {
        $(".container .nav").animate({ width: '0%' }, "fast", function () { $(".container .nav").toggle() });
        $(".container .overlay").fadeOut();
        active.css("transform", "scale(1)");
    });


    item.click(function () {
        active.removeClass("active");
        $("#" + $(this).data("item")).addClass("active");
        active = $(".active");
        active.css("transform", "scale(1)");

        $(".container .nav").animate({ width: '0%' }, "fast", function () { $(".container .nav").toggle() });
        $(".container .overlay").fadeOut();

        clicked.removeClass("clicked");
        clicked.css("background-color", "");
        $(this).addClass("clicked");
        ClickedColorPicker();
    });


});

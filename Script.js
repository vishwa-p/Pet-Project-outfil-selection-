$(document).ready(function () {
    setInterval(function () {
        alert("Pink top will go with Brown jeans");
    }, 30000);
    setInterval(function () {
        alert("Blue Color top is more suitbale with blue botton one");
    }, 20000);
    function ImageSelection(choices, i) {
        i = 0;

        this.Next = function () {
            HideCurrentimg();
            DisplayNextimg();
        }

        var HideCurrentimg = function () {
            if (choices) {
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var DisplayNextimg = function () {
            if (choices) {
                if (i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }

    var pants = $(".pant");
    var shirts = $(".shirt");
    var backgrounds = $(".bg");

    var shirt_picker = new ImageSelection(shirts);
    document.getElementById("shirt_button").onclick = function () { shirt_picker.Next(); };

    var pants_picker = new ImageSelection(pants);
    document.getElementById("pant_button").onclick = function () { pants_picker.Next(); };

    var bg_picker = new ImageSelection(backgrounds);
    document.getElementById("bg_button").onclick = function () { bg_picker.Next(); };

});
$("#shirt_button").click(function () {
    $("#shirt-menu").css("visibility", "visible");
});
document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.createElement('div');
    canvas.classList.add('canvas');
    canvas.style.width = '876px';
    canvas.style.height = '696px';
    canvas.style.border = '1px solid grey';
    canvas.style.float = 'left';
    // canvas.style.paddingTop='120px';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas);



    for (var i = 0; i < 4234; i++) {
        var pixel = document.createElement('div');
        canvas.appendChild(pixel);
        pixel.classList.add('pixel');
        pixel.style.height = '10px';
        pixel.style.width = '10px';
        pixel.style.float = 'left';
        pixel.style.border = '1px solid grey';
    }
    var wanted = " ";
    var paint = false;
    var grab = function() {
        pickedColor = event.target.id;
        // console.log(event.target, pickedColor, "kl");
        wanted = pickedColor;
        return wanted;
    }

    var red = document.getElementById('red');
    red.addEventListener("click", grab);
    var orange = document.getElementById('orange');
    orange.addEventListener("click", grab);
    var black = document.getElementById('black');
    black.addEventListener("click", grab);
    var yellow = document.getElementById('yellow');
    yellow.addEventListener("click", grab);
    var purple = document.getElementById('purple');
    purple.addEventListener("click", grab);
    var blue = document.getElementById('blue');
    blue.addEventListener("click", grab);
    var green = document.getElementById('green');
    green.addEventListener("click", grab);
    var gray = document.getElementById('gray');
    gray.addEventListener("click", grab);
    var tan = document.getElementById('tan');
    tan.addEventListener("click", grab);


    var change = function() {
        if (event.target === this) {

        } else {
            event.target.style.backgroundColor = wanted;
        }
        var uppse = function() {
            event.target ;

        }
        canvas.addEventListener('mouseup', uppse)
    }
    canvas.addEventListener("mouseover", change);

    var rain = function() {
        var paint = true;

        if (event.target === this) {} else {
            event.target.style.backgroundColor = wanted;
        }
    }
    canvas.addEventListener("mousedown", rain)






});

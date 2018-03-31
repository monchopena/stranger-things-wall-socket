/* Main JavaScript File */

var img = document.getElementById('letters');

var imgArray = [];
for (i = 65; i < 91; i++) {
    imgArray[i - 65] = new Image();
    imgArray[i - 65].src = 'images/letters/' + i + '.gif';
}

document.addEventListener('keydown', keyboard);
document.addEventListener('keyup', reset);

function keyboard(e) {
    var code = e.keyCode;
    console.log(code);
    if (code > 64 && code < 91) {
        img.src = imgArray[code - 65].src;
    }
}

// Only for tests
function blink(code) {
    return new Promise((resolve) => {
        if (code > 64 && code < 91) {
            img.src = imgArray[code - 65].src;
        }
        setTimeout(() => {
            reset();
            resolve(code);
        }, 2000);
    })

}

function reset() {
    console.log('reset');
    img.src = 'images/letters/empty.gif';
}


/* The Socket */
/* TODO: Think how to do this better ... */
socket.on('broad', function (data) {
    var letters = data.split('');
    var i = 0;
    var interval = setInterval(function () {
        if (i < data.length) {
            var letter = letters[i];
            var code = letter.charCodeAt();
            if (code > 64 && code < 91) {
                img.src = imgArray[code - 65].src;
            }
            console.log(code);
        }
        i++;
        if (i > data.length) {
            reset();
            clearInterval(interval);
        }
    }, 2000);
});
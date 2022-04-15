let $left = 0;
let $width = window.innerWidth - 100;


$('.square').click(() => {
    let interval = setInterval(() => {
        if ($left == $width) {
            clearInterval(interval);
        }
        $left = $left + 1;
        $('.square').css({
            "left": $left + "px"
        });

    }, 1);
}) 
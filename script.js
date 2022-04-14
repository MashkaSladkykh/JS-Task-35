let $left = 0;

$('body').click(() => {
    let interval = setInterval(() => {
        if ($left == 1099) {
            clearInterval(interval);
        }
        $left = $left + 1;
        $('.square').css({
            "left": $left + "px"
        });

    }, 10);
})
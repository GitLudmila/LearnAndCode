<?php
function digitSum($str) {
    return array_reduce(explode("/./g", $str), function ($acc, $num) {
        return $acc + (int)$num;
    }, 0);
}
function orderWeight($str) {
    $nums = explode(" ", $str);
    sort($nums);
    return implode(' ', $nums);
}
// echo digitSum("104");
// echo "2000 103 123 4444 99".PHP_EOL;
// echo orderWeight("103 123 4444 99 2000");//.PHP_EOL; //"2000 103 123 4444 99"

// echo "11 11 2000 10003 22 123 1234000 44444444 9999".PHP_EOL;
// echo orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); //"11 11 2000 10003 22 123 1234000 44444444 9999"
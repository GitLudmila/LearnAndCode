<?php
function human_readable($seconds) : string {
    return sprintf('%02d:%02d:%02d', $seconds / 3600, $seconds / 60 % 60, $seconds % 60);
}
//or
// function human_readable($sec) {
//     $arr = [$sec / 3600, $sec % 3600 / 60, $sec % 60];
//     foreach ($arr as &$e) {
//         $e = floor($e);
//         if($e < 10) {$e = "0".$e;}
//     }
//     return implode(":", $arr);
//  }
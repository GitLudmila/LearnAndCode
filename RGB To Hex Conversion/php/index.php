<?php
//Solution
function rgb($r, $g, $b): string {
  return vsprintf('%02X%02X%02X', array_map(function ($v) { return min(max($v, 0), 255); }, [$r, $g, $b]));
}

//or

// function rgb($r, $g, $b){
//     $r = str_pad(dechex(max(0, min(255, $r))), 2, "0", STR_PAD_LEFT);
//     $g = str_pad(dechex(max(0, min(255, $g))), 2, "0", STR_PAD_LEFT);
//     $b = str_pad(dechex(max(0, min(255, $b))), 2, "0", STR_PAD_LEFT);
//     return strtoupper($r.$g.$b);
// }
<?php
// Solution
function orderWeight($str) {
  $nums = explode(" ", $str);
  
  usort($nums, function ($a, $b) {
    $sumA = array_sum(str_split((string) $a));
    $sumB = array_sum(str_split((string) $b));
    
    if ($sumA === $sumB) return strcmp($a, $b);
    
    return $sumA > $sumB;
  });
  
  
  return implode(' ', $nums);
}
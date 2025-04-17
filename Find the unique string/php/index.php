<?php
function find_uniq($a) {
  $b = [];
  foreach ($a as $val) {
    $letters = array_unique(str_split(strtolower($val)));
    sort($letters);
    $b[] = implode('', $letters);
  }
  
  if ($b[0] === $b[1]) {
    for ($i = 2; $i < count($b); $i++) {
      if ($b[$i] !== $b[0]) {
        return $a[$i];
      }
    }
  }
  
  return $b[0] === $b[2] ? $a[1] : $a[0];
}

//or

// function find_uniq($a) {
//   $letter_count = array_count_values(str_split(join('', array_map('strtolower', $a))));
//   asort($letter_count);
//   foreach ($a as $v) if (strpos(strtolower($v), array_key_first($letter_count)) !== false) return $v;
// }
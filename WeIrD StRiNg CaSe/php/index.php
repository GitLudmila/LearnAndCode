<?php
function toWeirdCase($string) {
  $string = strtolower($string);
  for($i=0;$i<strlen($string);$i+=2){
    if($string[$i]==' '){
      $i -= 1;
      continue;
    }
    $string[$i] = strtoupper($string[$i]);
  }
  return $string;
}
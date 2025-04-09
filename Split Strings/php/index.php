<?php
function solution($str) {
  if(strlen($str) == 0) {return [];}
  if(strlen($str) % 2 != 0) {$str = $str."_";}
  return str_split($str, 2);
}
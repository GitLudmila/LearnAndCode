<?php
function phone($strng, $num) {
  $found = 0;
  foreach (explode("\n", $strng) as $line) {
      if (strpos($line, $num)) {
          $found++;
          preg_match('/<(.+?)>/', $line, $name);
          $addr = preg_replace('/\s{2,}/', ' ', trim(preg_replace('/[^\w .-]/', '', strtr($line, array('_' => ' ', $name[0] => '', $num => '')))));
          $ret = "Phone => {$num}, Name => {$name[1]}, Address => {$addr}";
      }
  }
  return $found ? ($found > 1 ? "Error => Too many people: $num" : $ret) : "Error => Not found: $num";
}
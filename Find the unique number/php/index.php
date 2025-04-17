<?php
function find_uniq($a) {
    sort($a);
    return ($a[0] === $a[1]) ? end($a) : current($a);
  }
<?php

function moveZeros(array $items): array {
  $noZeros = [];
  foreach($items as &$e) {if($e !== 0 && $e !== 0.0){array_push($noZeros, $e);}}
  while(count($noZeros) < count($items)) {array_push($noZeros, 0);}
  return $noZeros;}
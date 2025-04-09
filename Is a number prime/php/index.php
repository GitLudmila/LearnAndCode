<?php

function is_prime(int $n): bool {
  for ($i = 2; $i <= sqrt($n); $i++) {
      if($n % $i === 0) return false;
  }
  return $n > 1;
}
// or

// function is_prime(int $n) : bool{
//   if ($n == 2) return true;
// 	if ($n % 2 == 0 || $n < 2) return false;
// 	$i = 3; $s = (int)sqrt($n);
// 	while ($i <= $s){
// 		if ($n % $i == 0) return false;
// 		$i += 2;
// 	}
// 	return true;
// }
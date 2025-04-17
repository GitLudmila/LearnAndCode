<?php
function isValidIP(string $str): bool{
  return filter_var($str, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4) !== false;
}

//or

// function isValidIP( string $str ) : bool {
//   return count( array_filter( explode( '.', $str ), function ( $octet ) {
//       return strlen( strval( intval( $octet ) ) ) == strlen( $octet ) and $octet <= 255;
//   })) == 4;
// }

// or

// function isValidIP(string $str): bool {
//   return ip2long($str) !== false;
// }

// or

// function isValidIP(string $str): bool {
//   return preg_match('/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]?)$/',$str);
// }

$ip = '0.0.0.0'; //valid
// $ip = '255.255.255.255'; //valid
// $ip = '238.46.26.43'; //valid
// $ip = '0.34.82.53'; //valid
// $ip = ''; //invalid
// $ip = 'abc.def.ghi.jkl'; //invalid
// $ip = '123.456.789.0'; //invalid
// $ip = ' 1.2.3.4'; //invalid
// $ip = '03.45.20.1'; //invalid
// $ip = '192.168.00.3'; //invalid

// print_r(isValidIP($ip));
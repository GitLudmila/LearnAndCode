<?php
function ips_between($start, $end) : int {
    $ip2dec = fn($ip) => array_reduce(array_map('intval', explode('.', $ip)), fn($acc, $curr) => $acc * 256 + $curr, 0);
    return $ip2dec($end) - $ip2dec($start);
}

//or

//function ips_between ($start, $end) {
//  return abs(ip2long($start) - ip2long($end)); 
//}
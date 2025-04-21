<?php

function pickPeaks($arr) {
    $result = ['pos' => [], 'peaks' => []];
    if (count($arr) > 2) {
        $pos = -1;
        for ($i = 1; $i < count($arr); $i++) {
            if ($arr[$i] > $arr[$i - 1]) {
                $pos = $i;
            } elseif ($arr[$i] < $arr[$i - 1] && $pos != -1) {
                $result['pos'][] = $pos;
                $result['peaks'][] = $arr[$pos];
                $pos = -1;
            }
        }
    }
    return $result;
}

// or

// function pickPeaks(array $arr) {
//     $res = ['pos' => [], 'peaks' => []];
//     if (count($arr) < 2) return $res;
//     $pos = -1;
//     for ($i = 1; $i < count($arr); $i++) {
//         if ($arr[$i] > $arr[$i - 1]) {
//             $pos = $i;
//         } else if ($arr[$i] < $arr[$i - 1] && $pos != -1) {
//             array_push($res["pos"], $pos);
//             array_push($res["peaks"], $arr[$pos]);
//             $pos = -1;
//         }
//     }
//     return $res;
//   }

// $array = [3,2,3,6,4,1,2,3,2,1,2,3];
//{pos:[3,7], peaks:[6,3]}

// $array = [3,2,3,6,4,1,2,3,2,1,2,2,2,1];
//{pos:[3,7,10], peaks:[6,3,2]}

// $array = [2,1,3,1,2,2,2,2,1]; 
//{pos:[2,4], peaks:[3,2]}

// $array = [2,1,3,1,2,2,2,2]; 
//{pos:[2], peaks:[3]} !!!

// $array = [2,1,3,2,2,2,2,5,6];
//{pos:[2], peaks:[3]} !!!

// $array = [2,1,3,2,2,2,2,1];
//{pos:[2], peaks:[3]}

$array = [1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]; 
//{pos:[2,7,14,20], peaks:[5,6,5,5]}); !!!

// $array = [];
//{pos:[],peaks:[]}

// $array = [1,1,1,1];
//{pos:[],peaks:[]}

echo pickPeaks( $array);
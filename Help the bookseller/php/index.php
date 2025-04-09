<?php

function stockList($listOfArt, $listOfCat){
    if(empty($listOfArt) || empty($listOfCat)) return "";
  
    $str = '';
    
    foreach($listOfCat as $cat) {
      $cat_sum = array_sum(array_map(function($el) use ($cat) {      
        return (0 === strpos($el, $cat)) ? explode(' ', $el)[1] : 0;
      }, $listOfArt));
      
      $str .= "($cat : $cat_sum) - ";
    }
    
    return rtrim($str, ' - ');
}

// or

// function stockList($listOfArt, $listOfCat){
//     // Проверка на присутствие книг
//     if (count($listOfArt) === 0 || count($listOfCat) === 0) {
//         return '';
//     }
//     // Создание обьекта совпадений
//     $res = [];
    
//     foreach($listOfCat as $e) {$res[$e] = 0;}
//     $listOfKeys = array_keys($res);
//     foreach($listOfArt as $e) {
//         $arr = explode(' ', $e);
//         foreach($listOfKeys as $e) {if (str_starts_with($arr[0], $e)) {$res[$e] += (int)$arr[1];}}
//     }
//     // Вывод обьекта в строку
//     $vowels = array("{", "}", "\"");
//     $theResult = str_replace(':', ' : ', str_replace(',', ') - (', str_replace($vowels, '', json_encode($res))));
//     return '('.$theResult.')';
// }
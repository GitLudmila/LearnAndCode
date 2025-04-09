<?php

function createPhoneNumber($numbersArray) {
    return preg_replace('/(...)(...)(.*)/', '($1) $2-$3', implode('', $numbersArray));
}
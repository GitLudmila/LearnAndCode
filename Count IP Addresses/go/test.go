package main

import (
	"math"
	"strconv"
	"strings"
)

func IpsBetween(start, end string) int {
	return int(math.Abs(Num(end) - Num(start)))
}

func Num(ip string) float64 {
	arr := strings.Split(ip, ".")
	acc := 0
	for _, e := range arr {
		i, err := strconv.Atoi(e)
		if err != nil {
			panic(err)
		}
		acc = acc*256 + i
	}
	return float64(acc)
}

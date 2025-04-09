package main

import (
	"math"
	"strconv"
)

func SumDigPow(a, b uint64) []uint64 {
	r := []uint64{}
	for i := a; i <= b; i++ {
		s := 0
		p := strconv.Itoa(int(i))
		for l, n := range p {
			z, _ := strconv.Atoi(string(n))
			s += int(math.Pow(float64(z), float64((l + 1))))
		}
		if uint64(s) == uint64(i) {
			r = append(r, uint64(s))
		}
		s = 0
	}
	return r
}

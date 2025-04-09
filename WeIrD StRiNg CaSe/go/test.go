package main

import (
	"unicode"
)

func toWeirdCase(str string) string {
	cap := true
	var result []rune
	for _, c := range str {
		if c == 32 {
			result = append(result, c)
			cap = true
		} else if cap {
			result = append(result, unicode.ToUpper(c))
			cap = false
		} else {
			result = append(result, unicode.ToLower(c))
			cap = true
		}
	}
	return string(result)
}

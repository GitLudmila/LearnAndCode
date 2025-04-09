package main

import "regexp"

func Solution(str string) []string {
	return regexp.MustCompile(".{2}").FindAllString(str+"_", -1)
}

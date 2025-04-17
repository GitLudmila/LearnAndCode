// Solution
package main

import (
	"sort"
	"strings"
)

type WeightList []string

func (a WeightList) Len() int      { return len(a) }
func (a WeightList) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a WeightList) Less(i, j int) bool {
	if valueForWeight(a[i]) < valueForWeight(a[j]) {
		return true
	}
	if valueForWeight(a[i]) == valueForWeight(a[j]) {
		return a[i] <= a[j]
	}
	return false
}

func valueForWeight(str string) int {
	val := 0
	for _, c := range str {
		val += int(c - '0')
	}
	return val
}

func OrderWeight(strng string) string {
	weights := WeightList(strings.Split(strng, " "))
	sort.Stable(weights)
	return strings.Join([]string(weights), " ")
}

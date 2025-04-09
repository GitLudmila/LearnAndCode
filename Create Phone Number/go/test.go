package main

import (
	"strconv"
)

func CreatePhoneNumber(numbers [10]uint) string {
	var arr [10]string
	for index, value := range numbers {
		v := strconv.FormatUint(uint64(value), 10)
		arr[index] = v
	}
	return `(` + arr[0] + arr[1] + arr[2] + `) ` + arr[3] + arr[4] + arr[5] + `-` + arr[6] + arr[7] + arr[8] + arr[9]
}

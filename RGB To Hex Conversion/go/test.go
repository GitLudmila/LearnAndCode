package main

import "fmt"

func validate(num int) int {
	switch {
	case num < 0:
		return 0
	case num > 255:
		return 255
	default:
		return num
	}
}

func RGB(r, g, b int) string {
	return fmt.Sprintf("%02X%02X%02X", validate(r), validate(g), validate(b))
}

//or

// import (
// 	"fmt"
// 	"math"
//   )

//   func RGB(r, g, b int) string {
// 	return fmt.Sprintf("%.2X%.2X%.2X", int(math.Min(math.Max(float64(r), 0), 255)), int(math.Min(math.Max(float64(g), 0), 255)), int(math.Min(math.Max(float64(b), 0), 255)))
//   }

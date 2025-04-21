package main

import "fmt"

type PosPeaks struct {
	Pos   []int
	Peaks []int
}

func PickPeaks(array []int) PosPeaks {
	res := PosPeaks{}
	pos := 0
	val := 0
	for i := 1; i < len(array); i++ {
		if array[i] > array[i-1] {
			pos, val = i, array[i]
		} else if array[i] < array[i-1] && pos > 0 {
			res = PosPeaks{append(res.Pos, pos), append(res.Peaks, val)}
			pos = 0
		}
	}
	return res
}

// or

// func PickPeaks(m []int) (r PosPeaks) {
// 	for i, p := 1, 0; i < len(m); i++ {
// 		if m[i-1] < m[i] {
// 			p = i
// 		} else if m[p] > m[i] && p > 0 {
// 			r.Peaks, r.Pos, p = append(r.Peaks, m[p]), append(r.Pos, p), 0
// 		}
// 	}
// 	return r
// }

func main() {
	// Example usage
	arr := []int{3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3}
	//{pos:[3,7], peaks:[6,3]}
	fmt.Println(PickPeaks(arr))
}

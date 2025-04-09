package main

func filter[T any](ss []T, test func(T) bool) (ret []T) {
	for _, s := range ss {
		if test(s) {
			ret = append(ret, s)
		}
	}
	return
}

func MoveZeros(arr []int) []int {
	noZeros := func(s int) bool { return s != 0 }
	newArr := filter(arr, noZeros)
	for len(newArr) < len(arr) {
		newArr = append(newArr, 0)
	}
	return newArr
}

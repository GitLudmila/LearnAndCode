package main

import "math"

func FindEmirp(n int) [3]int {
	nums := []int{}
	sum := 0
	for i := 11; i <= n; i++ {
		if IsPrime(i) && IsPrime(ReverseInt(i)) && ReverseInt(i) != i {
			nums = append(nums, i)
			sum += i
		}
	}
	if len(nums) != 0 {
		return [3]int{len(nums), nums[len(nums)-1], sum}
	}
	return [3]int{0, 0, 0}
}

func IsPrime(n int) bool {
	f := int(math.Sqrt(float64(n)))
	for i := 2; i <= f; i++ {
		if n%i == 0 {
			return false
		}
	}
	return n > 1
}

func ReverseInt(n int) int {
	new_int := 0
	for n != 0 {
		remainder := n % 10
		new_int *= 10
		new_int += remainder
		n /= 10
	}
	return new_int
}

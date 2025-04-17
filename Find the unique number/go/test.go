package main

func FindUniq(arr []float32) float32 {
	if arr[0] != arr[1] && arr[1] == arr[2] {
		return arr[0]
	}
	for i, v := range arr[1:] {
		if v != arr[i] {
			return v
		}
	}
	return 0
}

//or

// func FindUniq(arr []float32) float32 {
// 	if arr[0] != arr[1] {
// 	  if arr[0] == arr[2] {
// 		return arr[1]
// 	  } else {
// 		return arr[0]
// 	  }
// 	}

// 	for i := 2; i < len(arr); i++ {
// 	  if arr[i] != arr[1] {
// 		return arr[i]
// 	  }
// 	}

// 	panic("FailedPrecondition: No uniques!")
// }

//or

// import("sort")

// func FindUniq(arr []float32) float32 {
// 	sort.Slice(arr, func(i, j int) bool { return arr[i] < arr[j] })
// 	if arr[0] == arr[1] {
// 		sort.Slice(arr, func(i, j int) bool { return arr[i] > arr[j] })
// 	}
// 	return arr[0]
// }

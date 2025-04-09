package main

func PlayPass(s string, n int) string {
	result := make([]rune, len(s))

	for index, element := range s {
		switch {
		// Even letter
		case element >= 65 && element < 91 && index%2 == 0:
			result[len(s)-index-1] = rune((int(element)-65+n)%26 + 65)
		// Odd letter
		case element >= 65 && element < 91 && index%2 == 1:
			result[len(s)-index-1] = rune((int(element)-65+n)%26 + 97)
		// Number
		case element >= 48 && element < 58:
			result[len(s)-index-1] = rune(105 - int(element))
		// Anything else
		default:
			result[len(s)-index-1] = element
		}
	}
	return string(result)
}

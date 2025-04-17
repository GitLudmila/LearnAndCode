// Solution
package main

func Rot13(input string) string {
	var result string

	for _, i := range input {
		switch {
		case i >= 'A' && i <= 'Z':
			result = result + string('A'+(i-'A'+13)%26)
		case i >= 'a' && i <= 'z':
			result = result + string('a'+(i-'a'+13)%26)
		default:
			result = result + string(i)
		}
	}
	return result
}

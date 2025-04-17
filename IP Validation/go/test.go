package main

import (
	"net"
)

func Is_valid_ip(ip string) bool {
	if net.ParseIP(ip) != nil {
		return true
	}
	return false
}

// or

// import "regexp"

// func Is_valid_ip(ip string) bool {
//   re, _ := regexp.MatchString(`^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.|$)){4}\b`, ip)
// 	return re
// }

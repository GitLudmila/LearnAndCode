package main

import (
	"fmt"
	"time"
)

func HumanReadableTime(seconds int) string {
	duration := time.Duration(seconds) * time.Second
	h, duration := duration/time.Hour, duration%time.Hour
	m, duration := duration/time.Minute, duration%time.Minute
	s, duration := duration/time.Second, duration%time.Minute
	return fmt.Sprintf("%02d:%02d:%02d", int64(h), int64(m), int64(s))
}

//or

// import "fmt"
// func HumanReadableTime(seconds int) string {
//   return fmt.Sprintf("%02d:%02d:%02d", seconds / 3600, seconds / 60 % 60, seconds % 60)
// }

//or

// import ("math";"strconv";)
//  func HumanReadableTime(sec int) string {
//     hrs := strconv.Itoa(int(math.Round(float64(sec / 3600))))
//     mins := strconv.Itoa(int(math.Round(float64(sec % 3600 / 60))))
//     secs := strconv.Itoa(int(math.Round(float64(sec % 60))))
//     if(len(hrs) < 2) {hrs = "0"+hrs}
//     if(len(mins) < 2) {mins = "0"+mins}
//     if(len(secs) < 2) {secs = "0"+secs}
//     return hrs+":"+mins+":"+secs
// }

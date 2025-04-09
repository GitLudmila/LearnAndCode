package main

import (
	"fmt"
	"strconv"
	"strings"
)

func StockList(listArt []string, listCat []string) string {
	if len(listArt) == 0 || len(listCat) == 0 {
		return ""
	}

	quantity := make(map[string]int)
	for _, stock := range listArt {
		splitted := strings.Split(stock, " ")
		firstCh := string(splitted[0][0])
		n, _ := strconv.Atoi(splitted[1])
		quantity[firstCh] += n
	}

	result := make([]string, len(listCat))
	for i, code := range listCat {
		result[i] = fmt.Sprintf("(%s : %v)", code, quantity[code])
	}

	return strings.Join(result, " - ")
}

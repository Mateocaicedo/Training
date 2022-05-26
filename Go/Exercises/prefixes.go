package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	n := 0.0
	var count0 int
	var countd int
	fmt.Print("Enter a number: ")
	fmt.Scanln(&n)
	generalResult := ""
	if n < 1 {
		generalResult = "Enter a number greater than 0: "
	} else if len(strconv.Itoa(int(n))) == 1 {
		generalResult = strconv.Itoa(int(n))

	} else {
		n1 := strings.Split(strconv.Itoa(int(n)), "")

		for i := len(n1) - 1; i >= 0; i-- {
			new, _ := strconv.Atoi(n1[i])

			if new != 0 {
				countd++
			}
			if i != 0 {
				count0++

			}

		}

		if count0 == 1 {
			generalResult = result2(countd, n1, "da")
		} else if count0 == 2 {
			generalResult = result2(countd, n1, "h")

		} else if count0 <= 3 || count0 < 6 {
			generalResult = result(countd, n1, "k", count0, 3)

		} else if count0 <= 6 || count0 < 9 {
			generalResult = result(countd, n1, "M", count0, 6)
		} else if count0 <= 9 || count0 < 12 {

			generalResult = result(countd, n1, "G", count0, 9)
		} else if count0 <= 12 || count0 < 15 {

			generalResult = result(countd, n1, "T", count0, 12)
		} else if count0 <= 15 || count0 < 18 {

			generalResult = result(countd, n1, "P", count0, 15)
		} else if count0 <= 18 || count0 < 21 {

			generalResult = result(countd, n1, "E", count0, 18)
		} else if count0 <= 21 || count0 < 24 {

			generalResult = result(countd, n1, "Y", count0, 21)
		} else if count0 <= 24 {

			generalResult = result(countd, n1, "Z", count0, 24)
		}
	}

	fmt.Println(generalResult)
}

func result(countd int, n1 []string, letter string, count0 int, quantity int) (generalResult string) {
	for i := 0; i < countd; i++ {
		generalResult += n1[i]
	}
	generalResult2 := strings.Split(generalResult, "")

	if count0 > quantity {
		generalResult = ""
		for i := 0; i < len(n1)-quantity; i++ {
			generalResult += n1[i]
		}
		generalResult = generalResult + letter

	} else if countd > 1 {
		for i := 0; i < len(generalResult2); i++ {

			if i == 0 {
				generalResult = generalResult2[0] + "."
			} else if i != 0 {
				generalResult += generalResult2[i]
			}
		}
		generalResult = generalResult + letter

	} else {
		generalResult = generalResult + letter

	}
	return
}

func result2(countd int, n1 []string, letter string) (generalResult string) {
	for i := 0; i < countd; i++ {
		generalResult += n1[i]
	}
	if countd > 1 {
		generalResult2 := strings.Split(generalResult, "")

		generalResult = generalResult2[0] + "." + generalResult2[1] + letter

	} else {

		generalResult = generalResult + letter

	}
	return
}

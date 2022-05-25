package main

import (
	"fmt"
	"strings"
	"time"
)

func main() {
	go nameLow("Mateooo")
	fmt.Println("Boored")
	var wait string
	fmt.Scanln(&wait)

}

func nameLow(name string) {
	letters := strings.Split(name, "")

	for _, u := range letters {
		time.Sleep(1000 * time.Millisecond)
		fmt.Println(u)
	}
}

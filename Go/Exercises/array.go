package main

import (
	"fmt"
)

func main() {
	var tamaño int
	fmt.Print("Ingresa el tamaño del array")
	fmt.Scanln(&tamaño)
	list := make([]int, 0)

	for i := 0; i < tamaño; i++ {
		list = append(list, i+1)
	}

	for i := 0; i < len(list); i++ {
		fmt.Println(list[i])
	}

}

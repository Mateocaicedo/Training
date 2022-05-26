package main

import (
	"fmt"
)

func main() {
	var n1 int
	var n2 int
	fmt.Print("Digita un numero: ")
	fmt.Scanln(&n1)
	fmt.Print("Digita otro numero: ")
	fmt.Scanln(&n2)

	resultado := n1 + n2

	fmt.Println("El resultado es: ", resultado)
}

package main

import "fmt"

func main() {
	var n1 int
	var n2 int
	n3 := 0
	fmt.Scanln(&n3, "Digita un numero")
	fmt.Print("Digita otro numero: ")
	fmt.Scanln(&n2)

	fmt.Println(add(n1, n2))
}

func add(n1, n2 int) (resultado int) {

	resultado = n1 + n2

	return

}

package main

import (
	"fmt"
	//package for conversion from int to str
	"strconv"
)

//for value 0 use always var
var k int

// created type od data
type letra string

func main() {
	//this form of declaration always will be 0
	var a int
	if a == 0 {
		fmt.Println("is 0")
	}
	//constan declaration
	const n = 5

	k = 4

	fmt.Println(k)
	//short declaration
	n2 := 9
	n2 = 3
	var suma int = n + n2
	//conversion from int to string
	var resultado string = strconv.Itoa(suma)
	escribir(resultado)
	//conversion from string to int
	nuevo, _ := strconv.Atoi(resultado)
	fmt.Println("aaa", nuevo)

	//shor declaration
	s := "hola"
	//two form of show values on console
	fmt.Println("hola", s)
	fmt.Printf("el valor es : %v \n", s)

	var variable_letra letra = "real"

	fmt.Printf("El tipo es: %T \n", variable_letra)

	//imprimir()

}

//functions
func escribir(x string) {
	fmt.Println(x)
}

func imprimir() {
	x := 42
	y := "James Bond"
	z := true
	fmt.Println(x, y, z)
	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(z)
}

package main

import (
	"fmt"
)

func main() {

	l1 := 0.0
	l2 := 0.0
	l3 := 0.0
	fmt.Print("Ingrese a: ")
	fmt.Scanln(&l1)
	fmt.Print("Ingrese b: ")
	fmt.Scanln(&l2)
	fmt.Print("Ingrese c: ")
	fmt.Scanln(&l3)

	fmt.Println(triangulo(l1, l2, l3))

}

func triangulo(l1, l2, l3 float64) (resultado string) {
	if l1 > (l3+l2) || l2 > (l1+l3) || l3 > (l1+l2) {
		return "No es un triagulo valido."
	} else if l1 == l2 && l2 == l3 {
		return "Es un triangulo equilatero."
	} else if l1 == l2 || l2 == l3 || l3 == l1 {
		return "Es un triangulo isoceles."
	} else {
		return "Es un triangulo escaleno."
	}

}

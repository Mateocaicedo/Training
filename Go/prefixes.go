package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	n := 0.0
	var cont_0 int
	var cont_d int
	fmt.Print("Ingrese una cantidad: ")
	fmt.Scanln(&n)
	resultado := ""
	if n < 1 {
		resultado = "Ingrese un numero mayor que 0"
	} else if len(strconv.Itoa(int(n))) == 1 {
		resultado = strconv.Itoa(int(n))

	} else {
		n1 := strings.Split(strconv.Itoa(int(n)), "")

		for i := 0; i < len(n1); i++ {
			nuevo, _ := strconv.Atoi(n1[i])
			if nuevo != 0 {
				cont_d++
			}
		}
		for i := 1; i < len(n1); i++ {
			cont_0++
		}
		if cont_0 == 1 {
			for i := 0; i < cont_d; i++ {
				resultado += n1[i]
			}

			if cont_d > 1 {
				resultado2 := strings.Split(resultado, "")

				resultado = resultado2[0] + "." + resultado2[1] + "da"
			} else {

				resultado = resultado + "da"
			}

		} else if cont_0 == 2 {
			for i := 0; i < cont_d; i++ {
				resultado += n1[i]
			}
			if cont_d > 1 {
				resultado2 := strings.Split(resultado, "")

				resultado = resultado2[0] + "." + resultado2[1] + "h"
			} else {

				resultado = resultado + "h"
			}

		} else if cont_0 == 3 {
			for i := 0; i < cont_d; i++ {
				resultado += n1[i]
			}
			if cont_d > 1 {
				resultado2 := strings.Split(resultado, "")
				for i := 0; i < len(resultado2); i++ {
					if i == 0 {
						resultado = resultado2[0] + "."
					} else if i != 0 {
						resultado += resultado2[i]
					}
				}
				resultado = resultado + "k"

			} else {

				resultado = resultado + "k"
			}

		} else if cont_0 == 6 {
			for i := 0; i < cont_d; i++ {
				resultado += n1[i]
			}
			if cont_d > 1 {
				resultado2 := strings.Split(resultado, "")
				for i := 0; i < len(resultado2); i++ {
					if i == 0 {
						resultado = resultado2[0] + "."
					} else if i != 0 {
						resultado += resultado2[i]
					}
				}
				resultado = resultado + "M"
			} else {

				resultado = resultado + "M"
			}
		} else if cont_0 == 9 {
			for i := 0; i < cont_d; i++ {
				resultado += n1[i]
			}
			if cont_d > 1 {
				resultado2 := strings.Split(resultado, "")
				for i := 0; i < len(resultado2); i++ {
					if i == 0 {
						resultado = resultado2[0] + "."
					} else if i != 0 {
						resultado += resultado2[i]
					}
				}
				resultado = resultado + "G"
			} else {

				resultado = resultado + "G"
			}
		}

	}

	fmt.Println(resultado)
}

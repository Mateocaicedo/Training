package main

import "fmt"

func main() {
	slice := make([]int, 0)

	for i := 0; i < 20; i++ {
		slice = append(slice, i)
	}
	fmt.Println(slice)

	var a []int
	for i := 0; i < 20; i++ {
		a = append(a, i)
	}

	fmt.Println(a)
}

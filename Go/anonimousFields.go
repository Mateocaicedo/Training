package main

import "fmt"

type Human struct {
	name string
}

type Dummy struct {
	name string
}
type Student struct {
	Human
	Dummy
}

func main() {

	h1 := Student{Human{"mateo"}, Dummy{"Reinoso"}}

	fmt.Println(h1.Human.name)
	fmt.Println(h1.Dummy.name)
}

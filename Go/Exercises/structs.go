package main

import "fmt"

type User struct {
	id               int
	nombre, apellido string
}

//methods of structs
func (user *User) nameComplete() string {
	return user.nombre + " " + user.apellido
}

func (this *User) setName(name string) {
	this.nombre = name
}

type ListUser []User

func main() {
	var name string
	var lastname string
	a := make([]User, 0)
	user := new(User)
	fmt.Print("Enter your name: ")
	fmt.Scan(&name)
	fmt.Print("Enter your lastame: ")
	fmt.Scan(&lastname)

	user.id = 1
	user.nombre = name
	user.apellido = lastname

	user2 := User{2, "Mateo", "Robayo"}

	ListUse := ListUser{*user, user2}
	user.setName("baby")
	a = append(a, *user)
	a = append(a, user2)
	fmt.Println(ListUse)
}

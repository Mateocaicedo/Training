package main

import "fmt"

type User interface {
	Permissions() int
	Name() string
}

type Admin struct {
	name string
}

func (this Admin) Permissions() int {
	return 5
}

func (this Admin) Name() string {
	return this.name

}

type Dessigner struct {
	name string
}

func (this Dessigner) Permissions() int {
	return 2
}

func (this Dessigner) Name() string {
	return this.name

}

func validation(user User) string {
	result := ""
	if user.Permissions() > 4 {
		result = user.Name() + " has Admin permissions"
	} else if user.Permissions() == 2 {
		result = user.Name() + " has Dessigner permissions"
	}
	return result
}

func main() {

	users := []User{Admin{"Mateo"}, Dessigner{"Rosa"}}

	for _, user := range users {
		fmt.Println(validation(user))
	}
}

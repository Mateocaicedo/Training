package main

import (
	"net/http"

	"github.com/mateo/apiGo/actions"
)

func main() {
	http.HandleFunc("/players", actions.List)
	http.ListenAndServe(":3000", nil)
}

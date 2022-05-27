package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/mateo/apiGo/actions"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/players", actions.List).Methods(http.MethodGet)
	r.HandleFunc("/players/{id}", actions.ListID).Methods(http.MethodGet)

	server := &http.Server{
		Addr:    ":3000",
		Handler: r,
	}
	log.Println("Listen ....")
	server.ListenAndServe()
}

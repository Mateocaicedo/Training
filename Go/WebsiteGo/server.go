package main

import (
	"net/http"
)

func main() {
	fileServer := http.FileServer((http.Dir("public/view")))

	http.Handle("/", http.StripPrefix("/", fileServer))
	http.ListenAndServe(":3000", nil)
}

func Show(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "index.html")
}

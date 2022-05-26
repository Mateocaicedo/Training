package main

import (
	"encoding/json"
	"net/http"

	"github.com/google/uuid"
)

type Player struct {
	ID        string
	FirstName string
	LastName  string
	Level     int64
}

type Players []Player

func main() {
	http.HandleFunc("/players", Json)
	http.ListenAndServe(":3000", nil)
}

func Json(w http.ResponseWriter, r *http.Request) {

	player := Players{
		Player{uuid.New().String(), "Juan", "Hernandez", 12},
		Player{uuid.New().String(), "Marcos", "Llorente", 90},
		Player{uuid.New().String(), "Luis", "Avila", 82},
		Player{uuid.New().String(), "Alberto", "Mercado", 20},
		Player{uuid.New().String(), "Rosa", "Mercado", 30},
		Player{uuid.New().String(), "Marta", "Rosario", 30},
		Player{uuid.New().String(), "Isaias", "Perez", 40},
		Player{uuid.New().String(), "Samuel", "Benitez", 45},
		Player{uuid.New().String(), "Gonzalo", "Higuain", 25},
		Player{uuid.New().String(), "Alberto", "Rosado", 75},
		Player{uuid.New().String(), "Ismael", "Perez", 59},
	}

	//fmt.Println(player[0].FirstName)
	json.NewEncoder(w).Encode(player)
}

package main

import (
	"encoding/json"
	"net/http"

	"github.com/google/uuid"
)

type Player struct {
	ID        uuid.UUID
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
		Player{uuid.New(), "Juan", "Hernandez", 12},
		Player{uuid.New(), "Marcos", "Llorente", 90},
		Player{uuid.New(), "Luis", "Avila", 82},
		Player{uuid.New(), "Alberto", "Mercado", 20},
		Player{uuid.New(), "Rosa", "Mercado", 30},
		Player{uuid.New(), "Marta", "Rosario", 30},
		Player{uuid.New(), "Isaias", "Perez", 40},
		Player{uuid.New(), "Samuel", "Benitez", 45},
		Player{uuid.New(), "Gonzalo", "Higuain", 25},
		Player{uuid.New(), "Alberto", "Rosado", 75},
		Player{uuid.New(), "Ismael", "Perez", 59},
	}

	//fmt.Println(player[0].FirstName)
	json.NewEncoder(w).Encode(player)
}

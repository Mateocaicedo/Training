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
		Player{"", "Juan", "Hernandez", 12},
		Player{"", "Marcos", "Llorente", 90},
		Player{"", "Luis", "Avila", 82},
		Player{"", "Alberto", "Mercado", 20},
		Player{"", "Rosa", "Mercado", 30},
		Player{"", "Marta", "Rosario", 30},
		Player{"", "Isaias", "Perez", 40},
		Player{"", "Samuel", "Benitez", 45},
		Player{"", "Gonzalo", "Higuain", 25},
		Player{"", "Alberto", "Rosado", 75},
		Player{"", "Ismael", "Perez", 59},
	}

	for i := 0; i < len(player); i++ {
		id := uuid.New()
		player[i].ID = id.String()
	}
	//fmt.Println(player[0].FirstName)
	json.NewEncoder(w).Encode(player)
}

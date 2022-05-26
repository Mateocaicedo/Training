package main

import (
	"encoding/json"
	"net/http"
)

type Player struct {
	ID        string
	FirstName string
	LastName  string
	Level     int64
}

type Players []Player

func main() {
	http.HandleFunc("/players", func(w http.ResponseWriter, r *http.Request) {
		player := Players{
			Player{"85592176-6b25-40db-b01e-a134432ef903", "Juan", "Hernandez", 12},
			Player{"b53f9dd2-dd24-11ec-9d64-0242ac120002", "Marcos", "Llorente", 90},
			Player{"bbe53a70-dd24-11ec-9d64-0242ac120002", "Luis", "Avila", 82},
			Player{"c17342fc-dd24-11ec-9d64-0242ac120002", "Alberto", "Mercado", 20},
			Player{"af15b9eb-653d-49a0-af11-d35b9f178b3e", "Rosa", "Mercado", 30},
			Player{"7ab07328-03dc-472d-8ae3-c9bb13280007", "Marta", "Rosario", 30},
			Player{"32317dd9-1ea2-45ba-9d7a-819f96095adf", "Isaias", "Perez", 40},
			Player{"135b24dc-a123-4469-8bbc-97d39bcbbdd6", "Samuel", "Benitez", 45},
			Player{"03b6c041-cdbe-4bc6-8ac3-bdc3af044343", "Gonzalo", "Higuain", 25},
			Player{"4321ba01-1e37-4336-b7d5-10240d7af115", "Alberto", "Rosado", 75},
			Player{"2c59af1e-e0d2-4439-8f80-7ec559a6493d", "Ismael", "Perez", 59},
		}
		//fmt.Println(player[0].FirstName)
		json.NewEncoder(w).Encode(player)

	})
	http.ListenAndServe(":3000", nil)
}

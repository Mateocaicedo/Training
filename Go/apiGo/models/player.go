package models

import (
	"github.com/google/uuid"
)

type Player struct {
	ID        uuid.UUID
	FirstName string
	LastName  string
	Level     int64
}

type Players []Player

func GetPlayers() Players {
	P := Players{
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
	return P

}

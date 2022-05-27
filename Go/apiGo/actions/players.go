package actions

import (
	"encoding/json"
	"net/http"

	"github.com/mateo/apiGo/models"
)

func List(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(models.StaticPlayers())
}

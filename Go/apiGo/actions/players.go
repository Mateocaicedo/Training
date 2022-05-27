package actions

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/mateo/apiGo/models"
)

func List(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(models.Template{Status: 200, Data: models.Players(), Message: ""})
}

func ListID(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	players := models.Players()
	//log.Println(params["id"])
	for i := 0; i < len(players); i++ {
		if params["id"] == players[i].ID {
			json.NewEncoder(w).Encode(models.Template{Status: 200, Data: models.ListPlayers{players[i]}, Message: ""})
			return
		}
	}
	json.NewEncoder(w).Encode(&models.Template{Status: 400, Data: models.ListPlayers{}, Message: "Player was not found"})

}

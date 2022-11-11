import listLotesService from "../../services/lotes/listLotes.service"

const listLotesController = (request, response) =>{
    const lotes = listLotesService()

    return response.json(lotes)
}

export default listLotesController;
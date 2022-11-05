import listDetailLoteService from "../../services/lotes/listDetailLote.service";

const listDetailLoteController = (request, response) => {

    const {id} = request.params

    const lote = listDetailLoteService(id)

    return response.json(lote)
}

export default listDetailLoteController;
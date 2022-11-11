import listPesosLoteService from "../../services/pesos/listPesosLote.service";

const listPesosLoteController = (request, response) => {

    const {id} = request.params

    const pesosLote = listPesosLoteService(id)

    return response.json(pesosLote)
}

export default listPesosLoteController;
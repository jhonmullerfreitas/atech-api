import listDetailMortalidadeLoteService from "../../services/mortalidades/listDetailMortalidadeLote.service"

const listDetailMortalidadeLoteController = (request, response) => {
    const {id} = request.params
    const mortalidadesLote = listDetailMortalidadeLoteService(id)
    return response.json(mortalidadesLote);
}

export default listDetailMortalidadeLoteController;
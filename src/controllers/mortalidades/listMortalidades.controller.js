import listMortalidadesService from "../../services/mortalidades/listMortalidades.service"

const listMortalidadesController = (request, response) =>{
    const mortalidade = listMortalidadesService()
    return response.json(mortalidade)
}

export default listMortalidadesController;
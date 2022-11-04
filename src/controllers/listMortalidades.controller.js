import listMortalidadesService from "../services/listMortalidades.service"

const listMortalidadesController = (request, response) =>{
    const mortalidade = listMortalidadesService()

    return response.json(mortalidade)
}

export default listMortalidadesController;
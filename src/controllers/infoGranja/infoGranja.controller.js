import infoGranjaService from "../../services/infoGranja/infoGranja.service";

const infoGranjaController = (request, response) =>{

    const infoGranja = infoGranjaService()

    return response.json(infoGranja)
}

export default infoGranjaController;
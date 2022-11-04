import listPesosService from "../services/listPesos.service";

const listPesosController = (request, response) =>{
    const pesos = listPesosService();

    return response.json(pesos);
}

export default listPesosController;
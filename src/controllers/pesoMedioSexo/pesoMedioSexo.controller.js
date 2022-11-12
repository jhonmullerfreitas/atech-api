import pesoMedioSexoService from "../../services/pesoMedioSexo/pesoMedioSexo.service";

const pesoMedioSexoController = (request, response) => {
  const pesoMedio = pesoMedioSexoService();
  return response.json(pesoMedio);
};

export default pesoMedioSexoController;

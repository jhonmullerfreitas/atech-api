import morteMediaSexoService from "../../services/morteMediaSexo/morteMediaSexo.service";

const morteMediaSexoController = (request, response) => {
  
  const morteMedia = morteMediaSexoService();

  return response.json(morteMedia);
};

export default morteMediaSexoController;
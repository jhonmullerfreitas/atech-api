import listConvAlimenLoteService from "../../services/convAlimen/listConvAlimenLote.service";

const listConversaoAlimentarController = (request, response) => {
  const { id } = request.params;
  const convAlimenPorLote = listConvAlimenLoteService(id);
  return response.json(convAlimenPorLote);
};

export default listConversaoAlimentarController;

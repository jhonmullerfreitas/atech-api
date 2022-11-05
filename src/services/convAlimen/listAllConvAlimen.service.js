import pesos from "../../database/pesos.json";

const listAllConvAlimenService = () => {
  const listConvAlimen = pesos.map((lote) => {
    return {
      loteId: lote.id,
      convAlimen: lote.ca,
      dataColeta: lote.dataPeso,
    };
  });

  return listConvAlimen;
};

export default listAllConvAlimenService;

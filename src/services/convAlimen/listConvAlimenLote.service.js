import pesos from "../../database/pesos.json";
import lotes from "../../database/lotes.json";

const listConvAlimenLoteService = (id) => {
  const loteIndex = lotes.findIndex((element) => element.id === parseInt(id));

  if (loteIndex === -1) {
    return "Lote não encontrado";
  }

  const listColetPeso = pesos.filter((lote) => lote.id === parseInt(id));

  const listConvAlimen = listColetPeso.map((lote) => {
    return {
      convAlimen: lote.ca,
      dataColeta: lote.dataPeso,
    };
  });

  const ca = listConvAlimen.map((element) => element.convAlimen);
  const datas = listConvAlimen.map((element) => element.dataColeta);
  
  return [{ loteId: id }, [...listConvAlimen], ca, datas];
};

export default listConvAlimenLoteService;

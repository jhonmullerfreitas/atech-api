import pesos from "../../database/pesos.json"
import lotes from "../../database/lotes.json"

const listPesosLoteService = (id) => {
    const loteIndex = lotes.findIndex(element => element.id === parseInt(id))
    if(loteIndex === -1){
        return "Lote não encontrado."
    }

    const listPesos = pesos.filter((element) => element.id === parseInt(id))

    const listPesosLote = listPesos.map((element) => {
        return(
            {
                peso: element.peso,
                dataColet: element.dataPeso
            }
        )
    })

    return [{idLote: id}, [...listPesosLote]]
}

export default listPesosLoteService;
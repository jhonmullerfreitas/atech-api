import lotes from "../../database/lotes.json"

const listDetailLoteService = (id) =>{
    const lote = lotes.find(element => element.id ===  parseInt(id));
    if(lote === undefined){
        return "Lote não encontrado.";
    };
    return lote;
}

export default listDetailLoteService;
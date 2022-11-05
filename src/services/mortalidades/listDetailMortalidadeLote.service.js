import mortalidades from "../../database/mortalidades.json"
import lotes from "../../database/lotes.json"

const listDetailMortalidadeLoteService = (id) =>{

    const loteIndex = lotes.findIndex(element => element.id === parseInt(id));
    if(loteIndex === -1){
        return "Lote não encontrado"
    }

    const listMortalidades = mortalidades.filter((element) => element.id === parseInt(id))

    const listMortalidadesLote = listMortalidades.map((element) => {
        return(
            {
                dataAcomp: element.dataAcomp,
                mortalidade: element.mortalidade
            }
        );
    });


    return [{idLote: id}, [...listMortalidadesLote]]
}

export default listDetailMortalidadeLoteService;
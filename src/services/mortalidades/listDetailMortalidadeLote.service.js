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

    listMortalidadesLote.sort(function (a, b) {
        if (parseInt(a.dataAcomp.split("/").reverse().join("")) > parseInt(b.dataAcomp.split("/").reverse().join(""))) {
            return 1;
        }
        if (parseInt(a.dataAcomp.split("/").reverse().join("")) < parseInt(b.dataAcomp.split("/").reverse().join(""))) {
            return -1;
        }
        return 0;
    });
    
    const mortes = listMortalidades.map((element)=> element.mortalidade)
    const datas = listMortalidades.map((element)=> element.dataAcomp)

    return [{idLote: id}, [...listMortalidadesLote], mortes, datas]
}

export default listDetailMortalidadeLoteService;
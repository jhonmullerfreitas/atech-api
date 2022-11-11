import lotes from "../../database/lotes.json"
import mortalidades from "../../database/mortalidades.json"

const morteMediaSexoService = () => {

    const lotesMasculino = lotes.filter((lote) => lote.sexo === 'm' )
    const idLotesMasculino = lotesMasculino.map((lote) => lote.id)
    const lotesFeminino = lotes.filter((lote) => lote.sexo === 'f' )
    const idLotesFeminino = lotesFeminino.map((lote) => lote.id)

    const morteLotesMasculino = []
    idLotesMasculino.forEach(idLote => {
        mortalidades.forEach(morte => {
            if(idLote === morte.id){
                morteLotesMasculino.push(morte.mortalidade)
            }
        });
    });

    const morteLotesFeminino = []
    idLotesFeminino.forEach(idLote => {
        mortalidades.forEach(morte => {
            if(idLote === morte.id){
                morteLotesFeminino.push(morte.mortalidade)
            }
        });
    });

    const totalMorteMasculino = morteLotesMasculino.reduce((acomulador, valorAtual) => acomulador + valorAtual, 0)
    const totalMorteFeminino = morteLotesFeminino.reduce((acomulador, valorAtual) => acomulador + valorAtual, 0)

    const morteMediaMasculino = totalMorteMasculino / (morteLotesMasculino.length)
    const morteMediaFeminino = totalMorteFeminino / (morteLotesFeminino.length)

    return [{sexo: "Masculino", morteMedia: morteMediaMasculino}, {sexo: "Feminino", morteMedia: morteMediaFeminino}]

}

export default morteMediaSexoService;
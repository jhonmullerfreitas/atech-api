import pesos from "../../database/pesos.json"
import lotes from "../../database/lotes.json"

const pesoMedioSexoService = () =>{

    const lotesMasculino = lotes.filter((lote) => lote.sexo === 'm' )
    const idLotesMasculino = lotesMasculino.map((lote) => lote.id)
    const lotesFeminino = lotes.filter((lote) => lote.sexo === 'f' )
    const idLotesFeminino = lotesFeminino.map((lote) => lote.id)

    const pesosLotesMasculino = []
    idLotesMasculino.forEach(idLote => {
        pesos.forEach(peso => {
            if(idLote === peso.id){
                pesosLotesMasculino.push(peso.peso)
            }
        });
    });

    const pesosLotesFeminino = []
    idLotesFeminino.forEach(idLote => {
        pesos.forEach(peso => {
            if(idLote === peso.id){
                pesosLotesFeminino.push(peso.peso)
            }
        });
    });
    
    const totalPesoMasculino =pesosLotesMasculino.reduce((acomulador, valorAtual) => acomulador + valorAtual, 0)
    const totalPesoFeminino =pesosLotesFeminino.reduce((acomulador, valorAtual) => acomulador + valorAtual, 0)
    
    const pesoMedioMasculino = totalPesoMasculino / (pesosLotesMasculino.length)
    const pesoMedioFeminino = totalPesoFeminino / (pesosLotesFeminino.length)

    return [{sexo: "Masculino", pesoMedio: pesoMedioMasculino}, {sexo: "Feminino", pesoMedio: pesoMedioFeminino}]
}

export default pesoMedioSexoService;
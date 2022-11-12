import lotes from "../../database/lotes.json"

const infoGranjaService = () =>{
    //quantidade de lotes
    const qtdLotes = lotes.length

    //total aves femininas
    const avesFem = lotes.filter((lote)=> lote.sexo === 'f')
    const qtdAvesFem = avesFem.map((lote)=> lote.qtdAves)
    const totalAvesFem = qtdAvesFem.reduce((acomulador, valorAtual) => acomulador + valorAtual, 0)
    //total aves masculinas
    const avesMasc = lotes.filter((lote)=> lote.sexo === 'm')
    const qtdAvesMasc = avesMasc.map((lote)=> lote.qtdAves)
    const totalAvesMasc = qtdAvesMasc.reduce((acomulador, valorAtual) => acomulador + valorAtual, 0)
    //qtd galpão dark, semi-dark, auto
    const qtdDark = lotes.filter((lote)=> lote.tipoGalpao === "Dark").length
    const qtdSemiDark = lotes.filter((lote)=> lote.tipoGalpao === "Semi-Dark").length
    const qtdAuto = lotes.filter((lote)=> lote.tipoGalpao === "Automatizado").length

    //aspecto bom, regular, ruim
    const aspBom = lotes.filter((lote)=> lote.aspectoLote === "Bom").length
    const aspRegular = lotes.filter((lote)=> lote.aspectoLote === "Regular").length
    const aspRuim = lotes.filter((lote)=> lote.aspectoLote === "Ruim").length

    return {qtdLotes: qtdLotes, avesFem: totalAvesFem, avesMasc: totalAvesMasc, dark: qtdDark, semiDark: qtdSemiDark, gAuto: qtdAuto, aspBom: aspBom, aspRegular: aspRegular, aspRuim: aspRuim}
}

export default infoGranjaService;
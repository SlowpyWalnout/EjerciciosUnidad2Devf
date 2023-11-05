let Paises = ['Guatemala', 'Mexico', 'Brazil', 'Argentina', 'Reino Unido'];
function PaisMasGrande(Paises){
    let paisConMasLetras = Paises[0];
    let TamañoArreglo = Paises.length;
    for (let i = 0; i < TamañoArreglo; i++){
        if(Paises[i].length > paisConMasLetras.length){
            paisConMasLetras = Paises[i];
        };
    }
    console.log('El pais con mas letras es: ', paisConMasLetras);
}
PaisMasGrande(Paises)


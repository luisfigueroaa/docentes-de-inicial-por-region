getData();

async function getData() {
    const xl = [];
    const yl = [];

    // Cargar la data a un fetch
    const respuesta = await fetch('data-docentes.csv');
    // De le respuesta extraer el texto
    const data = await respuesta.text();
    console.log(data);
    // Extraer una table con vectores, donde convertimos cada salto de linea en un elemento del vector
    const tabla = data.split('\n').slice(1);
    tabla.forEach(fil =>{
        const col = fil.split(',');
        const region = col[0].replace("DRE ","");
        xl.push(region);
        const docentes = col[1];
        yl.push(docentes);
        console.log(region,docentes);
    });
    return {xl, yl};
}

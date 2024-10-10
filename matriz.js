let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < mat.length; i++) {
    let fila = "";
    for (let j = 0; j < mat[i].length; j++) {
        fila = fila + mat[i][j] + " ";
        
    }
    console.log(fila);
}

console.log("");

function transponer(mat){
    for (let i = 0; i < mat.length; i++) {
        let fila = "";
        for (let j = 0; j < mat[i].length; j++) {
            fila = fila + mat[j][i] + " ";
            
        }
        console.log(fila);
    }
}

transponer(mat);
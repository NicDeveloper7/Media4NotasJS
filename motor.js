function calcularMedia(){
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("resultado").textContent = media.toFixed(2);
}
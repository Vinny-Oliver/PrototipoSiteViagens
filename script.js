// Obtém as notas pré-definidas
const nota1 = parseFloat(document.getElementById('nota1').textContent);
const nota2 = parseFloat(document.getElementById('nota2').textContent);
const nota3 = parseFloat(document.getElementById('nota3').textContent);
const nota4 = parseFloat(document.getElementById('nota4').textContent);
const nota5 = parseFloat(document.getElementById('nota5').textContent);

// Calcula a média das notas
const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

//Exibe a média das notas
document.getElementById('media').textContent = media.toFixed(2);

// Trás o valor pré-definido
const valorPredefinido = parseFloat(document.getElementById('valorPredefinido').textContent);

// Calcula o dobro do valor
const dobroValor = valorPredefinido * 2;

// Exibe o dobro do valor na página
document.getElementById('dobroValor').textContent = dobroValor;






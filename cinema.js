// Error: Cannot find module 'C:\Users\Henrique\cinema.js'

//module.exports = textoBoasVindas ; 
 
const filmes = [
     {
        codigo: 1,
        titulo: "The batman",
        duração: 2.20,
        atores: ["Robet Pattinson", "Paul Dano"],
        anoLançamento: 2022,
        emCartaz: true
        

     },
     {
        codigo: 2,
        titulo: "John Wick",
        duração: 2.5,
        atores: ["Fulano", "Fulano 2 ", "Ciclano"],
        anoLançamento: 2023,
        emCartaz: false

     },
     { codigo: 3,
      titulo: "Mad Max",
      duração: 3.2,
      atores: ["Fulano", "Fulano 2 ", "Ciclano"],
      anoLançamento: 2015,
      emCartaz: false

     }
];

console.log(filmes);

function adicionarFilme(novoFilme){
filmes.push(novoFilme);
}
 

//function buscarFilme(codigo){
  // return filmes.find((filme)) => {
    //return filme.codigo ===
   //})
//}
 




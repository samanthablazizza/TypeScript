interface TurmaModelo{ //interface cria uma estrutura/padrão a ser seguida por objetos
    nome: string
    qtd: number
    materia: string
    p_instrutora: string
}    

const Turma: TurmaModelo = { 
    nome: "Turma .Net",
    qtd: 32,
    materia: "FullStack C#",
    p_instrutora: "Jacque"
}

console.log(Turma)

const Turma2: TurmaModelo = { 
    nome: "Turma JS",
    qtd: 28,
    materia: "JS",
    p_instrutora: "Yuri"

}

console.log(Turma2)
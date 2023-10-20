interface Usuario{
    nome: string,
    idade: number,
    email: string,
    profissao: string,
    estiloMusica: string
}

const Usuario1 : Usuario = {
    nome: "Samantha",
    idade: 35,
    email: "samantha@email.com",
    profissao: "Desenvolvedora Web",
    estiloMusica: "rock"
}
console.log(Usuario1)

const Usuario2 : Usuario = {
    nome: "Talles",
    idade: 36,
    email: "talles@email.com",
    profissao: "Engenheiro de Automação",
    estiloMusica: "pagode"
}
console.log(Usuario2)

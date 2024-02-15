export class Cliente {
    nome: string;
    sobrenome: string;
    datanascimento: Date;
    email: string;
    logradouro: string;
    numerologradouro: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;

    constructor(nome: string, sobrenome: string, datanascimento: Date, email: string, logradouro: string,numerologradouro: number, bairro: string, cidade: string, estado: string, cep: string, complemento: string){
        this.nome = nome; 
        this.sobrenome = sobrenome;
        this.datanascimento = datanascimento;
        this.email = email;
        this.logradouro = logradouro; 
        this.numerologradouro = numerologradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.complemento = complemento;
    }
}

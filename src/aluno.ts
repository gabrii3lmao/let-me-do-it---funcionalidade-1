export class Aluno {
    nome: string;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
    }

    adicionarNota(valor: number) {
        if (valor >= 0 && valor <= 10) {
            this.notas.push(valor);
        } else {
            console.log(`Nota(s) ${valor} inválida(s)`);
        }
    }

    media(): number {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, n) => acc + n, 0);
        return soma / this.notas.length;
    }

    situacao(): string {
        return this.media() >= 7 ? 'Aprovado' : 'Reprovado';
    }

    toJSON() {
        return {
            nome: this.nome,
            idade: this.idade,
            notas: this.notas,
            situacao: this.situacao(),
        };
    }
}

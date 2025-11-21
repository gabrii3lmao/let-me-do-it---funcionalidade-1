import { Aluno } from './aluno';

export class Turma {
    sala: string;
    alunos: Aluno[];

    constructor(sala: string) {
        this.sala = sala;
        this.alunos = [];
    }

    adicionarAluno(nome: string, idade: number) {
        this.alunos.push(new Aluno(nome, idade));
    }

    listarAlunos(): string {
        return this.alunos
            .map((aluno) => `${aluno.nome} (${aluno.idade} anos) - Média: ${aluno.media().toFixed(2)}`)
            .join('\n');
    }

    toJSON() {
        return {
            sala: this.sala,
            alunos: this.alunos.map((a) => a.toJSON()),
        };
    }
}

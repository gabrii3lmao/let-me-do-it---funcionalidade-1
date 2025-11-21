import fs from 'fs';
import { Turma } from './turma';
import { Aluno } from './aluno';

type TurmaData = {
    sala: string;
    alunos: { nome: string; idade: number; notas: number[] }[];
};

export class Escola {
    turmas: Record<string, Turma>;
    dataFile: string;

    constructor(dataFile = 'escola.json') {
        this.dataFile = dataFile;
        this.turmas = {
            'Informática': new Turma('Informática'),
            'Eletrotécnica': new Turma('Eletrotécnica'),
            'Administração': new Turma('Administração'),
        };
        this.loadData();
    }

    adicionarTurma(nome: string) {
        this.turmas[nome] = new Turma(nome);
    }

    adicionarAlunoEmTurma(turmaNome: string, nome: string, idade: number) {
        const turma = this.turmas[turmaNome];
        if (turma) {
            turma.adicionarAluno(nome, idade);
        } else {
            console.log(`Turma '${turmaNome}' Não existe`);
        }
    }

    mostrarTurmas() {
        console.log('turmas disponiveis');
        Object.keys(this.turmas).forEach((n) => console.log(`- ${n}`));
    }

    mostrarAlunosTurma(turmaNome: string) {
        const turma = this.turmas[turmaNome];
        if (turma) {
            console.log(turma.listarAlunos());
        } else {
            console.log(`Turma '${turmaNome}' não existe`);
        }
    }

    salvarDados() {
        const data: Record<string, TurmaData> = {};
        for (const [k, t] of Object.entries(this.turmas)) {
            data[k] = { sala: t.sala, alunos: t.alunos.map((a) => ({ nome: a.nome, idade: a.idade, notas: a.notas })) };
        }
        fs.writeFileSync(this.dataFile, JSON.stringify(data, null, 2), 'utf8');
    }

    loadData() {
        if (!fs.existsSync(this.dataFile)) return;
        try {
            const content = fs.readFileSync(this.dataFile, 'utf8');
            const parsed = JSON.parse(content) as Record<string, TurmaData>;
            for (const [key, value] of Object.entries(parsed)) {
                const turma = new Turma(value.sala);
                value.alunos.forEach((a) => {
                    const aluno = new Aluno(a.nome, a.idade);
                    if (Array.isArray(a.notas)) aluno.notas.push(...a.notas);
                    turma.alunos.push(aluno);
                });
                this.turmas[key] = turma;
            }
        } catch (err) {
            console.error('Erro ao carregar dados:', err);
        }
    }
}

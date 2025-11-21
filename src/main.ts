import { Escola } from './escola';

const ifpi = new Escola();

// Exemplos de uso (descomente para testar):
ifpi.adicionarAlunoEmTurma('Informática', 'gabriel', 17);
ifpi.adicionarAlunoEmTurma('Informática', 'maria', 16);

const turma = ifpi.turmas['Informática'];
turma.alunos[0].adicionarNota(8);
turma.alunos[0].adicionarNota(10);
turma.alunos[1].adicionarNota(7);
turma.alunos[1].adicionarNota(5);
ifpi.mostrarAlunosTurma('Informática');

ifpi.salvarDados();

console.log('Escola carregada');

require_relative 'aluno_class'


class Turma
  attr_reader :sala, :alunos


    def initialize(sala)
      @sala = sala
      @alunos = []
    end

    def adicionar_alunos(nome, idade)
      @alunos << Aluno.new(nome, idade)
    end
    
    def listar_alunos
      alunos.map do |aluno|
        "#{aluno.nome} (#{aluno.idade} anos) - Média: #{aluno.media.round(2)}"
      end.join("\n")
    end

    def to_h
      {sala: @sala, alunos: alunos.map(&:to_h)}
    end
    
end

require_relative 'turma_class'
require 'json'

class Escola
  attr_reader :turmas

  def initialize
    @turmas = {
      "Informática" => Turma.new("Informática"),
      "Eletrotécnica" => Turma.new("Eletrotécnica"),
      "Administracão" => Turma.new("Administração")
    }
  end

  def adicionar_turma(nome)
    @turmas[nome] = Turma.new(nome)
  end

  def adicionar_aluno_em_turma(turma_nome, nome, idade)
    turma = @turmas[turma_nome]
    turma ? turma.adicionar_alunos(nome,idade) : puts("Turma '#{turma_nome}' Não existe")
  end

  def mostrar_turmas
    puts "turmas disponiveis"
    @turmas.each_key{|nome| puts "- #{nome}"}
  end

  def mostrar_alunos_turma(turma_nome)
    turma = @turmas[turma_nome]
    puts turma ? turma.listar_alunos : ("Turma '#{turma_nome}' não existe")
  end

  def salvar_dados
    File.write("escola.json", JSON.pretty_generate(@turmas.transform_values(&:to_h)))
  end
end


class Aluno
  attr_reader :nome, :idade, :notas

  def initialize(nome, idade)
    @nome = nome
    @idade = idade
    @notas = []
  end

  def adicionar_nota(valor)
    if valor.between?(0, 10)
      @notas << valor
    else 
      puts "Nota(s) #{valor} inválida(s)"
    end
  end

  def media
    return 0 if @notas.empty?
    @notas.sum / @notas.size.to_f
  end

  def situacao
    media >= 7 ? "Aprovado" : "Reprovado"
  end

  def to_h
    {nome: @nome, idade: @idade, notas: @notas }
  end
end
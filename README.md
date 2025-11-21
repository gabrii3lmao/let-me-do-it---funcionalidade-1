# Let Me Do It - Funcionalidade 1 (TypeScript)

Versão TypeScript do projeto original em Ruby. Os arquivos TypeScript estão em `src/` e a persistência usa o arquivo `escola.json` na raiz do projeto.

Como usar

1. Instale dependências:

```bash
npm install
```

2. Rode (usa `ts-node`):

```bash
npm run start
```

3. Abra `src/main.ts` e descomente os exemplos para testar adicionar alunos, notas e salvar em `escola.json`.

Notas

- O projeto lê `escola.json` ao iniciar (se existir) e reconstrói `Turma` e `Aluno`.
- Chame `salvarDados()` no objeto `Escola` para escrever as alterações em `escola.json`.

# Product Manager - Desafio Front-end

Uma aplicação web robusta desenvolvida para o gerenciamento de produtos. O projeto contempla um CRUD completo com filtros dinâmicos, validações de formulário, persistência em uma API Mock e cobertura de testes.

## Como executar o projeto localmente

### 1. Instalação das dependências
Na raiz do projeto, instale todas as bibliotecas necessárias:
```
npm install
```

### 2. Inicialização do Back-end (API Mock)
Para que o sistema consiga salvar, editar e buscar os produtos, é necessário rodar o `json-server`. Em um terminal, execute:
```
npm run server
```
> A API estará rodando em `http://localhost:3001/products`

### 3. Inicialização do Front-end
Com o servidor rodando, abra **um novo terminal** e inicie a aplicação:
```
npm run dev
```
> A aplicação estará disponível em `http://localhost:5173`

### 4. Executando os Testes Unitários
Para rodar a suíte de testes da regra de negócio (Filtros), execute:
```
npm run test
```

---

## Decisões Técnicas e Arquitetura

### 1. Escolha do Framework
Optei por desenvolver esta entrega utilizando **React** estritamente devido ao **gerenciamento de tempo e mitigação de riscos**. Dado o prazo de entrega estipulado, priorizei entregar uma aplicação 100% funcional, testada e com código limpo.

No entanto, a arquitetura foi desenhada aplicando conceitos agnósticos a frameworks, facilitando uma futura transição:
* **Forte Tipagem e Contratos:** Uso rigoroso do TypeScript (Interfaces) mapeando os DTOs de entrada e saída.
* **Isolamento de Regras:** Funções puras para regras de negócio (como a de filtragem), o que permitiu testes unitários isolados da camada de visualização.

### 2. Gerenciamento de Estado Global (Zustand)
Para os filtros da listagem, implementei o **Zustand**. A decisão técnica aqui foca na **Experiência do Usuário (UX)**: ao extrair os filtros do estado local (`useState`) para uma *Store* global, o usuário não perde seus parâmetros de busca caso navegue para a tela de edição e clique em "Cancelar" para voltar à lista.

### 3. Estilização (SCSS)
Conforme exigido, a estilização foi feita utilizando **Sass (SCSS)** puro, sem dependência de bibliotecas de componentes externas.

### 4. Estrutura de Pastas
* `/pages`: Componentes de visualização atrelados às rotas principais (Listagem e Formulário).
* `/store`: Definição de estados globais (Zustand).
* `/types`: Contratos (Interfaces TypeScript) da aplicação.
* `/utils`: Funções puras de regras de negócio e seus respectivos testes unitários (`.spec.ts`).

---

## Tecnologias Utilizadas
* **Vite + React**
* **TypeScript**
* **SCSS**
* **Zustand**
* **Axios**
* **React Router DOM**
* **JSON-Server**
* **Vitest**
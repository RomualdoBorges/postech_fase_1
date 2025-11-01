# BYTEBANK - Postech FIAP - Fase 1

O ByteBank é um sistema bancário simples desenvolvido para simular operações financeiras essenciais de uma conta digital. Ele permite realizar visualizar saldo da conta corrente e informações sobre transações (extrato, e novas transações).

---

## 🚀 Tecnologias Utilizadas

### Framework Principal

- **Next 15.5.6** - Framework React com suporte a SSR, rotas e build otimizado
- **React 19** – Biblioteca JavaScript para construção de interfaces

### Interface e Estilo

- **Material UI (MUI 7)** - Componentes prontos e responsivos com design profissional
- **Emotion** - Estilização CSS-in-JS integrada ao MUI
- **TailwindCSS 4** - Estilos utilitários para agilidade no desenvolvimento

### Tipagem e Qualidade

- **TypeScript 5** - Tipagem estática para maior segurança e produtividade
- **ESLint 9 + Prettier 3** - Linter e Formatador para manter um código limpo e padronizado

### Formulários e Validação

- **React Hook Form 7** - Manipulação simples e performática de formulários
- **yup 1.7.1** - Biblioteca de schema validation usada para definir e validar regras de dados de forma declarativa
- **@hookform/resolvers** - Integração entre React Hook Form e Yup, permitindo validação automática baseada em schemas

### Estado Global

- **Context API** – Gerenciamento de estado global com React nativo

### Roteamento

- **Next.js Router** – Navegação otimizada e suporte a rotas dinâmicas

### Ícones

- **Material UI Icons** – Biblioteca de ícones prontos para React

---

## ⚙️ Instalação

### Pré-requisitos

- Node.js **18+**
- npm ou yarn

### Passos de Instalação

1. Clone o repositório e entre na pasta:

```bash
git clone https://github.com/RomualdoBorges/postech_fase_1.git
cd cine-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse o projeto no navegador:

```
http://localhost:3000
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento na porta 3000
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a aplicação em modo produção
- `npm run lint` - Executa o ESLint para verificar o código
- `npm run storybook` - Inicia o servidor do Storybook e o abre no navegador

## Ambiente de Produção

Para build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `.next/`, prontos para deploy.

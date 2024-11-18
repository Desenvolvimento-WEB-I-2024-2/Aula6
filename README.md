
# Tutorial: Como Instalar e Iniciar um Projeto React

## Pré-requisitos

1. **Node.js**: Certifique-se de que o Node.js está instalado em seu sistema. Você pode baixá-lo [aqui](https://nodejs.org/).
   - Verifique a instalação:
     ```bash
     node -v
     npm -v
     ```

2. **npm** ou **yarn**: Vem junto com o Node.js, mas você pode optar por instalar o Yarn separadamente, se preferir.

---

## Passos para Criar um Projeto React

### 1. Instalar o Create React App (opcional)

Se preferir usar o Create React App globalmente, instale-o com:

```bash
npm install -g create-react-app
```

### 2. Criar o Projeto React

Execute o comando abaixo para criar um novo projeto:

```bash
npx create-react-app meu-projeto
```

- **Explicação:**
  - `npx`: Executa pacotes sem precisar instalá-los globalmente.
  - `create-react-app`: Ferramenta para configurar um ambiente React completo.
  - `meu-projeto`: Nome do seu diretório de projeto.

### 3. Acessar o Diretório do Projeto

```bash
cd meu-projeto
```

---

## Executar o Projeto React

### 1. Iniciar o Servidor de Desenvolvimento

Use o comando:

```bash
npm start
```

- O projeto será iniciado e você poderá acessá-lo em [http://localhost:3000](http://localhost:3000).

---

## Estrutura Básica do Projeto

Após criar o projeto, você terá uma estrutura como esta:

```
meu-projeto/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

- **`public/`**: Arquivos públicos do projeto.
- **`src/`**: Onde o código principal do React é desenvolvido.
- **`package.json`**: Lista as dependências e scripts do projeto.

---

## Finalizando

Agora você tem um projeto React funcionando. Edite os arquivos em `src/` para começar a construir seu aplicativo.

Boa codificação! 🚀

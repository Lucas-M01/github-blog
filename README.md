# 💻 Github Blog

Uma aplicação que utilizou a API do GitHub para buscar issues de um repositório (que no caso, desse repositório), dados do seu perfil e exibir elas como um blog. 
terceiro desafio do Ignite, bootcamp da [Rocketseat](https://www.rocketseat.com.br/ "Site da rocketseat"), especificamente, da Trilha de ReactJS. O projeto foi 
desenvolvido a partir de um template previamente disponibilizado no figma [Github Blog](https://www.figma.com/community/file/1138814951106121051  "Template do Github Blog").


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/82176047/198910377-057c5c35-5d00-45d2-bda3-dbcfbc587211.png" width="500"/>

* ### 🛠 Funcionalidades
    - Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
    - Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela.
    - Criar uma página para exibir um post (issue) completo.
    
* ### 🧪 Conceitos utilizados
    - Estados
    - Imutabilidade do estado
    - Listas e chaves no ReactJS
    - Propriedades
    - Componetização
    - Fetch / Axios
    - Roteamento e React Router DOM
    - Formulários 
    
## 👨‍💻 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Styled Components](https://styled-components.com)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Date-fns](https://date-fns.org/)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Vite](https://vitejs.dev/)
- [API do Github](https://docs.github.com/en/rest) 

## ↔ Responsivo 

No template não tem a responsividade se caso fosse acessado por um dispositivo móvel, porém nesta aplicação este conceito foi colocado em prática


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/82176047/198912906-5358c0db-67f8-43e3-bea6-36d45a3c29d6.png" height="500"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/82176047/198912936-e1599826-a696-433f-9abc-31e919937a26.png" height="500"/>

## ⚙ Como executar

Clone o repositório e acesse a pasta.

```bash
$ git clone https://github.com/Lucas-M01/github-blog.git
```

#### Inciar o Projeto:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```

Criar arquivo .env fora da pasta src

```bash
# Colocar seu username
VITE_GITHUB_USERNAME=Lucas-M01

# Colocar o repositório no qual estão as issues
VITE_GITHUB_REPONAME=github-blog

# Caso queira criar outra variável de ambiente, lembre de começar com VITE_
```

Os textos que estão nas issues foram pegos do site [Rocketseat Blog](https://blog.rocketseat.com.br/)


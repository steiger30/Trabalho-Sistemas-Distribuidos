# Software Pizzaria 
Aplicação desenvolvida para uma pizzaria fictícia ênfase na utilização do Docker para simplificar o processo de implantação e gestão. <br/>

Oferecemos a você a capacidade de cadastrar novos produtos, efetuar pedidos de forma simples e eficiente, além de proporcionar um controle total sobre os pedidos em andamento e aqueles que já foram preparados. Seus clientes também têm a facilidade de verificar o status de seus produtos, garantindo uma experiência de compra transparente e intuitiva.

### 1) Gerenciamento de Produtos.
Nesta aplicação é possível criar, editar, realizar exclusão lógica (desativar) e receber uma lista com todos os Produtos cadastrados na plataforma.

### 2) Autenticação Bearer Token para endpoints sensíveis
Alguns endoints, como os disponíveis para o gerenciamento são protegidos por autenticação simples, na modalidade Bearer Token.

### 3) Gerenciamento de entidade Pedidos
Nesta aplicação é possível criar e atualizar o estatus do pedidos.

### 4) Visualizador de pedidos
É possível que o cliente visualize o status do pedido através de uma URL "/pedido" , onde o cliente informará o número do pedido.


## Como instalar este repositório?

### docker

Primeiramente você deve clonar este repositório em sua máquina local.
Possuindo docker instalado em sua máquina ([Instalação e Configurar o Docker ](https://docs.docker.com/engine/install/)
), execute o seguinte comando:
```

docker-compose up -d

```

Este comando criará quatro containers: um para o postegres, para a pgAdmin, outro para a back-end (API) e por fim, o quarto com a aplicação front-end. 
A back-end estará exposta no endereço localhost:4200, enquanto que o frontend estará exposto no host localhost:3000 e o pgAdmin estará no localhost:8000.

- login pgAdmin:
  
```

email: admin@admin.com
password: admin

```

## Tecnologias utilizadas
Este projeto foi construído com Docker e Docker Compose. 
O Docker é uma plataforma que permite empacotar, distribuir e executar aplicativos em contêineres, 
proporcionando uma abordagem consistente para a criação, implantação e execução de software em diferentes ambientes. 
Docker Compose, por sua vez, é uma ferramenta que facilita a definição e execução de aplicativos multi-container.
Juntos, esses recursos fornecem uma estrutura eficiente para o desenvolvimento, 
entrega e execução de aplicações, promovendo a portabilidade e a consistência ao longo do ciclo de vida do software

### Back-end

- __Nest.js:__ é um framework para construção de aplicativos Node.js eficientes e escaláveis. Ele utiliza o TypeScript como linguagem principal e adota padrões arquiteturais
sólidos, inspirados em frameworks como Angular e Express. Nest.js é especialmente
eficaz na construção de aplicativos do lado do servidor e fornece uma arquitetura modular, injeção de dependências e suporte robusto para testes.   

- __TypeORM:__ é um ORM (Object-Relational Mapping) para TypeScript e JavaScript.
Ele simplifica a interação com bancos de dados relacionais, fornecendo uma camada
de abstração para realizar operações de banco de dados de maneira orientada a
objetos. TypeORM suporta diversos bancos de dados, oferece uma experiência de
desenvolvimento tipo-segura e é amplamente utilizado em projetos que exigem uma
abstração eficaz para o acesso a dados.

- __Typescript:__ super-set de javascript, uma linguagem de programação fortemente tipada que é construída sobre o Javascript, complementa a linguagem para introduzir tipagem estática, segurança no desenvolvimento e uma intellisense mais descritiva.

- __Postgres:__ banco de dados open-source com ótimas features built-in, como enum scalar, array scalar, suporte a JSON, etc.

- __bcrypt:__ biblioteca consolidada para a encriptação de caracteres, utilizada para encriptar senhas que serão salvas no Banco de Dados.

- __class-validator:__ biblioteca criada para fazer validação e declaração de tipos, usando Typescript. Ela garante que a tipagem estática seja respeitada em tempo de execução (runtime).

- __Docker:__ utilizar containers garante que o ambiente em que a aplicação é executada é isolado e facilmente replicado
    
### Front-end
- __Next.js:__ é um framework React de código aberto que facilita a construção de aplicativos web modernos. Ele oferece recursos como renderização do lado do servidor
(SSR), renderização do lado do cliente (CSR), geração de páginas estáticas e uma
estrutura de diretórios conveniente. Next.js é frequentemente utilizado para desenvolvimento de front-end, proporcionando uma experiência de desenvolvimento rápida e
eficiente.

- __Typescript:__ super-set de javascript, uma linguagem de programação fortemente tipada que é construída sobre o Javascript, complementa a linguagem para introduzir tipagem estática, segurança no desenvolvimento e uma intellisense mais descritiva.

- __Chakra UI:__ framework de CSS com componentes visuais já prontos para o uso, agilizando o desenvolvimento.

- __React Hook Form:__ a biblioteca traz a proposta de criar formulários flexíveis, com formas simples de fazer validação e sem renderizações desnecessárias. 

- __Docker:__ utilizar containers garante que o ambiente em que a aplicação é executada é isolado e facilmente replicado.

- __Zod:__ biblioteca criada para fazer validação e declaração de tipos, usando Typescript. Ela garante que a tipagem estática seja respeitada em tempo de execução (runtime).

- __Redux:__ a library de gerenciamento de estado mais utilizada no ecossistema React. Com ela, podemos persistir dados globais na aplicação, podendo utilizá-la em suites de testes, server-side e client-side.

 ## Variáveis de Ambiente
Por questões de segurança, não é recomendado compartilhar os segredos dentro do código, nem inserir o arquivo .env dentro do git. Porém, para fins de facilitar o clone do projeto, o arquivo .env foi compartilhado com esse repositório.


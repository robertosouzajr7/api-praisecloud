# 🌐 API - PRAISECLOUD

> Uma API desenvolvida para Ajudar bandas e grupos musicais a serem mais organizados. Esta API utiliza **Node.js**, **Express**, **PostgreSQL** com **Prisma ORM**, e está preparada para ser integrada com **React Native** no front-end.

## 🛠 Tecnologias Utilizadas

- **Node.js** - Plataforma para executar o JavaScript no backend.
- **Express** - Framework minimalista para criar servidores e rotas.
- **PostgreSQL** - Banco de dados relacional usado para persistir os dados.
- **Prisma** - ORM usado para interagir com o banco de dados.
- **AWS RDS** - Instância PostgreSQL hospedada na AWS.
- **Vercel** - Serviço de deploy para o backend.

## 🚀 Como Iniciar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Clone o repositório


git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instale as dependências
Certifique-se de que você tem o Node.js instalado (versão recomendada: 14.x ou superior).
```bash
npm install
```
4. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto e adicione suas configurações do banco de dados PostgreSQL (AWS RDS) e outras variáveis necessárias, como a chave secreta para JWT.

Exemplo do .env:
```bash
# URL de conexão com o banco de dados PostgreSQL (AWS RDS)

DATABASE_URL="postgresql://admin:senha@praisecloud-teste.cl6yc6wwabth.us-east-1.rds.amazonaws.com:5432/meubanco"
# Chave secreta para JWT
JWT_SECRET="sua_chave_secreta"

# Outras variáveis de ambiente podem ser adicionadas conforme necessário.
```

4. Rodar as migrações do Prisma
Depois de configurar o banco de dados, aplique as migrações para criar as tabelas necessárias.
```bash
npx prisma migrate dev --name init novo
```
Se estiver em um ambiente de produção, use:
```bash
npx prisma migrate deploy
```

5. Gerar o cliente do Prisma
Gere o cliente Prisma que será utilizado para interagir com o banco de dados:
```bash
npx prisma generate
```


6. Inicie o servidor localmente

Agora, basta rodar o servidor localmente para testar a API.

```bash
npm run dev

A API estará rodando no endereço http://localhost:3000.
```



📖 Endpoints Disponíveis
🔐 Autenticação
POST /auth/login - Autentica um usuário e retorna um token JWT.
Body:
```bash
{
  "email": "user@example.com",
  "senha": "password123"
}
```


👤 Usuários
GET /membro - Retorna todos os usuários cadastrados.
POST /membro - Cria um novo usuário.
Body:
```bash
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "password123",
  "telefone": "999999999",
  "nascimento": "1990-01-01"
}
```


🏢 Grupos
GET /groups - Retorna todos os grupos.
POST /groups - Cria um novo grupo.
Body:
```bash
{
  "nome": "Vocal Hope",
  "email": "vocal@example.com",
  "telefone": "71992042803",
  "senha": "senha123"
}
```


💬 Comentários
POST /comments - Cria um novo comentário em um post.
Body:
```bash
{
  "descricao": "Ótimo post!",
  "postId": "uuid-do-post",
  "grupoId": "uuid-do-grupo",
  "autorId": "uuid-do-autor"
}
```


📂 Estrutura do Projeto
```bash
.
├── src
│   ├── controllers       # Controladores para cada rota da API
│   ├── services          # Lógica de negócio e acesso ao banco de dados
│   ├── routes            # Definição das rotas da API
│   ├── prisma            # Arquivos relacionados ao Prisma ORM
│   ├── middlewares       # Middlewares de autenticação, validação, etc.
│   ├── utils             # Utilitários e helpers
│   └── app.js            # Arquivo principal da aplicação
├── .env                  # Arquivo de configuração de variáveis de ambiente
├── package.json          # Gerenciador de pacotes e scripts do projeto
└── README.md             # Documentação do projeto

```

🧪 Testes
Rodar os testes
Se houver testes configurados, você pode rodá-los com:
```bash
npm test
```

📦 Deploy
O deploy pode ser feito diretamente na Vercel, garantindo que o Prisma esteja configurado para gerar o cliente e rodar as migrações no banco de dados da AWS.
```bash
vercel --prod
```

📝 Licença
Este projeto está licenciado sob a licença MIT.

Esse conteúdo pode ser copiado e salvo diretamente em um arquivo **README.md** no seu projeto.


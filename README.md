# Estudando Node Express Sequelize
//FONTE: https://www.youtube.com/watch?v=X7pqcPy8gDo
//FONTE: https://medium.com/@diomalta/migrations-e-seeders-no-sequelizejs-67ba3571ed0e


## Passos Iniciais
- yarn init -y
- yarn add express 
- yarn add nodemon
    * Dentro do arquivo package.json adicionar o script:
        > "dev": "nodemon src/index.js"
- yarn add sequelize mysql2
- yarn add sequelize-cli -d

//Podemos criar models/index.js com o comando padrao > npx sequelize init: models

### dotenv
- yarn add dotenv
- na raiz do projeto criar o arquivo .env
    * arquivo .env usar o Padrão
    ITEM_NOME=valor

    * Importar no arquivo de uso
    ```
    require('dotenv/config')
    item: process.env.ITEM_NOME;
    ````

## Configurações Sequelize Migration

1. Criar o arquivo .sequelizerc
    - informar configurações de pasta
2. Comandos
    > yarn sequelize db:create -> Cria o banco
3. Criar migration -> Migration serve para instanciar tabelas versionadas
    > yarn sequelize migration:create --name=create-users
4. Após a edição da tabela em migrations, executar criar a tabela no banco:
    > yarn sequelize db:migrate
    No banco será criado a tabela users + sequelizemeta, que serve para registrar as alterações
5. Para reverter a migration basta rodar o comando:
    > yarn sequelize db:migrate:undo

## Controllers e Models

- Estrutura básica da classe tabela;
- Index do Controller (CRUD - ControllerUser)



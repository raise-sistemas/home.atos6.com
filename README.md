# atos6-landing-page

Repositório que contém o conteúdo da landing page atual do atos6, foi feita
usando [GatsbyJS](https://www.gatsbyjs.org/).

# Desenvolvimento

```sh
git clone https://github.com/raisesistemas/atos6-landing-page.git
cd atos6-landing-page/
yarn install
```

# Deploy

O processo de deploy é feito usando o comando a seguir (para ser atualizado em
todos os ambientes):

```sh
yarn run deploy:all
```

Para ser atualizado apenas em um ambiente, como forma de validar que as
alterações feitas, são as esperadas pela pessoa da equipe que solicitou algum
ajuste, temos os seguintes comandos:

- Production: `yarn run deploy:production`
- Staging: `yarn run deploy:staging`

*Obs.: Precisará de acesso a nossa conta na AWS, pois o processo de deploy irá
compilar todo o js e css, posteriormente atualizará o bucket no s3 para
permitir que qualquer um que acesse a landing page possa ver a alteração feita*

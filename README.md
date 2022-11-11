# atech-api

# atech-interface

## 💻 Sobre

API para o monitoramento de granja.

### Clone o repositório

```bash
$ git clone https://github.com/jhonmullerfreitas/atech-api.git
```

## Ambiente e Ferramentas:

- Node.js: (https://nodejs.org/en/)

## Para executar o projeto:

1. Dentro do diretório para instalar as dependências do projeto execute o comando `$ yarn install`
2. Dentro do diretório execute o comando `$ yarn dev` (obs. o passo anterior deve ser executado)
3. As requisições são feitas pelo app web desenvolvido em ReactJs que também roda em localhost, acesse este link para baixar e executar https://github.com/jhonmullerfreitas/atech-interface

## Projeto em execução:

1. Este projeto roda em localhost
2. Acesse http://localhost:3001/

## Algumas Funcionalidades:

1. Retorna dados de mortalidade por lote
2. Retorna dados de pesos por lote
3. Retorna dados de Conversão Alimentar (CA) por lote
4. Retorna dados de todos os lotes
5. Retorna dados de um unico lote
6. Retorna dados de morte média por sexo
7. Retorna dados de peso medio por sexo

## Algumas bibliotecas utilizadas
1. Express (https://expressjs.com/pt-br/)
2. Nodemon (https://nodemon.io/)
3. Sucrase (https://sucrase.io/)
4. Cors (https://www.npmjs.com/package/cors)

## Exemplos de requisições HTTP

## Lotes
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/lotes/</td>
    <td>Lista todos os lotes</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/lotes/1</td>
    <td>Lista o lote de id=1</td>
  </tr>
</table>

## Pesos
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/pesos/</td>
    <td>Lista todos os pesos</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/pesos/1</td>
    <td>Lista o peso do lote de id=1</td>
  </tr>
</table>

## Mortalidade
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/mortalidades/</td>
    <td>Lista todos as mortalidades</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/mortalidades/1</td>
    <td>Lista todas as mortalidades do lote de id=1</td>
  </tr>
</table>


## Conversão Alimentar
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/conversao-alimentar/</td>
    <td>Lista todas as conversões alimentares</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/conversao-alimentar/1</td>
    <td>Lista todas as conversões alimentares do lote de id=1</td>
  </tr>
</table>

## Peso Médio
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/peso-medio-sexo/</td>
    <td>Lista o peso médio do sexo masculino e feminino (considerando o total animais da granja)</td>
  </tr>
</table>


## Morte Média
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/morte-media-sexo/</td>
    <td>Lista o morte média do sexo masculino e feminino (considerando o total animais da granja)</td>
  </tr>
</table>

## Resumo da Granja
<table>
  <tr>
    <th>HTTP</th>
    <th>URL</th>
    <th>FUNÇÃO</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/info-granja/</td>
    <td>Lista a quantidade de lotes, aves masculina, aves feminina, galpões dark, semi-dark, automatizados, aspecto bom, regular, ruim.</td>
  </tr>
</table>



## Contato 
Email: jmuller.jhon80@gmail.com

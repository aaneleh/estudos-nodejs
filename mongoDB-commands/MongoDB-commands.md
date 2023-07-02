# MongoDB

## `mongosh`

Abre o terminal do MongoDB e mostrar informações básicas

## `cls`

Limpa o terminal

## `exit`

Sair do terminal do MongoDB

## `show dbs`

Mostra banco de dados

## `use <nome>`

Trocar banco de dados, se o nome for se uma db que não existe, ela vai ser criada

## `show collections`

Equivalente as tabelas em SQL

## `db`

Acessa o banco de dados selecionado (nome no inicio da linha)

# Inserir

## `db.<nome coleção>.insertOne( { <objeto js> } )`

Insere um registro na coleção, se a coleção não existe ela é criada

## `db.<nome coleção>.insertMany([ {<objeto js>}, {<objeto js>}, ...])`

# Selecionar

> Para selecionar o id se usa `_id`
> 

## `db.<nome coleção>.↓`

### `.find()`

Retorna todos os registros da coleção

### `.findOne()`

Retornar o primeiro registro encontrado

### `.find( { <valor sendo procurado> }, { <atributos exibidos> } )`

Retorna registro(s) que encaixam na descrição passada. Exemplo .find( { name: “Helena” } )

Para atributos “nested”: ex: { endereço: { rua: “tal” } }: `find({"endereço.rua” : <condição>})`

O segundo parâmetro { } diz quais atributos serão exibidos.

• `find( { age: 19 } , { name: 1} )` ← Vai mostrar apenas o nome de registros com age: 19

• `find( { } , { age: 0 } )` ← Vai mostrar tudo menos age

Id é retornado por default, para não exibir: `find( { } , { _id: 0 } )`

### `.find( { <atributo>: { <comando>: <valor> } } )`

`$eq`: find atributos c valor igual 

`$ne`: valores diferentes

`$not`: valores que não são tal

`$gt`: maiores que

`$gte`: maiores que ou igual

`$lt`: menores que

`$lte`: menores que ou igual

`$in`: igual a algum de uma lista [ ] 

`$nin`: valores q ñ estão na lista [ ]

`$exists: true`: atributo existe (inclui null)

`$exists: false`: atributo não existe

`find( { $and: [ <condições> ]  } )`

`find( { $or: [ <condições> ]  } )`

`({ $expr: { <cmd>: ["$atrbt1", "$atrbt2"] }})`: compara dois atributos, ex: { $gt: [”$divida”, “$saldo”] }

### `.countDocuments( <condicao> )`

Funciona como o .find mas retorna a quantidade de resultados

### `.limit(<numero>)`

limita o numero de resultados mostrados

### `.sort( { <nome atributo>: <1 ou -1> } )`

exemplo: `db.users.find().sort({ name: 1})` ← seleciona todos os users e organiza em ordem alfabética

podem ser colocados mais de um atributo, exemplo: `sort( { age: -1, name: 1} )` ← organiza primeiro pela idade (decrescente) de depois pela idade (ordem alfabética)

## `.skip(<numero>)`

Pula os X primeiro(s) resultado(x)

# Editar

## `db.<nome colecao>.updateOne({ <condição> }, { <$comando> { <atributo>: <valor> } })`

## `db.<nome colecao>.updateMany({ <condição> }, { <$comando> { <atributo>: <valor> } })`

Condições para update funcionam igual as condições do find

Comandos de update: 

### `$set`:
    muda para o valor passado

### `$unset`:
    remove o atributo.  Ex: { $unset: { age: “ ” }}

### `$inc`:
    aumenta o atributo em tal valor

### `$rename`:
    muda o nome do atributo para aquele registro

### `$push`:
    adiciona valor a um array.  Ex: { $push: { hobbies: “Correr” }}

### `$pull`:
    remove um valor de um array

## `db.<nome colecao>.replaceOne({ <condição> }, { <novo objeto> } })`

Condições também funcionando igual a find

Encontra um registro com tal condição e substitui tudo pelo novo objeto passado

# Excluir

## `db.<nome coleção>.deleteOne({ <condição> })`

## `db.<nome coleção>.deleteMany({ <condição> })`

Condições também funcionando igual a find

## `db.dropDatabase()`

Deleta banco de dados selecionado
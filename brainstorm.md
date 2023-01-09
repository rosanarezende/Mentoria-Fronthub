# Envio de parâmetros de experimentos

## Cenário atual

As propriedades relacionadas a cada experimento são enviadas nas views de cada MFE e, quando necessária em mais de uma tela (como foi o caso do Desconto Basic) enviadas em mais de um arquivo.

<br>

## Necessidade

Centralizar o envio das propriedades dos experimentos.

<br>

## Possíveis soluções

<br>

### 1 - Context Data

Criar no context data uma forma de enviar um novo hash/objeto com parâmetros relacionados a cada domínio (assim cada um pode utilizar conforme seu contexto).

<br><hr>

Exemplo de resultado esperado no MFE (utilizando o `front-hub.config.js` para melhor visualização)
```js
module.exports = {
  context: {
    user: {},
    domains: {
      plg: {
        experiments: {
          someXP: 'variant',
        },
      },
    },
  },
  ...
}
```

E uso no MFE 
```js
import { useHostContext } from '@resultadosdigitais/front-hub/react'

function AnyComponent(){
  const { domains } = useHostContext()
  const someXP = domains.plg.experiment.someXP

  return ...
}
```

<br><hr>

Sugestão de implementação no monolito

No arquivo `_fronthub.html.rb` alterar no **fronthub('configure', {})** o parâmetro _context_ para que ele envie, além dos dados do usuário, também parâmentros relacionados aos domínios.

```js
fronthub('configure', {
    ...,
    context: <%= raw Fronthub::Context.build_from(current_user, domains).to_json %>, // acrescentrar o segundo parâmetro domains
  ...
});
```

E no arquivo `context.rb` alterar o método **build_from**, que passa a receber os domínios e acrescentá-lo ao hash do context
```rb
  def self.build_from(current_user, domains)
    # https://medium.com/square-corner-blog/exploring-ruby-2-6-enumerator-hash-and-enumerable-changes-11ffa4b12eb9
    default.merge(create_user_context(current_user), domains)
    # ou
    [default, create_user_context(current_user), domains].reduce(&:merge)
  end
```

**OBS**: a forma de receber as informações dos domínios ainda precisa ser validada.





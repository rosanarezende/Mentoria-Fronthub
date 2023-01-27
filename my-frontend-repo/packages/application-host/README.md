# APPLICATION HOST

## Front-hub
<br>

Para conectar o projeto com o front-hub é necessário, na view:

1. **Carregar** (fazer o require) do front-hub
    ```html
      <head>
        <link rel="preload" href="{{FRONTHUB_URL}}/assets/front-hub/6.2.2/require@6.2.2.js" as="script">
      </head>
    ```

<br>

2. **Inicializar** a variável global `fronthub`
    - `fronthub` é o nome da variável global que usamos em todo o projeto. Podemos, por exemplo, acessar no console suas propriedades, assim como fazemos com a variável global `window`.
    <br><br>

    ```html
    <body>
      <script>
        !function (t, n, e, r, o, s, c) {
          t.__fronthub__ = o, t[o] = t[o] || function () { (t[o].q = t[o].q || []).push(arguments) }, s = n.createElement(e), c = n.getElementsByTagName(e)[0], s.async = 1, s.src = '{{FRONTHUB_URL}}/assets/front-hub/6.2.2/require@6.2.2.js', c.parentNode.insertBefore(s, c)
        }(window, document, 'script', 0, 'fronthub');
      </script>
    </body>
    ```

<br>

3. **Configurar** o fronthub
    - os requisitos mínimos de configuração são: repository e intl
    - podemos usar outros, como o context, se o MFE precisar de informações dele
  <br><br>

    ```html
    <body>
      <script>
        fronthub("configure", {
          repository: 'https:front-hub-service-staging.rdops.systems',
          intl: {
            language: "pt-BR",
            debug: false,
          },
          context: {
            user: {
              id: "1234",
              firstName: "Rosana",
              lastName: "Rezende",
              email: "rosanarezende.com@gmail.com",
              role: "OWNER",
              account: {
                requise version
                  createdAt: "2022-11-25 16:00:00 -0300",
              },
            },
          },
        });
      </script>
    </body>
    ```

<br><br>

Feita a configuração, podemos **colocar o MFE na view**. Por exemplo a navbar:

  ```html
  <body>
    <div id="rdsm-navbar"></div>
    
    <script>
      fronthub(
        'requireMicrofrontend',
        'navbar-marketing',
        function (hub) {
          hub.renderAt(document.getElementById('rdsm-navbar'), {
            subscribeNowXP: 'out-of-experiment',
          })
          console.log('require navbar-marketing hub', hub)
        },
        function (err) {
          console.log('errorCallback')
          console.log(err)
        },
      )
    </script>
  </body>
  ```

<br><br>


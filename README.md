# DesafioTrakto

Projeto utilizado na parte prática da entrevista para a vaga de Desenvolvedor Front-end na Trakto.

## Índice

- [Detalhes do projeto](#detalhes-do-projeto)
- [Requisitos mandatórios](#requisitos-mandatórios)
- [Instalando o projeto](#instalando-o-projeto)
- [Iniciando o projeto](#iniciando-o-projeto)
- [Lições aprendidas](#lições-aprendidas)
- [Commit Style Guide](#commit-style-guide)
- [IMPORTANTE](#importante)

## Detalhes do projeto

[(Voltar ao topo)](#índice)

O projeto baseou-se de acordo com o que foi explicado no repositório de apoio para o desafio, que pode ser encontrado [aqui](https://github.com/trakto/desafio_frontend). Todas as operações realizadas aqui seguem o que foi explicado no repositório e no protótipo do [Figma](https://www.figma.com/file/Ajzapgkl4vrXw8KnHlIwPh/PrototipoTraktoTV).
Contudo, vale ressaltar que na collection do Postman disponibilizada no repositório de apoio, o token JWT se encontrava com data de expiração para o dia 20 de abril, devido a isso, não foi possível recuperar as informações da API, as imagens, materiais e vídeos estão mockados (simulados) para manter a veracidade do meu protótipo.

## Requisitos mandatórios

[(Voltar ao topo)](#índice)

De acordo com o repositório de apoio, os critérios de aceite para o desafio são:

- [x] O visual deve ser idêntico ao protótipo do figma;
- [x] O projeto deve ser dedsenvolvido em Angular 2+;
- [x] As requisições à API devem ser reais, e o candidato deve ter uma conta gratuita na trakto para usar suas credenciais para usar a API (Nesse caso, apenas a requisição de login foi feita, devido à restrição do token, as demais foram mockadas);
- [x] O repositório deve está publicado no github e o README deve conter todas as informações necessárias para rodar a aplicação;

## Instalando o projeto

[(Voltar ao topo)](#índice)

Para instalar o projeto, basta clonar o repositório e executar o comando

```cmd
npm install
```

para instalar todas as dependências do projeto. Este comando instalará o Angular (framework do projeto), assim como algumas bibliotecas de apoio que utilizei para o desenvolvimento do projeto.

## Iniciando o projeto

[(Voltar ao topo)](#índice)

Para iniciar o projeto, basta executar o comando

```cmd
ng serve
```

e acessar o endereço `http://localhost:4200/` no seu navegador. Ou apertar `Ctrl + click` no endereço que aparecerá no terminal após a execução do comando.

## Lições aprendidas

[(Voltar ao topo)](#índice)

Após experiências anteriores, comecei a utilizar mais o framework React, então esse desafio foi uma excelente oportunidade de me voltar a saber lidar com Angular e construir aplicações com esse framework. Acredito ter melhorado minha legibilidade de código, assim como a organização do mesmo, além de ter voltado a utilizar designs do Figma para basear minha aplicação.

## Commit Style Guide

[(Voltar ao topo)](#índice)

Os commits dessa aplicação seguiram o padrão utilizado [neste guia](https://gist.github.com/mguilhermetavares/4256fe4864b5c48282d1f9b6cbaf0dde), e segue algumas regras como:

- O título do commit deve ser escrito em inglês;
- O título do commit deve ser escrito no imperativo;
- Todos os commits devem ser "SignOff" (commit -sm);
- O título do commit deve ser escrito em no máximo 72 caracteres;
- O commit deve detalhar o que foi feito, e não o que será feito;
- Ele deve, idealmente, ser iniciado por um emoji, onde a tabela a seguir (escrita em inglês) declara seu significado:

Emoji | Code | Commit Type
------------ | ------------- | -------------
:sparkles: | `:sparkles:` | New feature	
:tada: | `:tada:` | Initial commit
:nail_care: | `:nail_care:` | Improve UI/UX
:art: | `:art:` | Improve the structure/code format
:racehorse: | `:racehorse:` | Improve performance
:memo: | `:memo:` | Write documentation
:bug: | `:bug:` | Fix bugs
:fire: | `:fire:` | Fix bugs in production (hotfix)
:green_heart: | `:green_heart:` | Fix a CI build
:white_check_mark: | `:white_check_mark:` | Add tests
:lock: | `:lock:` | Improve security
:arrow_up: | `:arrow_up:` | Update dependencies
:arrow_down: | `:arrow_down:` | Downgrade dependencies
:poop: | `:poop:` | Deprecated
:construction: | `:construction:` | Under construction
:rocket: | `:rocket:` | New version
:see_no_evil: | `:see_no_evil:` | Work around (pt-br: "Gambiarra")
:whale: | `:whale:`  | Docker
:ok_hand: |`:ok_hand:`   | Code review changes
:hammer: | `:hammer:`    | Refactor code
:boom: | `:boom:` | Conflict merge
:scissors: | `:scissors:` | Legacy code removal
:milky_way: | `:milky_way:` | Add images/icons
Other                      | [Be creative](http://www.emoji-cheat-sheet.com/)

### Exemplo

```bash
git commit -sm ":memo: Add contribution instructions"
-m "The CONTRIBUTING.md file was created with instructions on how to make a good commit"
```

### IMPORTANTE

Um dos avisos do repositório de apoio é que a tela não precisaria ser responsiva, por isso, apenas considerei uma tela de largura de 1920px, alguns componentes naturalmente vão se adaptar, mas outros podem estar bastante esquisitos em telas pequenas por não estarem responsivos.

# Boas-vindas ao repositório Travel Form!

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ (PR) para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício, iremos criar um formulário para concorrer a uma viagem. 

Imagine que você está surfando na internet. Você agora é uma pessoa desenvolvedora, cansada após finalmente terminar seus estudos e pensando nas suas maravilhosas e merecidas férias.

Então você se depara com um anúncio do concurso Trybe Travel, que irá premiar com uma viagem totalmente paga e com várias opções de destino, a pessoa que desenvolver a melhor página com a proposta do concurso. Como você imagina que seria a página para concorrer a essa viagem?

Concorda que seria uma espécie de formulário?

💡Veja no exemplo a seguir, como pode ficar a aparência do exercício depois de pronto. Lembre-se de que você pode e deve ir além para deixá-lo com a sua cara e impressionar todas as pessoas!

![exemplo](./exemplo.png)

<br />
</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar e manipular elementos HTML;

- Colocar em prática o uso do preventDefault;

- Desenvolver ainda mais o seu raciocínio lógico.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:betrybe/sd-030-a-exercise-travel-form`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-030-a-exercise-travel-form`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique se você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-exercise-trybe-travel`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-exercise-trybe-travel`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/sd-030-a-exercise-travel-form/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/betrybe/sd-030-a-exercise-travel-form/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você produzir no código, regularmente

- Lembre-se de sempre, após um (ou alguns) `commits`, atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary>
<strong>🏗 Como estruturar seu projeto</strong>
  </summary> <br />

O seu Pull Request deverá conter obrigatoriamente os arquivos `forms.html` e `script.js` com sua devida lógica implementada.

- Não é necessário criar o arquivo `forms.html` pois ele já está criado.  **Durante a resolução dos requisitos, crie o costume de adicionar IDs em elementos únicos e classes em elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora**

**De olho na dica 👀:**
- Para verificar em tempo real como está ficando seu formulário é só usar a extensão `live Server` no _VSCode_;

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).

:warning: **NESTE EXERCÍCIO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** :warning:

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

⚠️**AVISO**: Muito cuidado com os nomes dos arquivos. Estes devem ser **exatamente iguais** a `forms.html` e `script.js`.

## Cypress

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o cypress localmente para verificar se seus requisitos estão passando. Para isso, execute um dos seguintes comandos:

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

Após executar o comando acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

</details>


<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

## 1. Adicione o título ao formulário.

<details>
  <summary>No arquivo já criado <code>form.html</code> , adicione as informações a seguir </summary><br>

  - Adicione o título, que deverá ficar dentro de uma tag `h1` e possuir o id `title`;
  - O título deve ter o texto `Formulário Trybe Travel`;
  - Crie a tag `form` que deve conter o id `main-form`.

</details>
<details>
  <summary><strong>O que será testado: </strong></summary><br>

- O título deve ser uma tag `h1`;
- O título deve possuir o ID `title`;
- O conteúdo do título deve ser `Formulário Trybe Travel`;
- Existe um elemento form com o id `main-form`.

</details>

## 2. Adicione os campos do formulário.

<details>
  <summary>Dentro do elemento <code>form</code>, adicione as informações a seguir </summary><br>

- Crie os seguintes campos:
- Nome Completo:
  - Limitado entre 10 e 40 caracteres.
  - O input deve ter o id `fullName`.
- E-mail:
  - Limitado entre 10 e 50 caracteres.
  - O input deve ter o id `email`.
- Destino Preferido:
  - Deverá ter 4 opções: Cidade, Campo, Praia, Montanha.
  - Cada opção deverá ser um `input` do tipo `radio` tendo como atributo `name` o valor `'destinations'`.
- Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
  - Limite de 500 caracteres
  - O textarea deve ter o id `question`.
- Qual a melhor data para realizar sua viagem?
  - O input da data deve ficar abaixo do input anterior.
  - O input deve ter o id `date`.
- Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
  - Crie input do tipo checkbox ao fim desta pergunta.
  - O input deve ter o id `promo`.
- Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
  - Crie input do tipo checkbox ao fim desta frase.
  - O input deve ter o id `agreement`.

> **De olho na dica 👀:** Procure saber mais sobre as tags label e fieldset clicando nas documentações a seguir [label](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label) e [fieldset](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset)

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Existe um elemento com o id `fullName`;
- Existe um elemento com o id `email`;
- Existe um elemento com o id `destination`;
- Existe um elemento com o id `question`'.
- Existe um elemento com o id `date`'.
- Existe um elemento com o id `promo`'.
- Existe um elemento com o id `agreement`'.

</details>

## 3. Adicione botões ao formulário.
<details>
<summary>O formulário deverá ter 2 botões </summary><br>

  - Crie um botão para enviar as informações preenchidas;
    - O botão deve ter o id `submit-btn`.
  - Crie um botão para limpar as informações contidas nos campos.
    - O botão deve ter o id `clear-btn`.
</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Existem dois elementos com a tag `button`.
- Verifica se o texto do botão é `Enviar`.
- Existe um elemento com o id `submit-btn`.
- Verifica se o texto do botão é `Limpar`.
- Existe um elemento com o id `clear-btn`.

</details>

## 4. Manipule as informações via Javascript.

<details>
<summary>No arquivo <code>script.js</code> faça as seguintes tarefas</summary>

  - Interrompa o comportamento padrão do botão submit utilizando o método `preventDefault()`;
  - Ao clicar no botão limpar, os campos devem ficar vazios.

  > **De olho na dica 👀:**  Vamos utilizar um pouco de Javascript. Para isso, crie o arquivo script.js e o referencie no HTML.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Ao clicar no botão enviar, as informações contidas nos inputs devem permanecer;
- Ao clicar no botão limpar, os campos devem ficar vazios. 

</details>

---
 
# Bônus

## 5. Validação de imagem

<details>
<summary>Que tal fazer a validação da imagem?</summary>

A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.<br>

- Desabilite o botão caso o checkbox não esteja selecionado.
- Habilite o botão caso o checkbox seja selecionado.

</details>

<details>
<summary><strong>O que será testado</strong></summary><br>

- Existe um elemento do tipo checkbox com o id agreement;
- O botão deve estar inicialmente desabilitado;
- O botão deve se tornar habilitado ao marcar o checkbox com id igual a agreement.

</details>

## 6. Validação dos campos

<details>
<summary>Faça a validação dos campos do formulário </summary><br>

- Faça a validação dos campos com limite de caracteres a seguir; 
- O input Nome completo deve teve ter no máximo 40 caracteres;
- O input E-mail deve teve ter no máximo 50 caracteres;
- O textarea deve ter no máximo 500 caracteres.
</details>

<details>
<summary><strong>O que será testado</strong></summary><br>

- O input Nome completo recebendo o máximo de 40 caracteres;
- O input E-mail recebendo o máximo de 50 caracteres;
- O textarea recebendo o máximo de 500 caracteres.
</details>

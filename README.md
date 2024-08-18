# Formulário de Matrícula - Estrelas do Amanhã

Este projeto consiste em um formulário de matrícula para a escola de educação infantil "Estrelas do Amanhã". O objetivo é permitir que os pais preencham informações sobre seus filhos para a matrícula na escola, incluindo dados pessoais, informações médicas, endereço e opções de matrícula.

## Estrutura do Projeto

### HTML
O arquivo principal `index.html` contém a estrutura do formulário:

- **Cabeçalho**
  - Contém meta tags e links para os arquivos de CSS e JavaScript.
  - Define o título da página e o ícone do atalho.

- **Corpo**
  - `main.container-form`: Contém o formulário e uma imagem de destaque.

  - **Formulário**
    - **Informações da Criança**
      - Campos para nome, data de nascimento, sexo, informações médicas e upload da certidão de nascimento.
    - **Endereço Residencial**
      - Campos para CEP, rua, número, cidade e estado.
    - **Informações do Responsável**
      - Campos para nome, telefone e e-mail do responsável.
    - **Opções de Matrícula**
      - Opções para selecionar o turno e o esporte desejado.
    - **Termos e Políticas**
      - Checkbox para aceitar os termos e condições.
    - **Botões**
      - Botões para salvar respostas e realizar a matrícula.
    - **Imagem de Destaque**
      - Imagem fixada à direita da página.

### CSS
Os estilos estão divididos em vários arquivos importados em `index.css`:

- **`index.css`**
  - Define estilos gerais para o formulário, incluindo layout e tipografia.
  - Inclui responsividade para diferentes tamanhos de tela.

- **`responsive.css`**
  - Adapta o layout para telas menores (máx. 1125px e 635px).

  - **Estilos Específicos**
    - Inputs e Seletores: Estiliza campos de entrada, seletores e áreas de texto.
    - Botões: Define a aparência dos botões e suas interações.
    - Radio Buttons: Personaliza a aparência dos botões de opção.
    - Dropzone: Estilo para o campo de upload de arquivos.

### JavaScript
O arquivo `script.js` contém scripts para funcionalidades adicionais:

- **Formatação de Telefone**
  - Função para formatar o número de telefone.

- **Validação de E-mail**
  - Função para validar o formato do e-mail e exibir mensagens de erro.

## Tecnologias Utilizadas
- **HTML5**: Estruturação do conteúdo.
- **CSS3**: Estilização e responsividade.
- **JavaScript**: Funcionalidades interativas e validações.
- **Fontes**: Google Fonts (Poppins).

## Acesse a Página

Você pode visualizar o perfil de viagens através do seguinte link: [Formulário de matrícula](https://caioquerino.github.io/rocketseat-desafio-formulario-estrelas-do-amanha/)

Para mais informações ou para conectar-se comigo, visite meu perfil no LinkedIn: [Caio Querino](https://www.linkedin.com/in/caio-querino-1257622a5/). Visite também o meu [Portfólio](https://caioquerino.github.io/portfolio-caio/#habilidades).

# Landing Page Responsiva - Desafio UANE

[https://github.com/rafaeoTW4/desafio-opovo.git]

Este repositório contém o código-fonte de uma landing page totalmente responsiva para um curso de Secretaria Escolar, desenvolvida como parte de um desafio técnico da UANE. O projeto demonstra a integração de um frontend moderno (React) com um backend simples (PHP) e a implementação de layouts complexos e interativos.

---

### Vídeo de apresentação do projeto rodando e sua responsividade

[Demonstração da Landing Page quanto à responsividade em telas para Desktop e Mobile](https://drive.google.com/file/d/1GUf6Qcb71f_wsQL5iGb_geH-CsC-oSYV/view?usp=sharing)

---

### 🚀 Principais Features

* **Integração Full Stack:** Frontend em React consumindo uma API REST em PHP para carregar dinamicamente a seção de cursos.
* **Design Responsivo (Mobile-First):** Layout perfeitamente adaptado para dispositivos mobile, tablets e desktops.
* **Componentização com React:** Interface construída com componentes reutilizáveis como `CourseCard`, `AccordionItem` e `Tag`, garantindo manutenibilidade e escalabilidade.
* **Layouts Avançados com Tailwind CSS:** Uso de Grid e Flexbox para criar estruturas complexas e responsivas, como o carrossel de cursos e o rodapé adaptativo.
* **Interatividade:** Efeitos de `hover` e menu "hambúrguer" funcional para uma experiência de usuário fluida em dispositivos móveis.

---

### 🛠️ Tecnologias Utilizadas

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** PHP
* **Ambiente de Desenvolvimento/Servidor:** Nginx, PHP-FPM, Linux(VM)

---

### 🏁 Configuração do Ambiente Local

Siga os passos abaixo para executar o projeto em sua máquina.

#### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Um servidor web com suporte a PHP (Ex: Nginx + PHP-FPM, Apache, ou até mesmo o servidor embutido do PHP para testes simples).

#### Backend

O backend consiste em um único endpoint PHP. A maneira mais simples de executá-lo é usando o servidor embutido do PHP.

1.  Navegue até a pasta do backend:
    ```bash
    cd backend
    ```
2.  Inicie o servidor PHP na porta 8000:
    ```bash
    php -S localhost:8000
    ```
    A API estará disponível em `http://localhost:8000/api.php`.

> **Nota:** Para um ambiente similar ao de produção, a configuração original com Nginx e PHP-FPM é recomendada. Instruções detalhadas podem ser encontradas em `docs/nginx-setup.md`.

#### Frontend

1.  Navegue até a pasta do frontend em um novo terminal:
    ```bash
    cd frontend
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento do Vite:
    ```bash
    npm run dev
    ```
4.  Abra o endereço `http://localhost:5173` (ou a porta indicada) no seu navegador.

---

### 🧠 Destaques Técnicos e Soluções Implementadas

Este projeto foi uma oportunidade para aplicar soluções técnicas para desafios comuns do desenvolvimento web.

1.  **Configuração de Ambiente de Servidor:**
    * O backend foi implantado em uma VM Linux com **Nginx** e **PHP-FPM**, simulando um ambiente de produção real.
    * Foi realizada a depuração e o ajuste de permissões de pasta (`/var/www/`) e da configuração do Nginx (`sites-available`) para garantir o correto processamento de scripts PHP, uma tarefa crítica em operações de DevOps.

2.  **Comunicação Frontend-Backend:**
    * A integração assíncrona foi feita com os hooks `useState` e `useEffect` do React, com tratamento de estados de `loading` e `error` para melhorar a UX.
    * Foram solucionados problemas de **CORS** (Cross-Origin Resource Sharing), um desafio recorrente ao conectar aplicações em domínios diferentes durante o desenvolvimento.

3.  **Responsividade e CSS Avançado:**
    * O layout foi refatorado para seguir a filosofia "Mobile-First", garantindo uma base sólida para todos os tamanhos de tela.
    * Foi solucionado um problema complexo de **overflow horizontal** em dispositivos móveis, aplicando `overflow-x: hidden` de forma estratégica sem comprometer o layout.
    * O rodapé utiliza **CSS Grid** para se reorganizar de uma coluna (mobile) para três (tablet) e quatro colunas (desktop), demonstrando domínio de técnicas de layout modernas.

---

### 🤝 Como Contribuir

Este é um projeto de portfólio, mas contribuições são bem-vindas! Se você encontrar um bug ou tiver uma sugestão, siga os passos abaixo:

1.  Faça um **Fork** deste repositório.
2.  Crie uma nova **Branch** (`git checkout -b feature/sua-feature`).
3.  Faça o **Commit** das suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Envie para a sua Branch (`git push origin feature/sua-feature`).
5.  Abra um **Pull Request**.

---

### 👨‍💻 Contato

**Rafael Marçal Parente**

* **LinkedIn:** [https://www.linkedin.com/in/rafael-marcal-parente/]

* **Email:** [rafael.marcal.parente@gmail.com]

* **GitHub:** [https://github.com/rafaeoTW4]
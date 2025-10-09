# Landing Page - Curso de Secretaria Escolar (Desafio UANE)

> Projeto full stack de uma landing page responsiva para o curso de Secretaria Escolar, com dados de cursos carregados dinamicamente via API. O design foi implementado com fidelidade a partir de um protótipo no Figma.

## 🎥 Demonstração em Vídeo

*(DICA: Grave um vídeo curto (ou GIF) da sua tela mostrando o site final. Mostre a rolagem, o carrossel funcionando, o menu mobile abrindo, o layout se adaptando. Use um programa como ScreenToGif, Giphy Capture ou Kap. Coloque o arquivo na pasta do projeto e mude o link abaixo.)*

![Demo do Projeto em Ação](caminho_para_seu_gif_aqui.gif)

## ✨ Features Implementadas

- **Integração Full Stack:** Frontend em React consumindo uma API PHP para carregar a seção de cursos dinamicamente.
- **Design Totalmente Responsivo:** A aplicação se adapta perfeitamente a 3 breakpoints: mobile, tablet e desktop.
- **Componentização Avançada:** O projeto foi estruturado em componentes React reutilizáveis, como `CourseCard`, `AccordionItem`, e `Tag`, permitindo flexibilidade e manutenção.
- **Layouts Complexos com Tailwind CSS:**
  - Carrossel de cursos interativo com botões de navegação.
  - Layouts de Grid e Flexbox responsivos que se reorganizam de acordo com o tamanho da tela (ex: Footer e HeroSection).
- **Interatividade:** Efeitos de `hover` e menu "hambúrguer" funcional para a navegação mobile.

## 🚀 Desafios Superados e Soluções

Este projeto apresentou desafios realistas que exigiram soluções técnicas específicas, demonstrando habilidades em diversas áreas do desenvolvimento web:

#### 1. **Configuração de Servidor e Backend**
- O backend PHP foi servido através de um servidor **Nginx** em uma VM, uma configuração profissional comum.
- Foi necessário depurar e corrigir a configuração do Nginx (`sites-available`) para processar arquivos `.php` via **PHP-FPM**, incluindo o ajuste de `root` path e permissões de pasta (`/var/www/`), um desafio comum em ambientes de produção.

#### 2. **Comunicação Frontend-Backend**
- A integração entre o React e a API PHP foi feita com os hooks `useState` e `useEffect` para realizar o `fetch` dos dados de forma assíncrona.
- Foram implementados estados de `loading` e `error` para uma melhor experiência do usuário durante o carregamento dos dados.
- Depuramos e resolvemos problemas de **CORS** (Cross-Origin Resource Sharing) e erros de rede (IP/Porta), garantindo que o frontend pudesse se comunicar com a API em um ambiente de desenvolvimento local.

#### 3. **Responsividade Avançada**
- O projeto foi construído seguindo a filosofia "Mobile-First", mas adaptado a partir de um design desktop-first, exigindo refatoração cuidadosa.
- Foram resolvidas questões complexas de **overflow horizontal** ("barra de rolagem fantasma"), causadas por elementos com margens negativas, aplicando soluções globais de CSS (`overflow-hidden`) para garantir um layout perfeito no mobile.
- Layouts como o do rodapé foram reestruturados em diferentes breakpoints (`md` e `lg`) usando técnicas avançadas de CSS Grid para se adaptar a um design de 3 colunas no tablet e 4 colunas no desktop.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** PHP
- **Servidor:** Nginx, Linux (VM)

## 🏁 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto.

### Backend

1.  Garanta que você tenha um ambiente com **Nginx** e **PHP-FPM** configurado.
2.  Clone este repositório para a pasta `root` do seu servidor (ex: `/var/www/`).
3.  Ajuste a configuração do Nginx para apontar para a pasta correta e processar arquivos PHP na porta `8000`.
4.  Inicie os serviços `nginx` e `php-fpm`. A API estará disponível no endpoint `/desafio-opovo/backend/api.php`.

### Frontend

1.  Navegue até a pasta do frontend no terminal.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Abra o endereço `http://localhost:5173` (ou a porta indicada) no seu navegador.
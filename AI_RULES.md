# Regras e Guia de Desenvolvimento para o Lar Gustavo Nordlund

Este documento descreve a pilha de tecnologia utilizada no projeto e as diretrizes para o uso de bibliotecas, garantindo consistência e boas práticas de desenvolvimento.

## Pilha de Tecnologia

*   **React (v18.x):** Biblioteca principal para a construção da interface do usuário.
*   **TypeScript (v5.x):** Linguagem de programação para adicionar tipagem estática, melhorando a robustez e a manutenibilidade do código.
*   **Vite (v5.x):** Ferramenta de build e servidor de desenvolvimento rápido para projetos web modernos.
*   **Tailwind CSS (v3.x):** Framework CSS utilitário para estilização rápida e responsiva, focado em classes de utilidade.
*   **Supabase:** Plataforma de backend como serviço, utilizada para banco de dados (PostgreSQL), autenticação e armazenamento de arquivos (Storage).
*   **Lucide React:** Biblioteca de ícones SVG leves e personalizáveis para uso em toda a aplicação.
*   **React Router:** Biblioteca para gerenciar o roteamento do lado do cliente, permitindo navegação entre diferentes "páginas" da aplicação.
*   **shadcn/ui & Radix UI:** Coleções de componentes de UI pré-construídos e acessíveis, baseados em Radix UI, para acelerar o desenvolvimento de interfaces.

## Regras de Uso de Bibliotecas e Diretrizes

Para manter a consistência, a performance e a manutenibilidade do projeto, siga as seguintes regras:

1.  **Componentes de UI:**
    *   **Priorize `shadcn/ui` e `Radix UI`:** Sempre que possível, utilize os componentes fornecidos por `shadcn/ui` ou `Radix UI` para elementos de interface comuns (botões, formulários, modais, etc.).
    *   **Componentes Customizados:** Se um componente necessário não estiver disponível nas bibliotecas acima ou exigir personalização significativa, crie um novo componente em `src/components/` utilizando exclusivamente Tailwind CSS para estilização.

2.  **Estilização:**
    *   **Tailwind CSS Exclusivo:** Utilize apenas classes de utilidade do Tailwind CSS para toda a estilização. Evite arquivos CSS personalizados (`.css` ou `.scss`) ou estilos inline, a menos que seja estritamente necessário para animações complexas ou hacks específicos que não podem ser alcançados com Tailwind.
    *   **Responsividade:** Todos os designs devem ser responsivos e otimizados para diferentes tamanhos de tela, utilizando as classes responsivas do Tailwind.

3.  **Ícones:**
    *   **`lucide-react`:** Use `lucide-react` para todos os ícones na aplicação.

4.  **Interação com Backend (Supabase):**
    *   **Cliente Supabase:** Todas as operações de banco de dados, autenticação e armazenamento devem ser realizadas através do cliente Supabase configurado em `src/lib/supabase.ts`.
    *   **Upload de Imagens:** Para upload de imagens, utilize as funções auxiliares em `src/utils/uploadImages.ts`.
    *   **URLs de Imagens:** Para obter URLs públicas de imagens armazenadas no Supabase, utilize a função `getImageUrl` ou o objeto `IMAGES` de `src/config/images.ts`.

5.  **Roteamento:**
    *   **`react-router-dom`:** Implemente o roteamento do lado do cliente usando `react-router-dom`.
    *   **Definição de Rotas:** As rotas principais da aplicação devem ser definidas no arquivo `src/App.tsx`.

6.  **Gerenciamento de Estado:**
    *   **Estado Local:** Para o estado de componentes individuais, utilize os hooks `useState` e `useReducer` do React.
    *   **Estado Global:** Para o estado global, utilize a Context API do React, mantendo a complexidade mínima.

7.  **Variáveis de Ambiente:**
    *   **Vite `import.meta.env`:** Acesse as variáveis de ambiente (ex: `VITE_SUPABASE_URL`) usando `import.meta.env`.

8.  **Estrutura de Arquivos:**
    *   **Componentes:** Novos componentes devem ser criados em arquivos separados dentro de `src/components/`.
    *   **Páginas:** Novas páginas devem ser criadas em arquivos separados dentro de `src/pages/`.
    *   **Utilitários:** Funções utilitárias devem ser agrupadas em `src/utils/`.
    *   **Configurações:** Arquivos de configuração devem estar em `src/config/`.

9.  **Boas Práticas:**
    *   **Código Limpo e Elegante:** Priorize soluções simples e elegantes. Evite superengenharia.
    *   **Funcionalidade Completa:** Implemente as funcionalidades de forma completa e funcional, sem placeholders ou comentários `TODO` para o usuário.
    *   **Explicações Claras:** Ao fazer alterações, forneça explicações concisas e não técnicas.
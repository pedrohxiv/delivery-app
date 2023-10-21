# Delivery App

## Descrição do Projeto

Bem-vindo ao projeto do aplicativo de entrega de alimentos, um app muito similar ao famoso **Deliveroo**, construído com **React Native** para plataformas iOS e Android. Este aplicativo oferece uma experiência de usuário incrível e inclui funcionalidades como:

### Funcionalidades do Aplicativo

1. **Seleção de Itens**: Os usuários podem navegar e selecionar itens de menus de restaurantes.

2. **Adição ao Carrinho**: Os usuários podem adicionar itens ao carrinho de compras.

3. **Remoção de Itens**: Os usuários podem remover itens do carrinho antes de fazer o pedido.

4. **Gestão de Carrinho com Redux**: Utilizei o Redux para gerenciar o estado do carrinho de compras.

5. **Checkout Animado**: Implementei um fluxo de checkout animado para melhorar a experiência do usuário.

6. **Integração com Prisma ORM**: Utilizei o Prisma ORM para alimentar o conteúdo do aplicativo, permitindo atualizações de menus e itens.

7. **Estilização Avançada com Tailwind CSS**: Utilizei Tailwind CSS para criar uma interface de usuário estilizada e responsiva.

8. **Navegação Navegativa React Native**: Implementei uma navegação suave entre as telas do aplicativo.

9. **Mapas Interativos**: Integre mapas interativos para mostrar a localização dos restaurantes e a entrega em tempo real.

### Frontend

O frontend do aplicativo foi desenvolvido usando **React Native**, aproveitando várias bibliotecas e ferramentas poderosas, incluindo:

- **React Navigation**: Para uma navegação fluida entre as telas do aplicativo.
  
- **Redux e React-Redux**: Para gerenciamento de estado, especialmente para o carrinho de compras.
  
- **React Native Heroicons**: Para adicionar ícones elegantes e modernos ao aplicativo.
  
- **Tailwind CSS para React Native**: Para estilização fácil e responsiva.

- **Mapas Interativos com react-native-maps**: Para mostrar localizações dos restaurantes e informações de entrega em tempo real.

### Backend

No backend, foi utilizado **Node.js** com o framework **Express**, aproveitando várias dependências essenciais:

- **Prisma**: Para facilitar operações CRUD no banco de dados e interações com o banco de dados.
  
- **Cors**: Para gerenciar políticas de segurança do navegador e permitir solicitações de diferentes origens.
  
- **Nodemon**: Para facilitar o desenvolvimento, reiniciando automaticamente o servidor sempre que houver alterações no código.

### Como Executar o Projeto

Para executar o aplicativo em seu ambiente local, siga estas etapas:

#### Backend

1. No terminal, navegue até o diretório do backend e execute `npm install` para instalar as dependências.

2. Crie um arquivo `.env` no diretório `backend` com as seguintes chaves e valores:

```env
DATABASE_URL=seu_valor_aqui
PORT=seu_valor_aqui
```

Substitua `seu_valor_aqui` pelos valores corretos para cada chave.

3. Execute `npm start` para iniciar o servidor backend.

#### Frontend

1. No terminal, navegue até o diretório do frontend e execute `npm install` para instalar as dependências.

2. Crie um arquivo `.env` no diretório `frontend` com as seguintes chaves e valores:

```env
API_URL=seu_valor_aqui
```

Substitua `seu_valor_aqui` pela URL onde o servidor backend está sendo executado.

3. Execute `npm start` para iniciar o aplicativo. Siga as instruções exibidas no terminal para iniciar o aplicativo no iOS (pressione 'i') ou no Android (pressione 'a').

Agora você está pronto para explorar o app de delivery com React Native! Divirta-se experimentando as funcionalidades de compra e entrega. 🍔🛵

# Find My Friends

Aplicativo acadêmico de Tópicos de Programação Mobile para cadastrar amigos, listar e excluir registros no Firestore e apresentar endereços em um mapa com localização do dispositivo.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

## 📋 Table of contents

- [✨ Features](#features)
- [🧪 Technologies](#technologies)
- [🛠️ Environment setup](#environment-setup)
- [🚀 Getting started](#getting-started)
- [🗂️ Project structure](#project-structure)
- [✅ Testing and quality](#testing-and-quality)
- [🔎 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

<a id="features"></a>

## ✨ Features

- Cadastro de nome, telefone e endereço em texto.
- Listagem e exclusão dos documentos da coleção `friends`.
- Serviço de atualização de documentos disponível em `saveFriend(friend, chave)`; a interface atual não oferece formulário de edição completo.
- Geocodificação dos endereços ao abrir o mapa e solicitação de permissão de localização.
- Navegação entre menu, cadastro, lista e mapa.

As coordenadas são calculadas na tela de mapa; não são persistidas no cadastro. Os requisitos acadêmicos originais não equivalem a funcionalidades verificadas em execução.

<a id="technologies"></a>

## 🧪 Technologies

| Tecnologia | Versão declarada | Finalidade |
| --- | --- | --- |
| [Expo](https://docs.expo.dev/)  | ~37.0.3 | SDK mobile histórico |
| [React](https://react.dev/)  | ~16.9.0 | Componentes |
| [React Native](https://reactnative.dev/) | Arquivo `sdk-37.0.1.tar.gz` do fork Expo | Runtime nativo; não significa React Native 37.0.1 |
| [React Navigation](https://reactnavigation.org/) | ^5.5.1 | Navegação |
| [Firebase](https://firebase.google.com/docs/firestore) | 7.14.4 | Persistência Firestore |
| [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) | ^8.1.0 | Localização e geocodificação |
| [React Native Maps](https://github.com/react-native-maps/react-native-maps) | ^0.27.1 | Mapa |

As versões/faixas vêm do `package.json`. Node.js não está fixado; a tentativa de reprodução usa Node.js 14.21.3 e npm 6.14.18.

<a id="environment-setup"></a>

## 🛠️ Environment setup

Requer Git, Node.js e npm. O projeto não fixa Node.js em `engines`, `.nvmrc` ou `.node-version`. **Node.js 14.21.3 com npm 6.14.18** foi escolhido para a reprodução da pilha histórica; não é uma versão declarada pelo repositório nem uma atualização de dependências.

```bash
nvm install 14.21.3
nvm use 14.21.3
git clone https://github.com/paulodaluz/FindMyFriends.git
cd FindMyFriends
npm install
```

Não há lockfile versionado: use `npm install`, não `npm ci`. Este guia adota npm, disponível com o Node.js, sem prometer uma resolução de dependências idêntica entre instalações. Não há Husky, hooks versionados ou script `prepare` para ativar.

O SDK Expo 37 antecede a CLI local dos SDKs atuais. O manifesto não declara `expo-cli`; o executável `expo` fornecido pelo SDK é um wrapper que chama `expo-cli`. É necessário um ambiente legado já preparado com essa CLI. Não presuma que o Expo Go atual abre esse SDK. Instalação global de CLI, SDKs de emulador e atualização do projeto não fazem parte desta entrega.

### Firebase and location

A configuração Firebase é um objeto em `src/database/firebase.js`; não há leitura de `.env`. Para usar dados próprios, revise esse objeto com a configuração Web de um projeto Firebase próprio e habilite **Cloud Firestore**. O serviço acessa a coleção `friends` com `name`, `phoneNumber` e `address`; não há autenticação Firebase implementada. Revise regras de acesso sem expor dados pessoais nem liberar publicamente o banco como contorno.

O mapa usa `expo-location` para solicitar permissão do dispositivo e geocodificar os endereços. A navegação e o mapa precisam de um cliente nativo compatível.

<a id="getting-started"></a>

## 🚀 Getting started

Em um ambiente que já disponha da CLI e do cliente compatíveis com Expo SDK 37:

```bash
npm start
```

O comando chama `expo start`. Os scripts `npm run android`, `npm run ios` e `npm run web` acrescentam, respectivamente, `--android`, `--ios` e `--web`. Android/iOS dependem do dispositivo ou emulador preparado; o script web não comprova compatibilidade das dependências nativas. A URL/porta do servidor de desenvolvimento é apresentada pela CLI, sem porta fixa declarada no projeto.

O script `npm run eject` altera a estrutura nativa; não é necessário para esta documentação e não foi executado.

Validação com Node.js 14.21.3/npm 6.14.18: a instalação foi concluída após uma primeira tentativa interrompida por tempo limite. `npm start` chegou ao wrapper `expo`, que solicitou instalar `expo-cli` globalmente; a resposta foi `n`, mantendo o escopo autorizado. O comando encerrou com código 1. Não houve início do aplicativo, build nativo ou validação em dispositivo.

<a id="project-structure"></a>

## 🗂️ Project structure

| Caminho | Responsabilidade |
| --- | --- |
| `App.js` | Stack de navegação |
| `src/pages/menu.js` | Menu |
| `src/pages/createFriend.js`, `listFriends.js` | Cadastro e listagem/exclusão |
| `src/pages/map.js` | Mapa, geocodificação e localização |
| `src/service/friendsService.js` | Operações Firestore |
| `src/database/firebase.js` | Inicialização Firebase |
| `app.json`, `babel.config.js` | Configuração Expo e Babel |

<a id="testing-and-quality"></a>

## ✅ Testing and quality

Não há scripts de testes automatizados, lint, formatação ou build de distribuição no manifesto. A instalação de dependências não equivale a compilar o app nem verificar seus fluxos. A execução em dispositivo, a compilação nativa e a captura de tela ficam para revisão posterior. As imagens foram omitidas nesta entrega mobile.

<a id="troubleshooting"></a>

## 🔎 Troubleshooting

- `This command requires Expo CLI`: o wrapper `expo` não encontra `expo-cli` e oferece instalá-lo globalmente. Responda `n` se essa instalação não fizer parte do ambiente autorizado. A CLI não está declarada no manifesto. O bloqueio exige uma decisão posterior sobre o ambiente/atualização; nenhum CLI global foi instalado.
- Sem lockfile, as faixas podem resolver dependências transitivas incompatíveis com o SDK antigo.
- `src/pages/map.js` usa `Platform.OS`, mas não importa `Platform`; a tela requer correção antes de ser considerada funcional.
- Geocodificação depende de permissão, rede e um endereço resolvível. Não foram verificados mapa, GPS, cadastro ou acesso ao Firestore.
- Não há configuração de autenticação; a operação depende das regras do Firestore configurado.

<a id="contributing"></a>

## 🤝 Contributing

Crie uma branch a partir de `master`, mantenha as instruções compatíveis com os arquivos do projeto e descreva a alteração em um pull request. Execute as verificações aplicáveis descritas acima; registre limitações de serviços externos e ambiente. Não inclua credenciais, dados pessoais, `node_modules` ou arquivos gerados na entrega.

<a id="license"></a>

## 📜 License

Este projeto está sob a licença **MIT**. Consulte [LICENSE](LICENSE); os avisos existentes foram preservados.

---

<p align="center">Made with 💜 by <a href="https://github.com/paulodaluz">Paulo da Luz</a></p>

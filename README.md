**"Não sei setar o ambiente. O que faço?"**

https://reactnative.dev/docs/set-up-your-environment - segue o tutorial do próprio site do _React Native_.


1. Nesse projeto em particular não fiz uso do EXPO. Segue a lista das bibliotecas utilizadas: 

`npm config set legacy-peer-deps true ->` permite o uso de bibliotecas legacy **[não tem pra onde correr, vai ter que usar]**



_Lista de todas as bibliotecas usadas:_ 

1. npm install styled-components

2. npm install @react-navigation/native

3. npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

4. npm install @react-navigation/stack

5. npm install @react-navigation/bottom-tabsa

6. npm install @react-native-community/async-storage

7. npm install @react-native-community/geolocation

8. npm install react-native-permissions

9. npm install react-native-swiper

10. npm install react-native-svg

11. npm install react-native-svg-transformer


Com o android studio e com o emulador aberto, `npm run android`


### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

***OBS: algumas funções estão desabilitadas via comentário para possibilitar a visualização das páginas que dependem de alguma feature atrelada a funções de backend (que no momento estão inoperantes). 

A página home possui estrutura definida porém por não possuir nenhum banco de dados conectado ao app ela não exibe nada.


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false

Vue.use(VueFirestore);
const firebaseConfig = {
  apiKey: "AIzaSyAbLNj-ETH36VL-J8jOAG50DBAjWLtZjn8",
  authDomain: "score-board-c86a7.firebaseapp.com",
  databaseURL: "https://score-board-c86a7.firebaseio.com",
  projectId: "score-board-c86a7",
  storageBucket: "",
  messagingSenderId: "487687155665",
  appId: "1:487687155665:web:b4bc5f63d48317da"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

<template>
  <div id="home">
    <div class="top-bar">
      <button class="signin-button" @click="socialLogin">Sign in with GitHub</button>
    </div>
    <div class="heading">
      <img class="score-board-logo" alt="logo" src="../assets/score-board-logo.png" />
      <h2>🏆</h2>
      <h2>Welcome to Score Board!</h2>
    </div>

    <div class="cards">
      <div class="card" v-for="(profile, idx) in scoreboard.profiles" :key="idx">
        <Card :name="profile.name" :points="profile.points" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Card
  },
  data() {
    return {
      scoreboard: []
    };
  },
  firestore() {
    return {
      scoreboard: db.collection("dashboard").doc("scoreboard")
    };
  },
  methods: {
    socialLogin() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        // eslint-disable-next-line
        .catch(err => {
          alert("Failed to sign in with GitHub :(");
        });
    }
  }
};
</script>


<style scoped>
#home {
  padding: 24px;
}

.card {
  display: inline-block;
  padding: 16px;
}

.top-bar {
  padding: 0px 32px;
}

.heading {
  padding: 64px 32px;
}

.score-board-logo {
  padding: 48px;
  width: 64px;
}

.signin-button {
  background-color: rgba(244, 244, 252, 0.2);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  float: right;
  cursor: pointer;
}
</style>
<template>
  <div class="settings">
    <h3>General Settings</h3>
      <div class="name-feild field">
        <div class="label">Name:</div>
        <input class="input" :value="user.name" type="text" ref="nameField"/>
      </div>
      <button class="save-button" @click="changeName">Save Changes</button>

    <h3>Connected Accounts</h3>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "settings",
  data() {
    return {
      user: [],
    };
  },
  firestore() {
      const uid = firebase.auth().currentUser.uid;
      return {
        user: db.collection("users").doc(uid)
      };
  },
  methods: {
    changeName() {
      const uid = firebase.auth().currentUser.uid;
      db.collection('users').doc(uid).set ({name: this.$refs.nameField.value}, {merge: true});
    alert("Your name has been changed!");
    }
  }
};
</script>

<style>
.field {
  width: 60%;
  margin: 0 auto;
  padding: 18px;
  border-radius: 8px;
	background-color: rgba(244, 244, 252, 0.8);
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #000000d0;
}

.field .input {
  border-radius: 8px;
	/* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
  border: none;
  padding: 8px;
  margin: 8px;
}

.field * {
  color: #000000d0;
  display: inline-block;
}

.field .label {
  font-weight: bold;
}

.save-button {
  background-color: rgba(244, 244, 252, 0.2);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>


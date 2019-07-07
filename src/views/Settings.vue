<template>
  <div class="settings">
    <transition name="fade">
      <p v-if="showSuccess" class="success">profile updated</p>
    </transition>
    <h3>General Settings</h3>

    <form @submit.prevent>
      <div class="name-feild field">
        <div class="label">Name:</div>
        <input
          id="name"
          class="input"
          :placeholder="userProfile.name"
          type="text"
          :value="userProfile.name"
        />
      </div>
      <button @click="updateName" class="save-button">Save Changes</button>
    </form>

    <h3>Connected Accounts</h3>
    <div v-for="(username, account) in userProfile.accounts" :key="account">
      <div class="name-feild field">
        <div class="label">{{ account }}:</div>
        <input :id="account" class="input" :placeholder="username" type="text" :value="account" />
      </div>
    </div>
    <button @click="updateAccounts" class="save-button">Save Changes</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      // title: '',
      showSuccess: false
    };
  },
  computed: {
    ...mapState(["userProfile"])
  },
  methods: {
    updateName() {
      var name = document.getElementById("name").value;
      this.$store.dispatch("updateName", {
        name: name !== "" ? name : this.userProfile.name
      });
      this.name = "";
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 2000);
    },
    updateAccounts() {
      var accounts = {};
      for (var a in this.userProfile.accounts) {
        accounts[a] = document.getElementById(a).value;
      }
      console.log(accounts);
      this.$store.dispatch("updateAccounts", {
        accounts: accounts
      });
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 2000);
    }
  }
};
</script>

<style>
.field .input {
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 8px;
  margin: 8px;
}

.field * {
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


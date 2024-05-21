<script>
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async loadUsers() {
      let response = await axios.get("/users");
      this.users = response.data;
    }
  },
  mounted() {
    this.loadUsers()
  }
};
</script>

<template>

  <div class="card m-3" style="max-width: 540px;" v-for="user in users">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="'http://localhost:3000/' + user.avatar" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{user.username}}</h5>
          <p class="card-text">{{user.description}}</p>
          <p class="card-text"><small class="text-muted">{{user.status}}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Arial";
  display: flex;
  align-items: center;
  flex-direction: column;
}

.user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 10px;
  color: initial;
  text-decoration: none;
  width: 300px;
}

.user:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
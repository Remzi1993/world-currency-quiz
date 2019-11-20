<template>
  <div class="row">
    <div class="col">
      <img class="logo" src="../assets/money-logo.svg" alt="Money logo">
        <h1 class="title">
          World Currency Quiz
        </h1>
        <h2 class="subtitle">
          Made by Remzi Cavdar
        </h2>
        <router-link to="/quiz">Start karaoke quiz</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss">
.logo {
  max-width: 15vw;
  margin-bottom: 2vw;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 5vw;
  color: #35495e;
  letter-spacing: 0.1vw;
  margin: 0;
}
.subtitle {
  font-weight: 300;
  font-size: 3vw;
  color: #526488;
  word-spacing: 0.5vw;
  margin: 0.5vw 0 2vw;
}
</style>



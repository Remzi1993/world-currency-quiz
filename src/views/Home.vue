<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img class="logo" src="../assets/money-logo.svg" alt="Money logo">
        <h1 class="title">
          The Money karaoke quiz
        </h1>
        <h2 class="subtitle">
          Made by Remzi Cavdar
        </h2>
        <div id="nav">
          <router-link to="/quiz">Start karaoke quiz</router-link>
        </div>
      </div>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logo {
  max-width: 15vw;
  margin-bottom: 2vw;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5vw;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 3vw;
  color: #526488;
  word-spacing: 5px;
  margin-bottom: 2vw;
}
</style>

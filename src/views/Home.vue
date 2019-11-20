<template>
  <div class="container home">
    <div class="row">
      <div class="col">
        <img class="logo" src="../assets/logo.svg" alt="Money logo">
        <h1 class="title">
          World Currency Quiz
        </h1>
        <h2 class="subtitle">
          Made by Remzi Cavdar
        </h2>
        <router-link to="/quiz" class="button-green" v-on:click.native="requestFullscreen()">Start Quiz</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
    methods: {
    requestFullscreen:function(){
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
    }
  }
}
</script>

<style lang="scss">
.home {
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
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
}
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .home { min-height: 90vh; }
}
</style>

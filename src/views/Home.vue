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
    requestFullscreen() {
      const elem = document.documentElement;
      openFullscreen()
      function openFullscreen() {
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
  %button {
    display: inline-block;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 30px;
  }
  .button-green {
    @extend %button;
    border: 1px solid #3b8070;
    color: #3b8070;
  }
  .button-green:hover {
    color: #fff;
    background-color: #3b8070;
    text-decoration: none;
  }
  .button-grey {
    @extend %button;
    border: 1px solid #35495e;
    color: #35495e;
    margin-left: 15px;
  }
  .button-grey:hover {
    color: #fff;
    background-color: #35495e;
    text-decoration: none;
  }
}
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .home { min-height: 90vh; }
}
</style>

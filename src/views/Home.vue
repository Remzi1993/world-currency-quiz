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

        <!-- First drawing -->
        <div id="first-drawing">
          <svg>
            <g>
              <path d="M 50,100 A 1,1 0 0 1 50,0"/>
            </g>
            <g>
              <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FF56A1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF9350;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- Second drawing -->
        <div id="second-drawing">      
          <div class="infinity">
              <div>
                  <span></span>
              </div>
              <div>
                  <span></span>
              </div>
              <div>
                  <span></span>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
              <defs>
                  <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                      <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
              </defs>
          </svg>
        </div>
        
        <!-- Button -->
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

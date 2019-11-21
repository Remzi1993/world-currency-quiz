<template>
  <div class="container quiz">
    <!-- Dirty hack for background music: https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome -->
    <iframe src="../assets/soundtrack.webm" allow="autoplay" style="display:none"></iframe> 
    <audio autoplay loop>
      <source src="../assets/soundtrack.webm">
      Your browser does not support the audio element.
    </audio>

    <Scoreboard
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />

    <QuestionBox
      v-if="questions.length"
      :currentQuestion="questions[index]"
      :next="next"
      :increment="increment"
    />

    <div class="row last">
      <div class="col pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <router-link to="/" class="button-yellow" id="popover-target-1" v-on:click.native="closeFullscreen()">Exit Quiz</router-link>
          <b-popover target="popover-target-1" triggers="hover" placement="top">
            <template v-slot:title>Are you sure?</template>
              Exit already?
          </b-popover>
      </div>
    </div>

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
    
    <!-- Third drawing -->
    <div id="third-drawing">
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
  </div>
</template>

<script>
import Scoreboard from '../components/Scoreboard.vue'
import QuestionBox from '../components/QuestionBox.vue'

export default {
  name: "Quiz",
  components: {
    Scoreboard,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    };
  },
  mounted: function() {
    fetch('https://api.myjson.com/bins/15fpna', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.questions = jsonData.results
      })
  },
  methods: {
    next() {
      this.index++
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    },
    closeFullscreen:function(){
        if (document.exitFullscreen) {
          document.exitFullscreen();
          location.reload();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
          location.reload();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
          location.reload();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
          location.reload();
        }
    }
  }
};
</script>

<style lang="scss">
body {
  background: #1b2a49;
}
.quiz {
  position: relative;
  .nav-tabs {
    border-bottom: 1px solid #fff;
  }
  .nav-tabs .nav-link.disabled {
    color: #fff;
  }
  .intro {
    color: #fff;
    .logo {
      max-width: 15vw;
      margin: 2vh 0 1vh;
      filter: invert(100%);
    }
    .logo:hover {
      filter: invert(93%) sepia(14%) saturate(6987%) hue-rotate(344deg) brightness(97%) contrast(99%);
    }
  }
  .card-deck {
    flex-flow: column;
  }
  #first-drawing {
    left: 5%;
    top: 10vh;
  }
  #second-drawing{
    right: 10%;
    top: 10vh;
  }
  #third-drawing{
    right: 15%;
    bottom: 8vh;
    filter:invert(100%);
  }
  .last {
    margin: 0 0 10vh;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    .card-deck {
      flex-flow: row wrap;
    }
  }
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    #scoreboard {
      margin-bottom: -4vh;
    }
    .last .col {
      padding: 0 !important;
    }
    #first-drawing {
      left: 20%;
      top: 13vh;
    }
    #second-drawing{
      position: absolute;
      top: 67%;
      left: 50%;
      transform: translate(-50%, -50%);
      right: auto;
    }
    #third-drawing{
      right: 8%;
      bottom: -5vh;
    }
    .last {
      margin: 0;
    }
  }
}
</style>
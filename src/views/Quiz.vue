<template>
  <div class="container quiz">
    <!-- Dirty hack for backgorund music: https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome -->
    <iframe src="../assets/soundtrack.webm" allow="autoplay" style="display:none"></iframe> 
    <audio autoplay loop>
      <source src="../assets/soundtrack.webm">
      Your browser does not support the audio element.
    </audio>

  <div class="row intro">
    <div class="col pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
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
      <img class="logo" src="../assets/logo.svg" alt="Money logo">
      <h1 class="display-4">What is the currency of {{currencies[0].stateOrTerritory}}?</h1>
      <p class="lead">A currency is a kind of money and medium of exchange. Currency includes paper, cotton, or polymer banknotes and metal coins. States generally have a monopoly on the issuing of currency, although some states share currencies with other states. For the purposes of this quiz, only currencies that are legal tender and those used in actual commerce, are included in the quiz.</p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="card-deck mb-3 text-center">

        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Answer A</h4>
          </div>
          <div class="card-body">
            <h2 class="card-title pricing-card-title">{{currencies[0].currencySymbol}} <small class="text-muted">- {{currencies[0].ISOCode}}</small></h2>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">A</button>
          </div>
        </div>

        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Answer B</h4>
          </div>
          <div class="card-body">
            <h2 class="card-title pricing-card-title">{{currencies[1].currencySymbol}} <small class="text-muted">- {{currencies[1].ISOCode}}</small></h2>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">B</button>
          </div>
        </div>

        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Answer C</h4>
          </div>
          <div class="card-body">
            <h2 class="card-title pricing-card-title">{{currencies[2].currencySymbol}} <small class="text-muted">- {{currencies[2].ISOCode}}</small></h2>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">C</button>
          </div>
        </div>

        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Answer D</h4>
          </div>
          <div class="card-body">
            <h2 class="card-title pricing-card-title">{{currencies[3].currencySymbol}} <small class="text-muted">- {{currencies[3].ISOCode}}</small></h2>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">D</button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="row">
    <div class="col pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <router-link to="/" class="button-yellow" v-on:click.native="closeFullscreen()">Exit Quiz</router-link>
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
  </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      currencies: [
        {
          stateOrTerritory: 'India',
          currency: 'Indian rupee',
          currencySymbol: '₹',
          ISOCode: 'INR'
        },
        {
          stateOrTerritory: 'Afghanistan',
          currency: 'Afghan afghani',
          currencySymbol: '؋',
          ISOCode: 'AFN'
        },
        {
          stateOrTerritory: 'Germany',
          currency: 'Euro',
          currencySymbol: '€',
          ISOCode: 'EUR'
        },
        {
          stateOrTerritory: 'Hong Kong',
          currency: 'Hong Kong dollar',
          currencySymbol: '$',
          ISOCode: 'HKD'
        },
        {
          stateOrTerritory: 'Indonesia',
          currency: 'Indonesian rupiah',
          currencySymbol: 'Rp',
          ISOCode: 'IDR'
        },
        {
          stateOrTerritory: 'Japan',
          currency: 'Japanese yen',
          currencySymbol: '¥',
          ISOCode: 'JPY'
        },
        {
          stateOrTerritory: 'Morocco',
          currency: 'Moroccan dirham',
          currencySymbol: 'د.م.',
          ISOCode: 'MAD'
        },
        {
          stateOrTerritory: 'Turkey',
          currency: 'Turkish lira',
          currencySymbol: '₺',
          ISOCode: 'TRY'
        },
        {
          stateOrTerritory: 'United States',
          currency: 'United States dollar',
          currencySymbol: '$',
          ISOCode: 'USD'
        },
        {
          stateOrTerritory: 'United Kingdom',
          currency: 'British pound',
          currencySymbol: '£',
          ISOCode: 'GBP'
        },
        {
          stateOrTerritory: 'Switzerland',
          currency: 'Swiss franc',
          currencySymbol: 'Fr.',
          ISOCode: 'CHF'
        },
        {
          stateOrTerritory: 'South Africa',
          currency: 'South African rand',
          currencySymbol: 'R',
          ISOCode: 'ZAR'
        }
      ]
    };
  },
  mounted() {

  },
  methods: {
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
    right: 20%;
    bottom: -7vh;
    filter:invert(100%);
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    .card-deck {
      flex-flow: row wrap;
    }
  }
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    #first-drawing {
      left: 25%;
      top: 9vw;
    }
    #second-drawing{
      right: 40%;
      top: 30vw;
    }
  }
}
</style>
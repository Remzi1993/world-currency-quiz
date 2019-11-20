<template>
  <div class="container quiz">
    <!-- Dirty hack for backgorund music: https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome -->
    <iframe src="../assets/soundtrack.webm" allow="autoplay" style="display:none"></iframe> 
    <audio autoplay loop>
      <source src="../assets/soundtrack.webm">
      Your browser does not support the audio element.
    </audio>

  <div class="row">
    <div class="col pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">What is the currency of {{currencies[0].stateOrTerritory}}?</h1>
      <p class="lead">A currency is a kind of money and medium of exchange. Currency includes paper, cotton, or polymer banknotes and metal coins. States generally have a monopoly on the issuing of currency, although some states share currencies with other states. For the purposes of this quiz, only currencies that are legal tender, including those used in actual commerce or issued for commemorative purposes, are considered "circulating currencies".</p>
    </div>
  </div>

  <div class="container">
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
    // back() {
    //   this.$router.push("/");
    // }
  }
};
</script>

<style lang="scss">
.card-deck {
  flex-flow: column;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .card-deck {
    flex-flow: row wrap;
  }
}
</style>
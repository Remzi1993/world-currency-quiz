<template>
  <div class="question-component">
    
    <v-dialog/>

    <div class="row intro">
      <div class="col pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <img class="logo" src="../assets/logo.svg" alt="Money logo">
        <h1 class="display-4">{{ currentQuestion.question }}</h1>
        <p class="lead">A currency is a kind of money and medium of exchange. Currency includes paper, cotton, or polymer banknotes and metal coins. States generally have a monopoly on the issuing of currency, although some states share currencies with other states. For the purposes of this quiz, only currencies that are legal tender and those used in actual commerce, are included in the quiz.</p>
      </div>
    </div>
  
    <div class="row">
      <div class="col">
        <div class="card-deck mb-3 text-center">
          
          <div class="card mb-4 shadow-sm"
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            @click.prevent="selectAnswer(index)"
            :class="answerClass(index)"
            >
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">{{ answer[0] }}</h4>
            </div>
            <div class="card-body">
              <h2 class="card-title pricing-card-title">{{ answer }}</h2> <!-- ₹ <small class="text-muted">- INR</small> -->
              <button type="button" class="btn btn-lg btn-block btn-outline-primary">Select</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <b-button
      variant="outline-success"
      @click="submitAnswer"
      :disabled="selectedIndex === null || answered"
      id="submit"
      size="lg"
    >
      Submit
    </b-button>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    numTotal: Number,
  },
  data: function() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswers()
      }
    }
  },
  methods: {
    show () {
      this.$modal.show();
    },
    hide () {
      this.$modal.hide();
    },
    selectAnswer(index) {
      this.selectedIndex = index
    },
    submitAnswer() {
      let isCorrect = false
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      this.answered = true
      this.increment(isCorrect)

      // console.log('hsfjhsf', this.numTotal);
      
      if (this.numTotal === 9) {
        return this.$modal.show('dialog', {
          title: 'That was the last question',
          text: 'You have completed the quiz!',
          buttons: [
            {
              default: true,
              title: 'Close'
            }
          ]
        })
        // return () => {
        //   this.$modal.show('dialog', {
        //     title: 'That was the last question',
        //     text: 'You have completed the quiz!',
        //     buttons: [
        //       {
        //         default: true,
        //         title: 'Close'
        //       }
        //     ]
        //   })

        //   setTimeout(() => {
        //     this.$router.push('/')
        //     location.reload();
        //   }, 2000);

        // }
      }
      
      setTimeout(() => this.next(), 1000);
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass(index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }
      return answerClass
    }
  }
}
</script>

<style scoped>
#submit {
  float: right;
}
.card:hover {
  cursor: pointer;
}
.selected {
  background-color: #f7be16;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: red;
}
</style>

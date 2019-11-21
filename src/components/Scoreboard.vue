<template>
  <div id="scoreboard">
    <b-nav tabs>
      <b-nav-item disabled><strong>From Dollars to Dinars: The World Currency Quiz</strong></b-nav-item>
      <b-nav-item disabled><strong>Correct answers: {{ numCorrect }} &amp; total questions: {{ numTotal }}</strong></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>

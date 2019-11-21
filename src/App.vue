<template>
  <div id="app">
    <router-view/>
    <footer>
      <div class="container">
        <p class="h6"><a href="https://www.linkedin.com/in/remzicavdar/">Remzi Cavdar</a> from 🎓 <a href="https://codaisseur.com">Codaisseur Academy</a> - class 31 - 📅 November 2019</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px; /* Margin bottom by footer height */
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  // height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background: #526488;
  color: #fff;
  p {
    margin: 0 !important;
    padding: 0.3rem;
    text-align: center;
  }
  a, a:hover {
    color: #fff;
  }
}

#app {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    background: #3b8070;
    text-decoration: none;
  }
  .button-yellow {
    @extend %button;
    border: 1px solid #f7be16;
    color: #f7be16;
    margin-left: 15px;
  }
  .button-yellow:hover {
    color: #fff;
    background: #f7be16;
    text-decoration: none;
  }
  // Primary button
  .btn-outline-primary {
    color: #293462;
    border-color: #293462;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-primary.dropdown-toggle,
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #f7be16;
    border-color: #f7be16;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-primary.dropdown-toggle:focus,
  .btn-outline-primary:focus,
  .btn-outline-primary.focus  {
    box-shadow: 0 0 0 0.2rem rgba(247, 225, 22, 0.5);
  }
}
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  #app { min-height: 90vh; }
}

#first-drawing,
#third-drawing {
  position: absolute;
  z-index: -1;
  $transition-duration: 2s;
  $path-length: 157px; // Retrieved using SVG's getTotalLength()
  svg {
    overflow: overlay !important; // Bootstrap forces this
    width: 100px;
    height: 150px; 
    g {
      animation: slide $transition-duration linear infinite;
      &:nth-child(2) {
        animation-delay: $transition-duration / 4;
        path {
          animation-delay: $transition-duration / 4;
          stroke-dasharray: 0px $path-length + 1;
          stroke-dashoffset: 1px;
        }
      }
    }
    path{
      stroke: url(#gradient);
      stroke-width: 20px;
      stroke-linecap: round;
      fill: none;
      stroke-dasharray: 0 $path-length;
      stroke-dashoffset: 0;
      animation: escalade $transition-duration cubic-bezier(0.8, 0, 0.2, 1) infinite;
    }
  }
  @keyframes slide {
    0% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(50px);
    }
  }
  @keyframes escalade {
    0% {
      stroke-dasharray: 0 $path-length;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: $path-length - 1 $path-length;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: $path-length - 1 $path-length;
      stroke-dashoffset: -($path-length - 1);
    }
  }
}

#second-drawing {
  position: absolute;
  z-index: -1;
  $color: #8C6FF0;
  $colorRight: #5628EE;
  $colorLeft: #23C4F8;
  .infinity {
    width: 120px;
    height: 60px;
    position: relative;
    div,
    span {
        position: absolute;
    }
    div {
      top: 0;
      left: 50%;
      width: 60px;
      height: 60px;
      animation: rotate 6.9s linear infinite;
      span {
        left: -8px;
        top: 50%;
        margin: -8px 0 0 0;
        width: 16px;
        height: 16px;
        display: block;
        background: $color;
        box-shadow: 2px 2px 8px rgba($color, .09);
        border-radius: 50%;
        transform: rotate(90deg);
        animation: move 6.9s linear infinite;
        &:before,
        &:after {
          content: '';
          position: absolute;
          display: block;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          background: inherit;
          top: 50%;
          left: 50%;
          margin: -7px 0 0 -7px;
          box-shadow: inherit;
        }
        &:before {
          animation: drop1 .8s linear infinite;
        }
        &:after {
          animation: drop2 .8s linear infinite .4s;
        }
      }
      &:nth-child(2) {
        animation-delay: -2.3s;
        span {
          animation-delay: -2.3s;
        }
      }
      &:nth-child(3) {
        animation-delay: -4.6s;
        span {
          animation-delay: -4.6s;
        }
      }
    }
  }
  @keyframes moveSvg {
    0% {
        offset-distance: 0%;
    }
    25% {
        background: $colorRight;
    }
    75% {
        background: $colorLeft;
    }
    100% {
        offset-distance: 100%;
    }
  }
  @keyframes rotate {
    50% {
        transform: rotate(360deg);
        margin-left: 0;
    }
    50.0001%,
    100% {
        margin-left: -60px;
    }
  }
  @keyframes move {
    0%,50% {
        left: -8px;
    }
    25% {
        background: $colorRight;
    }
    75% {
        background: $colorLeft;
    }
    50.0001%,
    100% {
        left: auto;
        right: -8px;
    }
  }
  @keyframes drop1 {
    100% {
        transform: translate(32px, 8px) scale(0);
    }
  }
  @keyframes drop2 {
    0% {
        transform: translate(0, 0) scale(.9);
    }
    100% {
        transform: translate(32px, -8px) scale(0);
    }
  }
}
</style>
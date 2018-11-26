<template>
  <div class="columns is-centered">
    <div class="column is-four-fifths">
      <div class="columns">
        <div class="column">
          <figure class="flip-horizontal-bottom">
            <div class="front face box image is-128x128"><img src="../assets/icons/abb_0.png" style="margin-top: 20px;"></div>
            <!-- <div class="back face box image is-96x96 "></div> -->
          </figure> 
        </div>
        <div class="column">
          <figure class="flip-horizontal-bottom">
            <div class="front face box image is-128x128"><img src="../assets/icons/benz.png" style="margin-top: 20px;"></div>
            <!-- <div class="back face box image is-96x96 "></div> -->
          </figure> 
        </div>  
        <div class="column">
          <figure class="flip-horizontal-bottom">
            <div class="front face box image is-128x128"><img src="../assets/icons/atlas_0.png" style="margin-top: 20px;"></div>
            <!-- <div class="back face box image is-96x96 "></div> -->
          </figure> 
        </div>
        <div class="column">
          <figure class="flip-horizontal-bottom">
            <div class="front face box image is-128x128"><img src="../assets/icons/bhel_0.png" style="margin-top: 20px;"></div>
            <!-- <div class="back face box image is-96x96 "></div> -->
          </figure> 
        </div>
        <div class="column">
          <figure class="flip-horizontal-bottom">
            <div class="front face box image is-128x128"><img src="../assets/icons/bijlee.png" style="margin-top: 20px;"></div>
            <!-- <div class="back face box image is-96x96 "></div> -->
          </figure> 
        </div>
        <div class="column">
          <figure class="flip-horizontal-bottom">
            <div class="front face box image is-128x128"><img src="../assets/icons/c4.png" style="margin-top: 20px;"></div>
            <!-- <div class="back face box image is-96x96 "></div> -->
          </figure> 
        </div>
        <!-- <div class="column">
          <figure class="image is-96x96">
            <img src="../assets/icons/c6_0.png">
          </figure>  
        </div>
        <div class="column">
          <figure class="image is-96x96">
            <img src="../assets/icons/isro.png">
          </figure>
        </div>
        <div class="column">
          <figure class="image is-96x96">
            <img src="../assets/icons/landt.png">
          </figure>  
        </div>
        <div class="column">
          <figure class="image is-96x96">
            <img src="../assets/icons/reliance.png">
          </figure>  
        </div> -->
      </div>  
    </div>  
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    text-align: center;
  }
  .front {
    z-index: 20;
    background-color: white;
    backface-visibility: hidden;
    position: absolute;
  }
  .back {
    z-index:10;
    position: absolute;
  }
  .flip-horizontal-bottom {
    -webkit-animation: flip-horizontal-bottom 80ms cubic-bezier(0.455, 0.030, 0.515, 0.955) 10 both;
            animation: flip-horizontal-bottom 80ms cubic-bezier(0, 0, 0.2, 1) 11 both;
  }   /**
  * ----------------------------------------
  * animation flip-horizontal-bottom
  * ----------------------------------------
  */
  @-webkit-keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
              transform: rotateX(-180deg);
    }
  }
  @keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    50% {
      -webkit-transform: rotateX(-180deg);
              transform: rotateX(-180deg);
              opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
    }
  }
</style>

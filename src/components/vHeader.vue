<template>
  <header id="header" class="header">
    <router-link to="/">
      <img :src="require('../assets/img/logo.jpg')" alt="Vlogo" class="header__logo">
    </router-link>
    <div class="header__bag_wrapper">
      <router-link to="/cart">
        <img :src="require('../assets/img/bahicon.png')" alt="Vue icon" class="header__bag">
        <p class="header__bag_number" v-if="CART.length">{{ CART.length }}</p>
      </router-link>
    </div>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "vHeader",
    computed: {
      ...mapGetters([
        'CART'
      ])
    }
  }
</script>

<style scoped>

  @media screen and (min-width: 10px) {
    .header {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .header__logo {
      max-width: 150px;
    }

    .header__bag_wrapper {
      position: relative;
      margin-top: 15px;
    }

    .header__bag {
      max-width: 40px;
    }

    .header__bag_number {
      font-size: 12px;
      color: #fff;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 20px;
      width: 20px;
      padding: 5px;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0,0,0,.16);
      background-color: #eabbaf;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: bagItemAnimation .75s ease;
    }
  }

  @media screen and (min-width: 1023px) {
    .header {
      flex-direction: row;
    }

    .header__bag_wrapper {
      position: absolute;
      top: 50%;
      right: 100px;
      transform: translate(0, -50%);
      margin-top: 0;
    }
  }



  @keyframes bagItemAnimation {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

</style>

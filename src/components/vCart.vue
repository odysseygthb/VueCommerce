<template>
  <div id="vcart" class="vcart">
<!--    <div class="vcart__total">-->
<!--      <p class="vcart__total_text">Summary: {{ cartTotalCost }}$</p>-->
<!--    </div>-->
    <div class="vcart__empty" v-if="!CART.length">
      <img :src="require('../assets/img/cartplaceholder.png')" alt="Vue image" class="vcart__empty_image">
      <router-link to="/" class="vcart__empty_link primary__btn">
        Home
      </router-link>
    </div>
    <v-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart-item-data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
  import vCartItem from "@/components/vCartItem"
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "vCart",
    props: {
      cartData: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      vCartItem
    },
    methods: {
      ...mapActions([
          'DELETE_FROM_CART'
      ]
      ),
      deleteFromCart (index) {
        this.DELETE_FROM_CART(index)
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartTotalCost () {
        let result = []

        for (let item of this.CART) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result.toFixed(0)
      }
    }
  }
</script>

<style scoped>

  .vcart__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .vcart__empty_image {
    max-width: 600px;
  }

  .vcart__empty_link {
    margin: 20px 0;
  }

  .vcart__total{
    display: flex;
    justify-content: center;
  }
</style>

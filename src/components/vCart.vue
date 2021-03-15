<template>
  <div id="vcart" class="vcart">
    <div class="vcart__total" v-if="cartTotalCost > 1">
      <p class="vcart__total_text">Summary: {{ cartTotalCost }}$</p>
    </div>
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
      @increment="increment(index)"
      @decrement="decrement(index)"
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
          'DELETE_FROM_CART',
          'INCREMENT_CART_ITEM',
          'DECREMENT_CART_ITEM'
      ]
      ),
      deleteFromCart (index) {
        this.DELETE_FROM_CART(index)
      },
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartTotalCost () {
        let result = []

        if (this.CART.length) {
          for (let item of this.CART) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el
          })

          return result.toFixed(0)
        } else {
          return 0
        }

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
    max-width: 500px;
    filter: drop-shadow(0 6px 10px rgba(0,0,0,.16));
    opacity: .8;
    transform: rotate(-15deg);
    animation: emptyImageAnimation 2s ease;
  }

  .vcart__empty_link {
    margin: 20px 0;
    animation: opacityAnimation 1.5s ease;
  }

  .vcart {
    animation: opacityAnimation 1s ease;
  }

  .vcart__total{
    display: flex;
    justify-content: center;
    position: fixed;
    right: 50px;
    bottom: 50px;
    padding: 30px 60px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
    background-color: #eabbaf;
    color: #fff;
    animation: itemAnimation 1.5s ease;
  }

  @keyframes emptyImageAnimation {
    0% {
      transform: rotate3d(2, -1, -1, -0.2turn) rotate(0) scale(.7);
    }
    100% {
      transform: rotate3d(0) rotate(-15deg) scale(1);
    }
  }

</style>

<template>
  <div id="vcartitem" class="vcartitem">
    <img :src="require('../assets/img/' + cartItemData.image)" alt="Vcart image" class="vcartitem__image">
    <div class="vcartitem__info">
      <h4 class="vcartitem__title">{{ cartItemData.name }}</h4>
      <p class="vcartitem__price">{{ cartItemData.price.toFixed(0) }}$</p>
      <p class="vcartitem__article">{{ cartItemData.article }}</p>
      <div class="vcartitem__quantity">
        <p class="vcartitem__quantity_number">
          Quantity:
          <span @click="decrementItem">-</span>
          {{ cartItemData.quantity }}
          <span @click="incrementItem">+</span>
        </p>
      </div>
    </div>
    <a href="#"
       class="vcartitem__btn primary__btn"
       @click.prevent="deleteFromCart"
    >Delete</a>
  </div>
</template>

<script>
  export default {
    name: "vCartItem",
    props: {
      cartItemData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      deleteFromCart () {
        this.$emit("deleteFromCart")
      },
      decrementItem () {
        this.$emit('decrement')
      },
      incrementItem () {
        this.$emit('increment')
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .vcartitem {
    width: 90%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    padding: 50px;
    border: #7e6969 3px solid;
  }

  .vcartitem__image {
    margin-right: 50px;
    max-width: 300px;
  }

  #vcartitem .vcartitem__title {
    margin-top: 0;
  }

  .vcartitem__info > * {
    margin-top: 20px;
  }

  .vcartitem__btn {
    background-color: #ff6b6b;
  }

  .vcartitem__btn:hover {
    background-color: #fff;
    color: #ff6b6b;
  }

  .vcartitem__quantity_number span {
    cursor: pointer;
  }
</style>

<template>
  <div id="vcatitem" class="vcatitem" :class="{ item__animated : animationstart} ">
    <img :src="require('../assets/img/' + product_data.image)"
         alt="Vue commerce image"
         class="vcatitem__image">
    <h4 class="vcatitem__title">{{ product_data.name }}</h4>
    <p class="vcatitem__description">{{ product_data.price.toFixed(0)}}$</p>
    <a href="#"
       class="vcatitem__link primary__btn"
       @click.prevent="addToCart"
    >Add to cart</a>
  </div>
</template>

<script>
export default {
  name: "vCatalogItem",
  data () {
    return {
      value: true,
      animationstart: true
    }
  },
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style scoped>
.vcatitem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  max-height: 450px;
}

.vcatitem__image {
  max-height: 200px;
  position: relative;
  width: 100%;
}

.vcatitem__title {
  margin-top: 35px;
}

.vcatitem__description {
  margin: 35px 0;
}

.vcatitem__link {
  margin-bottom: 35px;
}

.item__animated {
 animation: itemAnimation 1s ease;
}


</style>

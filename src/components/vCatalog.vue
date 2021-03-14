<template>
  <div id="vcatalog" class="vcalalog">
    <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import vCatalogItem from "@/components/vCatalogItem";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "vCatalog",
  components: {
    vCatalogItem
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped>
.vcalalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, 275px);
  justify-content: center;
  grid-gap: 35px;
  margin: 50px 0;
}

</style>

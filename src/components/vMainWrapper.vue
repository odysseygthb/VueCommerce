<template>
  <div id="vmain__wrapper" className="vmain__wrapper">
    <v-header/>
    <router-view></router-view>
<!--    <v-catalog/>-->
<!--    <v-cart-->
<!--      v-if="CART.length"-->
<!--      :cart-data="CART"-->
<!--    />-->
  </div>
</template>

<script>
// import vCatalog from "@/components/vCatalog";
// import vCart from "@/components/vCart";
import vHeader from "@/components/vHeader";
import {mapGetters} from 'vuex'

export default {
  name: "vMainWrapper",
  components: {
    // vCatalog,
    // vCart,
    vHeader
  },
  computed: {
    ...mapGetters([
      "CART"
    ])
  }
}
</script>

<style scoped>

</style>

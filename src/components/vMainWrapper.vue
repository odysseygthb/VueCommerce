<template>
  <div id="vmain__wrapper" className="vmain__wrapper">
    <v-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from "@/components/vHeader";
import {mapGetters} from 'vuex'

export default {
  name: "vMainWrapper",
  components: {
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

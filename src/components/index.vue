<template>
  <div class="index">
      <nav-bar></nav-bar>
      <router-view></router-view>
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar.vue"
import navFooter from '@/components/common/footer.vue'
export default {
  name: 'index',
  components:{navBar,navFooter},
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  padding-top: 60px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

</style>

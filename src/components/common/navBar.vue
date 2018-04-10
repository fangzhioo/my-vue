<template>
  <div class="nav-bar">
    <div class="container">  
        <div class="logo">fangzhioo</div>
        <div class="menu">
            <ul class="menu-list">
                <li class="menu-bar" v-for="item in menus" :key="item.id">
                    <router-link :to="item.router">
                        <i class="icon"></i>
                        <span class="menu-tips">{{item.alias}}</span>
                    </router-link>
                </li>
            </ul>      
        </div> 
        <div class="setting">
            setting
        </div>
    </div>  
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        menus: [
            {id:1,alias:"首页",name:"index",router:"/index",icon:"./xx.png"},
            {id:2,alias:"个人中心",name:"userinfo",router:"/userinfo/110",icon:"./xxx.png"},
            {id:3,alias:"布局",name:"layout",router:"/layout",icon:"./xxxx.png"}
        ]
    }
  },
  components: {

  },
  created(){

  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style scoped lang="less">
    .nav-bar{
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        position: fixed;
        z-index: 3000;
        top: 0;
        left: 0;
        background-color: #EEE;
        border-bottom: 1px solid #d1d1d1;
    }
    .container{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu-list{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .menu-bar{
        display: flex;
        width: 59px;
        height: 59px;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: #d1d1d1;
        }
    }
</style>

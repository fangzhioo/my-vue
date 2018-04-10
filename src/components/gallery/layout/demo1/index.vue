<template>
  <div class="layout-index">
      <div class="layout-tools">
          tools
      </div>
      <div class="layout-box deactivated">
          <vue-adaptation-container v-for="item in layoutList" :key="item.id"
            class="vue-adaptation-container"
            :id="item.id" :actived="actived"
            :x ="layoutConfig.x" :y="layoutConfig.y" :z="item.zIndex"
            :t ="item.top" :l="item.left" :w="item.width" :h="item.height"
            :handles="layoutConfig.handles"
            @deleteItem='deleteItem'
            @resizestop="onResizeStop"
            @dragstop="onDragStop"
            @zIndexItem="onzIndexChange"
            @activated="activated"
            @deactivated='deactivated'
          >
          {{item.content.text}}
          </vue-adaptation-container>  
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import VueAdaptationContainer from '@/components/gallery/layout/demo1/vue-adaptation-container.vue'
export default {
  data() {
    return {
        actived: 1,
        layoutConfig:{
            x:100,
            y:100,
            id:2,
            handles:["br"]
        },
        layoutList:[
            {id:1,zIndex:10,top:10,left:10,height:20,width:20,content:{text:"content1"}},
            {id:2,zIndex:10,top:10,left:50,height:14,width:20,content:{text:"content2"}},
            {id:3,zIndex:10,top:40,left:60,height:30,width:20,content:{text:"content3"}}
        ]
    }
  },
  components: {VueAdaptationContainer},
  created(){

  },
  mounted(){

  },
  methods:{
      deleteItem(item){
          let index = item.$parent.$children.indexOf(item);
          console.log("删除",index);
      },
      onResizeStop(item){
            console.log("缩放结束onResizeStop",item);
      },
      onDragStop(item){
            console.log("拖拽结束onDragStop",item);
      },
      onzIndexChange(item){
            console.log("onzIndexChange",item);
      },
      activated(item){
          this.actived = item.id;
          console.log("选中activated",item);
      },
      deactivated(item){
          this.actived = null;
           console.log("取消选中deactivated",item);
      }
      
  }
}
</script>

<style scoped>
.layout-index{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    padding-top: 70px;
    position: relative;
}
.layout-tools{
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #eee;
}
.layout-box{
    border: 1px solid #999;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
}
</style>

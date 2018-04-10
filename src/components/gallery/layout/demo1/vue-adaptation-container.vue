<template>
  <div class="vac-container vac deactivated"
       :style="style" @mousedown="elmDown" @touchstart="elmDown"
       :class="{ draggable: draggable, resizable: resizable, active: active }"
  >
    <slot></slot>
    <div class="vac-handle handle"
         v-if="resizable"
         v-for="handle in handles"
         :key="handle"
         :class="'handle-' + handle"
         :style="{ display: active ? 'block' : 'none'}"
         @mousedown.stop.prevent="handleDown(handle, $event)"
         @touchstart.stop.prevent="handleDown(handle, $event)"
    >
    </div>
    <div class="vac-size vac-drag">{{width}}*{{height}}</div>
    <div class="vac-tools"  v-show="active">
     
     	<span @mousedown="elmDown" @touchstart="elmDown"
            title="拖动" class="vac-tools-item vac-drag fa fa-arrows"></span>
      <span @mousedown.stop.prevent="moveUpItem"   @touchstart.stop.prevent="moveUpItem"
            title="上浮" class="vac-tools-item vac-up fa fa-arrow-up"></span>
      <span @mousedown.stop.prevent="moveDownItem" @touchstart.stop.prevent="moveDownItem"
            title="下潜" class="vac-tools-item vac-down fa fa-arrow-down"></span>
      <span @mousedown.stop.prevent="editItem"  @touchstart.stop.prevent="editItem"
            title="编辑" class="vac-tools-item vac-edit fa fa-cog"></span>
			<span @mousedown.stop.prevent="deleteItem"  @touchstart.stop.prevent="deleteItem"
						title="删除" class="vac-tools-item vac-delete fa fa-close "></span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'vue-adaptation-container',
    props: {
      draggable: {
        type: Boolean,
        default: true
      },
      resizable: {
        type: Boolean,
        default: true
      },
      w: {
        type: Number,
        default: 40,
        validator: function(val) {
          return val >= 0
        }
      },
      h: {
        type: Number,
        default: 40,
        validator: function(val) {
          return val > 0
        }
      },
      t: {
        type: Number,
        default: 10,
        validator: function(val) {
          return  val >=0
        }
      },
      l: {
        type: Number,
        default: 20,
        validator: function(val) {
          return val >=0
        }
      },
      x: {
        type: Number,
        default: 100,
        validator: function(val) {
          return val >= 10
        }
      },
      y: {
        type: Number,
        default: 100,
        validator: function(val) {
          return  val >= 10
        }
      },
      z: {
        type: Number,
        default: 10,
        validator: function(val) {
          return  val >= 0
        }
      },
      minh:{
        type: Number,
        default: 1,
        validator: function(val) {
          return  val >= 0
        }
      },
      minw:{
        type: Number,
        default: 1,
        validator: function(val) {
          return  val >= 0
        }
      },
      axis: {
        type: String,
        default: 'both',
        validator: function(val) {
          return ['x', 'y', 'both'].indexOf(val) !== -1
        }
      },
      parent: { // 是否允许超出父元素
        type: Boolean,
        default: false
      },
      handles: { // 自定义需要拖拽的方向
        type: Array,
        default: function() {
          return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
        }
      },
      id: {  // 自定义控件的ID
        type: Number,
        default: 0,
        validator: function(val) {
          return val >= 0
        }
      },
      actived:{
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        top: this.t,
        left: this.l,
        width: this.w,
        height: this.h,
        resizing: false,
        dragging: false,
        opacity: 1,
        handle: null,
        zIndex: this.z
      }
    },
    computed: {
      style: function() {
        return {
          top: (this.top / this.y)*100 + "%",
          left:  (this.left / this.x)*100 + "%",
          width:  (this.width/ this.x)*100 + "%",
          height:  (this.height / this.y)*100 + "%",
          zIndex: this.zIndex,
          opacity: this.opacity
        }
      },
      active:function () {
        return this.id === this.actived;
      }
    },
    created() {
      this.parentX = 0;
      this.parentW = 9999;
      this.parentY = 0;
      this.parentH = 9999;

      this.cell = [10,10] ; // 每一格的x轴的大小每一格的Y轴的大小

      this.mouseX = 0;
      this.mouseY = 0;

      this.lastMouseX = 0;
      this.lastMouseY = 0;

      this.mouseOffX = 0;
      this.mouseOffY = 0;

      this.elmX = 0;
      this.elmY = 0;

      this.elmW = 0;
      this.elmH = 0;
    },
    mounted() {
      this.init(); // 初始化 控件
      window.addEventListener('resize', this.init);
    },
    methods: {
      handleMove(e){

        ////////////////////////////////////
//        const tag = e.target.tagName.toLowerCase();
//        if(tag === 'textarea' || tag === 'input') return ;

        if(!!e.touches){ // 是否为点击事件
          this.mouseX = e.touches[0].pageX || e.touches[0].clientX + document.documentElement.scrollLeft;
          this.mouseY =  e.touches[0].clientY || e.touches[0].clientY + document.documentElement.scrollLeft;
        }else {
          this.mouseX = e.pageX || e.clientX + document.documentElement.scrollLeft;
          this.mouseY = e.pageY || e.clientY + document.documentElement.scrollTop;
        }

//      //console.log("mousemove 事件 ，关键点 ",e,this.$el.style.top,this.$el.style.left);

        let diffX = this.mouseX - this.lastMouseX + this.mouseOffX;
        let diffY = this.mouseY - this.lastMouseY + this.mouseOffY;

        this.mouseOffX = this.mouseOffY = 0;

        this.lastMouseX = this.mouseX;
        this.lastMouseY = this.mouseY;

        let dX = diffX;
        let dY = diffY;
//              //console.log(this.elmX,this.elmY,this.elmH,this.elmW);
//              //console.log(this.top,this.left,this.width,this.height)
        if(this.resizing) {
          if(this.handle.indexOf('t') >= 0) {
            if(this.elmH - dY < this.minh) this.mouseOffY = (dY - (diffY = this.elmH - this.minh));
            else if(this.elmY + dY < this.parentY) this.mouseOffY = (dY - (diffY = this.parentY - this.elmY));
            this.elmY += diffY;
            this.elmH -= diffY;
          }

          if(this.handle.indexOf('b') >= 0) {
            if(this.elmH + dY < this.minh) this.mouseOffY = (dY - (diffY = this.minh - this.elmH));
            else if(this.elmY + this.elmH + dY > this.parentH) this.mouseOffY = (dY - (diffY = this.parentH - this.elmY - this.elmH));
            this.elmH += diffY
          }

          if(this.handle.indexOf('l') >= 0) {
            if(this.elmW - dX < this.minw) this.mouseOffX = (dX - (diffX = this.elmW - this.minw));
            else if(this.elmX + dX < this.parentX) this.mouseOffX = (dX - (diffX = this.parentX - this.elmX));
            this.elmX += diffX;
            this.elmW -= diffX;
          }

          if(this.handle.indexOf('r') >= 0) {
            if(this.elmW + dX < this.minw) this.mouseOffX = (dX - (diffX = this.minw - this.elmW));
            else if(this.elmX + this.elmW + dX > this.parentW) this.mouseOffX = (dX - (diffX = this.parentW - this.elmX - this.elmW));
            this.elmW += diffX;
          }

          this.left = (Math.round(this.elmX / this.cell[0]));
          this.top = (Math.round(this.elmY / this.cell[1]));

          this.width = (Math.round(this.elmW / this.cell[0]));
          this.height = (Math.round(this.elmH / this.cell[1]));

          // 大小拖拽时。
          this.$emit('resizing', this);

        } else if(this.dragging) {
          if(this.elmX + dX < this.parentX) this.mouseOffX = (dX - (diffX = this.parentX - this.elmX));
          else if(this.elmX + this.elmW + dX > this.parentW) this.mouseOffX = (dX - (diffX = this.parentW - this.elmX - this.elmW));

          if(this.elmY + dY < this.parentY) this.mouseOffY = (dY - (diffY = this.parentY - this.elmY));
          else if(this.elmY + this.elmH + dY > this.parentH) this.mouseOffY = (dY - (diffY = this.parentH - this.elmY - this.elmH));
					
          this.elmX += diffX;
          this.elmY += diffY;

          if(this.axis === 'x' || this.axis === 'both') {
            this.left = (Math.round(this.elmX / this.cell[0]));
          }
          if(this.axis === 'y' || this.axis === 'both') {
            this.top = (Math.round(this.elmY / this.cell[1]));
          }
          // 拖拽中 。。
          this.$emit('dragging', this);
        }else{
//         //console.log("不拖不拽，你想干啥？")
        }
        ////////////////////////////////////////////
      },
      deselect(e){
//        //console.log("mousedown 事件",e);
        let target = e.target || e.srcElement;
        // 只能是在点击了拥有 deactivated 这个类的时候，才会取消选中状态
        // contains方法不支持火狐
        let regex = /deactivated/;

        if(target !== this.$el && !this.$el.contains(target) && regex.test(target.className)) {
          if(this.active) {
            // 取消选中状态
            this.$emit('deactivated', this)
          }
        }
      },
      handleUp(){
//              //console.log("mouseup 事件");
        this.handle = null;
        if(this.resizing) {
          this.resizing = false;
          this.$emit('resizestop',this);
        }
        if(this.dragging) {
          this.dragging = false;
          this.$emit('dragstop', this);
        }
        this.opacity = 1;

        this.elmX = Math.round(this.left * this.cell[0]);
        this.elmY = Math.round(this.top* this.cell[1]);

      },
      handleDown: function(handle, e) {
        this.handle = handle;

        if(e.stopPropagation) e.stopPropagation();
        if(e.preventDefault) e.preventDefault();

        this.resizing = true;
      },
      deleteItem(){
        // 在外部调用deleteItem事件，用于删除该控件
        this.$emit("deleteItem",this);
      },
      moveUpItem(){
        this.zIndex++;
        this.$emit("zIndexItem",this);
      },
      moveDownItem(){
        if(this.zIndex <= 1) return ;
        this.zIndex--;
        this.$emit("zIndexItem",this);
      },
      editItem(){
        this.$emit("editItem",this);
      },
      elmDown: function(e) {
        const tag = e.target.tagName.toLowerCase();
        const drag = /vac-drag/.test(e.target.className); 
//        if(tag !== 'textarea' && tag !== 'input') {
          if(!this.active && this.actived !== this.id ) {
//            this.active = true;
            // 元素被选中事件 返回整个vue对象
            this.$emit('activated', this);
          }
          // 获取点击元素位置的份数对应的值
          this.elmX = Math.round(this.left * this.cell[0]);
          this.elmY = Math.round(this.top* this.cell[1]);

//                this.elmX = Math.round(parseFloat(this.$el.style.left)/100 * this.x * this.cell[0]);
//                this.elmY =Math.round(parseFloat(this.$el.style.top)/100 * this.y * this.cell[1]);
          // 获取点击元素大小的份数对应的值
          this.elmW = Math.round(this.width * this.cell[0]);
          this.elmH = Math.round(this.height * this.cell[1]);

//                this.elmW = this.$el.offsetWidth || this.$el.clientWidth
//                this.elmH = this.$el.offsetHeight || this.$el.clientHeight

          if(this.draggable&&drag) {
            this.opacity = 0.6;
            this.dragging = true
          }
//       }
      },
      init(){
        document.documentElement.addEventListener('mousemove', this.handleMove, true);
        document.documentElement.addEventListener('mousedown', this.deselect, false);
        document.documentElement.addEventListener('mouseup', this.handleUp, true);

        document.documentElement.addEventListener('touchmove', this.handleMove, true);
        document.documentElement.addEventListener('touchstart', this.deselect, true);
        document.documentElement.addEventListener('touchend', this.handleUp, true);

//              添加minw 和 minh 可以控制，最小的单元格， 没必要
//              if(this.minw > this.w) this.width = this.minw;
//              if(this.minh > this.h) this.height = this.minh;

        const style = window.getComputedStyle(this.$el.parentNode, null)

        const parentW = parseInt(style.getPropertyValue('width'), 10);
        const parentH = parseInt(style.getPropertyValue('height'), 10);
        this.parentW = parentW;
        this.parentH = parentH;

        // 获取当前分割格子的最小单位
        this.cell[0] = this.parentW / this.x ;
        this.cell[1] = this.parentH / this.y ;

        if(this.parent) {
          // 判断容器是否超出了父容器
          if(this.w > this.x) this.width = this.x;

          if(this.h > this.y) this.height = this.y;

          if((this.l + this.w) > this.x) this.width = this.x - this.l;

          if((this.t + this.h) > this.y) this.height = this.y - this.t;
        }
        // 这里是resizing 尺寸变化时，触发的事件
        this.$emit("resizing", this);

      },
      refreshData(){
        // 获取当前分割格子的最小单位
        this.cell[0] = this.parentW / this.x ;
        this.cell[1] = this.parentH / this.y ;
        this.top = this.t;
        this.left = this.l;
        this.width = this.w;
        this.height = this.h;

        this.$emit("refresh",this);
      }

    },
    beforeDestroy() {
      document.documentElement.removeEventListener('mousemove', this.handleMove, true);
      document.documentElement.removeEventListener('mousedown', this.deselect, true);
      document.documentElement.removeEventListener('mouseup', this.handleUp, true);

      document.documentElement.removeEventListener('touchmove', this.handleMove, true);
      document.documentElement.removeEventListener('touchstart', this.deselect, true);
      document.documentElement.removeEventListener('touchend', this.handleUp, true);

      window.removeEventListener('resize', this.init);

    },
    watch:{
      x:function (n,o) {
        if(n!==o){
          this.refreshData();
        }
      },
      y:function (n,o) {
        if(n!==o){
          this.refreshData();
        }
      },
    }
  }
</script>

<style scoped>
  .vac {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #bbb;
  }
  .vac-tools{
    display: inline-block;
    height: 17px;
    position: absolute;
    top:-20px;
    left: 2px;
  }
  .vac-tools-item{
    cursor: pointer;
    display: inline-block;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    overflow: hidden;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    background-color: #00968F;
    color: #FFFFFF;
  }
  .vac-tools-item:hover{
    background-color: #A1DCC1;
  }
  .active{
    border: 1px dashed #42b983 !important;
    z-index: 1999!important;
  }
  .vac-drag:hover {
    cursor: move;
  }
  .vac textarea:focus{
    outline: none!important;
  }
  .vac-size{
    display: none;
  }
  .active .vac-size{
  display: inline-block;
  height: 16px;
  padding: 3px 4px;
  background-color: rgba(0,0,0,.4);
  color: #FFFFFF;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  z-index: 99999;

}
  .handle {
    box-sizing: border-box;
    display: none;
    position: absolute;
    width: 8px;
    height: 8px;
    font-size: 1px;
    z-index: 99999;

  }

  .handle-tl {
    top: 2px;
    left: 2px;
    border-top: 2px solid #B2B2B2;
    border-left: 2px solid #B2B2B2;
    cursor: nw-resize;
  }

  .handle-tm {
    top: 0;
    left: 50%;
    margin-left: -5px;
    cursor: n-resize;
  }

  .handle-tr {
    top: 0;
    right: 0;
    cursor: ne-resize;
  }

  .handle-ml {
    top: 50%;
    margin-top: -5px;
    left: 0;
    cursor: w-resize;
  }

  .handle-mr {
    top: 50%;
    margin-top: -5px;
    right: 0;
    cursor: e-resize;
  }

  .handle-bl {
    bottom: 0;
    left: 0;
    cursor: sw-resize;
  }

  .handle-bm {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    cursor: s-resize;
  }

  .handle-br {
    bottom: 2px;
    right: 2px;
    cursor: se-resize;
    border-right: 2px solid #B2B2B2;
    border-bottom: 2px solid #B2B2B2;
  }

</style>

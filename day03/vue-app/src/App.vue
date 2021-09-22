<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">Row</span>
      <span @mousedown="dragCol">Col</span>
      <span @mousedown="dragBtn">Button</span>
    </div>
    <div id="editpanel">
      <div class = "row">
        <div class="col">
          <button></button>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
    <div id="dragable" :style="{left:drag.x + 'px',top:drag.y +'px'}" v-if="drag.isDragging">{{drag.type}}</div>
  </div>

</template>

<script>


export default {
  name: 'App',
  data: () =>({
    drag:{
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      x:100,
      y:100,
      type:"none",
      isDragging:false
    }
  }),
  components: {

  },
  methods:{
    dragStart(type){
      this.drag.type = type;
      this.drag.isDragging = true;
      let move = e =>{
          this.drag.x = e.clientX;
          this.drag.y = e.clientY;
      }
      let up = () =>{
            document.removeEventListener("mousemove",move);
            document.removeEventListener("mouseup",up);
            this.drag.isDragging = false;
      }
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup",up);
    },
    dragRow(){
      this.dragStart("row");
    },
    dragCol(){
      this.dragStart("col");
    },
    dragBtn(){
      this.dragStart("button");
    }
    
  }
}
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  display: flex;
  width:100%;
  height:100%;
  box-sizing: border-box;
  position: absolute;
}

#sidebar{
  width: 160px;
  background-color: #eeeeee;
}

#sidebar>* {
  width: 60px;
  height:60px;
  display: inline-block;
  margin:10px;
  box-sizing: border-box;
  border:solid 1px black;
  user-select: none;
}

#editpanel{
  flex:1;
}

.row{
  width:100%;
  min-height: 300px;
  background-color: #ee8;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
}

.col{
  height: 200px;
  background-color: lightgreen;
  min-width: 200px;
  margin:10px;
}

#dragable{
  position: absolute;
  width: 60px;
  height:60px;
  margin:10px;
  box-sizing: border-box;
  border:solid 1px black;
  user-select: none;
}


</style>

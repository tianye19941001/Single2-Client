<template>
  <div class="warpper">
    <el-container>
      <el-header>小小聊天室</el-header>
      <el-main>Main</el-main>
      <el-footer>
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-edit"></el-button>
        </el-input>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  data () {
    return {
      input5: 'Come Baby'
    }
  }
}
</script>

<style lang='scss'>

h1, h2 { font-weight: normal; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; }

.warpper{ width: 100%; height: 100%; 
  .el-container{ width: 100%; height: 100%; }
}
.el-header, .el-footer {
  background-color: #409EFF;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 10px;
}

.el-header{
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
.el-footer{
  height: 50px !important;
  line-height: 50px;
  color: #333;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  height: 100%;
  text-align: center;
}

body > .el-container {
  height: 100%;
}

</style>

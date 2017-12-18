<template>
  <div class="warpper">
    <el-container>
      <el-header>小小聊天室</el-header>
      <el-main>
        <ChatList :child-data="allList"></ChatList>
      </el-main>
      <el-footer>
        <ChatFoot @toSub="submsg"></ChatFoot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import ChatList from '../components/ChatList.vue'
import ChatFoot from '../components/ChatFoot.vue'
import Api from '../config'
import io from 'socket.io-client'

export default {
  name: 'ChatRoom',
  data () {
    return {
      input5: 'Come Baby',
      allList: []
    }
  },
  components: {
    ChatList,
    ChatFoot
  },
  methods: {
    onSocket (socket) {
      const h = this.$createElement
      socket.on('connects', (data) => {
        this.$notify({
          title: '有人加入啦～',
          message: h('strong', {style: 'color: #409EFF'}, data.name + '加入聊天室~'),
          offset: 100,
          duration: 2000
        })
      })
      socket.on('message', (data) => {
        if (!data.type) {
          data.type = data.id === socket.id ? 'self' : 'msg'
        }
        this.pushMsg(data)
      })
      socket.on('disconnect', (data) => {
        this.$notify({
          title: '有人退出啦～',
          message: h('strong', {style: 'color: #E6A23C'}, data.name + '退出聊天室~'),
          offset: 100,
          duration: 2000
        })
      })
    },
    pushMsg (data) {
      this.allList.push(data)
    }
  },
  created () {
    const socket = io(Api.chatRoomWS)

    this.onSocket(socket)

    this.submsg = (str) => {
      socket.emit('message', str)
    }
  }
}
</script>

<style lang='scss'>

h1, h2 { font-weight: normal; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; }
input { outline: none; }
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
  background-color: #fefefe;
  color: #333;
  text-align: center;
  padding: 0;
  position: relative;
}

body > .el-container {
  height: 100%;
}

</style>

<template>
  <div class="footControl">
    <el-input placeholder="请输入内容" class="input-with-select" v-model='msg'>
      <el-button slot="append" icon="el-icon-edit" @click="submitChat"></el-button>
    </el-input>
  </div>
</template>

<script>
// import io from 'socket.io-client'

export default {
  name: 'ChatFoot',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    submitChat () {
      this.$emit('toSub', this.msg)
    }
  }
}
</script>

<style lang='scss'></style>

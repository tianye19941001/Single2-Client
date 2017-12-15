<template>
  <div class="chat_list">
    <ul>
    	<li v-for="item in childData" :class= "item.type" >
    		<span class="head"></span>
    		<el-button v-if="item.type == 'msg'">
    			<i class="el-icon-caret-left"></i>
    			{{ item.word }}
    		</el-button>
    		<el-button v-if="item.type == 'self'">
    			{{ item.word }}
    			<i class="el-icon-caret-right"></i>
    		</el-button>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChatList',
  props: ['childData'],
  data () {
    return {
      hello: 'worls'
    }
  },
  created () {
    console.log('列表页渲染成功～')
  }
}
</script>

<style lang='scss'>
.chat_list {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;

	ul {
		padding: 10px 0;
		margin: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		overflow: scroll;
		position: absolute;
		bottom: 0;
	}
	li{
		padding: 0 60px;
		display: block;
		margin: 10px 0;
		text-align: left;
		position: relative;
	}
	.head {
		display: block;
		background: #E6A23C;
		width: 38px;
		height: 38px;
		position: absolute;
		left: 10px;
		top: 0;
		border-radius: 38px;
	}
	.self{
		align-self: flex-end;
		text-align: right;
		.el-button {
			border-color: #409EFF;
		}
		.head {
			left: auto;
			right: 10px;
		}
	}
	.el-button{
		white-space: normal;
		line-height: 1.5;
		position: relative;
		text-align: left;
	}
	.el-icon-caret-right,.el-icon-caret-left{
		font-size: 16px;
		position: absolute;
		top: 8px;
		color: #dcdfe6;
	}
	.el-icon-caret-left{
		left: -11px;
	}
	.el-icon-caret-right{
		right: -11px;
		color: #409EFF;
	}
}


</style>

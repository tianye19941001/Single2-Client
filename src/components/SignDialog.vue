<template>
	<div class="ty_sign">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="用户名" prop="name">
		    <el-input v-model.number="ruleForm2.name"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="password">
		    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码" prop="checkPass">
		    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
		  </el-form-item>
		</el-form>
    <div class="pt100">
      <router-link to="/chatroom">
        <el-button type="danger">聊天室入口</el-button>
      </router-link>
    </div>
	</div>
</template>

<script>
  import 'whatwg-fetch'
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '' || value.length < 6) {
          callback(new Error('请输入至少六位的密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          password: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          password: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required: true, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            fetch('http://172.16.118.200:3000/api/users/registerUser', {
              method: 'POST',
              body: JSON.stringify(this.ruleForm2)
            }).then((res) => {
              res.json().then((data) => {
                const result = data.data
                result.registeruser ? this.alertSuccess('注册成功', '注册成功', this.goChat) : this.alertFail('注册失败','你的用户名已被使用','warning', this.resetForm)
              })
            }).catch(function (ex) {
              console.log('parsing failed', ex)
            })
          }
        })
      },
      resetForm (formName) {
        formName = formName && 'ruleForm2'
        this.$refs[formName].resetFields()
      },
      goChat (){
        this.$router.push({ path: '/chatroom' })
      },
      alertSuccess (tit, msg, cb){
        this.$notify({
          title: tit,
          message: msg,
          type: 'success',
          duration: 1500,
          onClose: cb
        })
      },
      alertFail (tit, msg, cb){
        this.$notify.error({
          title: tit,
          message: msg,
          duration: 1500,
          onClose: cb
        })
      }
    }
  }
</script>

<style lang='scss'>
	.ty_sign{
		padding: 30px;
	}
  .pt100{
    padding-top: 100px;
  }
</style>
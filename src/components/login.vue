<template>
  <div id="login">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="username" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')">login</el-button>
        <el-button @click="reset('ruleForm')">reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const userValidate = (rule, value, callback) => {
      // 表单验证用户名是否为空
      if (!value) {
        return callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    const passWordValidate = (rule, value, callback) => {
      // 表单验证密码是否为空
      if (!value) {
        return callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { validator: userValidate, trigger: 'blur' }
        ],
        password: [
          { validator: passWordValidate, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    // 预处理的相关方法
  },
  mounted() {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$router.push({ path: '/bolgIndex' });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 400px;
  margin-left: -200px;
  margin-top: -200px;
}
</style>

<template>
  <div id="home">
    <el-row class="page-title"/>
    <el-row class="page-title"/>
    <el-row>
      <p style="font-size: 36px;font-weight: bold">欢迎您参加本次打分评价</p>
    </el-row>
    <div v-if="stat == 0">
      <el-row class="page-title"/>
    <el-row class="inputbox">
      <el-col :span="4" offset="10">
        <el-input
          placeholder="请输入您的编号"
          v-model="userid"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-button>登录</el-button>
    </el-row>
    </div>
    <div v-else-if="stat == 1">
      <el-col>
        <el-card class="login" shadow="never">
          <el-row class="firstline">
            <el-col offset="8">
              <tr style="font-size: 24px;">
                <td>欢迎您，编号</td>
              </tr>
            </el-col>
          </el-row>
          <el-row>
            <el-col offset="10">
              <tr style="font-size: 18px;">
                <td>性别，年龄</td>
              </tr>
              </el-col>
          </el-row>
          <el-row class="lastline">
            <el-col offset="7">
              <tr style="font-size: 24px;">
                <td>您已完成次打分</td>
              </tr>
              </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button>开始打分</el-button>
            </el-col>
          </el-row>
      </el-card>
      </el-col>
    </div>
    <div v-else-if="stat == 2">
      <el-col>
        <el-card class="login" shadow="never">
          <el-row class="inputbox">
            <el-col offset="5">
              <tr style="font-size: 24px;">
                <td>您还没有账户，请注册！</td>
              </tr>
            </el-col>
          </el-row>
          <el-row class="inputbox">
            <el-col :span="16" offset="4">
              <el-input
                placeholder="请输入您的编号"
                v-model="userid"
                clearable
                style="width: 290px">
              </el-input>
            </el-col>
          </el-row>
          <el-row class="inputbox">
            <el-col :span="16" offset="4">
              <el-input
                placeholder="请输入您的年龄"
                v-model="age"
                clearable
                style="width: 290px">
              </el-input>
            </el-col>
          </el-row>
          <el-row class="inputbox">
            <el-col>
              <el-select v-model="gender" placeholder="请选择您的性别" style="width: 290px">
                <el-option
                  v-for="item in options"
                  :key="item.gender"
                  :label="item.label"
                  :value="item.gender">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button>注册</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      stat: 0,
      input: '',
      userid: '',
      options: [{
        gender: '1',
        label: '男'
      }, {
        gender: '0',
        label: '女'
      }],
      gender: ''
    }
  }
}
</script>

<style>
.page-title {
  margin-bottom: 100px;
  text-align: center;
}

.inputbox {
  margin-bottom: 20px;
}

.login {
  border-radius: 4px;
  width: 480px;
  margin: auto;
}

.firstline {
  margin-top: 30px;
}

.lastline {
  margin-bottom: 50px;
}

</style>

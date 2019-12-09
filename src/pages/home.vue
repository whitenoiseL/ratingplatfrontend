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
      <el-button @click="login">登录</el-button>
    </el-row>
    </div>
    <div v-else-if="stat == 1">
      <el-col>
        <el-card class="login" shadow="never">
          <el-row class="firstline">
            <el-col offset="8">
              <tr style="font-size: 24px;">
                <td>{{`欢迎您，编号`}}<span style="color: #F00;">{{`${this.userid}`}}</span></td>
              </tr>
            </el-col>
          </el-row>
          <el-row>
            <el-col offset="9">
              <tr style="font-size: 18px;">
                <td>{{`性别${this.gender}，年龄${this.age}`}}</td>
              </tr>
              </el-col>
          </el-row>
          <el-row class="lastline">
            <el-col offset="7">
              <tr style="font-size: 24px;">
                <td>{{`您已完成${this.finished}次打分`}}</td>
              </tr>
              </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button @click="goIntroduction">开始打分</el-button>
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
              <el-button @click="register">注册</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}
export default {
  name: 'home',
  data () {
    return {
      stat: 0,
      input: '',
      userid: '',
      gender:'',
      age:'',
      finished: '',
      options: [{
        gender: '1',
        label: '男'
      }, {
        gender: '0',
        label: '女'
      }],
    }
  },
  methods: {
      async login() {
          let userid = this.userid
          await this.$http.get(`http://localhost:8888/login?uid=${userid}`)
              .then(res => {
                  switch (res.data.result) {
                      case 0:
                          this.stat = 2
                          break
                      case 1:
                          let detail = res.data.detail
                          if (detail.gender == 1){
                              this.gender = '男'
                          } else {this.gender = '女'}
                          this.age = detail.age
                          this.finished = detail.finished
                          this.stat = 1
                          break
                  }
              })
      },
      async goIntroduction () {
          await this.$router.push({
              path: '/introduction',
              query: {
                  userid: this.userid,
                  finished: this.finished
              }})
      },
      async register () {
          await this.$http.get(`http://localhost:8888/login?uid=${this.userid}`)
              .then(res => {
                  switch (res.data.result) {
                      case 0:
                          this.registerAccount()
                          break
                      case 1:
                          this.$message.error('编号被注册，请重新输入')
                          break
                  }
              })
      },
      async registerAccount () {
          if (this.userid === '' || this.age === '' || this.gender === ''){
              this.$message.error('注册信息不完整')
          }
          await this.$http.get(`http://localhost:8888/register?` +
              `uid=${this.userid}&gender=${this.gender}&age=${this.age}&finished=${0}`)
              .then(res => {
                  if (res.data === 1) {
                      this.$message({
                          message: '注册成功，编号' + this.userid,
                          type: 'success'
                      })
                      sleep(3000).then(() => {
                          this.stat = 0
                      })

                  }
              })
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

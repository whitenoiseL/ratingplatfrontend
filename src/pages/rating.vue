<template>
    <div id="rating">
      <div v-if="showtag === 0">
      <el-row>
      <el-col offset="1">
        <p style="font-size: 28px;text-align: left">第一组照片打分</p>
      </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" offset="7" style="margin-top: 50px">
          <div class="block">
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" offset="5" style="margin-top: 40px">
          <el-button style="width: 80px" @click="rateScore(1)">1分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px" @click="rateScore(2)">2分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px" @click="rateScore(3)">3分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px" @click="rateScore(4)">4分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px" @click="rateScore(5)">5分</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" offset="5">
          <p style="font-size: 20px">非常不好看</p>
        </el-col>
        <el-col :span="3">
          <p style="font-size: 20px">比较不好看</p>
        </el-col>
        <el-col :span="3" >
          <p style="font-size: 20px">一般</p>
        </el-col>
        <el-col :span="3">
          <p style="font-size: 20px">比较好看</p>
        </el-col>
        <el-col :span="3">
          <p style="font-size: 20px">非常好看</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" offset="17" style="margin-top: 40px">
          <el-button style="width: 160px; height: 60px" plain @click="submitScore">确定，下一张</el-button>
        </el-col>
      </el-row>
      </div>
      <div v-else-if="showtag === 1">
        <div id="break">
          <el-row>
            <el-col style="margin-top: 80px">
              <p style="font-size: 36px;text-align: center">感谢您已经完成本次打分的一部分，请您稍作休息。</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col style="margin-top: 30px">
              <p style="font-size: 36px;text-align: center">休息结束后请点击继续打分。</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col style="margin-top: 120px">
              <el-button style="width: 180px; height: 80px" plain @click="showPage">继续打分</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rating',
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      srcNumber: 0,
      score: '',
      userid:'',
      pid:'',
      showtag: 0
    }
  },
  created() {
      this.getParams()
  },
  methods: {
      rateScore: function(score) {
          this.score = score
      },
      getParams () {
          this.userid = this.$route.query.userid
          this.pid = this.$route.query.finished * 50 + 1
          this.finished = this.$route.query.finished
      },
      async checktimes () {
          if (this.srcNumber === 150) {
              await this.$http.get(`http://localhost:8888/updateRateTimes?uid=${this.userid}`)
                  .then(res => {
                      this.$router.push({path: '/endpage',
                          query: {
                              userid: this.userid,
                              finished: res.data
                          }
                      })
                  })
          } else if (this.srcNumber === 50 || this.srcNumber === 100) {
              this.showtag = 1
          }
      },
      showPage () {
          this.showtag = 0
      },
      async submitScore() {
          if (this.score === '') {
              this.$message.error('未选择分数，请先选择分数')
          } else {
              // await this.$http.get(`http://localhost:8888/updatePreference?` +
              //     `uid=${this.userid}&pid=${this.pid}&score=${this.score}`)
              //     .then()
              this.score = ''
              this.srcNumber += 1
              this.pid += this.srcNumber
              this.checktimes()
          }

      }
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="endpage">
    <div v-if="finished < 5">
    <el-row>
      <el-col style="margin-top: 80px">
        <p style="font-size: 36px;text-align: center">{{`恭喜您已经完成今天的评分任务，您已经累计完成${this.finished}次了！`}}</p>
      </el-col>
    </el-row>
      <el-row>
        <el-col style="margin-top: 80px">
          <p style="font-size: 36px;text-align: center;font-weight: bold">{{`再完成次${5-this.finished}即可获得价值200元大奖。`}}</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="margin-top: 80px">
          <p style="font-size: 36px;text-align: center">请与打分助手确认并预约下次打分时间，感谢您的支持！</p>
        </el-col>
      </el-row>
    </div>
    <div v-else-if="finished === 4">
      <el-row>
        <el-col style="margin-top: 80px">
          <p style="font-size: 36px;text-align: center">{{`恭喜您已经完成今天的评分任务，您已经完成${this.finished}次了！`}}</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="margin-top: 80px">
          <p style="font-size: 36px;text-align: center;font-weight: bold">请与打分助手联系获取奖品</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="margin-top: 80px">
          <el-button style="width: 180px; height: 80px" @click="back2home">完成</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'endpage',
  data () {
      return {
          userid: '',
          finished: ''
      }
  },
  created () {
      this.getParams()
  },
  methods: {
      getParams () {
          this.userid = this.$route.query.userid
          this.finished = this.$route.query.finished
          console.log(this.finished)
      },
      back2home () {
          this.$router.push({path:'/'})
      }
  }
}
</script>

<style>

</style>

<template>
    <div id="rating">
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
          <el-button style="width: 80px">1分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px">2分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px">3分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px">4分</el-button>
        </el-col>
        <el-col :span="3" style="margin-top: 40px">
          <el-button style="width: 80px">5分</el-button>
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
          <el-button style="width: 160px; height: 60px" plain>确定，下一张</el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'rating',
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>

<style scoped>

</style>

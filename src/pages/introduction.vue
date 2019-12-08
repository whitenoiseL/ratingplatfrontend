<template>
  <div id="introduction">
    <el-row>
      <el-col :span="10" offset="7" style="margin-top: 30px">
      <p style="font-size: 24px;text-align: left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎您参与我们的中老年审美标准调查，我们旨在开发一款适用于老年人的拍照和照片美化的产品。现在想邀请您为我们的照片打分，请您按照自己的喜好为后面的照片打分。您的打分没有对错，仅代表您个人喜好。在打分的系统中：</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" offset="10" style="margin-top: 20px">
        <p style="font-size: 24px;text-align: left">1分&nbsp;最不好看</p>
        <p style="font-size: 24px;text-align: left">2分&nbsp;比较不好看</p>
        <p style="font-size: 24px;text-align: left">3分&nbsp;一般</p>
        <p style="font-size: 24px;text-align: left">4分&nbsp;比较好看</p>
        <p style="font-size: 24px;text-align: left">5分&nbsp;非常好看</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" offset="6" style="margin-top: 40px">
        <el-button>开始打分</el-button>
        <p style="font-size: 14px;text-align: center">我已理解上述内容，并承诺按照要求完成任务。</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'introduction'
}
</script>

<style>

</style>

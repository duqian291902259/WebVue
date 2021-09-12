<template>
  <div id="app" style="width:60%;margin:20px auto;">
     <el-tabs v-model="activeName">
      <el-tab-pane label="Android覆盖率报告" name="first">
        <report></report>
      </el-tab-pane>
      <el-tab-pane label="上传EC文件" name="second">
         <upload/>
      </el-tab-pane>
      <el-tab-pane label="下载EC文件" name="third"><download/></el-tab-pane>
      <el-tab-pane label="报告管理" name="fourth">报告管理</el-tab-pane>
      <el-tab-pane label="联系我们" name="fifth">联系我们</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Download from './components/download.vue'
import report from './components/report.vue'
import Upload from './components/upload.vue'
export default {
  components: {report, Upload, Download},
  data: function() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>

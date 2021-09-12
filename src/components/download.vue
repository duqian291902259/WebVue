<template>
  <div>
    <h1 style="text-align: center">下载覆盖率报告文件</h1>

    <el-button style="text-align: center" @click="download">下载覆盖率报告文件</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    download(){
      window.open("http://192.168.3.39:8090/download/cc-android/3.8.1/铭牌图鉴.jpeg")
      //window.open("http://192.168.3.39:8090/WebServer/JacocoApi/queryEcFile?appName=cc-android&versionCode=3.8.1")
    }
  },
};
</script>
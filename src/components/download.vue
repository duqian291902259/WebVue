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
      window.open("http://127.0.0.1:8090/download/android/3.8.1/duqian.png")
      //window.open("http://127.0.0.1:8090/WebServer/JacocoApi/queryEcFile?appName=android&versionCode=3.8.1")
    }
  },
};
</script>
<style scoped lang="scss">
html, body,ul{
  margin: 0;
}
#app{
  background-color: #000;
}
html,body{
  height: 100vh;
  background-color: #000;
}
.login-container {

	.layer {
	  position: absolute;
	  height: 100%;
	  width: 100%;
	}
  .some-space{
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 9999;
    .title{
      font-size: 40px;
      color: #fff;
    }
    .desc{
      font-size: 20px;
      color: #fff;
      opacity: 0.8;
      margin: 40px 0;
    }
    .btn{
      font-size: 20px;
    }
  }
	#particles-js {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
    z-index: 1000;
	}
  .btn{
    padding: 10px 20px;
    color: #fff;
    border-radius: 4px;
    background-color: #409eff;
    border-color: #409eff;
  }

  .footer{
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 20px;
    z-index: 99999;
    color: #fff;
    text-align: center;
    a{
      color: #1890FF;
    }
  }
}
</style>

<template>
  <div class="login-container">
    <div class="layer">
      <div class="some-space">
        <div class="title">欢迎来到前端零基础学习营</div>
        <div class="desc">热爱前端，热爱分享</div>
        <div>
          <a href="/html/" class="btn">
            <!-- <el-button type="primary" size="medium" icon="el-icon-right" class="btn">开始学习</el-button> -->
            开始学习
          </a>
        </div>
      </div>
      <div class="footer"> 
        <a href="https://beian.miit.gov.cn/" target="_blank" >
          粤ICP备20068847号-1
        </a> 
      </div>
    </div>

    <bgAnimation />

    <vue-particles 
	      color="#6495ED"
	      :particleOpacity="0.3"
	      :particlesNumber="80"
	      shapeType="circle"
	      :particleSize="4"
	      linesColor="#6495ED"
	      :linesWidth="1"
	      :lineLinked="true"
	      :lineOpacity="0.2"
	      :linesDistance="150"
	      :moveSpeed="3"
	      :hoverEffect="true"
	      hoverMode="grab"
	      :clickEffect="true"
	      clickMode="push"
	    >
	    </vue-particles>

  </div>
</template>

<script>
import Vue from 'vue'
import vueParticles from 'vue-particles'
Vue.use(vueParticles)
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>


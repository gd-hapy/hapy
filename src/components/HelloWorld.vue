<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="clickTest">点击获取数据</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'placeholder',
    }
  },
  methods: {
    clickTest() {
      this.msg = ''
      var that = this
      axios({
					method: 'post',
					url: '/v1/home/page',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					params: {}
				}).then(function(response) {
          that.msg = response
				})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>

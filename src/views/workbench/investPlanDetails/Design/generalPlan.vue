<template>//设计总图
  <div>
    <van-image
      width="100"
      height="100"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
  </div>
</template>

<script>
import { Image } from 'vant';
export default {
  name:'Design',
  data(){
    return {}
  },
  components:{
    [Image.name]:Image
  }
}
</script>

<style scoped>

</style>

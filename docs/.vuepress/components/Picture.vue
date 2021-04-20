
<template>
  <div class="pic-con">
    <div v-for="(item,index) in imgList" :key="index" class="pic-item">
      <img class="pic" :src="item.thum" :alt="item.desc" >
      <span class="desc">{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
//   <Picture list='
// [
//   {thum:"https://wwads.cn/storage/bundle_creatives/8jZmhNH5Y0Ch9Og3FfaPnIN94rlsUj4GgrIMYAaM.png",desc:"1231"},
//   {thum:"https://wwads.cn/storage/bundle_creatives/8jZmhNH5Y0Ch9Og3FfaPnIN94rlsUj4GgrIMYAaM.png",desc:"1231"},
//   {thum:"https://wwads.cn/storage/bundle_creatives/8jZmhNH5Y0Ch9Og3FfaPnIN94rlsUj4GgrIMYAaM.png",desc:"1231"},
//   {thum:"https://wwads.cn/storage/bundle_creatives/8jZmhNH5Y0Ch9Og3FfaPnIN94rlsUj4GgrIMYAaM.png",desc:"1231"},
//   {thum:"https://wwads.cn/storage/bundle_creatives/8jZmhNH5Y0Ch9Og3FfaPnIN94rlsUj4GgrIMYAaM.png",desc:"1231"}
// ]'></Picture>
export default {
  data() {
    return {
      imgList:[]
    } 
  },
  props: {
    list: {
      type: String,
      default() {
        return {}
      },
    }
  },
created() {
   this.imgList = eval('(' + this.list + ')')
},
}
</script>

<style>
  .pic-item{
    width:25%;
    display: inline-block;
  }
  .desc{
    background-color:#ccc
  }
</style>

<template>
  <div>
    <div>
        <input type="button" value="切换" @click="change">
    </div>
    <div>
        <img :src="require('../assets/'+this.index+'.png')"/>
    </div>
  </div>
</template>

<script>
const options = {

  data() {
    return {
      index: 2,
    };
  },
  methods: {
    change() {
      this.index = Math.round(Math.random()*5+2);
    },
  },

};
export default options;
</script>

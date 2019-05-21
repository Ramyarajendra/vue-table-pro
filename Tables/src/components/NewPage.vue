<template>
    <div class="box">
       <ul  v-for="data in mdata">
       <li>Message:{{data.message}} Email:{{data.email}}</li>
       </ul>
    </div>
</template>
<script>
   import _ from "lodash";
  
    export default {
        name: 'NewPage',
        data() {
            return {
                mdata:this.$store.state.Items
            }
        },
    }
   
</script>
<style>
    .box {
        height: 50px;
    }
    ul {
       height:50px;
       margin-left:-100px;
    }
    li {
        word-spacing: 100px;
    }

</style>
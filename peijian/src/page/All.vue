<template>
    <div>
      <Navbar></Navbar>
      <Classify></Classify>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Classify from '@/components/Classify'
    import GoodsList from '@/components/GoodsList'
    export default {
        name: "All",
        components: {
          Navbar,
          Classify,
          GoodsList
        },
        created() {
          let self = this;
          $.ajax({
            url: 'http://localhost:3000/all',
            type: 'get',
            dataType: 'json',
            success(data){
              self.$store.state.allGoods = data;
              //console.log(self.$store.state.allGoods);
              //self.$router.push('/all/a');
            }
          });
        }
    }
</script>

<style scoped>

</style>

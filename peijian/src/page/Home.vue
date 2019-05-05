<template>
  <div>
    <Navbar></Navbar>
    <NavList></NavList>
    <Banner></Banner>
    <NewItem></NewItem>
    <HotItem></HotItem>
    <!--<OtherItem></OtherItem>-->
    <Footer></Footer>
  </div>
</template>

<script>
    import Banner from '@/components/Banner'
    import Navbar from '@/components/Navbar'
    import NavList from '@/components/NavList'
    import NewItem from '@/components/NewItem'
    import HotItem from '@/components/HotItem'
    import OtherItem from '@/components/OtherItem'
    import Footer from '@/components/Footer'
    export default {
        name: "home",
        components: {
          Banner,
          Navbar,
          NavList,
          NewItem,
          HotItem,
          OtherItem,
          Footer
        }
    }
</script>

<style scoped>

</style>

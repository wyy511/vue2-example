<template lang="jade">
  nav.nav-demo
    .nav-content
      a.select.link(href="/") home
      router-link.select.link(to="/components/drag") drag
      div.select.user-name {{ userInfo.name }}
</template>

<script>
  
  import { getCookie } from 'tools/client'
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: mapState({
      userInfo: state => state.user.userInfo
    }),
    created () {
      let userName = getCookie('session')

      if (userName) {
        this.saveUserInfo({
          method: 'put',
          data: {
            name: userName
          }
        })
      }
    },
    methods: {
      ...mapActions(['saveUserInfo'])
    }
  }
</script>

<style lang="sass">
  .nav-demo{
    color: #fff;

    background-color: #56aaff;
    .nav-content{
      width: 800px;
      height: 28px;

      text-align: right;
      line-height: 28px;

      padding: 10px 0;
      margin: 0 auto;
      .select{
        display: inline-block;
        vertical-align: top;

        color: #fff;

        padding: 0px 16px;
      }
      .user-name{
        font-size: 20px;
      }
      .link{
        margin-right: 10px;

        border: 1px solid #fff;
        border-radius: 4px;

        &:hover{
          color: #56aaff;
          background-color: #fff;
          transition: all .4s;
        }
      }
    }
  }
</style>

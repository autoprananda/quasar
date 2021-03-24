<template>
  <q-page class="flex flex-center">
    {{data}}
    <q-btn style="width: 80px" color="grey-9" icon="ion-refresh" v-ripple @click="getData">
      <q-tooltip>Refresh</q-tooltip>
    </q-btn>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PageIndex',
  // data () {
  //   return {
  //     DataA
  //   }
  // },
  // created () {
  //   this.fetchData1()
  // },
  methods: {
    // dispact jalankan action vuex dari button
    getData () {
      this.$store.dispatch('showcase/fetchData1').then(response => {
        console.log(response, 'RESPON')
        this.data = response
      })
    }
  },
  computed: {
    ...mapState('showcase', ['data'])
    // ...mapActions('showcase', ['fetchData1'])
  }
}

</script>

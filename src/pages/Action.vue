<template>
  <q-page class="flex flex-center">

    {{data}}
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  created () {
    this.fetchData1()
  },
  methods: {
    ...mapActions('showcase', ['fetchData1'])
  },
  computed: {
    // ambil data dari state
    ...mapState('showcase', ['data'])
    // jalankanAction

  }
}

</script>

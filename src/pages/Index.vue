<template>
  <q-page class="flex flex-center">

    {{dataComment}}
    {{dataPost}}
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  created () {
    this.fetchDataPost()
    this.fetchDataComennt()
  },
  methods: {

    ...mapActions('showcase', ['fetchDataPost', 'fetchDataComennt'])
  },
  computed: {
    ...mapState('showcase', ['dataPost', 'dataComment'])
  }
}

</script>

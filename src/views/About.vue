<template>
  <h1>About</h1>
  Count: {{ count }}
  <div>
    <button @click="onClick">
      Increment Count
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AboutView',

  data () {
    return {}
  },

  computed: {
    ...mapGetters('app', ['count'])
  },

  methods: {
    onClick () {
      this.$store.commit('app/INCREMENT')
    }
  }
}
</script>

<style></style>

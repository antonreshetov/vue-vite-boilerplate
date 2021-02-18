<template>
  <ul class="nav">
    <li
      v-for="i in nav"
      :key="i.name"
    >
      <RouterLink :to="i.path">
        {{ i.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      nav: [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' }
      ]
    }
  }
}
</script>

<style lang="scss">
.nav {
  padding: 0;
  li {
    display: inline-block;
    list-style: none;
    + li {
      margin-left: 10px;
    }
  }
}
</style>

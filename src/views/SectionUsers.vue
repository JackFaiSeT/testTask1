<template>
  <v-container>
    <v-row align="start" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <select-filter-group :filters="filtersSettings" @update="setFilters" />
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto user-card">
          <user-list
            :users="usersData"
            :loading="loading"
            title="User list"
            no-data-text="Couldn't find users"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import UserList from '@/components/user/UserList.vue'
import SelectFilterGroup from '@/components/SelectFilterGroup.vue'

export default {
  name: 'ContentBlock',
  components: { UserList, SelectFilterGroup },
  data: () => ({
    loading: false,
    filtersSettings: [
      {
        id: 'countries',
        label: 'Filter by country',
        model: null,
        items: [
          'russia',
          'usa'
        ],
      },
      {
        id: 'scores',
        label: 'Filter by score',
        model: null,
        items: [
          '> 20',
          '< 10'
        ]
      }
    ],
  }),
  async created() {
    // Settimeout added to simulate a delay from the server //
    this.loading = true
    setTimeout(async () => {
      await this.getUsers()
      .finally(() => {
        this.loading = false
      })
    }, 1000)
  },
  computed: {
    ...mapGetters({
      users: 'user/users',
      filters: 'user/userFilters'
    }),
    usersData() {
      const country = this.filters.countries
      const score = this.filters.scores
      return this.sortByScore(this.sortByCountry(this.users, country), score)
    }
  },
  methods: {
    ...mapActions({
      getUsers: 'user/GET_USERS',
    }),
    ...mapMutations({
      setFilters: 'user/SET_FILTERS'
    }),
    sortByCountry(items, country) {
      return country ? items.filter(item => item.country === country) : items
    },
    sortByScore(items, score) {
      return score ? items.filter(item => {
        return eval(`${item.score} ${score}`)
        }) : items
    },
  }
}
</script>

<style scoped>
.user-card /deep/ .v-list {
  padding: 0;
}
</style>

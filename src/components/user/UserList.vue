<template>
  <v-list class="user-list">
    <div v-if="loading" class="preloader-wrapper">
      <v-progress-circular
        class="preloader"
        indeterminate
        color="primary"
      />
    </div>
    <v-subheader v-if="title" v-text="title"/>
    <v-list-item v-if="isLoading" align="center">
      <v-list-item-content>
        <v-list-item-title v-text="noDataText" />
      </v-list-item-content>
    </v-list-item>
    <template v-for="(user, userIndex) in users">
      <user-item :user="user" :key="user.id" :isShowUserDetails="user.id === showDetailsUserId" @show-details="openDetials" />
      <v-divider
        v-if="userIndex !== users.length - 1"
        :key="`divider-${user.id}`"
        :inset="true"
      />
    </template>
  </v-list>
</template>

<script>
import UserItem from '@/components/user/UserItem.vue'
export default {
  name: 'UserList',
  components: { UserItem },
  props: {
    title: {
      type: String,
      default: ''
    },
    users: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false,
    },
    noDataText: {
      type: String,
      default: 'Couldn\'t find data'
    }
  },
  data: () => ({
    showDetailsUserId: null
  }),
  mounted() {
    document.body.addEventListener('click', this.checkClickByDetails)
  },
  destroyed() {
    document.body.removeEventListener('click', this.checkClickByDetails)
  },
  computed: {
    isLoading() {
      return !this.users.length && !this.loading
    }
  },
  methods: {
    openDetials(id) {
      this.showDetailsUserId = id
    },
    checkClickByDetails(event) {
      const user = event.target.closest(`.user[data-id="${this.showDetailsUserId}"]`)
      if (!user) {
        this.showDetailsUserId = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-list {
  position: relative;
}

.preloader-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
}

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
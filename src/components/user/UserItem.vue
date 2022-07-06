<template>
  <v-list-item class="user" :data-id="user.id">
    <v-list-item-avatar v-if="user.avatar" class="user_avatar" @click="$emit('show-details', user.id)">
      <v-img :src="user.avatar" />
    </v-list-item-avatar>
    <v-list-item-content v-if="isShowUserDetails" class="user-details">
      <v-list-item-subtitle v-text="'Address'" />
      <v-list-item-title v-text="user.address" class="wrap-text"/>
    </v-list-item-content>
    <v-list-item-content>
      <v-list-item-title v-html="user.title" />
      <v-list-item-subtitle v-html="user.subtitle" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    isShowUserDetails: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.user {
  position: relative;
}

.user_avatar {
  cursor: pointer;
}

.user-details {
  position: absolute;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  top: 0;
  left: 7.5%;
  width: 85%;
  padding: 15px;
}

.wrap-text {
  white-space: normal;
}
</style>
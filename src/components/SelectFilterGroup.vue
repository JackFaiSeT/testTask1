<template>
<div>
  <v-select
    v-for="(filter) in filters"
    v-model="filter.model"
    :key="filter.id"
    :items="filter.items"
    :label="filter.label"
    clearable
    @input="updateData"
  />
</div>
</template>

<script>
export default {
  name: 'SelectFilterGroup',
  props: {
    filters: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateData() {
      const result = {}
      this.filters.forEach(item => {
        result[item.id] = item.model
      })
      this.$emit('update', result)
    }
  }
}
</script>

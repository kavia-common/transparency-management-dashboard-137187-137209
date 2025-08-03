<script setup lang="ts">
// Mocked summary stats
const data = [
  { label: 'Open Priorities', value: 17, icon: 'mdi-flag-variant', color: 'bg-primary-100 text-primary-700', border: 'border-primary-500', iconcolor: 'text-primary-500' },
  { label: 'Pending Reviews', value: 9, icon: 'mdi-clipboard-check', color: 'bg-accent-100 text-accent-800', border: 'border-accent-500', iconcolor: 'text-accent-500' },
  { label: 'Incomplete Tasks', value: 21, icon: 'mdi-format-list-checkbox', color: 'bg-secondary-100 text-secondary-800', border: 'border-secondary-500', iconcolor: 'text-secondary-500' }
]
</script>

<template>
  <div class="flex gap-3">
    <div v-for="stat in data" :key="stat.label"
      class="flex-1 bg-white dark:bg-gray-900 rounded-xl shadow border flex flex-col justify-center items-center px-4 py-5 gap-2"
      :class="stat.color + ' ' + stat.border"
    >
      <i :class="'mdi ' + stat.icon + ' text-2xl ' + stat.iconcolor"></i>
      <span class="text-2xl font-bold">{{ stat.value }}</span>
      <span class="text-sm font-semibold">{{ stat.label }}</span>
    </div>
  </div>
</template>

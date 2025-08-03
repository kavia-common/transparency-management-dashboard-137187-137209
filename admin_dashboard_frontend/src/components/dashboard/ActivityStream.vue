<script setup lang="ts">
// Example activities
const activities = [
  { time: 'Just now', user: 'Jane Doe', action: 'approved "Indicator 2"', color: 'text-accent-500' },
  { time: '10m ago', user: 'John Smith', action: 'updated "Deliverable A"', color: 'text-primary-500' },
  { time: '45m ago', user: 'Aisha Bello', action: 'commented: Needs review', color: 'text-secondary-500' }
]
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl shadow border px-5 py-4">
    <div class="font-bold mb-2">Activity Stream</div>
    <ul>
      <li v-for="a in activities" :key="a.action" class="flex items-center gap-2 mb-1.5">
        <span class="inline-block w-2 h-2 rounded-full" :class="a.color" />
        <span class="text-xs text-gray-500 w-14">{{ a.time }}</span>
        <span class="font-medium">{{ a.user }}</span>
        <span class="text-sm text-gray-700 dark:text-gray-100">{{ a.action }}</span>
      </li>
    </ul>
  </div>
</template>

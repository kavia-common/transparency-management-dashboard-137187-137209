<script setup lang="ts">
const tasks = [
  { id: 1, title: 'Update project priority', status: 'in progress', due: '2024-06-07', color: 'bg-accent-100 text-accent-800', statusColor: 'bg-accent-500' },
  { id: 2, title: 'Approve deliverable', status: 'pending review', due: '2024-06-10', color: 'bg-primary-100 text-primary-800', statusColor: 'bg-primary-500' },
  { id: 3, title: 'Submit indicator update', status: 'overdue', due: '2024-05-31', color: 'bg-red-100 text-red-800', statusColor: 'bg-red-500' }
]
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl shadow border px-5 py-4 flex flex-col gap-2">
    <div class="font-bold mb-1">My Tasks</div>
    <template v-for="task in tasks" :key="task.id">
      <div class="flex justify-between items-center py-1 border-b last:border-b-0 border-gray-100 dark:border-gray-800 group">
        <div>
          <span class="font-[500]">{{ task.title }}</span>
          <span class="ml-2 text-xs p-1 px-2 rounded" :class="task.statusColor" style="color: #fff">{{ task.status }}</span>
        </div>
        <button class="text-xs text-primary-500 hover:underline">Open</button>
      </div>
    </template>
  </div>
</template>

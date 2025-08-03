<script setup lang="ts">
import WidgetStats from '../components/dashboard/WidgetStats.vue'
import WidgetMyTasks from '../components/dashboard/WidgetMyTasks.vue'
import ActivityStream from '../components/dashboard/ActivityStream.vue'
</script>

<template>
  <div>
    <!-- Overview widgets row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <WidgetStats />
      <WidgetMyTasks />
      <ActivityStream />
    </div>
    <!-- Place for additional dashboard widgets, tables, recent approvals, etc -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- e.g., approvals, mini-data grid panels... -->
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNav from './components/SidebarNav.vue'
import TopHeader from './components/TopHeader.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Sidebar -->
    <SidebarNav class="hidden md:block" />
    <!-- Mobile Sidebar Overlay -->
    <SidebarNav mobile />

    <!-- Main content wrapper -->
    <div class="flex flex-col flex-1 min-w-0">
      <!-- Top header bar -->
      <TopHeader />
      <!-- Main content area (fills rest of viewport) -->
      <main class="flex-1 overflow-y-auto p-4 md:p-6 bg-white dark:bg-gray-900 transition-all">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-100 dark:bg-gray-900;
}
</style>

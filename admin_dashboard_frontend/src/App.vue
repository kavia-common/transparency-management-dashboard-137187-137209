<script setup lang="ts">
import SidebarNav from './components/SidebarNav.vue'
import TopHeader from './components/TopHeader.vue'
</script>

<template>
  <!-- DIAGNOSTIC: If this div is styled, Tailwind is working -->
  <div class="bg-red-500 text-white p-5 text-2xl font-bold text-center rounded mb-8">
    Tailwind CSS Diagnostic: You should see a solid red background with white text here.<br />
    If this renders as red and white on refresh, Tailwind is active.
  </div>
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

<!-- Removed unsupported @apply usage in root App.vue.
   All Tailwind CSS should be imported and handled via main.css or component-level classes. -->

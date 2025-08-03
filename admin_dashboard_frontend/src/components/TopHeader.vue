<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const userMenuOpen = ref(false)

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value
}

// Explicit global event for mobile sidebar button with correct TS
function openMobileSidebar() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new window.Event('showMobileNav'))
  }
}

// Close menu when clicking outside of the user menu
function handleClickOutside(e: MouseEvent) {
  const menu = document.getElementById('user-menu-dropdown')
  const btn = document.getElementById('user-menu-btn')
  if (
    userMenuOpen.value &&
    menu &&
    !menu.contains(e.target as Node) &&
    btn &&
    !btn.contains(e.target as Node)
  ) {
    userMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center bg-white dark:bg-gray-950 h-16 px-4 md:px-8 shadow-sm border-b border-gray-200 dark:border-gray-800">
    <!-- Mobile nav button -->
    <button
      class="md:hidden mr-2 text-primary-500 focus:outline-none"
      @click="openMobileSidebar"
    >
      <i class="mdi mdi-menu text-2xl"></i>
    </button>
    <!-- Search bar -->
    <div class="w-full max-w-sm relative">
      <input
        type="text"
        class="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-primary-300 outline-none"
        placeholder="Search anything…"
      />
      <i class="mdi mdi-magnify absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
    </div>
    <div class="flex-1"></div>
    <!-- Notifications -->
    <button class="mx-4 relative text-primary-500 hover:text-primary-700 focus:outline-none">
      <i class="mdi mdi-bell-outline text-2xl"></i>
      <span class="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold" style="background:#f59e42">3</span>
    </button>
    <!-- User menu -->
    <div class="relative">
      <button
        id="user-menu-btn"
        class="flex items-center gap-2 focus:outline-none"
        @click="toggleUserMenu"
      >
        <img class="w-8 h-8 rounded-full border-2 border-primary-300" src="https://i.pravatar.cc/42?img=7" alt="User" />
        <span class="hidden md:inline text-sm font-semibold text-gray-900 dark:text-gray-100">Admin</span>
        <i class="mdi mdi-chevron-down"></i>
      </button>
      <div
        v-if="userMenuOpen"
        id="user-menu-dropdown"
        class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-50"
      >
        <a href="#" class="block px-4 py-2 hover:bg-primary-50 dark:hover:bg-primary-950">Profile</a>
        <a href="#" class="block px-4 py-2 hover:bg-primary-50 dark:hover:bg-primary-950">Settings</a>
        <div class="border-t dark:border-gray-700 my-1"></div>
        <a href="#" class="block px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950">Logout</a>
      </div>
    </div>
  </header>
</template>

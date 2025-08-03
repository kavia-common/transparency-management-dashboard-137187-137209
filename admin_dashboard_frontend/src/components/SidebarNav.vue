<script setup lang="ts">
import { ref } from 'vue'

// Use 'mobile' prop for slide-out sidebar on mobile
const props = defineProps({ mobile: { type: Boolean, default: false } })

const navLinks = [
  { name: 'Dashboard', icon: 'mdi-view-dashboard-outline', to: '/' },
  { name: 'Projects', icon: 'mdi-domain', to: '/projects' },
  { name: 'Users', icon: 'mdi-account-group-outline', to: '/users' },
  { name: 'Settings', icon: 'mdi-cog-outline', to: '/settings' },
]

// Only for demo: toggles mobile overlay (ideally in a store)
const isOpen = ref(false)
if (props.mobile) {
  // Listen for simple event bus for opening/closing (stub)
  window.addEventListener('showMobileNav', () => { isOpen.value = true })
}
</script>

<template>
  <aside
    :class="[
      'z-30 h-full flex flex-col bg-white dark:bg-gray-950 shadow-lg transition-all',
      props.mobile
        ? (isOpen ? 'fixed inset-0 w-64' : 'hidden')
        : 'w-64 min-w-[16rem] border-r border-gray-200 dark:border-gray-800'
    ]"
  >
    <!-- Header / brand logo -->
    <div class="flex items-center justify-center py-6 mb-6">
      <span
        class="text-2xl font-bold text-primary-600 dark:text-primary-400"
        style="color: #2563eb"
      >Transparency Admin</span>
    </div>
    <!-- Navigation -->
    <nav class="flex-1">
      <ul class="space-y-1 px-3">
        <li v-for="link in navLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="flex items-center gap-3 py-2 px-3 rounded-md transition-colors group font-medium text-gray-700 dark:text-gray-200 hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950"
            active-class="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
            exact
          >
            <i :class="['mdi', link.icon, 'text-xl']" />
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Footer / version -->
    <div class="mt-auto p-4 text-xs text-gray-400 dark:text-gray-600">
      &copy; {{ new Date().getFullYear() }} Dashboard
    </div>
  </aside>
</template>

<style scoped>
/* Use MDI icons CDN in index.html or replace with Nuxt UI icons as needed */
</style>

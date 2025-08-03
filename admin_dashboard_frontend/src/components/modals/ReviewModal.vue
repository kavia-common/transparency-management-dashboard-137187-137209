<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * ReviewModal: Modal for review/approval workflow with diff highlighting.
 */
</script>
<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-900 p-6 rounded shadow-xl w-full max-w-lg">
      <h3 class="font-bold mb-3">Review Changes</h3>
      <div class="mb-4 bg-gray-100 dark:bg-gray-800 rounded p-2 text-xs">Diff highlighting coming here...</div>
      <div class="flex gap-2 justify-end">
        <button class="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">Reject</button>
        <button class="px-3 py-1 rounded bg-accent-600 text-white" style="background:#f59e42">Approve</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * EditPriorityForm: Dynamic form for creating/editing priorities.
 */
</script>
<template>
  <form class="p-6 bg-white dark:bg-gray-900 border rounded space-y-3">
    <h3 class="font-bold mb-2">Edit Priority</h3>
    <!-- Example form fields -->
    <div>
      <label class="block text-sm font-medium">Title</label>
      <input class="w-full border rounded p-2" type="text" />
    </div>
    <div>
      <label class="block text-sm font-medium">Status</label>
      <select class="w-full border rounded p-2">
        <option>Open</option>
        <option>Closed</option>
      </select>
    </div>
    <div class="flex justify-end gap-2">
      <button type="button" class="px-3 py-1 rounded bg-gray-300 text-gray-700">Cancel</button>
      <button type="submit" class="px-3 py-1 rounded bg-primary-600 text-white" style="background:#2563eb">Save</button>
    </div>
  </form>
</template>

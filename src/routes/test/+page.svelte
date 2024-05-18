<script>
  import { _groupList, _activeGroupId, _activeGroup } from '$lib/stores.js';
  import { onMount } from 'svelte';

  let draggingIndex = null;
  let ulElement;
  let newGroupId;

  function handleDragStart(event, index) {
      draggingIndex = index;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', index);
      ulElement.classList.add('dragging');
  }

  function handleDragOver(event, index) {
      event.preventDefault();
      if (draggingIndex === index) return;

      const rect = ulElement.getBoundingClientRect();
      if (
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom &&
          event.clientX >= rect.left &&
          event.clientX <= rect.right
      ) {
          const newItems = [...$_groupList];
          const item = newItems[draggingIndex];
          newItems.splice(draggingIndex, 1);
          newItems.splice(index, 0, item);
          draggingIndex = index;
          _groupList.set(newItems);
      }
  }

  function handleDrop(event) {
      event.preventDefault();
      draggingIndex = null;
      ulElement.classList.remove('dragging');
  }

  function handleDragEnd() {
      draggingIndex = null;
      ulElement.classList.remove('dragging');
  }

  onMount(() => {
      ulElement.addEventListener('dragleave', handleDragLeave);
      return () => {
          ulElement.removeEventListener('dragleave', handleDragLeave);
      };
  });

  function handleDragLeave(event) {
      const rect = ulElement.getBoundingClientRect();
      if (
          event.clientY < rect.top ||
          event.clientY > rect.bottom ||
          event.clientX < rect.left ||
          event.clientX > rect.right
      ) {
          event.preventDefault();
          handleDragEnd();
      }
  }
</script>

<main>
  <h1>Active Group: {$_activeGroup.title} (ID: {$_activeGroup.id})</h1>

  <ul bind:this={ulElement}>
      {#each $_groupList as group, index (group.id)}
          <li
              draggable="true"
              on:dragstart={(event) => handleDragStart(event, index)}
              on:dragover={(event) => handleDragOver(event, index)}
              on:drop={handleDrop}
              on:dragend={handleDragEnd}
              class:dragging={draggingIndex === index}>
              {group.title} <button on:click={() => setActiveGroup(group.id)}>Set Active</button>
          </li>
      {/each}
  </ul>

  <input type="number" bind:value={newGroupId} min="0" max="4">
  <button on:click={() => setActiveGroup(newGroupId)}>Set Active by ID</button>
</main>

<style>
  ul {
      list-style-type: none;
      padding: 0;
  }

  li {
      padding: 0.5em;
      margin: 0.5em 0;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      cursor: move;
      display: flex;
      align-items: center;
  }

  .dragging {
      opacity: 0.5;
  }

  ul.dragging li {
      opacity: 0.5;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { currentRoute, initRouter } from './router.js';
  import Home from '../routes/Home.svelte';
  import Oauth from '../routes/Oauth.svelte';

  let currentComponent: any = Home;

  const routes = {
    '/': Home,
    '/oauth': Oauth,
  };

  onMount(() => {
    initRouter();
  });

  $: {
    const route = $currentRoute;
    currentComponent = routes[route] || Home;
  }
</script>

<svelte:component this={currentComponent} /> 
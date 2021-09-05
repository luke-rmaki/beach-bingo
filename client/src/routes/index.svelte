<script lang="ts">
  import {goto} from '$app/navigation'
  import Button from '$lib/Button.svelte';

  async function navigate(path: string) {
    await goto(path);
  }

</script>


<svelte:head>
  <title>Beach Bingo | Home</title>
</svelte:head>
<main>
  <h1>Beach Bingo</h1>
  <img src="/beachBingoLogo.svg" alt="icon of a palm tree" />
  <Button isPrimary={true} action={() => navigate('/newroom')}>Create Room</Button>
  <Button isPrimary={false} action={() => navigate('/')}>Join Room</Button>
</main>

  <style lang="scss">
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
  
    }
  
    h1 {
      text-align: center;
    }
  
    img {
      width: 70vw;
      max-height: 430px;
    }
  </style>

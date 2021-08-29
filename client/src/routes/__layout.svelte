<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

  :root {
    --hue-charcoal: 212;
    --hue-blue: 199;
    --hue-orange: 5;
    --hue-yellow: 38;
    
    --sat-charcoal: 19%;
    --sat-blue: 52%;
    --sat-orange: 90%;
    --sat-yellow: 88%;

    --light-charcoal: 37%;
    --light-blue: 88%;
    --light-orange: 72%;
    --light-yellow: 87%;

    --charcoal: hsl(var(--hue-charcoal), var(--sat-charcoal), var(--light-charcoal));
    --blue: hsl(var(--hue-blue), var(--sat-blue), var(--light-blue));
    --orange: hsl(var(--hue-orange), var(--sat-orange), var(--light-orange));
    --yellow: hsl(var(--hue-yellow), var(--sat-yellow), var(--light-yellow));

    --font: 'Shadows Into Light', cursive;
    --h1: 5rem;
  }
  
  :global {
    body {
      background: var(--charcoal);
    }
    h1 {
      font-family: var(--font);
      color: #fff;
      font-size: var(--h1);
    }
  }
  



</style>




<slot></slot>
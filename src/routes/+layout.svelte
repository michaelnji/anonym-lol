<script lang="ts">
    import Navbar from '$lib/ui/components/navbar.svelte';
import Sidebar from '$lib/ui/components/sidebar.svelte';
    import '$lib/ui/styles/main.css';
    import 'boxicons/css/boxicons.min.css'

</script>

<div data-theme='light' class="container">
    <Sidebar/>
    <Navbar/>
        <main>
            <slot/>
        </main>
    
</div>

<style scoped>
    @import url('./layout.css');
      @custom-media --between-sm-and-lg (min-width: 576px) and (max-width: 992px);
      @custom-media --between-lg-and-xl (min-width: 820) and (max-width: 1300px);

    .container {
     
        main {
            padding: 2rem 1rem;
            padding-bottom: 7rem;
            @media (--between-sm-and-lg) {
                padding: 2rem 3rem;
                padding-bottom: 7rem;
            }
            @media (--between-lg-and-xl) {
                max-width: fit-content;
                margin-left: auto;
               
            }
        }
        
    }
</style>
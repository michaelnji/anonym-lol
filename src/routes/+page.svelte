<script>
    import ProfileBaner from "$lib/ui/components/profileBaner.svelte";
import Sidebar from "$lib/ui/components/sidebar.svelte";

</script>

<div class="container">
    <Sidebar/>
    <main>
       <ProfileBaner/>
    </main>
</div>

<style scoped>
@custom-media --between-sm-and-lg (min-width:576px) and (max-width: 992px);

    .container{
        
        display: flex;
        width: 100%;
main{
   
    width: 100%;
    padding: 2rem 1rem;
    @media (--between-sm-and-lg) {
        padding: 2rem 3rem;
        
    }
}

    }
</style>
<script>
    import HomeStatsComp from "$lib/ui/components/homeStatsComp.svelte";
    import MessageCountBanner from "$lib/ui/components/messageCountBanner.svelte";
    import ProfileBanner from "$lib/ui/components/profileBanner.svelte";
    import Sidebar from "$lib/ui/components/sidebar.svelte";
</script>

<div class="container">
    <Sidebar />
    <main>
        <ProfileBanner />
        <MessageCountBanner />
        <HomeStatsComp />
    </main>
</div>

<style scoped>
    @custom-media --between-sm-and-lg (min-width: 576px) and (max-width: 992px);

    .container {
        display: flex;
        width: 100%;
        main {
            width: 100%;
            padding: 2rem 1rem;
            @media (--between-sm-and-lg) {
                padding: 2rem 3rem;
            }
        }
    }
</style>

<script lang="ts">
    import { page } from "$app/stores";

    // biome-ignore lint/suspicious/noConfusingLabels: <explanation>
    $: currentPath = $page.url.pathname
</script>

<div class="navbar-container">
    <nav class="navbar">
        <a href="/">
            <div class="navbar-item" class:active={currentPath === '/'}>
                <i class=" bx bx-home-alt"></i>
                <div class="indicator" class:visually-hidden={currentPath !== '/'}></div>
            </div>
        </a>
        <a href="/messages">
            <div class="navbar-item" class:active={currentPath === '/messages'}>
                <i class="bx bx-message-rounded"></i>
                <div class="indicator"  class:visually-hidden={currentPath !== '/messages'}></div>
            </div>
        </a>
        <a href="/stats">
            <div class="navbar-item" class:active={currentPath === '/stats'}>
                <i class="bx bx-bar-chart-alt-2"></i>
                <div class="indicator"  class:visually-hidden={currentPath !== '/stats'}></div>
            </div>
        </a>
        <a href="/profile">
            <div class="navbar-item" class:active={currentPath === '/profile'}>
                <i class="bx bx-user"></i>
                <div class="indicator"  class:visually-hidden={currentPath !== '/profile'}></div>
            </div>
        </a>
    </nav>
</div>

<style scoped>
    .navbar-container {
        z-index: 1;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 29rem;
        background: var(--base-50);
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);

        margin: 0 auto;
        @media (min-width: 819px) {
            display: none;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0 5px;
            padding: 15px 15px 0 15px;

            a {
                color: var(--base-content);
                font-size: var(--fs-lg);
                width: 100%;
                .navbar-item {
                    width: 100%;
                    display: grid;
                    place-items: center;
                    gap: 6px 0;
                    border-radius: var(--border-radius);
                    transition:
                        background var(--duration) var(--easing),
                        color var(--duration) var(--easing);
                    .indicator {
                         transition:
                        all var(--duration) var(--easing);
                       
                        width: 90%;
                        padding: 3px;
                        background-color: var(--primary);
                        border-top-left-radius: var(--border-radius);
                        border-top-right-radius: var(--border-radius);
                    }
                    /* &:hover {
                        background: var(--base-200);
                    } */
                }
                .active {
                    color: var(--primary);
                    
                }
            }
        }
    }
</style>

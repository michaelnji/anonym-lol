<script lang="ts">
    import SidebarCard from "./sidebarCard.svelte";
</script>

<div class="sidebar-container">
    <div class="sidebar-start">
        <div class="logo">
            <p><i class="bx bx-book-reader bx-sm"></i>Anonym.lol</p>
        </div>
    </div>
    <div class="sidebar-middle">
        <nav class="sidebar-nav">
            <ul>
                <a href="/"><li><i class="bx bx-home bx-sm"></i> home</li></a>
                <a href="/messages"
                    ><li>
                        <i class="bx bx-message-rounded bx-sm"></i>messages
                        <span class="badge badge-primary">10</span>
                    </li></a
                >
                <a href="/stats"
                    ><li>
                        <i class="bx bx-bar-chart-alt-2 bx-sm"></i>Statistics
                        <span class="badge">beta</span>
                    </li></a
                >
                <a href="/profile"
                    ><li><i class="bx bx-user bx-sm"></i>profile</li></a
                >
            </ul>
        </nav>
    </div>
    <div class="sidebar-end">
        <nav class="sidebar-nav">
            <ul>
                <SidebarCard />
                <a href="/terms"
                    ><li>
                        <i class="bx bx-file bx-sm"></i>Terms of use
                    </li></a
                >
                <a href="/privacy-policy">
                    <li>
                        <i class="bx bx-lock-alt bx-sm"></i>
                        privacy policy
                    </li></a
                >
            </ul>
        </nav>
    </div>
</div>


<style scoped>
@custom-media --smaller-than-sm (max-width: 576px);
@custom-media --lg (max-width: 992px);
@custom-media --md (max-width: 768px);

    .sidebar-container {
        border-bottom-right-radius: 2rem;
        border-top-right-radius: 2rem;
        
        width: fit-content;
        max-width: 21rem;
        position: fixed ;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 1rem 1rem 2rem 1rem;
        background: var(--base-50);
        height: 100lvh;
       
        display: flex;
        flex-direction: column;

       @media (--lg) {
            overflow-y: scroll;
        }
       @media (max-width:819px) {
            transform: translateX(-500px);
            display: none;
        }


        li {
            list-style: none;
        }
        ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem 0;
        }
        .sidebar-start {
            .logo p {
                padding: 0 20px;
                font-weight: 800;
                /* color: var(--primary); */
                font-size: 1.9rem;
                font-family: var(--family-head);
                display: flex;
                gap: 0 0.5rem;
                align-items: center;
                position: relative;
margin: 2rem 0;
 
                i{
                    position: absolute;
                    color: var(--primary);
                    top: -1rem;
                    left: 10px;
                    transform: rotate(-30deg);
                }
            }
        }
        .sidebar-middle {
            flex-grow: 1;
            @media (--smaller-than-sm) {
            margin: 0 0 6rem 0;
        }
            ul {
                li {
                    font-size: 1.2rem;
                    color: var(--base-content);
                    padding: 10px 20px;
                    border-radius: var(--border-radius);
                    display: flex;
                    gap: 0 12px;
                    align-items: center;
                    font-weight: 500;
                    text-transform: capitalize;
                    transition:
                        background var(--duration) var(--easing),
                        color var(--duration) var(--easing);

                    &:hover {
                        background: var(--base-100);
                        /* color: var(--primary);
                        span:not(.badge-hover){
                            color: initial !important;
                        } */
                    }
                }
            }
        }
        .sidebar-end {
            ul {
                li {
                    font-size: 1.2rem;
                    color: var(--base-content);
                    /* padding: 0 20px; */

                    display: flex;
                    gap: 0 12px;
                    align-items: center;
                    font-weight: 500;
                    text-transform: capitalize;
                    transition:
                        background var(--duration) var(--easing),
                        color var(--duration) var(--easing);

                        &:hover{
                            color: var(--primary);
                        }
                }
            }
        }
    }
    .navbar-container{
        width: 100%;
        padding: 2rem 1rem 1rem 1rem;
        background: var(--base-50);
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo p {
              
                font-weight: 800;
                /* color: var(--primary); */
                font-size: var(--fs-base);
                font-family: var(--family-head);
                display: flex;
                gap: 0 0.5rem;
                align-items: center;
                position: relative;

 
                i{
                    position: absolute;
                    color: var(--primary);
                    top: -1rem;
                    left: -10px;
                    transform: rotate(-30deg);
                }
            }

    }
</style>

<script lang="ts">
</script>

<div class="navbar-container">
    <nav class="navbar">
        <a href="/">
            <div class="navbar-item">
                <i class="bx  bx-home-alt"></i>
            </div>
        </a>
        <a href="/messages">
            <div class="navbar-item">
                <i class="bx  bx-message-rounded"></i>
            </div>
        </a>
        <a href="/messages">
            <div class="navbar-item">
                <i class="bx  bx-bar-chart-alt-2"></i>
            </div>
        </a>
        <a href="/messages">
            <div class="navbar-item">
                <i class="bx  bx-user"></i>
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
            padding:  20px;
            padding-bottom: 10px;
            a{
                  color: var(--base-content);
                  font-size: var(--fs-md);
            }
        }
    }
</style>

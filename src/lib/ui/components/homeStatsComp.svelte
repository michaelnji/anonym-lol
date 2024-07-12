<script lang="ts">
</script>

<div class="container">
    <h2 class="title">Stats</h2>
    <div class="stats-container">
        <div class="stat stat-emoji">
            <div class="icon"><i class="bx bxs-heart bx-lg"></i></div>
            <div>
                <div class="title">32</div>
                <div class="description">Emojis</div>
            </div>
        </div>

        <div class="stat stat-count">
            <div class="icon">
                <i class="bx bxs-message-rounded-detail bx-lg"></i>
            </div>
            <div>
                <div class="title">657</div>
                <div class="description">Messages</div>
            </div>
        </div>

        <div class="stat stat-popularity">
            <div class="icon"><i class="bx bxs-star bx-lg"></i></div>
            <div>
                <div class="title">79%</div>
                <div class="description">Popularity</div>
            </div>
        </div>
    </div>
</div>

<style scoped>
    .container {
        max-width: 45rem;
        width: 100%;
        margin: 3rem auto 0 auto;

        .title {
            font-size: var(--fs-md);
        }

        .stats-container {
            margin-top: 1rem;
            display: flex;
            gap: clamp(1rem, 2vw, 2rem);
            align-items: center;
            flex-wrap: wrap;

            .stat {
                --bg: var(--base-content);
                --color: var(--base-100);
                --color-alt: var(--base-50);
                --border: var(--base-300);
                border-radius: var(--border-radius);
                /* border: 6px solid var(--border); */
                padding: 20px;
                background: var(--bg);
                color: var(--color-alt);
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                gap: 2rem 0;

                @media (max-width: 768px) {
                    flex-direction: row-reverse;
                    gap: 0 3rem;
                    justify-content: space-between;
                    align-items: center;
                }

                .icon {
                    color: var(--color);
                }
                .title {
                    font-size: var(--fs-xl);
                    font-weight: 900;
                    font-family: var(--family-head);

                    line-height: 3.4rem;
                }
                .description {
                    font-size: var(--fs-base);
                    font-weight: 500;
                    opacity: 0.8;
                }
            }

            .stat-emoji {
                --bg: var(--primary);
                --color: var(--primary-light);
                --color-alt: var(--primary-lighter);
                --border: var(--primary-dark);
            }
            .stat-popularity {
                --bg: var(--tertiary);
                --color: var(--tertiary-light);
                --color-alt: var(--tertiary-lighter);
                --border: var(--tertiary-dark);
            }
        }
    }
</style>

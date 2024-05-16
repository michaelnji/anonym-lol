<script lang="ts">
</script>

<div class="container">
    <div class="profile-head">
        <div class="profile-img">
            <img src="/op.svg" alt="" />
        </div>
        <div class="profile-info">
            <h3 class="name font-md">Cyphora</h3>
            <span class="badge status">
                <i class="bx bx-crown"></i>Pro member</span
            >
        </div>
    </div>
    <div class="profile-body">
        <div class="profile-link">
            <p>anonym.lol/cyphora112</p>
            <button class="btn btn-sm btn-outline">
                <i class="bx bx-copy-alt"></i></button
            >
        </div>
    </div>
    <div class="share-container">
        <!-- <h4 class="share-heading">Share Options</h4> -->
        <div>
            <div class="share-card">
                <i class="bx bx-lg bxs-face-mask"></i>
                <div>
                    <h4>Anonymous Message</h4>
                    <p>Share an anonymous link</p>
                </div>
            </div>
            <div class="share-card">
                <i class="bx bx-lg bxs-microphone-alt"></i>
                <div>
                    <h4>Ask Me Anything</h4>
                    <p>Get people to ask you questions</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        margin: 0 auto;
        padding: 2rem;
        border-radius: var(--border-radius);
        width: 100%;
        max-width: 45rem;
        background: var(--base-50);
        @media (max-width: 576px) {
            padding: 0;
            background: none;
        }

        .profile-img {
            height: clamp(4rem, 5vw, 5rem);
            width: clamp(4rem, 5vw, 5rem);
            overflow: hidden;
            border-radius: 9999px;
            background: var(--primary);

            img {
                width: 100%;
            }
        }
        .profile-head {
            display: flex;
            gap: 0 1rem;

            @media (max-width: 576px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .profile-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .name {
                        text-align: center;
                        margin: 10px 0;
                        line-height: 2rem;
                    }
                }
            }
        }
        .profile-body {
            margin-top: 2rem;
            .profile-link {
                color: var(--base-content);
                line-clamp: 1 !important;
                font-size: var(--fs-sm);
                padding: 19px;
                background: var(--base-100);
                border-radius: var(--border-radius);
                display: flex;
                gap: 20px;
                justify-content: space-between;
                max-width: 100%;
                align-items: center;

                p {
                    display: flex;
                    flex-direction: column;

                    gap: 2px 0;
                    span {
                        font-size: 15px;
                        opacity: 0.8;
                        color: var(--primary);
                    }
                }

                @media (max-width: 576px) {
                    margin: 0 auto;
                    padding: 0;
                    font-size: var(--fs-xs);
                    p,
                    span {
                        text-align: center;
                    }

                    width: fit-content;
                    padding-top: 10px;
                    gap: 10px 0;
                    
                }
                @media (max-width: 340px) {
                    flex-direction: column;
                    align-items: center;
                }
            }
            @media (max-width: 576px) {
                margin-top: 10px;
            }
        }
        .share-container {
            margin-top: 2rem;
            margin-bottom: 1rem;
            .share-heading {
                font-size: var(--fs-sm);
            }
            & > div {
                display: flex;
                padding: 1rem 0;
                align-items: center;

                @media (max-width: 992px) {
                    flex-direction: column;
                    .share-card {
                        width: 100%;
                    }
                }

                gap: 1rem;
                .share-card {
                    border-radius: var(--border-radius);

                    padding: 1rem;
                    h4 {
                        line-height: 2.22rem;
                        margin: 1rem 0 10px 0;
                    }
                    p {
                        font-size: var(--fs-xs);
                    }
                }
                .share-card:nth-of-type(1) {
                    background: var(--primary);
                    color: var(--primary-content);
                }
                .share-card:nth-of-type(2) {
                    background: var(--secondary);
                    color: var(--secondary-content);
                }
            }
        }
    }
</style>

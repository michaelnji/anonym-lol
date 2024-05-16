<script lang="ts">
</script>

<div class="container">
    <div class="profile-head">
        <div class="profile-img">
            <img src="/op.svg" alt="" />
        </div>
        <div class="profile-info">
            <h3 class="name font-md">Cyphora</h3>
            <span class="badge badge-primary font-bold status">
                <i class="bx bx-crown"></i>Pro member</span
            >
        </div>
    </div>
    <div class="profile-body">
        <div class="profile-link">
            <p>anonym.lol/<b>cyp0r15</b></p>
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

               

                @media (max-width: 576px) {
                    margin: 0 auto;
                    padding: 0;
                    font-size: var(--fs-xs);
                    p{
                        text-align: center;
                    }

                    width: fit-content;
                    padding-top: 10px;
                    gap: 10px;
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
                gap: 1rem;
                @media (max-width: 992px) {
                    flex-direction: column;
                    .share-card {
                        width: 100%;
                    }
                }

                .share-card {
                    --border-color:#000;
                    border-radius: var(--border-radius);
                    border: 6px solid var(--border-color);
                    box-shadow: var(--border-color) 8px 5px ;
                    padding: 1rem;
                    position: relative;
                    cursor: pointer;
                     transition: transform var(--duration) var(--easing);
                    h4 {
                        line-height: 2.22rem;
                        margin: 1rem 0 5px 0;
                    }
                    p {
                        font-size: var(--fs-xs);
                    }

                    &:active{
                        box-shadow: var(--border-color) -0px -0px ;
                        top: 5px;
        left: 5px;
                    }
                   @media (min-width:1024px) {
                     &:hover{
                        transform: translateY(-6px);
                    }
                   }
                }
                .share-card:nth-of-type(1) {
                    --border-color:var(--primary-dark);
                    background: var(--primary);
                    color: var(--primary-content);
                }
                .share-card:nth-of-type(2) {
                    --border-color:var(--secondary-dark);

                    background: var(--secondary);
                    color: var(--secondary-content);
                }
            }
        }
    }
</style>

<script lang=ts>
// import i from      
</script>

<div class="card">
    <img src="/achievements.svg" alt="" class="card-img">
    <div class="overlay">
       <div>
        <i class="bx bxs-crown bx-lg"></i>
         <h3 class="heading">Go Premium</h3>
        <p><a href="/pro#perks">See features <i class="bx bx-right-arrow-alt bx-sm"></i></a></p></div>
    </div>
</div>

<style scoped>
.card{
    margin-bottom: 1rem;
    border-radius: var(--border-radius);
    position: relative;
    height: 14rem;
    overflow: hidden;
    background: var(--secondary);
    width: 100%;
    img.card-img, .overlay{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
         transition:
                        transform var(--duration-longer) var(--easing);
    }
    &:hover{
        img.card-img{
            transform: scale(1.1);
        }
    }
    .overlay{
        z-index: 1;
        background: linear-gradient(0deg, #000000ee,#000000b6, transparent);
        height: 100%;
        border-radius: var(--border-radius);
        display: flex;
        align-items: end;
        padding: 10px;
        i{

            color: var(--primary-50);
        }
        .heading{
            color: var(--primary-50);
            /* font-family: var(--family-body); */
            font-size: 2rem;
            line-height: 3.22rem;
            font-weight: 900;
            text-transform: capitalize;
        }
       a {
            color: var(--primary-50);
            font-weight: 500;
            opacity: 0.8;
            display: flex;
            align-items: center;
            gap: 0 2px;

        }
    }

}
</style>
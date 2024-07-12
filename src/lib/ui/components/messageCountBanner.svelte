<script lang=ts>
     
</script>

<div class="container">
    <h3><span>999</span> new messages</h3> <i class="bx bx-lg bxs-bell-ring hidden-mobile"></i>
</div>

<style scoped>
.container{
    
    border-radius: var(--border-radius);
    padding: 25px;
    background: var(--base-50);
    max-width: 45rem;
    width: 100%;
    margin: clamp(1rem,2vw,3rem) auto 0 auto;
    height: fit-content;
    max-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 2rem;
    h3{
        font-size: var(--fs-lg);
        line-height: 2rem;
        font-family: var(--family-body);
        font-weight: 500;
       
        span{
            font-size: var(--fs-xl);
            color: var(--tertiary);
            font-weight: 700;
            margin-right: 10px;
        }
         @media (max-width:576px) {
            font-size: var(--fs-base);
            
            span{
                font-size: var(--fs-lg);
            }
            
        }
    }
    i{
        color: var(--tertiary) !important;

    }
}
</style>
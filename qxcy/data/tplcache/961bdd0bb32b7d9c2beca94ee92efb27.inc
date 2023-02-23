{dede:list pagesize ='3'}
                    <h1>{dede:field.title/}</h1>
                    <h3>{dede:field.description}</h3>
                    <p>{dede:field.body/}</p>
                    {/dede:list}
                    <div class="button">
                        <button><a href="[field:typelink/]">查看更多</a></button>
                    </div>
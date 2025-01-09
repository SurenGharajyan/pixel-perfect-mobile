<script lang="ts">
    // separated from UI to be dynamically change in potential sitations
    let items = [
        'In-game bonuses and free spins',
        'Crypto deposit still not credited?',
        'EigerX VIP program overview',
        'Achievements and awards'
    ];

    let searchQuery = '';

    // will
    let filteredItems = () => {
        return items.filter((item: string) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    };
</script>

<div class="mt-4 rounded-[10px] p-2 bg-black box-border min-h-[236px] max-h-[236px] font-inter-regular">
    <input
            bind:value={searchQuery}
            class="w-full rounded-[8px] pl-4 pr-4 pt-3 pb-3 bg-darkBlueGray box-border
            placeholder:text-lightGray placeholder:text-sm
            bg-custom-search-icon bg-[position:calc(100%-10px)_center]
            bg-no-repeat outline-none font-inter-semi-bold text-sm"
            placeholder="Search for help"
    />
    <ul class="list-none p-0 pt-2">
        {#each filteredItems() as item}
            <li class="
            flex justify-between text-lightGray p-3 px-4 text-sm leading-[21px] cursor-pointer
            transition-transform duration-75 ease-in active:scale-[0.99] active:bg-origin
            active:text-black active: rounded-[10px]"
            >
                <span>{item}</span>
                <div class="w-[6px] h-[6px] mx-0 m-auto border-t-2 border-r-2 rotate-45 border-origin"></div>
            </li>
        {/each}
    </ul>
</div>

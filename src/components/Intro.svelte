<script lang="ts">
    import EigerXLogo from "./EigerXLogo.svelte";
</script>


<div class="w-full mx-auto pl-7 pt-7 pr-7 pb-0 flex flex-col items-center">
    <div class="flex flex-row justify-between w-full">
        <!-- Separated for potential modification -->
        <EigerXLogo />

        <div class="flex justify-center">
            <img src="/images/header/person1.webp" alt="Person 1" class="w-10 h-10 rounded-full m-0 relative left-2 z-3 animate-idle-up-down-1"/>
            <img src="/images/header/person2.webp" alt="Person 2" class="w-10 h-10 rounded-full m-0 relative left-1 z-2 animate-idle-up-down-2"/>
            <!-- Note: The last one doesn't have any border around the person image -->
            <img src="/images/header/person3.webp" alt="Person 3" class="w-10 h-10 rounded-full m-0 relative z-1 animate-idle-up-down-3"/>
        </div>
    </div>

    <div class="w-full font-sf-pro-bold pt-hundred ">
        <p class="text-display font-bold opacity-70 leading-[38px]">Hello there</p>
        <p class="text-display leading-[38px]">How can we help?</p>
    </div>
</div>

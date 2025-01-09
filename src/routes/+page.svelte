<script lang="ts">
    import '../app.css';
    import '../global.css'
    import Intro from '../components/Intro.svelte';
    import MessageInput from '../components/MessageInput.svelte';
    import HelpSection from '../components/HelpSection.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<main class="w-full h-screen flex flex-col overflow-hidden relative">
    <!-- Added two independent background gradients for styling -->
    <div class="bg-origin bg-gradient-to-br from-primary-gradient to-[rgba(26,26,34,0.9)] w-full absolute h-[388px] z-[-1]"></div>
    <div class="bg-gradient-to-br from-bottom-primary-gradient to-bottom-secondary-gradient w-full h-full absolute top-[388px] z-[-1]"></div>
    <!-- Added two independent background gradients for styling -->


    <div class="p-6 grid grid-cols-1 flex-grow overflow-hidden">
        <Intro/>
        <MessageInput />
        <HelpSection />
        <Footer />
    </div>

</main>

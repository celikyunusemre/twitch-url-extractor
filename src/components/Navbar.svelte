<script lang="ts">
    import { Navbar, NavLi, NavUl, DarkMode } from "flowbite-svelte";
</script>

<Navbar>
    <DarkMode />
    <NavUl>
        <NavLi href="/"><i class="fa-solid fa-house mr-2 sm:h-9"></i>Home</NavLi
        >
        <NavLi href="https://github.com/celikyunusemre" target="_blank"
            ><i class="fa-brands fa-github mr-2 sm:h-9"></i>Github</NavLi
        >
        <NavLi
            href="https://www.linkedin.com/in/yunusemrecelik21/"
            target="_blank"
            ><i class="fa-brands fa-linkedin-in mr-2 sm:h-9"></i>LinkedIn</NavLi
        >
        <NavLi href="mailto:yunusemrecelikk21@gmail.com"
            ><i class="fa-solid fa-at mr-2 sm:h-9"></i>Mail</NavLi
        >
    </NavUl>
</Navbar>

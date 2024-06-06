<template>
    <!-- ========== HEADER ========== -->
    <header
        class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-2 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav class="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global">
            <div class="flex items-center justify-between">
                <img src="../assets/Logoartour.png" alt="Logo" class="flex-none" style="width: 50px; height: auto;">
            </div>

            <div class="flex items-center ml-auto sm:order-3">
                <!-- Mover NotificationDropDown y ProfileDropdown aquí -->
                <div class="flex items-center">
                    <NotificationDropDown />
                    <ProfileDropdown class="ml-4" />
                </div>

                <!-- Botón de hamburguesa -->
                <button type="button"
                    class="ml-2 p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:hidden"
                    data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                    <span class="sr-only">Toggle Navigation</span>
                    <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" x2="21" y1="6" y2="6" />
                        <line x1="3" x2="21" y1="12" y2="12" />
                        <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                    <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>

            <div class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-neutral-800 dark:border-r-gray-700 sm:dark:border-r-transparent"
                tabindex="-1" data-hs-overlay-close-on-resize>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
                    <a class="px-6 py-3 sm:px-3 font-medium text-blue-600 dark:text-blue-500" href="#"
                        aria-current="page">Home</a>
                    <a class="px-6 py-3 sm:px-3 font-medium text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                        href="#">Torneos</a>
                    <a class="px-6 py-3 sm:px-3 font-medium text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                        href="#">Ranking</a>
                    <a class="px-6 py-3 sm:px-3 font-medium text-gray-500 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                        href="#">Noticias</a>
                </div>
            </div>
        </nav>
    </header>

    <SidebarMobileMenu />
    <!-- ========== END HEADER ========== -->
</template>

<script setup>
import ProfileDropdown from './ProfileDropdown.vue';
import NotificationDropDown from './NotificationDropDown.vue';
import SidebarMobileMenu from './SidebarMobileMenu.vue';
</script>

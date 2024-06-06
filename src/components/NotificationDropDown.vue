<template>
    <div class="hs-dropdown relative inline-flex">

        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>




        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
            aria-labelledby="hs-dropdown-custom-trigger">

            <div class="space-y-3">
                <!-- Toast -->
                <div class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
                    role="alert">
                    <div class="flex p-4">
                        <div class="flex-shrink-0">
                            <svg class="size-5 text-gray-600 mt-1 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                            </svg>
                        </div>
                        <div class="ms-4">
                            <h3 class="text-gray-800 font-semibold dark:text-white">
                                App notifications
                            </h3>
                            <div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                                Notifications may include alerts, sounds and icon badges.
                            </div>
                            <div class="mt-4">
                                <div class="flex space-x-3">
                                    <button type="button"
                                        class="text-blue-600 decoration-2 hover:underline font-medium text-sm focus:outline-none focus:underline dark:text-blue-500">
                                        Don't allow
                                    </button>
                                    <button type="button"
                                        class="text-blue-600 decoration-2 hover:underline font-medium text-sm focus:outline-none focus:underline dark:text-blue-500">
                                        Allow
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Toast -->

                <!-- Toast -->
                <div class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
                    role="alert">
                    <div class="flex p-4">
                        <div class="flex-shrink-0">
                            <svg class="flex-shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                                </path>
                            </svg>
                        </div>
                        <div class="ms-3">
                            <p class="text-sm text-gray-700 dark:text-neutral-400">
                                Your app preferences has been successfully updated.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- End Toast -->
            </div>

        </div>
    </div>
</template>
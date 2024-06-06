<template>
    <!-- Sidebar -->
    <div id="docs-sidebar"
        class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden lg:hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700">
        <div class="flex items-center justify-center">
            <img src="../assets/Logoartour.png" alt="Logo" class="flex-none" style="width: 50px; height: auto;">
        </div>
        <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul class="space-y-1.5">
                <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                        href="#">
                        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Home
                    </a>
                </li>

                <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#">
                        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16ZM12 6C11.7159 6 11.5259 6.34084 11.1459 7.02251L11.0476 7.19887C10.9397 7.39258 10.8857 7.48944 10.8015 7.55334C10.7173 7.61725 10.6125 7.64097 10.4028 7.68841L10.2119 7.73161C9.47396 7.89857 9.10501 7.98205 9.01723 8.26432C8.92945 8.54659 9.18097 8.84072 9.68403 9.42898L9.81418 9.58117C9.95713 9.74833 10.0286 9.83191 10.0608 9.93531C10.0929 10.0387 10.0821 10.1502 10.0605 10.3733L10.0408 10.5763C9.96476 11.3612 9.92674 11.7536 10.1565 11.9281C10.3864 12.1025 10.7318 11.9435 11.4227 11.6254L11.6014 11.5431C11.7978 11.4527 11.8959 11.4075 12 11.4075C12.1041 11.4075 12.2022 11.4527 12.3986 11.5431L12.5773 11.6254C13.2682 11.9435 13.6136 12.1025 13.8435 11.9281C14.0733 11.7536 14.0352 11.3612 13.9592 10.5763L13.9395 10.3733C13.9179 10.1502 13.9071 10.0387 13.9392 9.93531C13.9714 9.83191 14.0429 9.74833 14.1858 9.58118L14.316 9.42898C14.819 8.84072 15.0706 8.54659 14.9828 8.26432C14.895 7.98205 14.526 7.89857 13.7881 7.73161L13.5972 7.68841C13.3875 7.64097 13.2827 7.61725 13.1985 7.55334C13.1143 7.48944 13.0603 7.39258 12.9524 7.19887L12.8541 7.02251C12.4741 6.34084 12.2841 6 12 6Z"
                                        fill="#1C274C" />
                                    <path
                                        d="M4.49517 12.9946L2.99206 14.551C2.45194 15.1102 2.18188 15.3898 2.08843 15.6266C1.87548 16.1662 2.05772 16.7648 2.52138 17.0486C2.72486 17.1732 3.09187 17.212 3.82589 17.2897C4.2403 17.3335 4.44755 17.3554 4.6211 17.4219C5.00966 17.5709 5.31191 17.8838 5.45575 18.2861C5.52 18.4658 5.54117 18.6804 5.5835 19.1095C5.65848 19.8695 5.69597 20.2495 5.81628 20.4602C6.09042 20.9403 6.66852 21.129 7.18967 20.9085C7.41837 20.8117 7.68843 20.5321 8.22855 19.9729L10.7106 17.4029C8.01306 16.9924 5.73225 15.314 4.49517 12.9946Z"
                                        fill="#1C274C" />
                                    <path
                                        d="M13.2894 17.4029L15.7715 19.9729C16.3116 20.5321 16.5816 20.8117 16.8103 20.9085C17.3315 21.129 17.9096 20.9403 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5709 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2897C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.551L19.5048 12.9946C18.2677 15.314 15.9869 16.9924 13.2894 17.4029Z"
                                        fill="#1C274C" />
                                </g>
                            </svg>
                        </svg>
                        Torneos
                    </a>
                </li>

                <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#">
                        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path opacity="0.4" d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" fill="#292D32" />
                                <path
                                    d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
                                    fill="#292D32" />
                                <path opacity="0.4"
                                    d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
                                    fill="#292D32" />
                                <path
                                    d="M15.0097 4.84999C15.3197 4.53999 15.4397 4.16999 15.3397 3.84999C15.2397 3.52999 14.9297 3.3 14.4897 3.23L13.5297 3.06999C13.4897 3.05999 13.3997 2.99998 13.3797 2.95998L12.8497 1.89998C12.4497 1.08998 11.5397 1.08998 11.1397 1.89998L10.6097 2.95998C10.5897 2.99998 10.4997 3.05999 10.4597 3.06999L9.49968 3.23C9.05968 3.3 8.75969 3.52999 8.64969 3.84999C8.54969 4.16999 8.66968 4.53999 8.97968 4.84999L9.71969 5.59999C9.74969 5.62999 9.78968 5.75 9.77968 5.79L9.56968 6.70998C9.40968 7.38998 9.66968 7.69997 9.83968 7.82997C10.0097 7.94997 10.3797 8.10999 10.9897 7.74999L11.8897 7.21999C11.9297 7.18999 12.0597 7.18999 12.0997 7.21999L12.9997 7.74999C13.2797 7.91999 13.5097 7.96999 13.6897 7.96999C13.8997 7.96999 14.0497 7.88997 14.1397 7.82997C14.3097 7.70997 14.5697 7.39998 14.4097 6.70998L14.1997 5.79C14.1897 5.74 14.2197 5.62999 14.2597 5.59999L15.0097 4.84999Z"
                                    fill="#292D32" />
                            </g>
                        </svg>
                        Ranking
                    </a>
                </li>

                <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z" />
                        </svg>

                        Noticias
                    </a>
                </li>

            </ul>
        </nav>
    </div>
    <!-- End Sidebar -->
</template>

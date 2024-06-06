<template>
    <Navbar />

    <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
        <div class="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <!-- your content goes here ... -->
            <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">


                        <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                            <!-- Profile section -->
                            <div class="py-6 px-4 sm:p-6 lg:pb-8">
                                <div>
                                    <h2 class="text-lg font-medium leading-6 text-gray-900">Completa tu Perfil</h2>

                                    <div class="mt-6 flex flex-col lg:flex-row">

                                        <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                                            <p class="text-sm font-medium text-gray-700" aria-hidden="true">Photo</p>
                                            <div class="mt-1 lg:hidden">
                                                <div class="flex items-center">
                                                    <div class="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                                        aria-hidden="true">
                                                        <img class="h-full w-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80"
                                                            alt="">
                                                    </div>
                                                    <div class="ml-5 rounded-md shadow-sm">
                                                        <div
                                                            class="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                                                            <label for="mobile-user-photo"
                                                                class="pointer-events-none relative text-sm font-medium leading-4 text-gray-700">
                                                                <span>Change</span>
                                                                <span class="sr-only"> user photo</span>
                                                            </label>
                                                            <input id="mobile-user-photo" name="user-photo" type="file"
                                                                class="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="relative hidden overflow-hidden rounded-full lg:block">
                                                <img class="relative h-40 w-40 rounded-full"
                                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80"
                                                    alt="">
                                                <label for="desktop-user-photo"
                                                    class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100">
                                                    <span>Change</span>
                                                    <span class="sr-only"> user photo</span>
                                                    <input type="file" id="desktop-user-photo" name="user-photo"
                                                        class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0">
                                                </label>
                                            </div>
                                        </div>

                                        <div class="flex-grow space-y-6">


                                            <div>

                                            </div>
                                        </div>


                                    </div>

                                    <div class="mt-6 grid grid-cols-12 gap-6">
                                        <div class="col-span-12 sm:col-span-6">
                                            <label for="first-name"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Nombre</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                                placeholder="Nombre">
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">
                                            <label for="last-name"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Apellidos</label>
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                                placeholder="Apellidos">
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">
                                            <label for="rut"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Rut</label>
                                            <input type="text" name="rut" id="rut" autocomplete="off"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                                placeholder="11.111.111-1">
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">
                                            <label for="email"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Correo
                                                electrónico</label>
                                            <input type="email" name="email" id="email" autocomplete="emails"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                                placeholder="myemail@mail.com">
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">
                                            <label for="phone"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Teléfono</label>
                                            <input type="email" name="phone" id="phone" autocomplete="tel"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                                placeholder="999999999">
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">

                                            <label for="gender"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Sexo</label>
                                            <!-- Select -->
                                            <select name="gender"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
                                                <option selected="">Selecciona</option>
                                                <option>Femenino</option>
                                                <option>Masculino</option>
                                                <option>Otro</option>
                                            </select>
                                            <!-- End Select -->
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">
                                            <label for="birthdate"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Fecha de
                                                nacimiento</label>
                                            <input type="date" name="birthdate" id="birthdate" autocomplete="off"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-12 sm:col-span-6">

                                            <label for="category"
                                                class="block text-sm font-medium text-gray-700 dark:text-white">Categoria</label>
                                            <!-- Select -->
                                            <select name="category"
                                                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
                                                <option selected="">Selecciona</option>
                                                <option>Honor</option>
                                                <option>Primera</option>
                                                <option>Segunda</option>
                                                <option>Tercera</option>
                                                <option>Cuarta</option>
                                                <option>Quinta</option>
                                            </select>
                                            <!-- End Select -->
                                        </div>

                                    </div>






                                </div>


                                <div class="mt-6 flex flex-col lg:flex-row">

                                    <div class="flex-grow space-y-6">


                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">Acerca de
                                                mí</label>
                                            <div class="mt-1">
                                                <textarea id="about" name="about" rows="3"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"></textarea>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                            <!-- Privacy section -->
                            <div class="divide-y divide-gray-200 pt-6">

                                <div class="mt-4 flex justify-end py-4 px-4 sm:px-6">

                                    <button type="submit"
                                        class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Guardar</button>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
</template>


<script setup>
import Navbar from '../components/Navbar.vue'
</script>
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


        <!-- Hire Us -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-xl mx-auto">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
                        Completa tu perfil
                    </h1>
                </div>

                <div class="mt-12">
                    <!-- Form -->
                    <form>

                        <div class="grid gap-4 lg:gap-6 justify-center items-center">
                            <!-- Grid -->
                            <div class="grid grid-cols-1 gap-4 lg:gap-6">
                                <div class="mt-6 flex flex-col lg:flex-row text-center">

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
                            </div>
                        </div>


                        <div class="mt-4 grid gap-4 lg:gap-6">
                            <!-- Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label for="first-name"
                                        class="block text-sm font-medium text-gray-700 dark:text-white">Nombre</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                        placeholder="Nombre">
                                </div>

                                <div>
                                    <label for="last-name"
                                        class="block text-sm font-medium text-gray-700 dark:text-white">Apellidos</label>
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                        placeholder="Apellidos">
                                </div>
                            </div>
                            <!-- End Grid -->

                            <!-- Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label for="rut"
                                        class="block text-sm font-medium text-gray-700 dark:text-white">Rut</label>
                                    <input type="text" name="rut" id="rut" autocomplete="off"
                                        class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                        placeholder="11.111.111-1">
                                </div>

                                <div>
                                    <label for="email"
                                        class="block text-sm font-medium text-gray-700 dark:text-white">Correo
                                        electrónico</label>
                                    <input type="email" name="email" id="email" autocomplete="emails"
                                        class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                        placeholder="myemail@mail.com">
                                </div>
                            </div>
                            <!-- End Grid -->

                            <!-- Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label for="phone"
                                        class="block text-sm font-medium text-gray-700 dark:text-white">Teléfono</label>
                                    <input type="email" name="phone" id="phone" autocomplete="tel"
                                        class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                        placeholder="999999999">
                                </div>

                                <div>
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
                            </div>
                            <!-- End Grid -->

                            <!-- Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label for="birthdate"
                                        class="block text-sm font-medium text-gray-700 dark:text-white">Fecha de
                                        nacimiento</label>
                                    <input type="date" name="birthdate" id="birthdate" autocomplete="off"
                                        class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
                                </div>

                                <div>
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
                            <!-- End Grid -->

                            <div>
                                <label for="about" class="block mb-2 text-sm text-gray-700 font-medium">Acerca de mí</label>
                                <textarea id="about" name="about" rows="4"
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"></textarea>
                            </div>
                        </div>
                        <!-- End Grid -->

                        <!-- Checkbox -->
                        <div class="mt-3 flex">
                            <div class="flex">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                    class="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                            </div>
                            <div class="ms-3">
                                <label for="remember-me" class="text-sm text-gray-600">Al llenar estos campos acepto los<a
                                        class="text-blue-600 decoration-2 hover:underline font-medium" href="#"> Términos y
                                        condiciones</a></label>
                            </div>
                        </div>
                        <!-- End Checkbox -->

                        <div class="mt-6 grid">
                            <button type="submit"
                                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Guardar</button>
                        </div>


                    </form>
                    <!-- End Form -->
                </div>
            </div>
        </div>
        <!-- End Hire Us -->



        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="profile-container">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
                        Perfil completado
                    </h1>
                </div>

                <div class="mt-12">
                    <!-- Perfil -->
                    <div class="profile-info">
                        <div class="profile-info-item">
                            <label for="first-name"
                                class="block text-sm font-medium text-gray-700 dark:text-white">Nombre</label>
                            <p
                                class="mt-1 block rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                John</p>
                        </div>

                        <div class="profile-info-item">
                            <label for="last-name"
                                class="block text-sm font-medium text-gray-700 dark:text-white">Apellidos</label>
                            <p
                                class="mt-1 block rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                Doe</p>
                        </div>


                        <!-- Foto -->
                        <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                            <p class="text-sm font-medium text-gray-700" aria-hidden="true">Photo</p>
                            <img class="h-full w-full rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="Profile Picture">
                        </div>

                        <!-- Información -->
                        <div class="flex-grow space-y-6">
                            <!-- Nombre -->
                            <div>
                                <label for="first-name"
                                    class="block text-sm font-medium text-gray-700 dark:text-white">Nombre</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    John</p>
                            </div>

                            <!-- Apellidos -->
                            <div>
                                <label for="last-name"
                                    class="block text-sm font-medium text-gray-700 dark:text-white">Apellidos</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    Doe</p>
                            </div>

                            <!-- Rut -->
                            <div>
                                <label for="rut" class="block text-sm font-medium text-gray-700 dark:text-white">Rut</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    11.111.111-1</p>
                            </div>

                            <!-- Correo electrónico -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">Correo
                                    electrónico</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    johndoe@example.com</p>
                            </div>

                            <!-- Teléfono -->
                            <div>
                                <label for="phone"
                                    class="block text-sm font-medium text-gray-700 dark:text-white">Teléfono</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    123456789</p>
                            </div>

                            <!-- Sexo -->
                            <div>
                                <label for="gender"
                                    class="block text-sm font-medium text-gray-700 dark:text-white">Sexo</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    Masculino</p>
                            </div>

                            <!-- Fecha de nacimiento -->
                            <div>
                                <label for="birthdate" class="block text-sm font-medium text-gray-700 dark:text-white">Fecha
                                    de nacimiento</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    01/01/1990</p>
                            </div>

                            <!-- Categoría -->
                            <div>
                                <label for="category"
                                    class="block text-sm font-medium text-gray-700 dark:text-white">Categoría</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    Primera</p>
                            </div>

                            <!-- Acerca de mí -->
                            <div>
                                <label for="about" class="block text-sm font-medium text-gray-700 dark:text-white">Acerca de
                                    mí</label>
                                <p
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:outline-none focus:ring-sky-500 sm:text-sm">
                                    Soy un entusiasta de la tecnología con experiencia en desarrollo web.</p>
                            </div>
                        </div>

                        <!-- Agregar más elementos aquí -->

                    </div>
                    <!-- End Perfil -->






                    <!-- INICIO PERFIL-->

                    <div class="bg-gray-100 dark:bg-gray-900 py-10 px-4 md:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div class="flex flex-col md:flex-row">
                                <div class="bg-[#1e40af] text-white p-8 flex flex-col items-center justify-center">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mb-4">
                                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" />
                                        <span
                                            class="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
                                    </span>
                                    <h2 class="text-2xl font-bold mb-2">John Doe</h2>
                                    <p class="text-gray-300">johndoe@example.com</p>
                                </div>
                                <div class="p-8 flex flex-col gap-4">

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Nombre
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                John Doe
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Edad
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                32.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Tennis Ranking
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                <span class="text-gray-700 dark:text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="w-5 h-5 mr-2 text-yellow-500">
                                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                                        <path d="M4 22h16"></path>
                                                        <path
                                                            d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22">
                                                        </path>
                                                        <path
                                                            d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22">
                                                        </path>
                                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                                    </svg>
                                                    #15
                                                </span>
                                            </p>
                                        </div>
                                    </div>


                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Acerca de mí
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                Soy el mejor jugador del mundo.
                                            </p>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- END PERFIL-->



                    <!--INICIO PERFIL2 -->
                    <div class="bg-green-50 dark:bg-gray-900 py-10 px-4 md:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div class="flex flex-col md:flex-row">
                                <div class="bg-green-500 text-white p-8 flex flex-col items-center justify-center">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mb-4">
                                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" />
                                        <span
                                            class="flex h-full w-full items-center justify-center rounded-full bg-gray-900">JD</span>
                                    </span>
                                    <h2 class="text-2xl font-bold mb-2">John Doe</h2>
                                    <p class="text-gray-300">johndoe@example.com</p>
                                </div>
                                <div class="p-8 flex flex-col gap-4">

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-green-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Nombre
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                John Doe
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-green-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Edad
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                32
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-green-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Tennis Ranking
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                <span class="text-gray-700 dark:text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="w-5 h-5 mr-2 text-yellow-500">
                                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                                        <path d="M4 22h16"></path>
                                                        <path
                                                            d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22">
                                                        </path>
                                                        <path
                                                            d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22">
                                                        </path>
                                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                                    </svg>
                                                    #15
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="max-w-xs flex flex-col bg-white border border-t-4 border-green-600 shadow-sm rounded-xl">
                                        <div class="p-4 md:p-5">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Acerca de mí
                                            </h3>
                                            <p class="mt-2 text-gray-500">
                                                Soy el mejor jugador del mundo.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END PERFIL2-->




                </div>
            </div>
        </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
</template>


<script setup>
import Navbar from '../components/Navbar.vue'
</script>


<style>
/* Estilos para el perfil */
.profile-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-info {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.profile-info-item {
    width: calc(50% - 10px);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 15px;
}

.profile-info-item label {
    font-weight: bold;
    color: #333;
}

.profile-info-item p {
    margin-top: 5px;
    color: #666;
}
</style>
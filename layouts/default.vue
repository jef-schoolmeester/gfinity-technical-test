<template>
    <div class="flex flex-col">
        <nav class="bg-zinc-950 flex justify-center fixed w-full shadow-md shadow-zinc-950">
            <div class="flex w-full justify-between items-center lg:max-w-5xl">
                <div class="h-16 w-16 flex justify-center items-center bg-zinc-900">
                    <img src="/menu.svg" />
                </div>
                <img src="/RS-logo.png" class="max-h-5 mr-4"/>
            </div>
        </nav>
        <main class="pt-16 text-white w-full flex justify-center lg:min-h-screen">
            <Nuxt />
        </main>
    </div>
</template>
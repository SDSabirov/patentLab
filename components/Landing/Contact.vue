<template>
    <section class="w-full bg-white py-12">
        <div class="w-full max-w-screen-xl px-4 md:px-0 mx-auto flex flex-col items-center">
            <h2 class="text-2xl md:text-4xl font-semibold text-center text-primary max-w-2xl"><span class="text-black">Brendingiz</span> nomidan yana qanday bizneslar foydalanyabdi?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 w-full">
                <form class="w-full flex flex-col gap-6">
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="w-full">
                            <label for="email" class="text-xl text-primary">Email</label>
                            <input type="email" class="rounded-full border border-gray-200 h-12 p-2 w-full" placeholder="Email">
                        </div>
                        <div class="w-full">
                            <label for="phone" class="text-xl text-primary">Telefon</label>
                            <input type="text" class="rounded-full border border-gray-200 h-12 p-2 w-full" placeholder="Telefon raqam">
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="w-full">
                            <label for="name" class="text-xl text-primary">Ism</label>
                            <input type="text" class="rounded-full border border-gray-200 h-12 p-2 w-full" placeholder="Ismingiz">
                        </div>
    
                    </div>
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="w-full">
                            <label for="name" class="text-xl text-primary">Brend nomi</label>
                            <input type="text" class="rounded-full border border-gray-200 h-12 p-2 w-full" placeholder="Brend nomi">
                        </div>
    
                    </div>
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="w-full">
                            <button type="submit" class="rounded-full border border-gray-200 w-full bg-primary text-white text-2xl py-2">
                                Bepul tekshirish
                            </button>  
                        </div>
    
                    </div>
                </form>
                <div class="w-full h-full flex items-center justify-start hidden md:flex">
                    <img src="/assets/images/contact.png" alt="contact illustration" class="object-cover">
                </div>
            </div>
        </div>
    </section>
</template>
<template>
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class=" bg-gray-100 rounded-lg p-8 mx-auto max-w-lg">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">ログイン</h2>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">メールアドレス</label>
                <input type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">パスワード</label>
                <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg">ログイン</button>
            <br>
            <a class="text-xs text-blue-500 mt-3 w-full mx-auto hover:underline" href="#">パスワードをお忘れですか?</a>
            <p class="text-xs text-gray-500 mt-3">アカウントをお持ちでない方<router-link to="/signup" class="text-blue-500 hover:underline">こちらから</router-link></p>
            <button class="text-white bg-yellow-500 border-0 mt-3 py-2 px-8 w-full focus:outline-none hover:bg-yellow-600 rounded text-lg">ゲストユーザーとしてログイン</button>
        </div>
        </div>
</template>
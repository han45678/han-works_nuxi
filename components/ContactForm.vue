<script setup lang="ts">
import { ref } from 'vue'
import emailjs from 'emailjs-com'

// ---- 型別定義 ----
interface FormData {
    name: string
    email: string
    phone?: string
    message: string
}

// ---- 表單資料 ----
const form = ref < FormData > ({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const loading = ref(false)

// ---- EmailJS 設定 ----
const SERVICE_ID = 'service_20l6u5b'
const TEMPLATE_TO_USER = 'template_8u7jvnv' // 給留言者
const TEMPLATE_TO_ME = 'template_me'     // 給自己
const PUBLIC_KEY = '你的_public_key'

const sendEmail = async () => {
    if (!form.value.name || !form.value.email || !form.value.message) {
        alert('請填寫所有必填欄位')
        return
    }

    loading.value = true

    try {
        // Step 1: 寄給留言者
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_TO_USER,
            {
                to_email: form.value.email,
                to_name: form.value.name
            },
            PUBLIC_KEY
        )

        console.log('✅ 成功寄給留言者')

        // Step 2: 寄給自己
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_TO_ME,
            {
                from_name: form.value.name,
                from_email: form.value.email,
                from_phone: form.value.phone || '未提供',
                message: form.value.message
            },
            PUBLIC_KEY
        )

        alert('留言已成功寄出，確認信已寄給留言者！')
        form.value = { name: '', email: '', phone: '', message: '' }
    } catch (err) {
        console.error('❌ 寄信錯誤', err)
        alert('寄信失敗，請確認 Email 是否正確')
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <form @submit.prevent="sendEmail" class="max-w-md mx-auto p-4 border rounded-lg shadow space-y-3">
        <h2 class="text-lg font-semibold mb-2">聯絡我們</h2>

        <input v-model="form.name" type="text" placeholder="您的名字（必填）" class="w-full p-2 border rounded" required />

        <input v-model="form.email" type="email" placeholder="您的信箱（必填）" class="w-full p-2 border rounded" required />

        <input v-model="form.phone" type="tel" placeholder="聯絡電話（選填）" class="w-full p-2 border rounded" />

        <textarea v-model="form.message" placeholder="留言內容（必填）" class="w-full p-2 border rounded" required></textarea>

        <button type="submit" :disabled="loading"
            class="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 disabled:opacity-50">
            {{ loading ? '寄送中...' : '送出留言' }}
        </button>
    </form>
</template>

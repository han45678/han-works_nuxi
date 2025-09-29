<script setup lang="ts">
import { ref } from 'vue';

interface WorkItem {
    id: number;
    title: string;
    text: string;
    link: string;
    detail: boolean;
    quantity?: number;
}

// If your project provides a typed store import, replace this declaration with:
// import { useCounterStore } from '@/stores/counter'
declare function useCounterStore(): {
    setWinInfo: (item: WorkItem) => void;
    setWinOpen: (open: boolean) => void;
};

const commonStore = useCounterStore();

const info = ref<WorkItem[]>([
    {
        id: 1,
        title: 'BranDoor',
        text: '這是在高飛資訊科技時製作的名片探索網站',
        link: '',
        detail: true,
        quantity: 9
    },
    {
        id: 2,
        title: '學習王遊戲網站',
        text: '這是在創意未來時製作的兒童遊戲網站',
        link: '',
        detail: true,
        quantity: 9
    },
    {
        id: 3,
        title: 'Ai英文練習機器人',
        text: '這是在創意未來時製作的基底為chatGPT的Ai練習對話機器人',
        link: '',
        detail: true,
        quantity: 2
    },
    {
        id: 4,
        title: '文福儀式感',
        text: '與立炘數位合作完成的建案網站',
        link: 'https://ritualsense.tw/',
        detail: false
    },
    {
        id: 5,
        title: '善寬靜の界',
        text: '與立炘數位合作完成的建案網站',
        link: 'https://calmer.tw/',
        detail: false
    },
    {
        id: 6,
        title: '昀集富昱',
        text: '與立炘數位合作完成的建案網站',
        link: 'https://han45678.github.io/HanWorks/cpm/yunjee_fuyu/',
        detail: false
    },
    {
        id: 7,
        title: '統元極美',
        text: '與立炘數位合作完成的建案網站',
        link: 'https://han45678.github.io/HanWorks/cpm/tongyuan/',
        detail: false
    },
    {
        id: 8,
        title: '麗晶ONE',
        text: '與立炘數位合作完成的建案網站',
        link: 'https://han45678.github.io/HanWorks/cpm/lijing_group/',
        detail: false
    },
    {
        id: 9,
        title: '白隅',
        text: '與立炘數位合作完成的建案網站',
        link: 'https://han45678.github.io/HanWorks/cpm/baiyu/',
        detail: false
    },
    {
        id: 10,
        title: '電子聯絡簿',
        text: '這是在創意未來時製作的電子聯絡簿',
        link: '',
        detail: true,
        quantity: 1
    },
    {
        id: 11,
        title: 'Jins活動網站',
        text: '這個網頁在跳跳股份有限公司時製作打造的活動網站，融入日系清新氛圍與女性視角，展現細緻溫柔風格',
        link: 'https://www.jins.com/tw/p/igarishinobu',
        detail: false
    },
    {
        id: 12,
        title: '渥勝集團網站',
        text: '這個網頁在雲端數位時製作打造的企業網站，主打的就是展現自我，把自我學習落實成具體行動， 質量兼具的影響力就能逐漸加乘散佈的力道與效能。',
        link: 'https://www.awesomegroup.tw/',
        detail: false
    },
    {
        id: 13,
        title: '駿宥代書事務所',
        text: '與大將整合行銷&四點梨子共同完成的公司網站',
        link: 'https://www.happymoney.com.tw/',
        detail: false
    },
    {
        id: 14,
        title: '強強菌',
        text: '與大將整合行銷&四點梨子共同完成的公司網站',
        link: 'https://www.ycad1948.com.tw/',
        detail: false
    },
    {
        id: 15,
        title: '台中影視協會',
        text: '與大將整合行銷&四點梨子共同完成的公司網站',
        link: 'https://web.tfdf.org.tw/',
        detail: false
    },
    {
        id: 16,
        title: '冠立機械',
        text: '與大將整合行銷&四點梨子共同完成的公司網站',
        link: 'https://www.toppower.com.tw/',
        detail: false
    },
    {
        id: 17,
        title: '大豐環保',
        text: '與格子數位共同完成的公司網站',
        link: 'https://www.df-recycle.com/',
        detail: false
    }
]);

const images = import.meta.glob('/assets/images/works/*.webp', {
    eager: true,
    as: 'url'
}) as Record<string, string>;

function openWin(item: WorkItem) {
    if (!item.detail) {
        window.open(item.link, '_blank');
        return;
    }
    commonStore.setWinInfo(item);
    commonStore.setWinOpen(true);
}
</script>

<template>
    <div class="works">
        <h2>WORKS</h2>
        <div class="wrapper">
            <div
                v-for="(item, index) in info"
                :key="index"
                :data-title="item.title"
                class="item"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                @click="openWin(item)"
            >
                <img
                    :src="images[`/assets/images/works/${item.id}.webp`]"
                    :alt="item.title"
                >
            </div>
        </div>
    </div>
</template>
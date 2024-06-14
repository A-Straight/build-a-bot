<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script setup>
import { usePartsStore } from '../stores/partsStrore';
import { computed } from 'vue';

const partsStrore = usePartsStore();

const props = defineProps(['partType', 'id']);
const part = computed(() => {
    return partsStrore.parts[props.partType].find(part => part.id === +props.id);
});
</script>
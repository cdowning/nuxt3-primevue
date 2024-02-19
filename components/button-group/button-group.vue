<template>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="selected"
            :options="options"
            :aria-labelledby="labelBy"
            :multiple="allowMultiple"
            :optionLabel="optionLabel"
            :optionDisabled="optionDisabled"
            :disabled="disabled"
        >
            <template #option="{ option }">
                <div class="flex align-items-center">
                    <q-icon
                        v-if="option.icon"
                        :icon="option.icon"
                        class="mr-2"
                        size="sm"
                    />
                    <span class="option-label">
                        <!-- {{ typeof option === 'object' ? option.label : option }} -->
                        {{ option.label || option }}
                    </span>
                </div>
            </template>
        </SelectButton>
    </div>
</template>

<script lang="ts" src="./button-group.ts"></script>
<style lang="scss" src="./button-group.scss"></style>

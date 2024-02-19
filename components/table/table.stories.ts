import type { Args, Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import Table from './table.vue';

const meta: Meta<typeof Table> = {
    title: 'Components/Data Table',
    component: Table,
    argTypes: {
        modelValue: {
            control: 'text',
            if: { arg: 'multiple', truthy: false },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

// possible use cases:
// - Simple Button Group
// - Allow for multiple selections
// - Disable button group
// - Disable individual buttons
// - If icons are used (later on)
export const Primary = {
    name: 'Basic Group',
    render: (args: Args) => ({
        components: { Table },
        setup() {
            return { args };
        },
        template: `<Table v-model="args.modelValue" v-bind="args" />`,
    }),
    args: {},
} satisfies Story;

// export const AllowMultiple = {
//     render: (args: Args) => ({
//         components: { Table },
//         setup() {
//             const value = ref(null);

//             return { value, args };
//         },
//         template: `<Table v-model="value" v-bind="args" />`,
//     }),
//     args: {
//         // modelValue: [{ label: 'Option 2', value: 2 }],
//         options: [
//             { label: 'Option 1', value: 1 },
//             { label: 'Option 2', value: 2 },
//             { label: 'Option 3', value: 3 },
//         ],
//         allowMultiple: true,
//         optionLabel: 'name',
//     },
// } satisfies Story;

// export const DisabledGroup: Story = {
//     args: {
//         ...Primary.args,
//         disabled: true,
//     },
// } satisfies Story;

// export const DisabledOption: Story = {
//     render: (args: Args) => ({
//         components: { Table },
//         setup() {
//             return { args };
//         },
//         template: `<q-button-group v-model="args.modelValue" v-bind="args" />`,
//     }),
//     args: {
//         ...Primary.args,
//         disabled: false,
//         options: [
//             { label: 'Option 1', value: 1, isDisabled: false },
//             { label: 'Option 2', value: 2, isDisabled: true },
//             { label: 'Option 3', value: 3, isDisabled: false },
//         ],
//         optionDisabled: 'isDisabled',
//     },
// } satisfies Story;

// We don't currently support icons so this is commented out for now.
// export const HasIcons = {
//     render: (args: Args) => ({
//         components: { Table },
//         setup() {
//             const value = ref([{ label: 'Option 2', value: 2, icon: 'check' }]);

//             return { value, args };
//         },
//         template: `<q-button-group v-model="value" v-bind="args" />`,
//     }),
//     args: {
//         options: [
//             { label: 'Option 1', value: 1, icon: 'list' },
//             { label: 'Option 2', value: 2, icon: 'check' },
//             { label: 'Option 3', value: 3 },
//         ],
//         allowMultiple: true,
//         optionLabel: 'name',
//     },
// } satisfies Story;

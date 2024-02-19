import { defineComponent, computed } from 'vue';

import SelectButton from 'primevue/selectbutton';

const ButtonGroup = defineComponent({
    name: 'ButtonGroup',
    components: {
        SelectButton,
    },
    props: {
        // Pass in a value for the v-model
        modelValue: {
            type: [String, Object, Array],
            default: null,
        },
        options: {
            type: Array,
            default: () => [],
        },
        /** Needed when options are array of objects. optionLabel is what is visible to the user */
        optionLabel: {
            type: String,
            default: '',
        },
        /** Pass which option is disabled */
        optionDisabled: {
            type: String,
            default: '',
        },
        labelBy: {
            type: String,
            default: '',
        },
        /** Allow user to select multiple options */
        allowMultiple: {
            type: Boolean,
            default: false,
        },
        /** Disable the button group */
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const selected = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value),
        });

        const onClick = (event) => {
            console.log(event);
        };
        return {
            onClick,
            selected,
        };
    },
});

export default ButtonGroup;

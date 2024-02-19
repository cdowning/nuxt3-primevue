<template>
    <div class="table-container">
        <DataTable :value="data" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script lang="ts" src="./table.ts"></script>
<style lang="scss" src="./table.scss"></style>

<template>
	<v-container>
		<div class="text-h3 mb-4">Ag Grid</div>
		<div class="ag-theme-quartz" style="height: 500px; width: 100%">
			<AgGridVue 
				class="ag-theme-quartz"
				:columnDefs="columnDefs" 
				:rowData="rowData" 
				:modules="modules"
				rowSelection="single" 
				@rowClicked="onRowClicked"
				:rowHeight="42" 
				:headerHeight="48" 
				:theme="'legacy'" />
		</div>
	</v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);
const modules = [ClientSideRowModelModule];

const columnDefs = ref([
	{ headerName: "ID", field: "id", sortable: true, filter: true },
	{ headerName: "Название", field: "val1", sortable: true },
	{ headerName: "Цена", field: "val2", filter: "agNumberColumnFilter" },
	{ headerName: "Категория", field: "val8", sortable: true },
]);

const rowData = ref([]);

const generateRandomData = () => {
	const randomString = () => Math.random().toString(36).substring(2, 12);
	const randomFloat = () => (Math.random() * 100).toFixed(2);
	const randomInt = () => Math.floor(Math.random() * 100);
	const categories = ["str1", "str2", "str3", "str4", "str5"];

	return Array.from({ length: 100 }, (_, i) => ({
		id: i + 1,
		val1: randomString(),
		val2: randomFloat(),
		val3: randomFloat(),
		val4: randomInt(),
		val5: randomInt(),
		val6: `https://picsum.photos/seed/${i}/50/50`,
		val7: randomString(),
		val8: categories[Math.floor(Math.random() * categories.length)],
	}));
};

onMounted(() => {
	rowData.value = generateRandomData();
	console.log("rowData в коде:", JSON.parse(JSON.stringify(rowData.value)));

});

const onRowClicked = (event) => {
	console.log("Выбранная строка:", JSON.stringify(event.data, null, 2));
};
</script>

<style>
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-quartz.css";
</style>
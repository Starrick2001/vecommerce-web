import { Select, SelectItem } from "@mantine/core";

const sortField: SelectItem[] = [
	{
		value: "a",
		label: "a"
	}
];

export function ProductSort() {
	return <Select placeholder="Sort" data={sortField} />;
}

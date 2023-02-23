export function currencyLabelFormat(value: number) {
	const units = "VNĐ";

	return `${value.toLocaleString('vi-VN')} ${units}`;
}

import {
	Accordion,
	Button,
	RangeSlider,
	Rating,
	Stack,
	UnstyledButton,
	Text,
	Center
} from "@mantine/core";
import { useState } from "react";
import { Category } from "../../types/category";
import { currencyLabelFormat } from "../../utils/utils";

const categories: Category[] = [
	{ id: 1, name: "category 1", description: "category description 1" },
	{ id: 2, name: "category 2", description: "category description 2" },
	{ id: 3, name: "category 3", description: "category description 3" }
];

export function ProductFilter() {
	const [activeCategory, setActiveCategory] = useState<number>(0);
	const [priceFilter, setPriceFilter] = useState<number[]>([0, 0]);
	const [rateFilter, setRateFilter] = useState<number>(0);

	return (
		<Accordion defaultValue={["category", "price"]} multiple={true}>
			<Accordion.Item value="category">
				<Accordion.Control>
					<Text fw={700}>Categories</Text>
				</Accordion.Control>
				<Accordion.Panel>
					<Stack>
						{activeCategory !== 0 && (
							<Button onClick={() => setActiveCategory(0)}>Reset</Button>
						)}
						<UnstyledButton>
							{categories.map((category) => (
								<Text
									key={category.id}
									onClick={() => {
										setActiveCategory(category.id);
									}}
									fw={category.id === activeCategory ? "700" : ""}
								>
									{category.name}
								</Text>
							))}
						</UnstyledButton>
					</Stack>
				</Accordion.Panel>
			</Accordion.Item>
			<Accordion.Item value="price">
				<Accordion.Control>
					<Text fw={700}>Price</Text>
				</Accordion.Control>
				<Accordion.Panel>
					<Stack>
						{priceFilter.toString() !== [0, 0].toString() && (
							<Button onClick={() => setPriceFilter([0, 0])}>Reset</Button>
						)}
						<RangeSlider
							label={currencyLabelFormat}
							min={100000}
							max={10000000}
							step={100000}
							value={[priceFilter[0], priceFilter[1]]}
							defaultValue={[100000, 5000000]}
							onChange={setPriceFilter}
						/>
					</Stack>
				</Accordion.Panel>
			</Accordion.Item>
			<Accordion.Item value="rate">
				<Accordion.Control>
					<Text fw={700}>Rate</Text>
				</Accordion.Control>
				<Accordion.Panel>
					<Stack>
						{rateFilter !== 0 && (
							<Button onClick={() => setRateFilter(0)}>Reset</Button>
						)}
						<Center>
							<Rating value={rateFilter} onChange={setRateFilter} />
						</Center>
					</Stack>
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
}

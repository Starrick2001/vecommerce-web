import {
	Container,
	Grid,
	Paper,
	SimpleGrid,
	Stack,
	Flex,
	Pagination,
	Center
} from "@mantine/core";
import { useState } from "react";
import { DealCarousel } from "../../components/DealCarousel/DealCarousel";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import { ProductSort } from "../../components/ProductSort/ProductSort";

export function Home() {
	const [page, setPage] = useState(1);
	return (
		<Container my="md" size="xl">
			<DealCarousel height={440} />
			<Paper my="md">
				<Grid>
					<Grid.Col xs={3}>
						<ProductFilter />
					</Grid.Col>
					<Grid.Col xs={9}>
						<Stack>
							<Flex justify={"end"}>
								<ProductSort />
							</Flex>
							<SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
							</SimpleGrid>
							<Center>
								<Pagination total={20} page={page} onChange={setPage} siblings={2} />
							</Center>
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>
		</Container>
	);
}

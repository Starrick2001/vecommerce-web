import { Container, Grid, Paper, SimpleGrid, Stack, Flex } from "@mantine/core";
import { DealCarousel } from "../../components/DealCarousel/DealCarousel";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import { ProductSort } from "../../components/ProductSort/ProductSort";

export function Home() {
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
						</Stack>
					</Grid.Col>
				</Grid>
			</Paper>
		</Container>
	);
}

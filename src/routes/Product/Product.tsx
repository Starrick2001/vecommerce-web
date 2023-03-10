import { Carousel } from "@mantine/carousel";
import {
	Container,
	Grid,
	Stack,
	Image,
	Text,
	Title,
	Divider,
	Group,
	Button,
	Paper
} from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { Comment } from "../../components/Rating/Rating";
import { QuantityInput } from "../../components/QuantityInput/QuantityInput";
import { currencyLabelFormat } from "../../utils/utils";
import { RatingInput } from "../../components/RatingInput/RatingInput";

const breadcrumbData = [
	{
		link: "/home",
		label: "Home"
	},
	{
		link: "/",
		label: "category"
	},
	{
		link: '/product/123',
		label: 'product123'
	}
];

const images = [
	"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
];

const slides = images.map((image) => (
	<Carousel.Slide key={image}>
		<Image src={image} height={220} radius='md' fit="contain"/>
	</Carousel.Slide>
));

export function Product() {
	return (
		<Container size="xl" my="md">
			<Stack
				sx={(theme) => ({
					marginBottom: theme.spacing.md
				})}
			>
				<Breadcrumb data={breadcrumbData} />
				<Grid>
					<Grid.Col xs={6}>
						<Carousel loop mah={600}>
							{slides}
						</Carousel>
					</Grid.Col>
					<Grid.Col xs={6}>
						<Title
							order={3}
							sx={(theme) => ({
								marginBottom: theme.spacing.md
							})}
						>
							name
						</Title>
						<Text
							sx={(theme) => ({
								marginBottom: theme.spacing.md
							})}
						>
							{currencyLabelFormat(123151256)}
						</Text>
						<Text
							sx={(theme) => ({
								marginBottom: theme.spacing.md
							})}
							c="dimmed"
						>
							description
						</Text>
						<Group position="right">
							<Paper>
								<QuantityInput />
							</Paper>
							<Button rightIcon={<IconShoppingCartPlus />}>Add to cart</Button>
						</Group>
					</Grid.Col>
				</Grid>
				<Divider my="md" />
				<Grid>
					<Grid.Col xs={8}>
						<Stack>
							<Comment
								author={{ name: "name", image: "" }}
								body="body"
								postedAt="asd"
							/>
							<Comment
								author={{ name: "name", image: "" }}
								body="body"
								postedAt="asd"
							/>
							<Comment
								author={{ name: "name", image: "" }}
								body="body"
								postedAt="asd"
							/>
						</Stack>
					</Grid.Col>
					<Grid.Col xs={4}>
						<RatingInput />
					</Grid.Col>
				</Grid>
			</Stack>
		</Container>
	);
}

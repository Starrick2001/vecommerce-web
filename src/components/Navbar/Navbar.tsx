import {
	createStyles,
	Header,
	Group,
	Button,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	Paper,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";
import { ButtonToggle } from "../ButtonToggle/ButtonToggle";

const useStyles = createStyles((theme) => ({
	link: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan("sm")]: {
			height: 42,
			display: "flex",
			alignItems: "center",
			width: "100%"
		},

		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0]
		})
	},

	subLink: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[7]
					: theme.colors.gray[0]
		}),

		"&:active": theme.activeStyles
	},

	dropdownFooter: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[7]
				: theme.colors.gray[0],
		margin: -theme.spacing.md,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
		paddingBottom: theme.spacing.xl,
		borderTop: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
		}`
	},

	hiddenMobile: {
		[theme.fn.smallerThan("sm")]: {
			display: "none"
		}
	},

	hiddenDesktop: {
		[theme.fn.largerThan("sm")]: {
			display: "none"
		}
	}
}));

export function Navbar() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const { classes, theme } = useStyles();

	return (
		<>
			<Box>
				<Header height={60} px="md">
					<Group position="apart" sx={{ height: "100%" }}>
						<Paper component={Link} to="/">
							<MantineLogo size={30} />
						</Paper>
						<Group sx={{ height: "100%", alignContent: "center" }}></Group>
						<Group className={classes.hiddenMobile}>
							<ButtonToggle />
							{/* <Group sx={{ height: "100%" }}>
								<UserButton email="" image="" name=""/>
								<HoverCard width={200}>
									<HoverCard.Target>
										<ActionIcon>
											<IconShoppingCart />
										</ActionIcon>
									</HoverCard.Target>
									<HoverCard.Dropdown>
										<Box sx={(theme) => ({
											textAlign: 'center',
											padding: theme.spacing.xl
										})}>
											No item
										</Box>
									</HoverCard.Dropdown>
								</HoverCard>
							</Group> */}
							<Group>
								<Button component={Link} to="/auth" variant="default">
									Log in
								</Button>
								<Button component={Link} to="/auth?type=register">
									Sign up
								</Button>
							</Group>
						</Group>

						<Burger
							opened={drawerOpened}
							onClick={toggleDrawer}
							className={classes.hiddenDesktop}
						/>
					</Group>
				</Header>

				<Drawer
					opened={drawerOpened}
					onClose={closeDrawer}
					size="100%"
					padding="md"
					title="Navigation"
					className={classes.hiddenDesktop}
					zIndex={1000000}
				>
					<ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
						<Divider
							my="sm"
							color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
						/>

						<Group position="center" grow pb="xl" px="md">
							<Button component={Link} to="/auth" variant="default">
								Log in
							</Button>
							<Button component={Link} to="/auth?type=register">
								Sign up
							</Button>
						</Group>
					</ScrollArea>
				</Drawer>
			</Box>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}

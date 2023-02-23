import { Paper, createStyles } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm/AuthForm";

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: 900,
		backgroundSize: "cover",
		backgroundImage:
			"url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)"
	},

	form: {
		borderRight: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
		minHeight: 900,
		maxWidth: 450,
		paddingTop: 80,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: "100%"
		}
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`
	},

	logo: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		width: 120,
		display: "block",
		marginLeft: "auto",
		marginRight: "auto"
	}
}));

export function AuthPage() {
	const { classes } = useStyles();
	const [searchParams] = useSearchParams();

	return (
		<div className={classes.wrapper}>
			<Paper className={classes.form} radius={0}>
				<AuthForm
					withBorder={false}
					type={searchParams.get("type") === "register" ? "register" : "login"}
				/>
			</Paper>
		</div>
	);
}

import { Text, Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
	link: string;
	label: string;
}

interface BreadcrumbProps {
	data: BreadcrumbItem[];
}

export function Breadcrumb({ data }: BreadcrumbProps) {
	return (
		<Breadcrumbs>
			{data.map((item) => {
				return (
					<Text component={Link} to={item.link} key={item.link}>
						{item.label}
					</Text>
				);
			})}
		</Breadcrumbs>
	);
}

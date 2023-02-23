import { Button, Center, Rating, Text, Textarea } from "@mantine/core";
import { useState } from "react";

export function RatingInput() {
	const [rating, setRating] = useState(0);

	return (
		<>
			<Text>Write your feedback:</Text>
			<Center>
				<Rating value={rating} onChange={setRating} />
			</Center>
			<Textarea
				placeholder="Add your feedback"
				mt='md'
			/>
			<Center mt='md'>
				<Button>Send</Button>
			</Center>
		</>
	);
}

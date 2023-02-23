import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage/LandingPage";
import { NotFoundPage } from "./routes/NotFoundPage/NotFoundPage";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { AuthPage } from "./routes/AuthPage/AuthPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ThemeProvider>
				<Navbar />
			</ThemeProvider>
		),
		errorElement: (
			<ThemeProvider>
				<NotFoundPage />
			</ThemeProvider>
		),
		children: [
			{
				path: "/landing",
				element: <LandingPage />
			},
			{
				path: "/auth",
				element: <AuthPage />
			}
		]
	}
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

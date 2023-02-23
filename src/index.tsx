import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage/LandingPage";
import { NotFoundPage } from "./routes/NotFoundPage/NotFoundPage";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { AuthPage } from "./routes/AuthPage/AuthPage";
import { Home } from "./routes/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Product } from "./routes/Product/Product";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ThemeProvider>
				<Navbar />
				<Footer />
			</ThemeProvider>
		),
		errorElement: (
			<ThemeProvider>
				<NotFoundPage />
			</ThemeProvider>
		),
		children: [
			{
				path: "/",
				element: <LandingPage />
			},
			{
				path: "/auth",
				element: <AuthPage />
			},
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/product/:productId",
				element: <Product />
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

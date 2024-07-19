import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/statistics",
				element: <Statistics />,
			},
			{
				path: "/users",
				element: <Users />,
			},
			{
				path: "/userDetails/:userId",
				element: <UserDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

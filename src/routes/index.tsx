import { Layout } from '@/components';
import { CreatingPage, HomePage, PlayingPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: ROUTES.HOME,
				element: <HomePage />,
			},
			{
				path: ROUTES.CREATE_NEW_MATCH,
				element: <CreatingPage />,
			},
			{
				path: ROUTES.MATCH,
				element: <PlayingPage />,
			},
		],
	},
]);

export default router;

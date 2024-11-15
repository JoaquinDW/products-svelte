import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);

	const productInfo = await fetch(`https://fakestoreapi.com/products/${params.id}`);

	return {
		productInfo: await productInfo.json()
	};
};

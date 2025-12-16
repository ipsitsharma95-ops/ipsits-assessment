import StoryblokLiveStory from './StoryblokLiveStory';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function Page({ params }) {
<<<<<<< HEAD
	const slug = params?.slug?.join('/') || 'home';
=======
	const { slug } = await params;

	let fullSlug = slug ? slug.join('/') : 'home';

	let sbParams = {
		version: 'published',
	};
>>>>>>> parent of 72da52b (revert)

	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
		version: 'draft', // 🔴 REQUIRED for live editing
	});

	return <StoryblokLiveStory story={data.story} />;
}

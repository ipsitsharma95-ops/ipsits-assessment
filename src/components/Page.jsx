import StoryblokLiveStory from './StoryblokLiveStory';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function Page({ params }) {
	const slug = params?.slug?.join('/') || 'home';

	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
		version: 'draft', // 🔴 REQUIRED for live editing
	});

	return <StoryblokLiveStory story={data.story} />;
}

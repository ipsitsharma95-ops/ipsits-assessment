// app/[...slug]/page.js
import StoryblokPage from './StoryblokPage';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function Page({ params }) {
  const slug = params?.slug?.join('/') || 'home';

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft', // REQUIRED for live editing
  });

<<<<<<< HEAD
	let sbParams = {
		version: 'draft',
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);

	return <StoryblokStory story={data.story} />;
}
=======
  return <StoryblokPage story={data.story} />;
}

>>>>>>> 71ada8e (Live update)

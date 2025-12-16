'use client';

import { StoryblokStory, useStoryblokState } from '@storyblok/react';

export default function StoryblokLiveStory({ story }) {
	const liveStory = useStoryblokState(story);
	return <StoryblokStory story={liveStory} />;
}

import { SEARCH_FOR_TOPICS } from '../schemas';

export const getAllTopics = async () => {
  try {
    const url = 'https://api.github.com/graphql';
    const query = SEARCH_FOR_TOPICS();
    const variables = {name: "react"};
    const options = {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`
      },
      body: JSON.stringify({ query, variables}),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      return { error: true, code: response.statusCode };
    }

    const { data: { topic : { relatedTopics} } } = await response.json();

    return relatedTopics;
  } catch(err) {
    return console.error(err)
  }
}

export const SEARCH_FOR_TOPICS = () => {
  return `
    query($name: String!) {
      topic(name: $name) {
        relatedTopics(first: 10) {
          stargazerCount
          id
          name
          __typename
          relatedTopics {
            id
            name
            __typename
            stargazerCount
          }
        }
      }
    }
  `;
};
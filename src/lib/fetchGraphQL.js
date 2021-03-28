async function fetchGraphQL(text, variables) {
  const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_WEBSITE_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://coqzo.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      // Authorization: `bearer ${NEXT_PUBLIC_HOST}`,
      'Content-Type': 'application/json',
      "publicWebsiteToken": process.env.NEXT_PUBLIC_WEBSITE_TOKEN
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
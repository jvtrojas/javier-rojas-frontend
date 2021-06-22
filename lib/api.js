async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`${process.env.API_URL || 'http://localhost:1337'}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export async function getProjects() {
    const data = await fetchAPI(`query Projects {
      projects(sort: "date:desc") {
        id
        title
       location
       content
       date
       pictures {
           url
       }
       video {
           id
           url
       }
       group {
        description
        pictures {
          url
        }
        videos {
            url
        }
      }
      }
    }`);
    return data.projects;
}

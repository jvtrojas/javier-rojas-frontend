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

export async function getHomepage() {
    const data = await fetchAPI(`query Homepages {
        homepages{
            id
            title
            pictures {
                id
                url
                provider_metadata
            }
        }


    }`);
    return data.homepages;
}

export async function getVisuals() {
    const data = await fetchAPI(`query Visuals {
        visuals{
            id
            title
            pictures {
                id
                url
                provider_metadata
            }
        }


    }`);
    return data.visuals;
}

export async function getPhotos() {
    const data = await fetchAPI(`query Photos {
        photos{
            id
            title
            pictures {
                id
                url
                provider_metadata
            }
        }


    }`);
    return data.photos;
}

export async function getAbouts() {
    const data = await fetchAPI(`query Abouts {
      abouts(sort: "date:desc") {
        id
        title
       content
       pictures {
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
    return data.abouts;
}

export async function getMiscs() {
    const data = await fetchAPI(`query Miscs {
      miscs(sort: "date:desc") {
        id
        title
       content
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
    return data.miscs;
}
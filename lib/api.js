const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllMenuItems() {
	const data = await fetchAPI(`
        query MyQuery {
            items {
                edges {
                    node {
                        id
                        title
                        slug
                        featuredImage {
                            node {
                                altText
                                mediaDetails {
                                        width
                                        height
                                }
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }      
	`)
	return data?.items
}

export async function getAllMenuItemSlugs() {
    const data = await fetchAPI(`
        query MyQuery {
            items {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }      
    `)
return data?.items
}

export async function getMenuItemBySlug(id) {
     const data = await fetchAPI(`
     query MyQuery($id: ID!) {
      item(id: $id, idType: SLUG) {
        id
        title
        content
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            sourceUrl
          }
        }
        nutritionalInformation {
          nutritionalData {
            property
            value
          }
        }
      }
    }
    `, {
         variables: {
             "id" : id 
         }
     })
     return data?.item
}

export async function getMenuTypesAndMenuItems() {
    const data = await fetchAPI(`
        query MyQuery {
            menuTypes {
                edges {
                    node {
                        id
                        name
                        items {
                            edges {
                                node {
                                    id
                                    title
                                    slug
                                    featuredImage {
                                        node {
                                            altText
                                            sourceUrl
                                            mediaDetails {
                                                height
                                                width
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      
    `)
    return data?.menuTypes
}

export async function getAllLocations() {
    const data = await fetchAPI(`
    query MyQuery {
        locations {
          edges {
            node {
              title
              slug
              featuredImage {
                node {
                  altText
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }    
           
    `)
    return data?.locations
}

export async function getAllLocationSlugs() {
    const data = await fetchAPI(`
        query MyQuery {
            locations {
                edges {
                    node {
                        id
                        slug                        
                    }
                }
            }
        }             
    `)
    return data?.locations
}

export async function getLocationBySlug(id) {
    const data = await fetchAPI(`
    query MyQuery($id: ID!) {
        location(id: $id, idType: SLUG) {
          id          
          title
          featuredImage {
            node {
              altText
              mediaDetails {
                height
                width
              }
              sourceUrl
            }
          }
          slug
          locationInformation {
            city
            phoneNumber
            state
            streetAddress
            zipCode
          }
          relatedPeople {
            locationsPeople {
              ... on People {
                id
                title
                personInformation {
                  emailAddress
                  jobTitle
                }
                featuredImage {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }`, {
        variables: {
            "id" : id
        }
    })
    return data?.location
}

export async function getAllPeople() {
    const data = await fetchAPI(`
    query MyQuery {
        person {
          edges {
            node {
              title
              featuredImage {
                node {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl
                }
              }
              personInformation {
                emailAddress
                jobTitle
              }
              slug
            }
          }
        }
      }
      
    `)
    return data?.person
}

export async function getPeopleSlugs() {
    const data = await fetchAPI (`
    query MyQuery {
        person {
          edges {
            node {
              id
              slug
            }
          }
        }
      }      
    `)
    return data?.person
}

export async function getPersonBySlug(id) {
    const data = await fetchAPI (`
    query MyQuery($id: ID!) {
        people(id: $id, idType: SLUG) {
          personInformation {
            emailAddress
            jobTitle
          }
          slug
          featuredImage {
            node {
              altText
              mediaDetails {
                height
                width
              }
              sourceUrl
            }
          }
          title
        }
      }
      
    `, {
        variables: {
            "id": id 
        }
    })
    return data?.people
}
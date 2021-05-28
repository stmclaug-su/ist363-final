import Link from 'next/link'


import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import Heading from '../../components/heading'

import { getAllLocationSlugs, getLocationBySlug } from '../../lib/api'

/*test json: 
const locMenuItems = {
    "data": {
      "location": {
        "id": "cG9zdDoxMjQ=",
        "title": "Campus West",
        "featuredImage": {
          "node": {
            "altText": "",
            "mediaDetails": {
              "height": 945,
              "width": 1800
            },
            "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/04/location.jpg"
          }
        },
        "slug": "campus-west",
        "locationInformation": {
          "city": "Syracuse",
          "phoneNumber": "315-444-0044",
          "state": "New York",
          "streetAddress": "150 Henry St.",
          "zipCode": 13244
        },
        "relatedPeople": {
          "locationsPeople": [
            {
              "id": "cG9zdDo4MA==",
              "title": "Dave Matthews",
              "personInformation": {
                "emailAddress": "dave@warehouse.com",
                "jobTitle": "Music legend"
              },
              "featuredImage": {
                "node": {
                  "altText": "",
                  "mediaDetails": {
                    "height": 515,
                    "width": 775
                  },
                  "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/03/Dave20Matthews20Band.jpg"
                }
              }
            }
          ]
        },
        "menuTypes": {
          "nodes": [
            {
              "slug": "beverages",
              "items": {
                "edges": [
                  {
                    "node": {
                      "slug": "latte",
                      "title": "Latte",
                      "featuredImage": {
                        "node": {
                          "altText": "",
                          "mediaDetails": {
                            "height": 143,
                            "width": 143
                          },
                          "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/02/latte.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "slug": "macchiato",
                      "title": "Macchiato",
                      "featuredImage": {
                        "node": {
                          "altText": "Macchiato",
                          "mediaDetails": {
                            "height": 143,
                            "width": 143
                          },
                          "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/02/macchiato.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "slug": "cappucino",
                      "title": "Cappucino",
                      "featuredImage": {
                        "node": {
                          "altText": "",
                          "mediaDetails": {
                            "height": 143,
                            "width": 143
                          },
                          "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/02/cappucino.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "slug": "alpacino",
                      "title": "Alpacino",
                      "featuredImage": {
                        "node": {
                          "altText": "",
                          "mediaDetails": {
                            "height": 161,
                            "width": 111
                          },
                          "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/02/pacino.png"
                        }
                      }
                    }
                  }
                ]
              },
              "name": "Beverages"
            },
            {
              "slug": "food",
              "items": {
                "edges": [
                  {
                    "node": {
                      "slug": "breakfast-sandwich",
                      "title": "Breakfast Sandwich",
                      "featuredImage": {
                        "node": {
                          "altText": "Breakfast sammy",
                          "mediaDetails": {
                            "height": 1000,
                            "width": 2000
                          },
                          "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/03/o-BREAKFAST-SANDWICH-facebook.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "slug": "salad",
                      "title": "Salad",
                      "featuredImage": {
                        "node": {
                          "altText": "salad",
                          "mediaDetails": {
                            "height": 1024,
                            "width": 683
                          },
                          "sourceUrl": "http://ist-363-starbucks.local/wp-content/uploads/2021/03/Orange-Pomegranate-Salad-3.jpg"
                        }
                      }
                    }
                  }
                ]
              },
              "name": "Food"
            }
          ]
        }
      }
    },
    "extensions": {
      "debug": [
        {
          "type": "DEBUG_LOGS_INACTIVE",
          "message": "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled."
        }
      ]
    }
  }
*/

//getStaticPaths
export async function getStaticPaths() {

    const locSlugs = await getAllLocationSlugs()
    const paths = locSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}
//getStaticProps
export async function getStaticProps({ params }) {

    const locationData = await getLocationBySlug(params.id)

    return {
        props: {
            locationData
        }
    }

}


// initialize the component
export default function Location({ locationData }) {

    const { streetAddress, city, state, zipCode, phoneNumber, } =locationData.locationInformation;  
    const { title, relatedPeople, menuTypes } = locationData;
    
    

    return (
        <Layout>
            <Row>
                <Col>
                    <Card node={locationData} dir="locations" />
                    <p>{streetAddress}</p>
                    <p>{city}, {state} {zipCode}</p>
                    <p>{phoneNumber}</p>
                    <Section title="Available Menus:">
                                                    
                        <Row justifyContentCenter>                                        
                                                                  
                            {menuTypes.nodes.map((node, index) => {
                                return <Col>
                                    <Section title={node.name}>
                                    {node.items.edges.map((edge, index) => {
                                        return <Card node={edge.node} dir="menu" key={index} />                                        
                                    })}
                                    </Section>
                                </Col>                                    
                            })}
                            
                        </Row>
                            
                    </Section>
                    <Section title={`${title}Team:`}>
                        <Row justifyContentCenter>
                        {relatedPeople.locationsPeople.map((person, index) => {
                            const { personInformation } = person;
                            const { emailAddress, jobTitle } = personInformation;                            
                            
                            return <Col md={3}> 
                                    <Card node={person} dir="people"/> 
                                    <p>{emailAddress}</p>
                                    <Heading type="h4">{jobTitle}</Heading>                         
                                </Col>
                        })}
                        </Row>
                    </Section>
                    <Link href="/locations">Back to Locations</Link>
                </Col>
            </Row>
        </Layout>
    )
}

/*TODO: 
responsive grid (what did i mean by this)
map!
menu items (grid)
 -get menu types for location
    -get menu items for menu type
      -build card for menu item
*/
exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      {
        allServicesDataJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    if(results.error) {
        console.error("Wrong!");
        return
    }

    results.data.allServicesDataJson.edges.forEach(edge => {
        const item = edge.node;

        createPage({
            path: `/services/${item.slug}/`,
            component: require.resolve('./src/templates/serviceItem.js'),
            context: {
                slug: item.slug,
            }
        });
    });
}
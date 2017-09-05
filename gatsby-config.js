module.exports = {
	siteMetadata: {
		title: `Alexander Madyankin`
	},
	
	plugins: [
		`gatsby-plugin-react-helmet`, 
		`gatsby-plugin-styled-components`,
		{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography.js`,
      },
    },
   ],
};

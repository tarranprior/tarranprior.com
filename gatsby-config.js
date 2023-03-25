module.exports = {
  siteMetadata: {
    title: 'Tarran Prior',
    description: "I'm passionate about open source, solving problems and collaborative innovation. I also work with data a lot.",
    author: 'Tarran Prior',
    lang: 'en',
    keywords: [
      'IT Support Engineer',
      'Data Storage Solutions',
      'Cybersecurity',
      'Information Security',
      'Software Engineer',
      'Gatsby'
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png'
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono\:100,200,300,400,400i,500,600,700`,
        ],
      },
    },
  ],
};
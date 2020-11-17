const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  fragment sectionAbout on LandingPage {
    sectionAbout {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment sectionTechs on LandingPage {
    sectionTechs {
      title
      techIcons {
        title
        image {
          ...imageData
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAbout
      ...sectionTechs
      ...sectionConcepts
      ...sectionModules
    }
  }
`

export default GET_LANDING_PAGE

const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment buttonData on ComponentPageButton {
    label
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
        ...buttonData
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

  fragment sectionSchedule on LandingPage {
    sectionSchedule {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits {
        title
      }
      button {
        ...buttonData
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        name
        role
        description
        photo {
          ...imageData
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          ...imageData
        }
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
      ...sectionSchedule
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
    }
  }
`

export default GET_LANDING_PAGE

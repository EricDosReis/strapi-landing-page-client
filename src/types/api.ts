export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIconProps = {
  title: string
  image: {
    url: string
  }
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechsProps = {
  title: string
  techIcons: TechIconProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAbout: SectionAboutProps
  sectionTechs: SectionTechsProps
}

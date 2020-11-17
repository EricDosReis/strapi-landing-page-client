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

export type ConceptProps = {
  title: string
}

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
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

export type SectionConceptsProps = {
  title: string
  concepts: ConceptProps[]
}

export type SectionModulesProps = {
  title: string
  modules: ModuleProps[]
}

export type SectionScheduleProps = {
  title: string
  description: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAbout: SectionAboutProps
  sectionTechs: SectionTechsProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionSchedule: SectionScheduleProps
}

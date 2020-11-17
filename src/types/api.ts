export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

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

export type BenefitProps = {
  title: string
}

export type AuthorProps = {
  name: string
  role: string
  description: string
  photo: ImageProps
}

export type ReviewProps = {
  id: number
  name: string
  text: string
  photo: ImageProps
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

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: BenefitProps[]
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAbout: SectionAboutProps
  sectionTechs: SectionTechsProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionSchedule: SectionScheduleProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}

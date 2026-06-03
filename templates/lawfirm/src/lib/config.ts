import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Gomez Trial Attorneys",
    tagline: "No Fees Until We Win",
    phone: "(619) 237-3490",
    phoneHref: "tel:+16192373490",
    email: "info@gomeztrialattorneys.com",
    address: "755 Front St, San Diego, CA 92101",
    city: "San Diego",
    serviceAreas: ["Riverside", "San Diego", "Solana Beach", "Temecula", "El Centro", "Tijuana"],
    license: "State Bar of California",
    since: "2000",
    google_rating: "5.0",
    review_count: "975",
    emergency: false,
    theme: "slate",
    niche: "lawfirm",
  },

  services: [
    { icon: "shield-check", title: "Personal Injury", desc: "We fight for fair compensation after any personal injury incident.", urgent: false },
    { icon: "truck", title: "Car & Truck Accidents", desc: "Expert legal representation for victims of car and truck collisions.", urgent: false },
    { icon: "brain", title: "Brain Injury", desc: "Compassionate advocacy for complex brain injury cases.", urgent: false },
    { icon: "briefcase", title: "Employment Law", desc: "Protecting employee rights in wrongful termination and discrimination cases.", urgent: false },
    { icon: "heart", title: "Sexual Abuse & Harassment", desc: "Seeking justice for survivors of sexual abuse and workplace harassment.", urgent: false },
    { icon: "hammer", title: "Wrongful Death", desc: "Helping families recover after the tragic loss of a loved one.", urgent: false }
  ],

  testimonials: [
    { name: "John Magar", location: "San Diego, CA", stars: 5, text: "Thank you so much, it was a pleasure working with you. The team at Gomez Trial Attorneys made the entire process smooth and understandable, achieving a fantastic outcome for my case." },
    { name: "Jorge Sanc", location: "Riverside, CA", stars: 5, text: "I had a great experience working with Gomez Trial Attorney. I highly recommend them. They are on point and ready to answer any question, always keeping me informed and comfortable." },
    { name: "Anonymous", location: "Temecula, CA", stars: 5, text: "They opened the door for me to join their firm to help other brain injury survivors. I never met another firm who is so understanding and caring, taking the extra step and walking the extra mile for their clients. This is the best." }
  ],

  trustBadges: [
    "Free Case Evaluation", "No Fees Until We Win", "5.0 Google Rating", "975+ Reviews", "Culturally Identified", "Client-Focused Care"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 975, label: "Client Reviews", suffix: "+", decimals: 0 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Free Case Evaluation", desc: "Discuss your case with us at no cost or obligation to understand your options." },
    { icon: "dollar-sign", title: "No Fees Until We Win", desc: "You only pay legal fees if we successfully recover compensation for you." },
    { icon: "award", title: "Experienced Attorneys", desc: "Our team brings years of dedicated experience to every personal injury case." },
    { icon: "thumbs-up", title: "Client-First Approach", desc: "We prioritize your needs, offering compassionate and understanding legal support." },
    { icon: "phone", title: "Responsive Communication", desc: "We keep you informed and answer your questions promptly throughout the process." },
    { icon: "heart", title: "Assistance with Doctors", desc: "We help connect you with medical professionals for your recovery." }
  ],

  formServiceOptions: ["Personal Injury", "Car Accidents", "Employment", "Mass Tort", "Sexual Abuse and Assault", "Sexual Harassment", "Truck Accident", "Wrongful Death", "Brain Injury"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!
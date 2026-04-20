"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Get Quote",          id: "solution"},
        {
          name: "Contact Agent",          id: "contact"},
      ]}
      brandName="Legacy Life Coverage"
      button={{
        text: "Get a Quote Today",        href: "https://form.jotform.com/261069280018151"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="If Something Happens… Your Family Could Be Left Paying Thousands"
      description="Funeral costs can exceed $10,000—and those expenses don’t go away. They’re passed on to the people you love most. Serving 1.8 Million+ families nationwide."
      buttons={[
        {
          text: "Speak With an Agent Today",          href: "https://form.jotform.com/261069280018151"},
        {
          text: "Get a Quote Today",          href: "https://form.jotform.com/261069280018151"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-marriage-spreading-their-arms_329181-14713.jpg",          imageAlt: "Concerned seniors"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/older-couple-sitting-retirement-home_23-2147817065.jpg",          imageAlt: "Family support"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-looking-each-other_23-2148394511.jpg",          imageAlt: "Professional agent"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-couple-with-devices_23-2149046237.jpg",          imageAlt: "Peace of mind"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/aged-woman-lying-man-legs-bed_23-2148033665.jpg",          imageAlt: "Security planning"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-dancing-home_23-2149891523.jpg",          imageAlt: "Protecting legacy"},
      ]}
    />
  </div>

  <div id="visual" data-section="visual">
      <MediaAbout
      useInvertedBackground={false}
      title="Protecting Your Legacy"
      description="We are a national provider dedicated to helping families prepare for the unexpected. With over 1.8 million families served, our licensed agents are here to guide you through affordable, no-exam coverage options."
      buttons={[
        {
          text: "Get a Quote Today",          href: "https://form.jotform.com/261069280018151"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-adorable-senior-couple-love_23-2148268539.jpg"
      imageAlt="Supportive environment"
    />
  </div>

  <div id="financial-shock" data-section="financial-shock">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          label: "Expenses",          title: "Immediate Costs",          items: [
            "Caskets & Urns",            "Cemetery Fees",            "Transport"],
        },
        {
          id: "2",          label: "Impact",          title: "Debt Transfer",          items: [
            "Credit Card Debt",            "Personal Loans",            "Long-term Interest"],
        },
        {
          id: "3",          label: "Solution",          title: "Insurance Coverage",          items: [
            "Immediate Payouts",            "No Exam Options",            "Affordable Premiums"],
        },
      ]}
      title="The Real Cost Most Families Aren’t Ready For"
      description="Funeral costs can reach $15,000+, leaving families with immediate, overwhelming debt during the most difficult time of their lives."
    />
  </div>

  <div id="generational-debt" data-section="generational-debt">
      <MediaAbout
      useInvertedBackground={false}
      title="That Financial Burden Doesn’t End With You"
      description="Without coverage, children often inherit the responsibility for high-interest loans and unexpected costs. Protect your family's future and prevent passing on financial stress during their grief."
      buttons={[
        {
          text: "Speak With an Agent Today",          href: "https://form.jotform.com/261069280018151"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/parents-angry-clueless-son_23-2148414949.jpg"
      imageAlt="Concerned family"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardOne
      textboxLayout="split"
      gridVariant="bento-grid"
      animationType="slide-up"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Margaret L.",          role: "Client",          company: "Legacy",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/aged-woman-sitting-kitchen-with-cup-smiling_23-2148216451.jpg"},
        {
          id: "2",          name: "Robert T.",          role: "Client",          company: "Legacy",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-positive-senior-businesswoman-dreaming_1262-5348.jpg"},
        {
          id: "3",          name: "Linda K.",          role: "Client",          company: "Legacy",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-short-haired-mature-female-hitchhiker-carrying-backpack-sleeping-mat-posing-outdoors-with-high-road-cars-background-going-spend-vacations-wild-nature_343059-2342.jpg"},
        {
          id: "4",          name: "James W.",          role: "Client",          company: "Legacy",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handheld-shot-happy-pensioner-preparing-exercise-physical-activity-portrait-senior-man-smiling-looking-camera-getting-ready-training-with-equipment_482257-33826.jpg"},
        {
          id: "5",          name: "Sarah J.",          role: "Client",          company: "Legacy",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-patterned-blouse-holding-hand-head-while-looking-up-looking-happy-front-view_176474-31834.jpg"},
      ]}
      title="Trusted by Over 1.8 Million Families"
      description="Rated 4.9/5 by families across the country."
      buttons={[
        {
          text: "Get a Quote Today",          href: "https://form.jotform.com/261069280018151"},
      ]}
    />
  </div>

  <div id="urgency" data-section="urgency">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "Higher",          title: "Monthly Rates",          items: [
            "Rates increase with age",            "Don't delay security"],
        },
        {
          id: "2",          value: "Limited",          title: "Approval Options",          items: [
            "Health changes quickly",            "Qualify while eligible"],
        },
        {
          id: "3",          value: "Decreasing",          title: "Plan Coverage",          items: [
            "Don't wait for decline",            "Secure your peace"],
        },
      ]}
      title="Waiting Can Make It Worse"
      description="As you age, premiums increase and health changes may disqualify you from the best coverage plans. Secure your family today."
    />
  </div>

  <div id="solution" data-section="solution">
      <FeatureCardTwelve
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          label: "Process",          title: "No Medical Exam",          items: [
            "Fast processing",            "Simple application",            "Minimal waiting"],
        },
        {
          id: "2",          label: "Benefit",          title: "Funeral Coverage",          items: [
            "Covers costs fully",            "Prevents debt",            "Direct payouts"],
        },
        {
          id: "3",          label: "Affordability",          title: "Affordable Plans",          items: [
            "Fixed premiums",            "Budget friendly",            "Secure now"],
        },
      ]}
      title="A Simple Way to Help Protect Your Family"
      description="Our coverage is designed to be affordable and easy to understand."
    />
  </div>

  <div id="final-close" data-section="final-close">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Final Step"
      title="The Last Thing Your Family Should Inherit Is a Bill"
      description="Speak with a licensed agent now to secure your coverage."
      buttonText="Speak With an Agent Today"
      termsText="By clicking, you consent to be contacted by Legacy Life Coverage and partners regarding insurance products via phone, email, or text."
      onSubmit={(email) => window.location.href = 'https://form.jotform.com/261069280018151'}
    />
  </div>

  <div id="contact" data-section="contact">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Do I need a medical exam?",          content: "Many of our plans offer no-exam options for easier qualification."},
        {
          id: "2",          title: "How are costs paid?",          content: "Benefits are paid directly to your beneficiaries to cover funeral and burial costs."},
        {
          id: "3",          title: "How much does it cost?",          content: "Premiums depend on your age and health; contact us for a personalized, affordable quote."},
      ]}
      title="Frequently Asked Questions"
      description="Answers to your concerns."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Generation Next Financial LLC"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms & Conditions",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

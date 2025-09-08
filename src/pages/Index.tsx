
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import VisionMissionSection from "@/components/VisionMissionSection";
import LocationSection from "@/components/LocationSection";
import SocialProjectsSection from "@/components/SocialProjectsSection";
import MinistriesSection from "@/components/MinistriesSection";
import UpdatedServiceTimes from "@/components/UpdatedServiceTimes";
import SocialMediaSection from "@/components/SocialMediaSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import EventsSection from "@/components/EventsSection";
import ServingSection from "@/components/ServingSection";
import PGMSection from "@/components/PGMSection";
import MembershipSection from "@/components/MembershipSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <AboutSection />
        <HistorySection />
        <LocationSection />
        <SocialProjectsSection />
        <MinistriesSection />
        <UpdatedServiceTimes />
        <SocialMediaSection />
        <CoursesSection />
        <EventsSection />
        <ServingSection />
        <PGMSection />
        <MembershipSection />
        <ContactSection />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

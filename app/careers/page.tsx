import CareerFAQ from "@/components/careers/CareerFAQ";
import CareerHero from "@/components/careers/CareerHero";
import CompanyValues from "@/components/careers/CompanyValues";
import EmployeeBenefits from "@/components/careers/EmployeeBenefits";
import EmployeeTestimonials from "@/components/careers/EmployeeTestimonials";
import HiringProcess from "@/components/careers/HiringProcess";
import JobsHero from "@/components/careers/JobsHero";
import JoinTeamCTA from "@/components/careers/JoinTeamCTA";
import LifeAtDreamSky from "@/components/careers/LifeAtDreamSky";
import OpenPositions from "@/components/careers/OpenPositions";
import WhyJoinUs from "@/components/careers/WhyJoinUs";

const page = () => {
  return (
    <div >
      {/* <JobsHero /> */}
      <CareerHero />
      <WhyJoinUs />
      <CompanyValues />
      <LifeAtDreamSky />
      <EmployeeBenefits />
      <OpenPositions />
      <HiringProcess />
      <EmployeeTestimonials />
      <CareerFAQ />
      <JoinTeamCTA />
    </div>
  );
};

export default page;

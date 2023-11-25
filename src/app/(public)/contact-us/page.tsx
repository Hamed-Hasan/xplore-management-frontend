import dynamic from "next/dynamic";

const ContactUsPage = dynamic(
  () => import("@/components/ContactUs/ContactUsPage"),
  {
    ssr: false,
  }
);

const ContactUs = () => {
  return (
    <div>
      <ContactUsPage />
    </div>
  );
};

export default ContactUs;

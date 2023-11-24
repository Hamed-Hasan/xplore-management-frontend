import dynamic from "next/dynamic";

const TouristProfilePage = dynamic(
  () => import("@/components/Profiles/TouristProfilePage"),
  {
    ssr: false,
  }
);

const TouristProfile = () => {
  return (
    <div>
      <TouristProfilePage />
    </div>
  );
};

export default TouristProfile;

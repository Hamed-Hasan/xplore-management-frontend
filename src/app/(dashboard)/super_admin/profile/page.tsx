import dynamic from "next/dynamic";

const SuperAdminProfilePage = dynamic(
  () => import("@/components/Profiles/SuperAdminProfilePage"),
  {
    ssr: false,
  }
);

const SuperAdminProfile = () => {
  return (
    <div>
      <SuperAdminProfilePage />
    </div>
  );
};

export default SuperAdminProfile;

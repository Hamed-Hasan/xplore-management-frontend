import dynamic from "next/dynamic";

const AdminProfilePage = dynamic(
  () => import("@/components/Profiles/AdminProfilePage"),
  {
    ssr: false,
  }
);

const AdminProfile = () => {
  return (
    <div>
      <AdminProfilePage />
    </div>
  );
};

export default AdminProfile;

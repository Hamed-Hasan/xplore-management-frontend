export const BaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://xplore-backend.vercel.app/api/v1"
  );
};

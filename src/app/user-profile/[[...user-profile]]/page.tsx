import { UserProfile } from "@clerk/nextjs";

export default async function UserProfilePage() {
  return (
    <div className="flex justify-center item py-8">
      <UserProfile path={"/user-profile"} />
    </div>
  );
}

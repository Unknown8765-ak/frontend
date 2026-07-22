import ProfileCard from "../../components/admin/profile/ProfileCard";
import ProfileForm from "../../components/admin/profile/ProfileForm";
import ChangePassword from "../../components/admin/profile/ChangePassword";

const Profile = () => {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your personal information and account security.
        </p>
      </div>


      <ProfileCard />

      {/* Profile Form */}

      <ProfileForm />

      {/* Change Password */}

      <ChangePassword />

    </div>
  );
};

export default Profile;
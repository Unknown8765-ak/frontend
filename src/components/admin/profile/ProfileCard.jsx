import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { getProfile } from "../../../services/profile/profileService";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      console.log("prifile",response);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-center text-lg font-semibold">
          Loading Profile...
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Avatar */}

        <div className="relative">

          <img
            src={
  profile.image ||
  `https://ui-avatars.com/api/?name=${profile.name}&background=2563eb&color=fff&size=250`
}
            alt={profile.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-600"
          />

          {/* <button className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
            <FaCamera />
          </button> */}

        </div>

        {/* Details */}

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-gray-800">
            {profile.name}
          </h2>

          <p className="text-blue-600 font-medium mt-2">
            {profile.role}
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-5">

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <h3 className="font-semibold">
                {profile.email}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Account Status
              </p>

              <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                Active
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;
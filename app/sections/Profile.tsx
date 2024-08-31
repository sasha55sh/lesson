import ProfileComponent from "@/components/ProfileComponent";
import user from "@/app/files/user.json";

const Profile = () => {
  return (
    <div>
      <ProfileComponent
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default Profile;

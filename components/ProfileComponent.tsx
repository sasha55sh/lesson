
import React, { FC } from "react";

interface userStats {
  followers: number;
  views: number;
  likes: number;
}
interface userProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: userStats;
  className?: string;
}
const ProfileComponent: FC<userProps> = ({
  username,
  tag,
  location,
  avatar,
  stats,
  className,
}) => {
  return (
    <div className="w-350 h-450 bg-white rounded-lg m-auto my-8 ">
      <div className="text-center">
        <img  src={avatar} alt={username} className="rounded-full h-22 mt-2.5" ></img>
        <p className="font-bold">{username}</p>
        <p className="text-[#bdbec0]">@{tag}</p>
        <p className="text-[#bdbec0]">{location}</p>
      </div>

      <ul className="bg-[#638181] h-24 rounded-b-lg flex space-x-8  items-center justify-center">
        <li className="flex flex-col">
          <span className="font-bold">Followers</span>
          <span className="text-[#bdbec0] ml-2">{stats.followers}</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold">Views</span>
          <span className="text-[#bdbec0]">{stats.views}</span>
        </li>
        <li className="flex flex-col justify-center">
          <span className="font-bold">Likes</span>
          <span className="text-[#bdbec0]">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileComponent;

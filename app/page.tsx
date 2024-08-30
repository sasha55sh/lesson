import Image from "next/image";
import Section from "@/app/sections/Section";
import ProfileComponent from "@/components/ProfileComponent";
import user from "@/app/files/user.json";

export default function Home() {
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
    /* <>
      <Section />
    </>*/
  );
}

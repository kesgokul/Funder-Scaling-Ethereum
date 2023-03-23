// import fakeProfile from "/images/profile-pic.png";

export default function ProfilePic({ picture }) {
  return (
    <img
      className=" w-8 h-8 object-cover object-center rounded-full"
      src={picture ? picture : "/images/profile-pic.png"}
      alt="profile picture"
    />
  );
}

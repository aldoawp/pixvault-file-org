import styles from "@/components/profile/profile.module.css";

export function NavProfile({
  username,
  imgUrl,
}: {
  username: string;
  imgUrl: string;
}) {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <img className={styles.avatar} src={imgUrl} alt="User Profile Picture" />
      <p className="text-sm">{username}</p>
    </div>
  );
}

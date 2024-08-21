import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { NavProfile } from "@/components/profile/Profile";
import Button from "@/components/button/button";
import { SunIcon, LogOutIcon } from "../Icons";

export default function Topnav() {
  return (
    <>
      <nav className="flex flex-row justify-between items-center">
        <Breadcrumb />
        <div className="flex justify-between items-center gap-3">
          <NavProfile username="random-username" imgUrl="#" />
          <Button type="button" icon={<SunIcon />} style="ghost"/>
          <Button type="button" text="Log Out" icon={<LogOutIcon />} style="ghost"/>
        </div>
      </nav>
    </>
  );
}

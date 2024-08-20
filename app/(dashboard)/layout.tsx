import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | PixVault",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="p-10">{children}</main>
    </>
  );
}

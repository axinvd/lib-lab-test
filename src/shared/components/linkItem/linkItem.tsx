import Link from "next/link";

export const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

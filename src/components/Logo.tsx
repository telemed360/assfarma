import Image from "next/image";
import Link from "next/link";
import LogoMark from "./LogoMark";

type Props = {
  /** "light" = fundo claro · "dark" = fundo escuro */
  tone?: "light" | "dark";
  className?: string;
  href?: string | null;
  markOnly?: boolean;
  priority?: boolean;
};

export function Logo({
  tone = "light",
  className = "",
  href = "/",
  markOnly = false,
  priority = false,
}: Props) {
  const dark = tone === "dark";

  const content = markOnly ? (
    <LogoMark tone={tone} priority={priority} className={`h-11 w-11 shrink-0 sm:h-12 sm:w-12 ${className}`} />
  ) : (
    <Image
      src={dark ? "/brand/logo-horizontal-white.png" : "/brand/logo-horizontal.png"}
      alt="Assfarma"
      width={1522}
      height={345}
      priority={priority}
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Assfarma, página inicial" className="group inline-flex items-center">
      {content}
    </Link>
  );
}

export default Logo;

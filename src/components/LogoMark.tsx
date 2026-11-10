import Image from "next/image";

/**
 * Marca Assfarma.
 * `tone="dark"` usa a versão monocromática branca, para fundos escuros.
 * Os arquivos ficam em /public/brand.
 */
type Props = {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function LogoMark({ tone = "light", className = "", priority = false }: Props) {
  return (
    <Image
      src={tone === "dark" ? "/brand/logo-mark-white.png" : "/brand/logo-mark.png"}
      alt=""
      width={512}
      height={512}
      priority={priority}
      className={className}
      aria-hidden
    />
  );
}

export default LogoMark;

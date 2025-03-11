import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    // <div className="relative w-full overflow-hidden aspect-video">
    //   {/* <iframe
    //     className="absolute top-0 left-0 w-full h-full"
    //     src="https://www.youtube.com/embed/K8mK8BzqrPE"
    //     // frameborder="0"
    //     // allowfullscreen
    //   ></iframe> */}
    // </div>
    <div className="sm:mx-0">
      <iframe
        src="/images/storway-logo.png"
        // allowFullScreen
        width={1300}
        height={630}
      />
    </div>
  );
};

export default CoverImage;

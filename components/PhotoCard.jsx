import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({photo}) => {
   return (
      <Link href={`/photos/${photo.id}`} class="group">
        <Image src={photo.url} alt={photo.title} width={500} height={500} />

        <div class="title-container">
          <h4 class="title">{photo.title}</h4>
        </div>
      </Link>
   );
};

export default PhotoCard;
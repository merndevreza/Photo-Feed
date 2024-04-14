import PhotoCard from "./PhotoCard";

const PhotoList = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/photos`);
  const photos = await response.json();

  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;

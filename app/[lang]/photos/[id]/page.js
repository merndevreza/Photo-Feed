import PhotoDetails from "@/components/PhotoDetails";

const page = ({params:{id,lang}}) => {
   return (
      <PhotoDetails id={id} lang={lang}/>
   );
};

export default page;
import { useParams, Navigate } from "react-router-dom";
import AdvertorialTemplate from "@/components/advertorial/AdvertorialTemplate";
import { getAdvertorialById } from "@/data/advertorials";

const Advertorial = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/advertorial/1" replace />;
  }

  const content = getAdvertorialById(id);

  if (!content) {
    return <Navigate to="/advertorial/1" replace />;
  }

  return <AdvertorialTemplate content={content} />;
};

export default Advertorial;

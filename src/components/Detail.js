import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase"; 
import { useParams } from "react-router-dom/dist";

const Detail = () => {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true); // To manage loading state
  const { id } = useParams();

  const fetchDetail = async () => {
    try {
      const docRef = collection(db, "movies");
      const snapshot = await getDocs(docRef);
      const movieDetail = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })).find(movie => movie.id === id);

      if (movieDetail) {
        setDetailData(movieDetail);
      } else {
        console.log("No such document in Firestore 🔥");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show a loading state while fetching

  if (!detailData) return <div>No data found</div>; // Show if no data is found

  return (
    <div className=" min-h-screen  overflow-hidden block py-20 mt-16 px-4 md:px-6 lg:px-12">
      <div className="fixed inset-0 z-[-1] opacity-80">
        <img alt={detailData.title} src={detailData.backgroundImg} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-end justify-start  w-full  min-h-[170px] pb-6 mx-auto h-[30vh]">
        <img alt={detailData.title} src={detailData.titleImg} className="max-w-[600px] min-w-[200px] w-[35vw] object-contain
        " />
      </div>
 
      <div className="max-w-[874px] ">
        <div className="flex items-center space-x-4 my-6 min-h-[56px] text-[18px]">
          <button className="bg-[#f9f9f9] text-black font-semibold flex items-center justify-center rounded-md h-[56px] px-6 transition-all duration-300 hover:bg-gray-400">
            <img src="/images/play-icon-black.png" alt="" className="w-8" />
            <span className="ml-2 tracking-widest">PLAY</span>
          </button>
          <button className="bg-black/30 border border-[#f9f9f9] text-[#f9f9f9] font-semibold flex items-center justify-center rounded-md h-[56px] px-6 transition-all duration-300">
            <img src="/images/play-icon-white.png" alt="" className="w-8" />
            <span className="ml-2 tracking-widest">TRAILER</span>
          </button>
          <div className="h-[44px] w-[44px] flex justify-center items-center bg-black/60 rounded-full border-2 border-white cursor-pointer">
            <span className="bg-[#f9f9f9] inline-block h-[2px] w-[16px] transform translate-x-[1px]"></span>
            <span className="bg-[#f9f9f9] inline-block h-[16px] w-[2px] transform -translate-x-[8px]"></span>
          </div>
          <div className="h-[44px] w-[44px] flex justify-center items-center cursor-pointer bg-white rounded-full">
            <div className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
              <img src="/images/group-icon.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="text-[#f9f9f9] text-[15px] min-h-[20px]">
          {detailData.subTitle}
        </div>
        <div className="text-[#f9f9f9] text-[20px] line-height-1.4 py-4">
          {detailData.description}
        </div>
      </div>
    </div>
  );
};

export default Detail;

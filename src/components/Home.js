import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Importing getDocs for one-time data fetching
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { SimpleSlider } from "./ImgSlider";
import Viewers from "./Viewers";     
import Recommends from "./Recommends"; 
import Originals from "./Originals";   
import NewDisney from "./NewDisney";   
import Trending from "./Trending";  
import db from "../firebase"; // Ensure db is imported

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        const fetchMovies = async () => {
            const recommends = [];
            const newDisneys = [];
            const originals = [];
            const trending = [];

            // Fetch movies from Firestore
            const querySnapshot = await getDocs(collection(db, "movies"));
            querySnapshot.docs.forEach((doc) => {
                const data = { id: doc.id, ...doc.data() }; // Extract the movie data

                // Classify movies based on their type
                switch (doc.data().type) {
                    case "recommend":
                        recommends.push(data);
                        break;
                    case "new":
                        newDisneys.push(data);
                        break;
                    case "original":
                        originals.push(data);
                        break;
                    case "trending":
                        trending.push(data);
                        break;
                    default:
                        console.warn(`Unexpected type: ${doc.data().type}`); // Handle unexpected cases
                        break;
                }
            });

            // Dispatch the fetched movies to the Redux store
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        };

        fetchMovies(); // Call the fetch function
    }, [userName, dispatch]); // Include dispatch in dependencies

    return (
        <div
            className="flex flex-col w-full items-center justify-center min-h-screen bg-cover px-10 py-20 mt-16 gap-6 overflow-hidden"
            style={{ backgroundImage: `url(/images/home-background.png)` }}
        >
            <SimpleSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </div>
    );
};

export default Home;

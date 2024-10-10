import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaPlus, FaStar } from "react-icons/fa";
import { signInWithGooglePopup } from "../firebase";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux"; 
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../features/user/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                updateUserState(user);
                navigate("/home");
            }
        });
        return unsubscribe;
    }, [userName]);

    const handleAuthentication = async () => {
        if (!userName) {
            const response = await signInWithGooglePopup();
            console.log(response);
            updateUserState(response.user);
        } else {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                navigate("/");
            }).catch((error) => {
                console.error("Sign out error:", error);
                alert("Failed to sign out: " + error.message);
            });
        }
    };

    const updateUserState = ({ displayName, email, photoURL }) => {
        dispatch(
            setUserLoginDetails({
                name: displayName,
                email: email,
                photo: photoURL,
            })
        );
    };

    return (
        <div className="fixed top-0 h-[70px] bg-black w-full flex justify-between items-center p-9 z-20">
            <div className="w-20 mt-1">
                <img src="/images/logo.svg" alt="logo" className="w-full" />
            </div>
            <div className="flex-end mr-auto ml-[25px] hidden md:flex tracking-wider   text-[16px] gap-6">
                <div className="flex">
                    <a href="/home" className="inline-flex gap-2 items-center">
                        <AiFillHome className="h-5 w-5 text-white" />
                        <span className="mt-1 relative m text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">HOME</span>
                    </a>
                </div>
                <div className="flex">
                    <a href="/" className="inline-flex gap-2 items-center">
                        <IoSearch className="h-5 w-5 text-white" />
                        <span className="mt-1 relative m text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">SEARCH</span>
                    </a>
                </div>
                <div className="flex">
                    <a className="inline-flex gap-2 items-center">
                        <FaPlus className="h-5 w-5 text-white" />
                        <span className="mt-1 relative m text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">WATCHLIST</span>
                    </a>
                </div>
                <div className="flex">
                    <a className="inline-flex gap-2 items-center">
                        <FaStar className="h-5 w-5 text-white" />
                        <span className="mt-1 relative m text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">ORIGINALS</span>
                    </a>
                </div>
            </div>
            <div className="flex items-center relative">
                {userPhoto ? (
                    <>
                    
                    <div className="w-20 ">
                        <img
                            src={userPhoto}
                            alt="User"
                            className="w-10 h-10 rounded-full mr-3 cursor-pointer"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        />
                        {dropdownOpen && (
                            <div
                                className="absolute w-[120px] right-0 top-10 bg-black shadow-lg rounded "
                                onMouseEnter={() => setDropdownOpen(true)} 
                                onMouseLeave={() => setDropdownOpen(false)} 
                            >
                                <button
                                    className="text-[18px] text-white tracking-[1.5px] border px-3 py-[10px] rounded hover:bg-white hover:text-black w-full text-center"
                                    onClick={handleAuthentication}
                                >
                                    SIGNOUT
                                </button>
                            </div>
                        )}
                        </div>
                    </>
                ) : (
                    <button
                        className="text-[18px] tracking-[1.5px] border px-3 py-[10px] rounded hover:bg-white hover:text-black"
                        onClick={handleAuthentication}
                    >
                        LOG IN
                    </button>
                )}
            </div>
        </div>
    );
};

export default Login;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const NotFound=()=> {
  const navigate = useNavigate();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars for background
    const newStars = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100 + "vw",
      top: Math.random() * 100 + "vh",
      animationDelay: Math.random() * 5 + "s",
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Background Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ left: star.left, top: star.top, animationDelay: star.animationDelay }}
        ></div>
      ))}

      {/* Astronaut Illustration */}
      <div className="relative flex flex-col items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201634.png"
          alt="Astronaut"
          className="w-40 animate-float"
        />
        <h1 className="text-4xl font-bold mt-4">404</h1>
        <p className="text-lg text-gray-300">Oops! Looks like you're lost in space.</p>
        {/* <Button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
        >
          Go Home
        </Button> */}
        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all" onClick={() => navigate("/")}>Go Home</button>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
export default NotFound;



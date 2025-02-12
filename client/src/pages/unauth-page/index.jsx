import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-800">
      <h1 className="text-4xl font-bold">403 - Access Denied</h1>
      <p className="text-lg mt-2">You don't have permission to view this page.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
      >
        Go to Homepage
      </button>
    </div>
  );
}

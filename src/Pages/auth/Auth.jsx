import { Outlet, useNavigate } from "react-router-dom";
import Login from "../../components/auth/Login";
import { MoveLeft } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="border-b border-gray-400 py-3 px-4">
        <button
          onClick={() => navigate("/")}
          className="flex gap-3 text-2xl items-center text-gray-500 cursor-pointer"
        >
          <MoveLeft /> Back
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Auth;

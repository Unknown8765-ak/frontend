import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Topbar = () => {
  return (
    <header className="bg-white shadow px-8 py-5 flex items-center justify-between">


      <div>

        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back, Admin
        </p>

      </div>


      <div className="flex items-center gap-6">

        <div className="flex items-center gap-3">

          <div> 
            <Link
                to="/admin/profile"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaUserCircle
            size={42}
            className="text-blue-600"
          />
                Admin
              </Link>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Topbar;
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login/Login";
import Home from "../pages/Home";
import Profile from "../components/Login/Profile";
// import SignUp from "../components/Login/SignUp";
import { setUser } from "../Redux/User/userSlice";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Department from "../components/Admin/Department";
import ManageUser from "../components/Admin/ManageUser";
import ManageDoctor from "../components/Admin/ManageDoctor";
import DoctorProfile from "../components/Doctor/DoctorProfile";
import ControlPanel from "../components/Admin/ControlPanel";
import CreateAppoiment from "../components/Appointment/CreateAppoiment";

import Introduce from "../components/Introduce/Introduce";
import ReasonAboutUs from "../components/Introduce/Reason-Aboutus";
import Facilities from "../components/Introduce/Facilities";

import CheckupPersonal from "../components/Services/CheckupPersonal";
import CheckupCooperate from "../components/Services/CheckupCooperate";
import RespiratoryFunctionScreening from "../components/Services/RespiratoryFunctionScreening";
import HepatobiliaryDigestiveScreening from "../components/Services/HepatobiliaryDigestiveScreening";
import CardiovascularScreening from "../components/Services/CardiovascularScreening";
import CancerScreening from "../components/Services/CancerScreening";
import InsuranceServices from "../components/Services/InsuranceServices";
import OtherServicePackages from "../components/Services/OtherServicePackages";
import Support from "../components/Services/Support";
import Train from "../components/Services/Train";
import Advise from "../components/Services/Advise";

import Software from "../components/Products/Software";
import Hardware from "../components/Products/Hardware";
import Accessory from "../components/Products/Accessory";
import BookAppointment from "../components/Appointment/BookAppointment";

import QuestionAnswer from "../components/News/QuestionAnswer";

import MoreInfomation from "../components/CustomerGuide/MoreInfomation";
import PACS from "../components/CustomerGuide/PACS";
import CommonMedicine from "../components/News/CommonMedicine";
import NewsEvent from "../components/News/NewsEvent";

import Appointments from "../components/Login/Appointments";

import UserProfile from "../components/User/UserProfile";
import DoctorDashboard from "../components/Doctor/DoctorDashboard";

const ProtectedRoute = ({ element, redirectTo }) => {
  const { userInfo } = useSelector((state) => state.user);
  return userInfo ? element : <Navigate to={redirectTo} />;
};

function AppRouter() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const token = localStorage.getItem("token");

    if (userInfo && token) {
      dispatch(setUser({ user: JSON.parse(userInfo), token })); // Phục hồi user và token từ localStorage
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!userInfo ? <Login /> : <Navigate to="/" />}
        />
        {/* <Route
          path="/register"
          element={!userInfo ? <SignUp /> : <Navigate to="/" />}
        /> */}
        <Route path="/user/*" element={<UserProfile />}>
          <Route
            path="profile"
            element={
              <ProtectedRoute element={<Profile />} redirectTo="/login" />
            }
          />
          <Route path="appointments" element={<Appointments />} />
        </Route>

        <Route path="/doctor/*" element={<DoctorDashboard />}>
          <Route path="infoDoctor" element={<DoctorProfile />} />
        </Route>
        <Route path="/adminDashboard/*" element={<AdminDashboard />}>
          <Route path="user" element={<ManageUser />} />
          <Route path="doctor" element={<ManageDoctor />} />
          <Route path="department" element={<Department />} />
          <Route path="control" element={<ControlPanel />} />
        </Route>

        <Route path="/doctorDashboard/*" element={<DoctorProfile />}>
          {/* <Route path="user" element={<ManageUser />} /> */}
        </Route>

        {/* Gioi thieu */}
        <Route path="/createAppoiment" element={<CreateAppoiment />} />
        <Route
          path="/bookingAppointment/:doctorId"
          element={<BookAppointment />}
        />
        <Route path="/gioi-thieu" element={<Introduce />} />
        <Route path="/tai-sao-chon-chung-toi" element={<ReasonAboutUs />} />
        <Route path="/co-so-vat-chat" element={<Facilities />} />

        {/* Dich-vu */}
        <Route
          path="/kham-suc-khoe-tong-quat-ca-nhan"
          element={<CheckupPersonal />}
        />
        <Route
          path="/kham-suc-khoe-tong-quat-doanh-nghiep"
          element={<CheckupCooperate />}
        />
        <Route
          path="/tam-soat-chuc-nang-ho-hap"
          element={<RespiratoryFunctionScreening />}
        />
        <Route
          path="/tam-soat-tieu-hoa-gan-mat"
          element={<HepatobiliaryDigestiveScreening />}
        />
        <Route
          path="/tam-soat-tim-mach"
          element={<CardiovascularScreening />}
        />
        <Route path="/tam-soat-ung-thu" element={<CancerScreening />} />
        <Route path="/dich-vu-bao-hiem" element={<InsuranceServices />} />
        <Route
          path="/cac-goi-dich-vu-khac"
          element={<OtherServicePackages />}
        />
        <Route path="/ho-tro" element={<Support />} />
        <Route path="/dao-tao" element={<Train />} />
        <Route path="/tu-van" element={<Advise />} />

        {/* San-pham */}

        <Route path="/phan-mem" element={<Software />} />
        <Route path="/phan-cung" element={<Hardware />} />
        <Route path="/phu-kien" element={<Accessory />} />

        {/* Tin-tuc */}
        <Route path="/y-hoc-thuong-thuc" element={<CommonMedicine />} />
        <Route path="/tin-tuc-su-kien" element={<NewsEvent />} />
        <Route path="/hoi-dap-y-khoa" element={<QuestionAnswer />} />

        {/* Huong-dan-khach-hang */}
        <Route path="/thong-tin-tham-khao" element={<MoreInfomation />} />
        <Route
          path="/huong-dan-tru-cap-he-thong-luu-tru-va-quan-ly-hinh-anh"
          element={<PACS />}
        />

        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

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
import ForgotPassword from "../components/Login/forgotPassword";
import ConfirmOTP from "../components/Login/ConfirmOTP";
import Profile from "../components/Login/Profile";
import SignUp from "../components/Login/SignUp";
import { setUser } from "../Redux/User/userSlice";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Department from "../components/Admin/Department";
import ManageUser from "../components/Admin/ManageUser";
import ManageDoctor from "../components/Admin/ManageDoctor";
import DoctorProfile from "../components/Doctor/DoctorProfile";
import ControlPanel from "../components/Admin/ControlPanel";
import CreateAppoiment from "../components/Appointment/CreateAppoiment";

import Introduce from "../components/Introduce/Introduce";

import ReasonAboutUs from "../components/Introduce/ReasonAboutus";
import HighTechDevice from "../components/Introduce/Introduces/HighTechDevice";
import ExpertDoctor from "../components/Introduce/Introduces/ExpertDoctor";
import GlobalService from "../components/Introduce/Introduces/GlobalService";

import Facilities from "../components/Introduce/Facilities";

import CheckupPersonal from "../components/Services/CheckupPersonal";
import Covid19AfterDeeper from "../components/Services/CheckupPersonal/Covid19AfterDeeper";
import Covid19AfterAdvance from "../components/Services/CheckupPersonal/Covid19AfterAdvance";
import HealthCarePlatinum from "../components/Services/CheckupPersonal/HealthCarePlatinum";
import HealthCareVIPGOLD from "../components/Services/CheckupPersonal/HealthCareVIPGOLD";
import HealthCareDeeper from "../components/Services/CheckupPersonal/HealthCareDeeper";
import HealthCareAdvance from "../components/Services/CheckupPersonal/HealthCareAdvance";
import HealthCareAndCancer from "../components/Services/CheckupPersonal/HealthCareAndCancer";

import CheckupCooperate from "../components/Services/CheckupCooperate";
import BusinessHealthCare from "../components/Services/CheckupCooperate/BusinessHealthCare";

import RespiratoryFunctionScreening from "../components/Services/RespiratoryFunctionScreening";
import CPET from "../components/Services/RespiratoryFunctionScreening/CPET";
import Polysomnography from "../components/Services/RespiratoryFunctionScreening/Polysomnography";

import HepatobiliaryDigestiveScreening from "../components/Services/HepatobiliaryDigestiveScreening";
import StomacheCancer from "../components/Services/HepatobiliaryDigestiveScreening/StomacheCancer";
import ColonCancer from "../components/Services/HepatobiliaryDigestiveScreening/ColonCancer";
import Endoscopy from "../components/Services/HepatobiliaryDigestiveScreening/Endoscopy";
import DigestiveSystemCancer from "../components/Services/HepatobiliaryDigestiveScreening/DigestiveSystemCancer";
import LiverCancer from "../components/Services/HepatobiliaryDigestiveScreening/LiverCancer";

import CardiovascularScreening from "../components/Services/CardiovascularScreening";
import Stroke from "../components/Services/CardiovascularScreening/Stroke";
import DHGScreening from "../components/Services/CardiovascularScreening/DHGScreening";

import CancerScreening from "../components/Services/CancerScreening";
import InsuranceServices from "../components/Services/InsuranceServices";
import OtherServicePackages from "../components/Services/OtherServicePackages";
// import Support from "../components/Services/Support";
// import Train from "../components/Services/Train";
// import Advise from "../components/Services/Advise";

import BookAppointment from "../components/Appointment/BookAppointment";

import QuestionAnswer from "../components/News/QuestionAnswer";

import MoreInfomation from "../components/CustomerGuide/MoreInfomation";
import PACS from "../components/CustomerGuide/PACS";
import CommonMedicine from "../components/News/CommonMedicine";
import NewsEvent from "../components/News/NewsEvent";

import SignupAppointMent from "../components/Signup/SignupAppointMent";
import Appointments from "../components/Login/Appointments";

import UserProfile from "../components/User/UserProfile";
import DoctorDashboard from "../components/Doctor/DoctorDashboard";
import ManageAppointment from "../components/Doctor/ManageAppointment";
import ManageSchedule from "../components/Doctor/ManageSchedule";
import MedicalRecordDoctor from "../components/Doctor/MedicalRecordDoctor";
import CancerScreeningOverall from "../components/Services/CancerScreening/CancerScreeningOverall";
import ThroatCancerScreening from "../components/Services/CancerScreening/ThroatCancerScreening";
import CervicalCancerScreening from "../components/Services/CancerScreening/CervicalCancerScreening";
import LungCancerScreening from "../components/Services/CancerScreening/LungCancerScreening";
import FeeInsuranceService from "../components/Services/InsuranceServices/FeeInsuranceService";
import Premarital from "../components/Services/OtherServicePackages/Premarital";
import ListDoctor from "../components/CustomerGuide/MoreInfomation/ListDoctor";
import ListTechnical from "../components/CustomerGuide/MoreInfomation/ListTechnical";
import ListPrice from "../components/CustomerGuide/MoreInfomation/ListPrice";
import ListRules from "../components/CustomerGuide/MoreInfomation/ListRules";
import AdvantagesOfBoneDensityMeasurement from "../components/News/CommonMedicine/AdvantagesOfBoneDensityMeasurement";
import EightSimpleWays from "../components/News/CommonMedicine/EightSimpleWays";
import Gallstones from "../components/News/CommonMedicine/Gallstones";
import UterineFibroids from "../components/News/CommonMedicine/UterineFibroids";
import FattyLiver from "../components/News/CommonMedicine/FattyLiver";
import FattyLiverDefense from "../components/News/CommonMedicine/FattyLiverDefense";
import FattyLiverSymptomAndPrevention from "../components/News/CommonMedicine/FattyLiverSymptomAndPrevention";
import DiabetesPrevention from "../components/News/CommonMedicine/DiabetesPrevention";
import GastricBleeding from "../components/News/CommonMedicine/GastricBleeding";
import MRI from "../components/News/CommonMedicine/MRI";
import BreastCancer from "../components/News/CommonMedicine/BreastCancer";
import Hepatitis from "../components/News/CommonMedicine/Hepatitis";
import FattyLiverSymptom from "../components/News/CommonMedicine/FattyLiverSymptom";
import TriAnSucKhoe from "../components/News/NewEvents/TriAnSucKhoe";
import LeQuocKhanh from "../components/News/NewEvents/LeQuocKhanh";
import NgayDanSoTheGioi from "../components/News/NewEvents/NgayDanSoTheGioi";
import LichNghiLe from "../components/News/NewEvents/LichNghiLe";
import GioToHungVuong from "../components/News/NewEvents/GioToHungVuong";
import MungSinhNhat from "../components/News/NewEvents/MungSinhNhat";
import MungKhaiTruongGoiGoldVaPlatinum from "../components/News/NewEvents/MungKhaiTruongGoiGoldVaPlatinum";
import DryCoughAfterCovid19 from "../components/News/QuestionAnswer/DryCoughAfterCovid19";
import MISC from "../components/News/QuestionAnswer/MISC";
import CovidRevinvation from "../components/News/QuestionAnswer/CovidRevinvation";
import RiskOfSevereCovidIllness from "../components/News/QuestionAnswer/RiskOfSevereCovidIllness";
import WhoNeedVaccineCovid4th from "../components/News/QuestionAnswer/WhoNeedVaccineCovid4th";
import QuickTestOmicron from "../components/News/QuestionAnswer/QuickTestOmicron";
import CovidSymptom from "../components/News/QuestionAnswer/CovidSymptom";
import CovidSyndrome from "../components/News/QuestionAnswer/CovidSyndrome";
import ReexaminationCovid from "../components/News/QuestionAnswer/ReexaminationCovid";
import LienHe from "../components/Contact/LienHe";

import MedicalPatient from "../components/User/MedicalPatient";

import ManageMedicine from "../components/Admin/ManageMedicine";
import PrescribeMedicine from "../components/Doctor/PrescribeMedicine";
import MedicineUser from "../components/User/MedicineUser";

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
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-otp" element={<ConfirmOTP />} />

        <Route
          path="/login"
          element={!userInfo ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!userInfo ? <SignUp /> : <Navigate to="/" />}
        />
        <Route path="/user/*" element={<UserProfile />}>
          <Route
            path="profile"
            element={
              <ProtectedRoute element={<Profile />} redirectTo="/login" />
            }
          />
          <Route path="appointments" element={<Appointments />} />
          <Route path="medical-record" element={<MedicalPatient />} />
          <Route path="medicine" element={<MedicineUser />} />
        </Route>

        <Route path="/doctor/*" element={<DoctorDashboard />}>
          <Route path="infoDoctor" element={<DoctorProfile />} />
          <Route path="manage-patients" element={<ManageAppointment />} />
          <Route path="patient-records" element={<MedicalRecordDoctor />} />
          <Route path="manage-schedule" element={<ManageSchedule />} />
          <Route path="doctor-medicines" element={<PrescribeMedicine />} />
        </Route>
        <Route path="/adminDashboard/*" element={<AdminDashboard />}>
          <Route path="user" element={<ManageUser />} />
          <Route path="doctor" element={<ManageDoctor />} />
          <Route path="department" element={<Department />} />
          <Route path="control" element={<ControlPanel />} />
          <Route path="medicine" element={<ManageMedicine />} />
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
        <Route path="/gioi-thieu/*" element={<Introduce />} />
        <Route path="/tai-sao-chon-chung-toi">
          <Route index element={<ReasonAboutUs />} />
          <Route path="trang-thiet-bi-hien-ai" element={<HighTechDevice />} />
          <Route path="bac-si-chuyen-mon-cao" element={<ExpertDoctor />} />
          <Route path="dich-vu-chuan-quoc-te" element={<GlobalService />} />
        </Route>
        <Route path="/co-so-vat-chat" element={<Facilities />} />

        {/* Dich-vu */}
        <Route path="/kham-suc-khoe-tong-quat-ca-nhan/*">
          <Route index element={<CheckupPersonal />} />
          <Route
            path="goi-kham-suc-khoe-hau-covid19-chuyen-sau"
            element={<Covid19AfterDeeper />}
          />
          <Route
            path="goi-kiem-tra-hau-suc-khoe-covid19-nang-cao"
            element={<Covid19AfterAdvance />}
          />
          <Route
            path="goi-kham-suc-khoe-tong-quat-platinum"
            element={<HealthCarePlatinum />}
          />
          <Route
            path="goi-kham-suc-khoe-tong-quat-vip-gold"
            element={<HealthCareVIPGOLD />}
          />
          <Route
            path="goi-kham-suc-khoe-tong-quat-chuyen-sau"
            element={<HealthCareDeeper />}
          />
          <Route
            path="goi-kham-suc-khoe-tong-quat-nang-cao"
            element={<HealthCareAdvance />}
          />
          <Route
            path="kham-suc-khoe-tong-quat-va-tam-soat-ung-thu"
            element={<HealthCareAndCancer />}
          />
        </Route>
        <Route path="/kham-suc-khoe-tong-quat-doanh-nghiep/*">
          <Route index element={<CheckupCooperate />} />
          <Route
            path="goi-kham-suc-khoe-tong-quat-doanh-nghiep"
            element={<BusinessHealthCare />}
          />
        </Route>
        <Route path="/tam-soat-chuc-nang-ho-hap/*">
          <Route index element={<RespiratoryFunctionScreening />} />
          <Route path="o-gang-suc-tim-mach-ho-hap-cpet" element={<CPET />} />
          <Route
            path="o-a-ky-giac-ngu-polysomnography-psg"
            element={<Polysomnography />}
          />
        </Route>
        <Route path="/tam-soat-tieu-hoa-gan-mat/*">
          <Route index element={<HepatobiliaryDigestiveScreening />} />
          <Route
            path="goi-tam-soat-ung-thu-da-day"
            element={<StomacheCancer />}
          />
          <Route
            path="goi-tam-soat-ung-thu-ai-truc-trang"
            element={<ColonCancer />}
          />
          <Route
            path="noi-soi-he-tieu-hoa-thuc-quan-da-day-ta-trang-ai-trang"
            element={<Endoscopy />}
          />
          <Route
            path="goi-tam-soat-ung-thu-he-tieu-hoa"
            element={<DigestiveSystemCancer />}
          />
          <Route path="goi-tam-soat-ung-thu-gan" element={<LiverCancer />} />
        </Route>
        <Route path="/tam-soat-tim-mach/*">
          <Route index element={<CardiovascularScreening />} />
          <Route path="goi-tam-soat-nguy-co-ot-quy" element={<Stroke />} />
          <Route
            path="goi-tam-soat-ai-thao-uong-roi-loan-mo-mau-va-gut"
            element={<DHGScreening />}
          />
        </Route>
        <Route path="/tam-soat-ung-thu/*">
          <Route index element={<CancerScreening />} />
          <Route
            path="goi-kham-tam-soat-ung-thu-tong-quat"
            element={<CancerScreeningOverall />}
          />
          <Route
            path="goi-tam-soat-ung-thu-vom-hong"
            element={<ThroatCancerScreening />}
          />
          <Route
            path="goi-tam-soat-ung-thu-co-tu-cung"
            element={<CervicalCancerScreening />}
          />
          <Route
            path="goi-kham-tam-soat-ung-thu-phoi"
            element={<LungCancerScreening />}
          />
        </Route>
        <Route path="/dich-vu-bao-hiem/*">
          <Route index element={<InsuranceServices />} />
          <Route
            path="dich-vu-bao-lanh-vien-phi"
            element={<FeeInsuranceService />}
          />
        </Route>
        <Route path="/cac-goi-dich-vu-khac/*">
          <Route index element={<OtherServicePackages />} />
          <Route
            path="goi-kham-suc-khoe-tien-hon-nhan"
            element={<Premarital />}
          />
        </Route>

        {/* Tin-tuc */}
        <Route path="/y-hoc-thuong-thuc/*">
          <Route index element={<CommonMedicine />} />
          <Route
            path="nhung-uu-iem-vuot-troi-cua-o-loang-xuong-bang-phuong-phap-dexa"
            element={<AdvantagesOfBoneDensityMeasurement />}
          />
          <Route
            path="8-cach-on-gian-giup-giam-au-bung-kinh-hieu-qua"
            element={<EightSimpleWays />}
          />
          <Route
            path="soi-mat-nguyen-nhan-trieu-chung-cach-chan-oan-va-ieu-tri"
            element={<Gallstones />}
          />
          <Route
            path="u-xo-tu-cung-co-bien-chung-thanh-ung-thu-khong"
            element={<UterineFibroids />}
          />
          <Route
            path="nguyen-nhan-gay-benh-gan-nhiem-mo"
            element={<FattyLiver />}
          />
          <Route
            path="phong-ngua-benh-gan-nhiem-mo"
            element={<FattyLiverDefense />}
          />
          <Route
            path="xo-gan-nguyen-nhan-trieu-chung-va-phong-ngua"
            element={<FattyLiverSymptomAndPrevention />}
          />
          <Route
            path="bien-chung-cua-benh-tieu-uong-va-cach-phong-ngua"
            element={<DiabetesPrevention />}
          />
          <Route
            path="xuat-huyet-da-day-co-nguy-hiem-khong"
            element={<GastricBleeding />}
          />
          <Route
            path="khi-nao-can-chup-cong-huong-tu-mri-mach-mau-nao"
            element={<MRI />}
          />
          <Route
            path="ung-thu-vu-nguyen-nhan-trieu-chung-chan-oan-va-ieu-tri"
            element={<BreastCancer />}
          />
          <Route
            path="viem-gan-a-nguyen-nhan-trieu-chung-va-ieu-tri"
            element={<Hepatitis />}
          />
          <Route
            path="trieu-chung-cua-gan-nhiem-mo-la-gi"
            element={<FattyLiverSymptom />}
          />
        </Route>
        <Route path="/tin-tuc-su-kien/*">
          <Route index element={<NewsEvent />} />
          <Route
            path="5-nam-vi-suc-khoe-ngan-qua-tang-tri-an"
            element={<TriAnSucKhoe />}
          />
          <Route
            path="thong-bao-nghi-le-quoc-khanh-02-thang-09"
            element={<LeQuocKhanh />}
          />
          <Route
            path="ngay-dan-so-the-gioi-11-thang-7"
            element={<NgayDanSoTheGioi />}
          />
          <Route
            path="thong-bao-lich-nghi-le-3004-va-0105"
            element={<LichNghiLe />}
          />
          <Route
            path="thong-bao-lich-nghi-le-gio-to-hung-vuong-nam-2024"
            element={<GioToHungVuong />}
          />
          <Route
            path="mung-sinh-nhat-6th-tung-bung-uu-ai"
            element={<MungSinhNhat />}
          />
          <Route
            path="mung-khai-truong-khu-kham-vip-uu-ai-10-goi-kham-gold-va-platinum"
            element={<MungKhaiTruongGoiGoldVaPlatinum />}
          />
        </Route>
        <Route path="/hoi-dap-y-khoa/*">
          <Route index element={<QuestionAnswer />} />
          <Route
            path="tinh-trang-ho-khan-hau-covid19"
            element={<DryCoughAfterCovid19 />}
          />
          <Route
            path="hoi-chung-viem-a-he-thong-o-tre-em-misc-la-gi"
            element={<MISC />}
          />
          <Route
            path="ban-co-the-bi-tai-nhiem-covid19-bao-nhieu-lan"
            element={<CovidRevinvation />}
          />
          <Route
            path="ai-co-nguy-co-mac-benh-covid19-nang"
            element={<RiskOfSevereCovidIllness />}
          />
          <Route
            path="ai-can-tiem-vaccine-covid-19-mui-4"
            element={<WhoNeedVaccineCovid4th />}
          />
          <Route
            path="test-nhanh-co-phat-hien-uoc-omicron-tang-hinh-khong"
            element={<QuickTestOmicron />}
          />
          <Route
            path="trieu-chung-cua-hoi-chung-hau-covid19-la-gi"
            element={<CovidSymptom />}
          />
          <Route
            path="hoi-chung-hau-covid19-keo-dai-bao-lau"
            element={<CovidSyndrome />}
          />
          <Route
            path="bao-lau-sau-khi-khoi-benh-co-the-i-kham-hau-covid19"
            element={<ReexaminationCovid />}
          />
        </Route>

        {/* Huong-dan-khach-hang */}
        <Route path="/thong-tin-tham-khao">
          <Route index element={<MoreInfomation />} />
          <Route
            path="danh-sach-van-bang-chuyen-mon-va-pham-vi-hoat-ong"
            element={<ListDoctor />}
          />
          <Route path="danh-muc-ky-thuat" element={<ListTechnical />} />
          <Route
            path="bang-gia-dich-vu-kham-chua-benh-va-vat-tu-y-te"
            element={<ListPrice />}
          />
          <Route
            path="luat-kham-chua-benh-2023-152023qh15"
            element={<ListRules />}
          />
        </Route>
        <Route
          path="/huong-dan-tru-cap-he-thong-luu-tru-va-quan-ly-hinh-anh"
          element={<PACS />}
        />

        <Route path="/appointments" element={<Appointments />} />

        <Route path="/lien-he" element={<LienHe />} />

        <Route path="/dang-ky" element={<SignupAppointMent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

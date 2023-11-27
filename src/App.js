import React from "react";
import Dashboard from "./MyComponents/Dashboard/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import "@fontsource/poppins";
import AllPatient from "./MyComponents/Patient/AllPatient";
import AddPatient from "./MyComponents/Patient/AddPatient";
import EditPatient from "./MyComponents/Patient/EditPatient";
import AllDoctor from "./MyComponents/Doctors/AllDoctor";
import AddDoctor from "./MyComponents/Doctors/AddDoctor";
import EditDoctor from "./MyComponents/Doctors/EditDoctor";
import Login from "./MyComponents/Login/Login";
import Login2 from "./MyComponents/Login/Login2";
import EditProfile from "./MyComponents/Login/EditProfile";
import Forget from "./MyComponents/Login/Forget";
import AllLab from "./MyComponents/Lab/AllLab";
import AddLab from "./MyComponents/Lab/AddLab";
import EditLab from "./MyComponents/Lab/EditLab";
import AllPharmacy from "./MyComponents/Pharmacy/AllPharmacy";
import AddPharmacy from "./MyComponents/Pharmacy/AddPharmacy";
import EditPharmacy from "./MyComponents/Pharmacy/EditPharmacy";
import MobileNav from "./MyComponents/MobileNav/MobileNav";
import AllItem from "./MyComponents/MobileNav/AllItem";
import AllOrders from "./MyComponents/Orders/AllOrders";
import OrderView from "./MyComponents/Orders/OrderView";
import AllMedicalRecord from "./MyComponents/MedicalHis/AllMedicalRecord";
import AllPrescription from "./MyComponents/Prescription/AllPrescription";
import AllPayment from "./MyComponents/Payment/AllPayment";
import AllAppointment from "./MyComponents/Appointment/AllAppointment";
import LabTest from "./MyComponents/LabTest/LabTest";
import Category from "./MyComponents/Category/Category";
import SubCategory from "./MyComponents/Category/SubCategory";
import NewUser from "./MyComponents/NewUser/NewUser";
import Discount from "./MyComponents/Discount/Discount";
import Commision from "./MyComponents/Commision/Commision";
import OPD from "./MyComponents/OPD/OPD";
import Invoice from "./MyComponents/Invoice/Invoice";
import Complaints from "./MyComponents/Complaints/Complaints";
import Coupon from "./MyComponents/Coupon/Coupon";
import Terms from "./MyComponents/Settings/Terms";
import Privacy from "./MyComponents/Settings/Privacy";
import Help from "./MyComponents/Settings/Help";
import { ToastContainer } from "react-toastify";
import SignUp from "./MyComponents/Login/SignUp";

/* =========== Pharmacy Details =============== */
import TotalMedicine from "./PharmaComponents/TotalMedicine";
import MedicineCategory from "./PharmaComponents/MedicineCategory";
import Subcategory from "./PharmaComponents/Subcategory";
import Patient from "./PharmaComponents/Patientv";
import AcceptedOrders from "./PharmaComponents/AcceptedOrders";
import RejectedOrders from "./PharmaComponents/RejectedOrders";
import DeliverMedi from "./PharmaComponents/DeliverMedi";
import PharmaPayment from "./PharmaComponents/PharmaPayment";
import PushNoti from "./PharmaComponents/PushNoti";
import PharmaInvoice from "./PharmaComponents/PharmaInvoice";
import PendingOrder from "./PharmaComponents/PendingOrder";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {/* <Dashboard/> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-patient" element={<AllPatient />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/edit-patient" element={<EditPatient />} />
        <Route path="/all-doctor" element={<AllDoctor />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/edit-doctor" element={<EditDoctor />} />
        <Route path="/all-lab" element={<AllLab />} />
        <Route path="/add-lab" element={<AddLab />} />
        <Route path="/edit-lab" element={<EditLab />} />
        <Route path="/all-pharmacy" element={<AllPharmacy />} />
        <Route path="/add-pharmacy" element={<AddPharmacy />} />
        <Route path="/edit-pharmacy" element={<EditPharmacy />} />
        <Route path="/mobile-nav" element={<MobileNav />} />
        <Route path="/all-item" element={<AllItem />} />
        <Route path="/all-orders" element={<AllOrders />} />
        <Route path="/view-order" element={<OrderView />} />
        <Route path="/all-medical-history" element={<AllMedicalRecord />} />
        <Route path="/all-prescription" element={<AllPrescription />} />
        <Route path="/all-payment" element={<AllPayment />} />
        <Route path="/all-appointment" element={<AllAppointment />} />
        <Route path="/lab-test" element={<LabTest />} />
        <Route path="/category" element={<Category />} />
        <Route path="/SubCategory" element={<SubCategory />} />
        <Route path="/new-users" element={<NewUser />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/commission" element={<Commision />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/opd" element={<OPD />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/coupon" element={<Coupon />} />

        
        <Route path="/total-medicine" element={<TotalMedicine />} />
        <Route path="/medicine-category" element={<MedicineCategory />} />
        <Route path="/sub-category" element={<Subcategory />} />
        <Route path="/accepted-orders" element={<AcceptedOrders />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/rejected-orders" element={<RejectedOrders />} />
        <Route path="/deliver-medicines" element={<DeliverMedi />} />
        <Route path="/pharma-payment" element={<PharmaPayment />} />
        <Route path="/push-noti" element={<PushNoti />} />
        <Route path="/pharma-invoice" element={<PharmaInvoice />} />
        <Route path="/pharma-registration" element={<SignUp />} />
        <Route path="/pending-order" element={<PendingOrder />} />
      </Routes>
    </>
  );
};

export default App;

import { Outlet } from "react-router";

const Attendance = () => {
  return (
    <div>
      <Outlet />
      <div>Attendance</div>
    </div>
  );
};

export default Attendance;


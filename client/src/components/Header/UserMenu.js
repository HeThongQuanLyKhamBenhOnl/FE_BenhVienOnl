import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { clearError, logout } from "../../Redux/User/userSlice";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(clearError());
    dispatch(logout());
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/user/profile");
  };

  const handleAppointments = () => {
    navigate("/appointments");
  };

  // Abbreviate name based on window width
  const getAbbreviatedName = (fullName) => {
    if (windowWidth <= 1024) {
      const nameParts = fullName.split(" ");
      if (nameParts.length > 2) {
        return `${nameParts[0]} ${nameParts[1][0]}. ${nameParts[2][0]}.`; // Example: "Nam L. C."
      }
      return `${nameParts[0]} ${nameParts[1][0]}.`; // For two-part names
    }
    return fullName;
  };

  // Menu when logged in
  const loggedInMenu = (
    <Menu>
      <Menu.Item key="1" onClick={handleProfile}>
        <span className="text-gray-700 hover:text-blue-500">Thông tin tài khoản</span>
      </Menu.Item>
      {userInfo?.role === "patient" && (
        <Menu.Item key="3" onClick={handleAppointments}>
          <span className="text-gray-700 hover:text-blue-500">Lịch hẹn của bạn</span>
        </Menu.Item>
      )}
      <Menu.Item key="2" onClick={handleLogout}>
        <span className="text-gray-700 hover:text-blue-500">Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );

  // Menu when logged out
  const loggedOutMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate("/login")}>
        <span className="text-gray-700 hover:text-blue-500">Đăng Nhập</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => navigate("/register")}>
        <span className="text-gray-700 hover:text-blue-500">Đăng Ký</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center">
      {userInfo && (
        <span className="mr-2 text-white font-bold user-fullname">
          {getAbbreviatedName(userInfo.fullName)}
        </span>
      )}
      <Dropdown
        overlay={userInfo ? loggedInMenu : loggedOutMenu}
        placement="bottomRight"
        arrow
      >
        <Avatar
          size="large"
          icon={<UserOutlined />}
          className="cursor-pointer"
        />
      </Dropdown>
    </div>
  );
};

export default UserMenu;

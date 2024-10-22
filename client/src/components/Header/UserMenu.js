import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { clearError, logout } from "../../Redux/User/userSlice";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(clearError());
    dispatch(logout());
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const loggedInMenu = (
    <Menu>
      <Menu.Item key="1" onClick={handleProfile}>
        <span className="text-gray-700 hover:text-blue-500">
          Thông tin tài khoản
        </span>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>
        <span className="text-gray-700 hover:text-blue-500">Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );

  const loggedOutMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate("/login")}>
        <span className="text-gray-700 hover:text-blue-500">Đăng Nhập</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => navigate("/signup")}>
        <span className="text-gray-700 hover:text-blue-500">Đăng Ký</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center">
      {userInfo && (
        <span className="mr-2 text-white font-bold">{userInfo.fullName}</span>
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

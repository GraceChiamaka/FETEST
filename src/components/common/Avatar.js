import React from "react";
import { Menu, Dropdown } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Avatar = ({ className = "" }) => {
	const menu = (
		<Menu>
			<Menu.Item>
				<a href="/#/">View Notifications</a>
			</Menu.Item>
			<Menu.Item>
				<a href="/#/">Profile</a>
			</Menu.Item>
			<Menu.Item>
				<a href="/#/">Log Out</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menu} trigger="click">
			<div className="avi-container">
				<a
					href="/#/"
					className={"ant-dropdown-link " + className}
					onClick={(e) => e.preventDefault()}
				>
					<FaUserAlt style={{ color: "#778699" }} />
				</a>
				<AiOutlineDown style={{ color: "#778699" }} />
			</div>
		</Dropdown>
	);
};

export default Avatar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import Avatar from "./Avatar";
import SearchIcon from "../../assets/images/icons/search.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/icons/home-gray.svg";
import { ReactComponent as HomeAltIcon } from "../../assets/images/icons/home.svg";
import { ReactComponent as DivisionIcon } from "../../assets/images/icons/divisions-gray.svg";
import { ReactComponent as DivisionAltIcon } from "../../assets/images/icons/divisions.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/images/icons/projects-gray.svg";
import { ReactComponent as ProjectsAltIcon } from "../../assets/images/icons/projects.svg";
import BellIcon from "../../assets/images/icons/bell.svg";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false);
	const Links = [
		{
			url: "/",
			name: "Home",
			Icon: HomeIcon,
			AltIcon: HomeAltIcon,
		},
		{
			url: "/entries",
			name: "Entries",
			Icon: ProjectsIcon,
			AltIcon: ProjectsAltIcon,
		},
		{
			url: "/divisions",
			name: "Divisions",
			Icon: DivisionIcon,
			AltIcon: DivisionAltIcon,
		},
	];
	const displayNavItems = () => {
		return Links.map(({ url, name, Icon, AltIcon }) => {
			if (window.location.pathname === url) {
				return (
					<li className="nav-list active" key={url}>
						<Link className="nav-item" to={url}>
							<AltIcon />
							<span>{name}</span>
						</Link>
					</li>
				);
			}
			return (
				<li className="nav-list" key={url}>
					<Link className="nav-item" to={url}>
						<Icon />
						<span>{name}</span>
					</Link>
				</li>
			);
		});
	};
	const onSearch = () => {};

	return (
		<div className="header">
			<div className="logo-container">
				<Logo />
				<button
					className="toggle-button"
					onClick={() => setToggleNavbar(!toggleNavbar)}
				>
					<AiOutlineMenu />
				</button>
			</div>
			<div className={"navbar-collapse " + (toggleNavbar ? "hide" : "show")}>
				<div className="nav-left">
					<ul className="navbar-nav">{displayNavItems()}</ul>
				</div>
				<div className="nav-right">
					<div className="search">
						<Input
							addonBefore={<img src={SearchIcon} alt="search icon" />}
							placeholder=""
							onSearch={onSearch}
						/>
					</div>
					<div className="notification">
						<img src={BellIcon} alt="notification icon" />
					</div>
					<Avatar className="user-avatar" />
				</div>
			</div>
		</div>
	);
};

export default Header;

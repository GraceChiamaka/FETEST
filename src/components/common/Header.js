import React from "react";
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

const Header = () => {
	const Links = [
		{
			url: "/",
			name: "Home",
			Icon: HomeIcon,
			AltIcon: HomeAltIcon,
		},
		{
			url: "/divisions",
			name: "Divisions",
			Icon: DivisionIcon,
			AltIcon: DivisionAltIcon,
		},
		{
			url: "/projects",
			name: "Projects",
			Icon: ProjectsIcon,
			AltIcon: ProjectsAltIcon,
		},
	];
	const displayNavItems = () => {
		return Links.map(({ url, name, Icon, AltIcon }) => {
			if (window.location.pathname === url) {
				return (
					<li className="nav-list active">
						<Link className="nav-item" to={url}>
							<AltIcon />
							<span>{name}</span>
						</Link>
					</li>
				);
			}
			return (
				<li className="nav-list">
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
			</div>
			<div className="nav-left">
				<ul className="navbar-nav">{displayNavItems()}</ul>
			</div>
			<div className="nav-right">
				<div className="search">
					<Input
						addonBefore={<img src={SearchIcon} alt="search icon" />}
						placeholder=""
						onSearch={onSearch}
						style={{ width: 200 }}
					/>
				</div>
				<div className="notification">
					<img src={BellIcon} alt="notification icon" />
				</div>
				<Avatar className="user-avatar" />
			</div>
		</div>
	);
};

export default Header;

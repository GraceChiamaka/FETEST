import React from "react";
import FELogo from "../../assets/images/logo.svg";

const Logo = ({ className }) => (
	<div className="logo-wrapper">
		<img src={FELogo} className={"" + className} alt="FeTest logo" />
		<span>FE Engineer Test 1</span>
	</div>
);

export default Logo;

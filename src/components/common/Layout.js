import React from "react";
import Card from "./Card";
import InfoIcon from "../../assets/images/icons/info.svg";
import { Row, Col, Popover } from "antd";

const Layout = ({ children }) => {
	const infoContent = (
		<div>
			<p className="title">Ongoing Metric</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur!
				Natus provident perspiciatis
			</p>
		</div>
	);
	return (
		<div className="layout-container">
			<div className="sidebar">
				<Row>
					<Col lg={21}>
						<Card>
							<Row justify="space-between" align="middle">
								<Col>
									<h2 className="card-heading">31454</h2>
									<p className="card-subtitle">Ongoing metric</p>
								</Col>
								<Col>
									<Popover content={infoContent} overlayClassName="info-popup">
										<img src={InfoIcon} alt="" />
									</Popover>
								</Col>
							</Row>
						</Card>
						<Card>
							<Row justify="space-between" align="middle">
								<Col>
									<h2 className="card-heading">31454</h2>
									<p className="card-subtitle">Ongoing metric</p>
								</Col>
								<Col>
									<Popover content={infoContent} overlayClassName="info-popup">
										<img src={InfoIcon} alt="" />
									</Popover>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</div>
			<div className="main-content">{children}</div>
		</div>
	);
};

export default Layout;

import React from "react";
import Header from "../../components/common/Header";
import { Link } from "react-router-dom";
import Card from "../../components/common/Card";
import InfoIcon from "../../assets/images/icons/info.svg";
import PawnIcon from "../../assets/images/icons/pawn.svg";
import SpeakerIcon from "../../assets/images/icons/speaker.svg";
import PhoneIcon from "../../assets/images/icons/phone-outline.svg";
import MailIcon from "../../assets/images/icons/mail.svg";
import MarkerIcon from "../../assets/images/icons/marker.svg";
import BookIcon from "../../assets/images/icons/book.svg";
import PrintIcon from "../../assets/images/icons/fingerprint.svg";
import ArrowDownRight from "../../assets/images/icons/arrow-down-right.svg";
import ArrowRight from "../../assets/images/icons/arrow-right.svg";
import ArrowUp from "../../assets/images/icons//arrow-up.svg";
import ArrowDownCircle from "../../assets/images/icons/arrow-down-circle.svg";
import {
	Row,
	Col,
	Breadcrumb,
	Popover,
	Table,
	Timeline,
	Menu,
	Dropdown,
} from "antd";
import { MdMoreVert } from "react-icons/md";

const DashboardPage = () => {
	const menu = (
		<Menu>
			<Menu.Item>
				<a href="/#/">Edit</a>
			</Menu.Item>
			<Menu.Divider></Menu.Divider>
			<Menu.Item>
				<a href="/#/">Delete</a>
			</Menu.Item>
		</Menu>
	);
	const dataSource = [
		{
			id: "jaiuiend",
			name: "Courtney Henry",
			location: {
				state: "Lagos state",
				address: "775 Rolling Green Rd.",
			},
			status: {
				state: false,
				count: 0,
			},
			entries: {
				type: "Homogenous",
				count: 19,
			},
			riskProfile: "low",
		},
		{
			id: "uiuein-8298y-2hi8ude",
			name: "Darrell Steward",
			location: {
				state: "Lagos state",
				address: "7529 E. Pecan St.",
			},
			status: {
				state: true,
				count: 2,
			},
			entries: {
				type: "Heterogenous",
				count: 10,
			},
			riskProfile: "mid",
		},
		{
			id: "kdoih98e9njayzx8nhoh",
			name: "Cody Fisher",
			location: {
				state: "Lagos state",
				address: "3605 Parker Rd.",
			},
			status: {
				state: false,
				count: 0,
			},
			entries: {
				type: "Homogenous",
				count: 8,
			},
			riskProfile: "mid",
		},
		{
			id: "nskisi89wu2i8",
			name: "Bessie Cooper",
			location: {
				state: "Lagos state",
				address: "775 Rolling Green Rd.",
			},
			status: {
				state: true,
				count: 1,
			},
			entries: {
				type: "Heterogenous",
				count: 12,
			},
			riskProfile: "high",
		},
		{
			id: "ui982jn-289j2-nduudie",
			name: "Annette Black",
			location: {
				state: "Lagos state",
				address: "775 Rolling Green Rd.",
			},
			status: {
				state: false,
				count: 0,
			},
			entries: {
				type: "Heterogenous",
				count: 12,
			},
			riskProfile: "low",
		},
		{
			id: "hduye02ui7hci8",
			name: "Bessie Cooper",
			location: {
				state: "Lagos state",
				address: "775 Rolling Green Rd.",
			},
			status: {
				state: true,
				count: 5,
			},
			entries: {
				type: "Heterogenous",
				count: 12,
			},
			riskProfile: "high",
		},
		{
			id: "676389hiu7e83",
			name: "Cody Fisher",
			location: {
				state: "Lagos state",
				address: "3605 Parker Rd.",
			},
			status: {
				state: true,
				count: 2,
			},
			entries: {
				type: "Homogenous",
				count: 8,
			},
			riskProfile: "mid",
		},
		{
			id: "8829jiu8983",
			name: "Annette Black",
			location: {
				state: "Lagos state",
				address: "775 Rolling Green Rd.",
			},
			status: {
				state: false,
				count: 0,
			},
			entries: {
				type: "Homogeneous",
				count: 14,
			},
			riskProfile: "low",
		},
	];
	const column = [
		{
			title: "NAME",
			dataIndex: "name",
			render: (name) => (
				<div className="info-table-name">
					<img src={ArrowDownCircle} alt="" />

					<span>{name}</span>
				</div>
			),
		},
		{
			title: "LOCATION",
			dataIndex: "location",
			render: (location) => (
				<div className="info-table-location">
					<p className="state">{location.state}</p>
					<p className="address">{location.address}</p>
				</div>
			),
		},
		{
			title: "STATUS",
			dataIndex: "status",
			render: (status) => (
				<span
					className={
						"status-badge " +
						(status.state === false ? "badge-success" : "badge-warning")
					}
				>
					{status.count > 0 ? `${status.count} issues found` : "No issue"}
				</span>
			),
		},
		{
			title: "ENTRIES",
			dataIndex: "entries",
			className: "info-entries",
			render: (entries) => (
				<div className="">
					<h4>
						<span className="dot"></span>
						{entries.count} Unique Entries{" "}
					</h4>
					<p>{entries.type}</p>
				</div>
			),
		},
		{
			title: "RISK PROFILE",
			dataIndex: "riskProfile",
			className: "info-risk-profile",
			render: (riskProfile) => <div>{displayProfile(riskProfile)}</div>,
		},
		{
			title: "",
			dataIndex: "id",
			align: "Right",

			render: (id) => (
				<div>
					<Dropdown overlay={menu} trigger="click">
						<a
							href="/#/"
							className="ant-dropdown-link"
							onClick={(e) => e.preventDefault()}
						>
							<MdMoreVert style={{ color: "#C3C3C3", fontSize: "1.2rem" }} />
						</a>
					</Dropdown>
				</div>
			),
		},
	];

	// display more data on hover info icon
	const infoContent = (title, content) => (
		<div>
			<p className="title">{title}</p>
			<p>{content}</p>
		</div>
	);
	// display user profile on table
	const displayProfile = (profile) => {
		return (
			<div className="risk-profile-container">
				<img
					src={
						profile === "high"
							? ArrowUp
							: profile === "mid"
							? ArrowRight
							: ArrowDownRight
					}
					alt="risk icon"
				/>
				<span
					className={
						"profile-text " +
						(profile === "high"
							? "text-danger"
							: profile === "mid"
							? "text-purple"
							: "text-green")
					}
				>
					{profile} risk
				</span>
			</div>
		);
	};

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(
				`selectedRowKeys: ${selectedRowKeys}`,
				"selectedRows: ",
				selectedRows
			);
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === "Disabled User", // Column configuration not to be checked
			name: record.name,
		}),
	};

	return (
		<div className="dashboard-container">
			<Header />
			<div className="breadcrumb-container">
				<Breadcrumb separator="">
					<Breadcrumb.Item className="history-breadcrumb">
						<Link to="/dashboard">Dashboard</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator className="seperator"> > </Breadcrumb.Separator>
					<Breadcrumb.Item className="active-page">Divisions</Breadcrumb.Item>
				</Breadcrumb>
			</div>

			<div className="dashboard-heading">
				<Row justify="space-between">
					<Card className="data-card">
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
					<Card className="data-card">
						<Row justify="space-between" align="middle">
							<Col>
								<h2 className="card-heading">31454</h2>
								<p className="card-subtitle">Past metric</p>
							</Col>
							<Col>
								<Popover
									content={infoContent(
										"Past metric",
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur!"
									)}
									overlayClassName="info-popup"
								>
									<img src={InfoIcon} alt="information icon" />
								</Popover>
							</Col>
						</Row>
					</Card>
					<Card className="data-card">
						<Row justify="space-between" align="middle">
							<Col>
								<h2 className="card-heading">31454</h2>
								<p className="card-subtitle">Missed metric</p>
							</Col>
							<Col>
								<Popover
									content={infoContent(
										"Missed metric",
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur!"
									)}
									overlayClassName="info-popup"
								>
									<img src={InfoIcon} alt="information icon" />
								</Popover>
							</Col>
						</Row>
					</Card>
					<Card className="data-card">
						<Row justify="space-between" align="middle">
							<Col>
								<h2 className="card-heading">31454</h2>
								<p className="card-subtitle">Failed metric</p>
							</Col>
							<Col>
								<Popover
									content={infoContent(
										"Failed metric",
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur!"
									)}
									overlayClassName="info-popup"
								>
									<img src={InfoIcon} alt="information icon" />
								</Popover>
							</Col>
						</Row>
					</Card>
					<Card className="data-card">
						<Row justify="space-between" align="middle">
							<Col>
								<h2 className="card-heading">31454</h2>
								<p className="card-subtitle">Pending metric</p>
							</Col>
							<Col>
								<Popover
									content={infoContent(
										"Pending Metric",
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consequatur!"
									)}
									overlayClassName="info-popup"
								>
									<img src={InfoIcon} alt="information" />
								</Popover>
							</Col>
						</Row>
					</Card>
				</Row>
			</div>
			<div className="dashboard-content">
				<Row justify="space-between">
					<div className="content-sidebar">
						<Card className="data-summary">
							<div className="side-section-heading">
								<img src={PawnIcon} alt="pawn icon" />
								<h3>Divisions Summary</h3>
							</div>
							<div className="card-row">
								<img src={PhoneIcon} alt="phone icon" />
								<p>0801 234 5678</p>
							</div>
							<div className="card-row">
								<img src={MailIcon} alt="mail icon" />
								<p>asbfefr@gmail.com</p>
							</div>
							<div className="card-row">
								<img src={MarkerIcon} alt="mail icon" />
								<p>Mojidi, Lagos</p>
							</div>
							<div className="card-row">
								<img src={BookIcon} alt="mail icon" />
								<p>2 Journal entries</p>
							</div>
							<div className="card-row">
								<img src={PrintIcon} alt="mail icon" />
								<p>24 fingerprints enrolled</p>
							</div>
						</Card>
						<div className="module-section">
							<div className="side-section-heading">
								<img src={SpeakerIcon} alt="speaker icon" />
								<h3>Module History</h3>
							</div>
							<div className="history-timeline">
								<Timeline>
									<Timeline.Item className="gray-timeline">
										<h4 className="title">
											Searched “Journal Entries” on Division module
										</h4>
										<div className="detail">
											<div className="timestamp">22:10 15/09/2020</div>
											<div className="category">
												<span className="dot"></span> web
											</div>
										</div>
									</Timeline.Item>
									<Timeline.Item className="gray-timeline">
										<h4 className="title">
											Searched “Fingerprint record” on Division module
										</h4>
										<div className="detail">
											<div className="timestamp">22:10 15/09/2020</div>
											<div className="category">
												<span className="dot"></span> web
											</div>
										</div>
									</Timeline.Item>
									<Timeline.Item className="gray-timeline">
										<h4 className="title">
											Searched “Journal Entries” on Division module
										</h4>
										<div className="detail">
											<div className="timestamp">22:10 15/09/2020</div>
											<div className="category">
												<span className="dot"></span> web
											</div>
										</div>
									</Timeline.Item>
								</Timeline>
							</div>
						</div>
					</div>
					<div className="content-main">
						<Table
							rowSelection={{
								type: "checkbox",
								...rowSelection,
							}}
							rowClassName="user-info-row"
							dataSource={dataSource}
							columns={column}
							pagination={false}
						/>
					</div>
				</Row>
			</div>
		</div>
	);
};

export default DashboardPage;

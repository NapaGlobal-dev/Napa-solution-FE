import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import joinJsx from "../../../util/joinJsx";
import Link from "next/link";
import animate from "../../../util/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = (props) => {
	const data = convertArrToObject(props.data.layout[0].property);
	// const summary = getData(props.data.layout[0].property, /Footer_Summary/);

	useEffect(() => {
		animate();
	}, []);
	// const page_urls = props.data.pages;
	useEffect(() => {
		window.convertArrToObject = convertArrToObject;
		Array.from({ length: props.data.groups.length }, (num, index) => {
			$(`#btn-up-${index + 1}`).click(() => {
				$(`#ul-item-${index + 1}`).css({
					display: "none",
					transition: "all 0.5s ease",
				});
				$(`#btn-down-${index + 1}`).css("display", "block");
				$(`#btn-up-${index + 1}`).css("display", "none");
			});
			$(`#btn-down-${index + 1}`).click(() => {
				$(`#ul-item-${index + 1}`).css({
					display: "block",
					transition: "all 0.5s ease",
				});
				$(`#btn-down-${index + 1}`).css("display", "none");
				$(`#btn-up-${index + 1}`).css("display", "block");
			});
		});
	}, []);
	const removeRoute = (data, url) => {
		return data.childrenPage.filter((item) => item.url !== url);
	};
	const socialLinks = [
		data.Footer_Social_Facebook,
		data.Footer_Social_LinkedIn,
		data.Footer_Social_Twitter,
	].map((item, index) => (
		<a key={index} href={item?.url} className={styles.colorWhite}>
			{item?.value}
		</a>
	));
	let p0 = {};
	p0 = { ...props.data.groups[1] };

	const routesToRemove = ["/executive-committee", "/ceo-message", "/why-napa"];

	p0.childrenPage = props.data.groups[1].childrenPage.filter(
		(item) => !routesToRemove.includes(item.url)
	);

	const groups = [
		...props.data.groups.slice(0, 1),
		p0,
		...props.data.groups.slice(2),
	];

	return (
		<>
			<footer id="sticky-s-footer" className={clsx(styles.footer)}>
				<div className={styles.coverContainer}>
					<div
						className={clsx(styles.covergalery)}
						// style={{
						//   backgroundImage: `url(${data.Footer_ContactImage.image.original})`,
						// }}
					>
						<LazyLoadImage
							effect="blur"
							src={data.Footer_ContactImage?.image?.original}
							placeholderSrc={data.Footer_ContactImage?.image?.thumbnail}
							threshold={100}
							width="100%"
							height="100%"
						/>
						<div className={clsx(styles.scaleText)}>
							<span className={clsx(styles.h3text)} id="down-up">
								{joinJsx(data.Footer_ContactTitle.value.split("\\n"), <br />)}
							</span>
							<span className={clsx(styles.ptext)} id="down-up">
								{joinJsx(data.Footer_ContactContent.value.split("\\n"), <br />)}
							</span>
							<a href={data.Footer_ContactButton.url}>
								<div
									className="col-xs-12 order-3 order-xl-4 no-default-spacing"
									id="detail-btn-company">
									<span id="detail-btn-company-content">
										{data.Footer_ContactButton.value}
									</span>
									<svg id="stroke-arr-btn" viewBox="0 0 64 7">
										<path d="M0 6h61.5l-5.2-5.2"></path>
									</svg>
								</div>
							</a>
						</div>
					</div>
					<div
						className={clsx(
							styles.coverBackground,
							styles.footerBackground
						)}></div>
				</div>

				<div
					className={clsx(
						"container-fluid d-flex justify-content-center flex-column",
						styles.footerBackground
					)}>
					<div className={clsx("container-fluid", styles.containX)}>
						<div className={clsx(styles.groupMapIcon)}>
							<div
								className={clsx(
									"d-flex  justify-content-between",
									styles.groupNapaIcon
								)}>
								<div className={clsx(styles.wrapIconLogo)}>
									<img
										src={data.Footer_NapaLogo.image.original}
										className={clsx(styles.imgNapa)}
									/>
									<div className={clsx(styles.socialsIconDeskTop)}>
										<a href={data.Footer_Social_LinkedIn?.url}>
											<img
												className="svg-inline--fa fa-linkedin fa-w-14"
												src="/img/linkedin.svg"
											/>
										</a>
										<a href={data.Footer_Social_Facebook?.url}>
											<img
												className="svg-inline--fa fa-facebook-square fa-w-14"
												src="/img/facebook.svg"
											/>
										</a>
										{/* <a href={data.Footer_Social_Twitter?.url}>
											<img
												className="svg-inline--fa fa-twitter-square fa-w-14"
												src="/img/twitter.svg"
											/>
										</a> */}
									</div>
								</div>
							</div>

							<div className="pl-0 d-flex justify-content-end">
								<img
									src={data.Footer_LocatedImg.image.original}
									className={clsx(styles.imgMap)}
								/>
							</div>
						</div>
						<div className={clsx(styles.half)}>
							<div className={clsx(styles.linksAndsocials)}>
								{groups.map((page, index) => (
									<div key={index} className={clsx(styles.groupText)}>
										<h4>
											{!!page.url ? (
												<a href={page.url} className={styles.colorWhite}>
													{page.name}
												</a>
											) : (
												page.name
											)}
											<span id={`btn-down-${index + 1}`}>
												<img
													className="svg-inline--fa fa-sort-down fa-w-10"
													src="/img/load-down.svg"
												/>
											</span>
											<span
												id={`btn-up-${index + 1}`}
												className={clsx(styles.upIcon)}>
												<img
													className="svg-inline--fa fa-sort-up fa-w-10"
													src="/img/load-up.svg"
												/>
											</span>
										</h4>
										<ul id={`ul-item-${index + 1}`}>
											{page.childrenPage.map((childPage, key) =>
												/\(not used by Napa Solution\)/.test(childPage.name) ? (
													<></>
												) : (
													<li key={key}>
														<a
															href={childPage.url}
															className={clsx(styles.liText)}
															key={key}>
															{childPage.name}
														</a>
													</li>
												)
											)}
										</ul>
									</div>
								))}
								{/* <div className={clsx(styles.socials)}>
                  {joinJsx(socialLinks, <br />)}
                </div> */}
								<div className={clsx(styles.socialsIcon)}>
									<a href={data.Footer_Social_LinkedIn?.url}>
										<img
											className="svg-inline--fa fa-linkedin fa-w-14"
											src="/img/linkedin.svg"
										/>
									</a>
									<a href={data.Footer_Social_Facebook?.url}>
										<img
											className="svg-inline--fa fa-facebook-square fa-w-14"
											src="/img/facebook.svg"
										/>
									</a>
									{/* <a href={data.Footer_Social_Twitter?.url}>
										<img
											className="svg-inline--fa fa-twitter-square fa-w-14"
											src="/img/twitter.svg"
										/>
									</a> */}
								</div>
							</div>
						</div>
					</div>

					<div
						className={clsx(
							"d-flex justify-content-center",
							styles.footerPublish
						)}>
						<p className="txt-bottom-footer">{data.Footer_Publish.value}</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

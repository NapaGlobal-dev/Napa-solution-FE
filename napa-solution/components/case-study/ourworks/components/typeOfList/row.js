import styles from "./row.module.css";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

function Row(props) {
	const { value } = useDarkMode();
	const [isDarkMode, setIsDarkMode] = useState(null);
	const { entry } = props;

	useEffect(() => {
		setIsDarkMode(value);
	}, [value]);

	return (
		<div
			className={clsx(
				styles.root,
				styles.bounce,
				styles.shine,
				isDarkMode ? styles.rootDark : ""
			)}>
			<a href={entry?.rightUrl} target="_self">
				<div className={styles.wrapImage}>
					{/* <img alt='pic-project' src={!loading ? entry?.imageDetail?.original : undefined} className={styles.img} /> */}
					<LazyLoadImage
						alt="pic-project"
						src={entry?.image?.original}
						className={styles.img}
						wrapperClassName={styles.imageWrapper}
					/>
				</div>
				<div className={styles.wrapTitle}>
					<h4 className={styles.projectName}>{entry?.value}</h4>
					{/* <span className={styles.description}>{entry?.value}</span> */}
				</div>
			</a>
		</div>
	);
}

export default Row;

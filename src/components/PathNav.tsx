import homeIcon from "../assets/home-icon.svg";
import rightArrowIcon from "../assets/right-arrow.svg";
import { cn } from "../lib/utils";
const PathNav = () => {
	const filePath = decodeURI(window.location.pathname);
	let filePathArray = filePath.split("/");
	filePathArray.shift();
	return (
		<div className="w-full flex items-center">
			<a href="/" className="-mt-1">
				<img src={homeIcon} alt="home icon" className="w-5 inline" />
			</a>
			<img src={rightArrowIcon} alt="right arrow icon" className="inline" />
			{filePathArray.map((path, index) => (
				<span
					key={index}
					className={cn(
						"m-1",
						index === filePathArray.length - 1
							? "text-blue-900 font-semibold"
							: ""
					)}
				>
					<a
						href={`/${filePathArray.slice(0, index + 1).join("/")}`}
						className="capitalize"
					>
						{path}
					</a>
					{index !== filePathArray.length - 1 && (
						<img
							src={rightArrowIcon}
							alt="right arrow icon"
							className="inline"
						/>
					)}
				</span>
			))}
		</div>
	);
};

export default PathNav;

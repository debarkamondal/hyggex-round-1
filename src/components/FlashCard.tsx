import bulbIcon from "../assets/bulb-icon.svg";
import speakerIcon from "../assets/speaker-icon.svg";
import resetIcon from "../assets/reset-icon.svg";
import leftButtonIcon from "../assets/left-button-icon.svg";
import rightButtonIcon from "../assets/right-button-icon.svg";
import fullscreenIcon from "../assets/fullscreen-icon.svg";
import { useState } from "react";
import { cn } from "../lib/utils";
const FlashCard = () => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<div className="max-w-[40rem] mx-auto cursor-pointer">
			<div
				className="relative w-fit my-8 mx-auto"
				onClick={() => setIsClicked(!isClicked)}
			>
				<div
					className={cn(
						"absolute transition-all duration-1000 top-0 bg-gradient-to-tr from-blue-700 to-blue-900 min-w-[36rem]  min-h-96 rounded-3xl flex justify-center items-center text-white font-semibold text-2xl  ",
						isClicked ? "[transform:rotateY(180deg)] -z-10" : "rotate-0 z-10"
					)}
				>
					<img
						src={bulbIcon}
						alt="bulb-icon"
						className="absolute top-4 left-4 w-6"
					/>
					<div>9 + 6 + 7x - 2x - 3</div>
					<img
						src={speakerIcon}
						alt="soeaker-icon"
						className="absolute top-4 right-4 w-6"
					/>
				</div>
				<div
					// onClick={() => setIsClicked(!isClicked)}
					className={cn(
						"transition-all duration-1000 top-0 bg-gradient-to-tr from-cyan-700 to-cyan-900 min-w-[36rem] min-h-96 rounded-3xl flex justify-center items-center text-white font-semibold text-2xl ",
						!isClicked ? "[transform:rotateY(180deg)] " : "rotate-0"
					)}
				>
					<img
						src={bulbIcon}
						alt="bulb-icon"
						className="absolute top-4 left-4 w-6"
					/>
					<div>9 + 6 + 7x - 2x - 3</div>
					<img
						src={speakerIcon}
						alt="soeaker-icon"
						className="absolute top-4 right-4 w-6"
					/>
				</div>
			</div>
			<div className="flex justify-around items-center">
				<img src={resetIcon} alt="reset icon" />
				<img src={leftButtonIcon} alt="left button icon" />
				<span className="font-semibold text-xl text-blue-900">01/10</span>
				<img src={rightButtonIcon} alt="right button icon" />
				<img src={fullscreenIcon} alt="fullscreen icon" />
			</div>
		</div>
	);
};

export default FlashCard;

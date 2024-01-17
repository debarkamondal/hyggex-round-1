import { useState } from "react";
import { cn } from "../lib/utils";
import dropdownIcon from "../assets/dropdown-icon.svg";

const Dropdown = ({ faq }: { faq: { question: string; answer: string } }) => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<div
			onClick={() => setIsClicked(!isClicked)}
			className="border-2 border-blue-400 max-w-[44rem] p-2 rounded-2xl my-2 cursor-pointer"
		>
			<div className="flex justify-between">
				<span className="font-semibold">{faq.question}</span>
				<img
					src={dropdownIcon}
					alt="dropdown-icon"
					className={cn("origin-center", isClicked ? "rotate-180" : "rotate-0")}
				/>
			</div>
			<div className={cn(isClicked ? "block" : "hidden ", "my-3")}>
				{faq.answer}
			</div>
		</div>
	);
};

export default Dropdown;

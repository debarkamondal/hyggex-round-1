import FlashCard from "./components/FlashCard";
import PathNav from "./components/PathNav";
import secondaryLogo from "./assets/secondary-logo.svg";
import plusIcon from "./assets/plus-icon.svg";
import Dropdown from "./components/Dropdown";

function App() {
	const FAQs = [
		{
			question: "Can education flashcards be used for all age groups?",
			answer: `Yes, education flashcards can be tailored to different age groups and learning levels. There are
  flashcards designed for preschoolers, elementary school students, high school students, and
  even for college-level and adult learners.`,
		},
		{
			question: "How do education flashcards work?",
			answer: `Education flashcards work by presenting a question or prompt on one side and the
      corresponding answer or information on the other. Users can review the cards repeatedly,
      reinforcing their memory and enhancing learning through repetition.`,
		},
		{
			question: "Can education flashcards be used for test preparation?",
			answer: `Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key
      concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge
      before exams.`,
		},
	];
	return (
		<div className="mx-10 lg:mx-20 mt-10">
			<PathNav />
			<h1 className="text-xl font-bold bg-gradient-to-b from-blue-900 to-blue-700 bg-clip-text text-transparent my-6">
				Relations and Functions (Mathematics)
			</h1>
			<div className="flex justify-center">
				<ul className="flex gap-x-12 text-base text-gray-500 font-semibold">
					<li className="underline text-blue-900 underline-offset-8 font-semibold ">
						Study
					</li>
					<li>Quiz</li>
					<li>Test</li>
					<li>Game</li>
					<li>Others</li>
				</ul>
			</div>
			<FlashCard />
			<div className="flex justify-between items-center my-10">
				<img src={secondaryLogo} alt="huggex secondary logo" />
				<span className="text-xl text-blue-900 font-semibold">
					<img src={plusIcon} alt="plus icon" className="inline mx-4" />
					Create Flashcard
				</span>
			</div>
			<h1 className="text-3xl font-bold text-blue-900">FAQ</h1>

			{FAQs.map((faq, index) => {
				return <Dropdown faq={faq} key={index} />;
			})}
			<div className="h-36"></div>
		</div>
	);
}

export default App;

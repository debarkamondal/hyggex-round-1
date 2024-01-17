import logo from "../assets/logo.png";

const NavBar = () => {
	return (
		<nav className="my-3 mx-10 lg:mx-20 flex justify-between items-center">
			<img src={logo} alt="logo" className="w-48" />
			<ul className="flex gap-x-8 items-center">
				<li>Home</li>
				<li>Flashcard</li>
				<li>Contact</li>
				<li>FAQ</li>
				<li>
					<button className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-2 px-6 rounded-full ">
						Login
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

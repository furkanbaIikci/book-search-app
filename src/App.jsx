import axios from "axios";
import { useState } from "react";

import "./App.css";

import Book from "./Components/Book";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	/* Kullanicinin aradigi terimi girdikten sonra api'ya yaptigimiz cagri fonksiyonu */
	const handleClick = e => {
		e.preventDefault();
		setLoading(true);
		console.log("searchTerm", searchTerm);
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`).then(res => {
			setData(res.data.items);
			setLoading(false);
		});
	};

	return (
		<div className='App'>
			<div className='header'>
				<div className='bg-image'></div>
				<div className='header-content'>
					<div className='header-text'>Book Search using React</div>

					<form onSubmit={handleClick}>
						<div style={{ margin: "0 auto", textAlign: "center" }}>
							<input
								style={{ marginTop: "30px", marginBottom: "10px", padding: "5px", borderRadius: "5px" }}
								type='text'
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
							/>
							<br />
							<button className='search-button' type='submit'>
								Search
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Gelen sonuclarin degerlerini Book componentine prop olarak geciyoruz */}
			<div className='books'>
				{loading && <div>Loading...</div>}
				{!loading &&
					data.map((book, index) => (
						<Book
							key={index}
							imageLinks={book.volumeInfo.imageLinks.thumbnail}
							title={book.volumeInfo.title}
							authors={book.volumeInfo.authors}
							description={book.volumeInfo.description}
							pageCount={book.volumeInfo.pageCount}
						/>
					))}
			</div>
		</div>
	);
}

export default App;

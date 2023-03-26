import "../App.css";
import { useState } from "react";

function Book({ imageLinks, title, authors, description, pageCount }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='book'>
			{/* Listelenen kitaplarin gorunumu */}
			<div className='book-image'>
				<img src={imageLinks} alt={title} />
			</div>
			<button className='details-button' onClick={() => setShowModal(true)}>
				Details
			</button>
			<div className='book-info'>
				<div className='book-title'>{title}</div>
				<div className='book-author'>{authors}</div>
			</div>


			{/* Details modalı */}
			{showModal && (
				<div class='modal'>
					<button
						onClick={() => {
							setShowModal(false);
						}}
						class='close-btn'>
						&times;
					</button>
					<div class='modal-content'>
						<div className='description'>
							<h2 style={{marginBottom: '6px'}}>Description</h2>
							{description}
						</div>
						<div className='page-number'>
							<h2>Page Count: {pageCount}</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Book;

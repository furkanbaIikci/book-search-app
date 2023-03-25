import { useEffect } from "react";
import "../App.css";
import Modal from "./Modal";
import { useState } from "react";

function Book({ imageLinks, title, authors, description }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className='book'>
			<div className='book-image'>
				<img src={imageLinks} alt={title} />
			</div>
			<div className='book-info'>
				<div className='book-title'>{title}</div>
				<div className='book-author'>{authors}</div>
				<div>
					<button onClick={() => setShowModal(true)}>Details</button>
				</div>
			</div>

			{showModal && (
				<Modal>
					
						<div class='modal'>
							<button onClick={() => {setShowModal(false)}} class='close-btn'>&times;</button>
							<div class='modal-content'>{description}</div>
							<button onClick={() => {setShowModal(false)}}>Modalı Kapat</button>
						</div>
					
				</Modal>
			)}
		</div>
	);
}

export default Book;

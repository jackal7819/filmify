interface SearchProps {
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
}

export default function Search({ searchTerm, setSearchTerm }: SearchProps) {
	return (
		<div className='search'>
			<div>
				<img src='./search.svg' alt='Search Icon' />
				<input
					type='text'
					name='search'
					placeholder='Search through thousands of movies'
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
				<button type='submit'>Search</button>
			</div>
		</div>
	);
}

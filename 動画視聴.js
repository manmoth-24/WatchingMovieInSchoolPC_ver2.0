const PlayNewMovie = ()=>{
	let movieUrl = document.getElementById("input-url").value
	document.getElementById("movie").src = `https://www.youtube.com/embed/${movieUrl}?si=zHQQ18I5WcQ_TTz2`
}

const PlayNewMovie = ()=>{
	let movieUrl = document.getElementById("input-url").value
	document.getElementById("movie").src = `https://www.youtube.com/embed/${movieUrl}?si=zHQQ18I5WcQ_TTz2`
}
const LockAndPassWord = ()=>{
	if (confirm("このユーザーに対し、禁止しますか？")){
		let personalPassword = prompt("貴方固有のパスワードは何ですか？")
		let lockPerson = prompt("パスワードを付ける人の名前を入力してください。\n（デバイス保存で公開はしません）")
		let date = new Date()
		let datePassword = date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes()
		alert(`日付としてのパスワードは→${datePassword}←です。`)
		alert('貴方の設定したパスワードは' + personalPassword + 'です。')
		alert('よって、第一因数は' + datePassword + 'で、')
		alert('第二因数は、' + personalPassword + 'です！記憶・記録を推奨します')

		localStorage.setItem("no1Password",personalPassword)
		localStorage.setItem("no2Password",datePassword)
		localStorage.setItem("lockPerson",lockPerson)
		window.open(location.href)
		//ミステイク数を記録予定
	}
}
const UnLockAndPassWord = ()=>{
	
}

if (localStorage.no1Password != undefined){
	document.getElementById("movie").remove()
}

/*
・パスワードは固有のパスワードと日付によって結び付けられます。
・日付はそれぞれ年+月+日+時間+分です。区切りはないのでその数列を記憶しておいてください。
・永久ロックなら、覚える必要はないです（笑）
・パスワードをつける人の名前は、パスワードを付けた人の不明を避けるためです。
・パスワードをつける人の名前は、デバイスに保存はされませんが、公開されることはありません。
・日付は第一因数は何ですかと聞かれたときに答え、固有のパスワードは第二因数によって解きます。
・もし、パスワードを忘れてしまった場合はサイト開設者までお問い合わせください。
・しかし、パスワードの管理は容易であるため、（デバイス内保存のため）
　プログラミング等に詳しい人ではパスワード、日付が理解できてしまう場合があります。
　それについて、ご了承ください。　

・作者はこのサイトについて悪用をしないことを誓います。
*/

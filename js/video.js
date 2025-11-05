// Emma Marion
// When page loads slider should be 0 and go to 100 on video play
let video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.loop = false;
	video.autplay = false;
});

// Play button
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play video");
	video.play();
});

// Pause button
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Play video");
	video.pause();
});

// Slower button
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Play video");
	video.playbackRate *= 9/10;
	
	console.log("New speed: " + video.playbackRate);
});

// Speed up button
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Play video");
	video.playbackRate *= 10/9;
	console.log("New speed: " + video.playbackRate);
});

// Skip button
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Play video");
	video.currentTime += 15;
});

// Mute button
document.querySelector("#mute").addEventListener("click", function(){
	// If video is muted
	if (video.muted){
		video.muted = false;
		this.innerHTML = "Muted"
	}else{
		video.muted = true;
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	const sliderValue = this.value;
	console.log("New slider value is: " + sliderValue)
	video.volume = sliderValue
});

function play(){
	console.log("In play")
}

function pause(){
	console.log("In pause")
}


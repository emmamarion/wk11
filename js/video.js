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

document.querySelector("#mute").addEventListener("click", function(){
	let muteButton= document.querySelector("#mute");
	if (video.muted){
		video.muted = false;
		muteButton.innerHTML = "Muted"
	}else{
		video.muted = true;
		muteButton.innerHTML = "Unmute"
	}
	
});


function play(){
	console.log("In play")
}

function pause(){
	console.log("In pause")
}


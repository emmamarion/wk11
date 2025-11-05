// Emma Marion

let video = document.querySelector("#player1") // video element
let slider = document.querySelector("#slider") // slider element
let volumeSpan = document.querySelector("#volume") // Get the span element that houses the current volume level

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.loop = false;
	video.autoplay = false;
	slider.value = 0;
	volumeSpan.innerHTML = slider.value + "%"

});

// Play button
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play video");
	video.play();
	slider.value = 100;
	volumeSpan.innerHTML = slider.value + "%"
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
		this.innerHTML = "Mute";
	}else{
		video.muted = true;
		this.innerHTML = "Unmute";
	};
});

// Volume slider
document.querySelector("#slider").addEventListener("change", function(){
	let sliderValue = this.value; // Get the value of the volume slider

	console.log("New slider value is: " + sliderValue);
	video.volume = sliderValue * 0.01; // update video volume
	volumeSpan.innerHTML = sliderValue + "%" // update volume display text 

});

// Vintage buttonx
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Going old school!")
	video.classList.add("oldSchool")
})

// Original button
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Back to normal!")
	video.classList.remove("oldSchool")
})

function play(){
	console.log("In play")
}

function pause(){
	console.log("In pause")
}
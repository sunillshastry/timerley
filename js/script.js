"use strict";

const timerContainer = document.querySelector(".timer__app-container");

class Timer {
	constructor() {
		this.input = document.getElementById("timer-input");
		this.audio = document.getElementById("audio");

		this.playBtn = document.getElementById("btn-play");
		this.pauseBtn = document.getElementById("btn-pause");
		this.stopBtn = document.getElementById("btn-stop");

		this.playBtn.addEventListener("click", this.startTimer);
		this.pauseBtn.addEventListener("click", this.pauseTimer);
		this.stopBtn.addEventListener("click", this.stopTimer);
	}
	startTimer = () => {
		this.audio.pause();
		this.audio.currentTime = 0;
		let numValue = +this.input.value;

		if (numValue > 0) {
			timerContainer.classList.add("timer-start");
			this.x = setInterval(() => {
				numValue--;
				this.input.value = numValue;
				this.input.disabled = true;

				if (numValue < 10) {
					this.input.value = `0${numValue}`;
				}

				if (numValue === 0) {
					clearInterval(this.x);
					this.audio.play();

					setTimeout(() => {
						this.audio.pause();
						this.audio.currentTime = 0;
					}, 12000);
					this.input.disabled = false;
					timerContainer.classList.remove("timer-start");
					timerContainer.classList.add("finish-class");
				}
			}, 1000);
		}
	};
	pauseTimer = () => {
		clearInterval(this.x);
		this.input.disabled = false;
		timerContainer.classList.remove("timer-start");
		timerContainer.classList.add("finish-class");
	};
	stopTimer = () => {
		clearInterval(this.x);
		this.input.value = "0";
		this.input.disabled = false;
		timerContainer.classList.remove("timer-start");
		timerContainer.classList.add("finish-class");

		this.audio.pause();
		this.audio.currentTime = 0;
	};
}
const timer = new Timer();

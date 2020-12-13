class DrumKit {
  constructor() {
    this.pad = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihaat-sound");
    this.index = 0;
  }

  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    console.log(activeBars);
    this.index++;
  }
  start() {
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumKit = new DrumKit();

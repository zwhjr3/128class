song = "";
function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

rightWristX = 0;
leftWristX = 0;
leftWristY = 0;
rightWristY =0;
scorerightWrist = 0;
scoreLeftWrist = 0;

function modelLoaded() {
    console.log('posenet works')

}

function play() {
    song.rate(1);
    song.setVolume(1);
song.play()
}
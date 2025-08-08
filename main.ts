input.onSound(DetectedSound.Loud, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
})
basic.forever(function () {
    if (maqueen.Ultrasonic() < 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})

function RunScored(score,Batter,ball,four,six) {
    var self = this;
    self.run = score;
    self.player = ko.observable(Batter);
    self.ballPlayed = ball;
    self.fours = four;
    self.sixers = six;
}

function ScoreViewModel() {
    var self = this;
    //Data
    self.playingXI = [
        { playerName: "Barbar Azam(C)",role:"Batsman"},
        { playerName: "M. Rizwin",role:"Batsman"},
        { playerName: "Imad Wasim",role:"All rounder"},
        { playerName: "Shoaib Malik",role: "Batsman"},
        { playerName: "Shain Afridi",role: "Bowler"}
    ];
    self.statics = ko.observableArray([
        new RunScored(57,self.playingXI[0],26,4,2),
        new RunScored(25,self.playingXI[1],15,3,1),
    ]);
    self.addScore = () => {
        self.statics.push(new RunScored(0,self.playingXI[1],0,0,0))
    }
    self.removeStat = (stat) => {
        self.statics.remove(stat)
    }
    self.totalScore = ko.computed( () => {
        var total = 0 ;
        for (var i = 0; i < self.statics().length; i++)
            total += parseInt(self.statics()[i].run);
        return total
    })

};
ko.applyBindings(new ScoreViewModel())
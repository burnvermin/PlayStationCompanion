/* let displayGames = [  
    {
        id: 1,
        image: "\images//game1.png",

    },{
        id: 2,
        image: "\images//game2.png",

    },{
        id: 3,
        image: "\images//game3.png",

    },{
        id: 4,
        image: "\images//game4.png",

    },{
        id: 5,
        image: "\images//game5.png",

    },
] */

/**
 * 
 *
 
 <div class="columnOne">
                                    <div class="rowOne">
                                       <img v-bind:src="game.psLogo" alt="" class="img">
                                        <h5>{{game.lastPlayed}}</h5>
                                    </div>
                                        <strong>{{game.name}}</strong>
                                </div>
                                <div class="columnTwo">
                                    <p>{{game.name}}</p>
                                </div>
                                <div class="columnThree">
                                    <img v-bind:src="game.checkpointImage" alt="">
                                    <div class="columnThreeContent">
                                    <p>Last Checkpoint</p>
                                    <h2>{{game.checkpointName}}</h2>
                                    <P>{{game.date}}&nbsp;&nbsp;&nbsp; + &nbsp;&nbsp;&nbsp;{{game.time}}</P>
                                    </div>
                                </div>
                                <div class="columnFour">
                                    <div class="images">                                         
                                        <img v-bind:src="game.achievementImageOne" alt="" id="achievement">
                                        <img v-bind:src="game.sliverTrophyImage" alt="" id="trophy">
                                    </div>
                                    <p>Last earned trophy</p>
                                    <h2>{{game.achievementNameOne}}</h2>
                                    <div class="rare">
                                        <img v-bind:src="game.rarityCommonImage" alt="" > 
                                        <p>{{game.rarityCommon}}</p>
                                    </div>

                                </div>
                                <div class="columnFive">
                                    <div class="images">                                         
                                        <img v-bind:src="game.achievementImageTwo" alt="" id="achievement">
                                        <img v-bind:src="game.goldTrophyImage" alt="" id="trophy">
                                    </div>
                                    <p>Last earned trophy</p>
                                    <h2>{{game.achievementNameTwo}}</h2>
                                    <div class="rare">
                                        <img v-bind:src="game.rarityRareImage" alt=""> 
                                        <p>{{game.rarityRare}}</p>
                                    </div>

                                </div>


 * 
 */
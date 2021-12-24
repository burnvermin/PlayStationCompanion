var app = new Vue ({
    el: '.app',
    data: {
        showIntro: true,
        loggedIn: true,
        activeUser: 2,
        activeGame: "",
        userDP:'',
        accounts: accounts,
        games: games,
        images: {
            loginBGImage: "\images//DualSense.png",
            psLogoBlalck: "\images//logops5.png",
            psLogoWhite: "\images//logowhite.png",
            bell: "\images//bell.png",
            friends: "\images//Friends.png",
            star: "\images//starshape.png",
            whiteTrophy: "\images//whitetrophy.png",
            horizonBG: "\images//horizonBG.png",
            horizon: "\images//horizon.png",
            OverlayBG: "\images//OverlayBG.png",
            hulu: "\images//huluLogo.png",
            archer: "\images//hulumovie.png",
            archerBG: "\images//Archer.png", 
            playIcon: "\images//play.svg",            
            achievements: {
                banukLegend: "\images//achievmentimg1.png",
                chasingHeights: "\images//achievmentimg.png",
            },
            trophies: {
                sliver: "\images/silverTrophy.png",
                gold: "\images//goldtrophy.png",
            }
        },
        
    },  
    /* created() {

        window.addEventListener("scroll", this.menu);
      },
      destroyed() {
        window.removeEventListener("scroll", this.menu);
      }, */
    mounted: function() {
        this.$refs.videoRef.src = "video//bgvid.mp4";
        this.$refs.videoRef.play();
        
    }, 

    methods: {
       disableIntro: function(){
           var objec = document.querySelector('.intro');
            var orig = objec.style.display;
            objec.style.display = 'none';
            this.showIntro = false;  
         }, 
         mouseEnter: function(){             
            var elem = document.getElementById("logoBGImage");
            elem.style.width= '300%';
            elem.style.transition= "1s";
         }, 
         mouseLeave: function(){             
             var elem = document.getElementById("logoBGImage");
             elem.style.width= '350%';
             elem.style.transition= "1s"
         }, 
         signIN: function (id) {
             var userID = id;
             this.loggedIn= false;
             this.activeUser = userID;
         },
         changeArcherBG: function() {
            var horizonBGImg = document.querySelector(".horizonBGImg");
            var horizonCover = document.querySelector(".horizonCover");
            var elem1 = document.querySelector('.center1');
            var elem = document.querySelector('.right1');
            this.images.horizonBG= "\images//Archer.png";
            
            elem.classList.add('active');
            elem1.classList.remove('active');

         } ,  
         middleContentHover: function () {
            var elem = document.querySelector('.center1');
            var elem1 = document.querySelector('.right1');
            elem.classList.add('active');
            elem1.classList.remove('active');
            this.images.horizonBG= "\images//horizonBG.png";
         },
         menu: function() {
            var elem = document.querySelector('.header0');
            var elem1 = document.querySelector('.menu');
            var middleContent = document.querySelector('.middleContent');
            var displayGames = document.querySelector('.displayGames');
            var home = document.querySelector('.homeNav');
            var lib = document.querySelector('.lib');
            var windowPos = window.innerHeight /10 * 2   
            var elemTop = elem.getBoundingClientRect().top
            console.log("This is the original window height: " + windowPos)
            console.log("This is the oroginal ElemTop: " + elemTop)
            if(elemTop + 113 < windowPos ){
                elem.classList.add('active')
                elem1.classList.add('activeMenu')
                middleContent.classList.add('fadeAway')
                home.classList.remove('activeMenuNav')
                lib.classList.add('activeMenuNav')
                displayGames.classList.add('top')
            }else if (elemtop > windowPos) {
                elem.classList.remove('active')
                elem1.classList.remove('activeMenu')
                middleContent.classList.remove('fadeAway')
                home.classList.add('activeMenuNav')
                lib.classList.remove('activeMenuNav')

            }

         },
         enlarge: function (id, image) {
            var userID = id;
            this.activeGame = userID;    
            var elem = document.querySelector('.displayGames'); 
            var elem2 = document.querySelector('.contents'); 
            if(userID==1){
                elem.style.left="-1%"
                this.images.horizonBG = "\images//sekiroBG.png";

            }
            if(userID==2){
                elem.style.left="-19%"
                this.images.horizonBG = "\images//rdrBG.png";

            } 
            if(userID==3){
                elem.style.left="-39%"
                this.images.horizonBG = "\images//horizonBG.png";

            } 
            if(userID==4){
                elem.style.left="-55%"
                this.images.horizonBG = "\images//sekiroBG.png";

            } 
            if(userID==5){
                elem.style.left="-74%"
                this.images.horizonBG = "\images//rdrBG.png";

            } 
            if(userID==6){
                elem.style.left="-90%"
                this.images.horizonBG = "\images//horizonBG.png";

            } 
            if(userID==7){
                elem.style.left="-109%"
                this.images.horizonBG = "\images//sekiroBG.png";

            } 
            if(userID==8){
                elem.style.left="-125%"
                this.images.horizonBG = "\images//rdrBG.png";

            }
            
        }

    },
    computed: { 
        
    }
})
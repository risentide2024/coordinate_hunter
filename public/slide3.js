eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('c 3U(){12++;19++;f("12",12)}c 3d(){4 n=Q(M);f("1R",n)}c 5P(){7(s>0){s--;f("s",s)}j{s=0}}c 5O(){7(B>0){B--;f("B",B)}j{B=0}}c 4v(){4 e=C("e");4 2l=e.Y+e.1g/2;4 2k=e.X+e.1f/2;4 1v=1A(2l,2k);f("1o",9.T(1v.x));f("1n",9.T(1v.y))}c 3E(){4 2Z=g.1h(".28");2Z.1r((28)=>{28.b.4A="5N 2s 4z"})}c 3C(){4 2Z=g.1h(".28");2Z.1r((28)=>{28.b.4A="5M 2s 4z"})}c 1A(2W,2V){4 1C=h.K;4 1B=h.J;4 2Y=2W-1C/2;4 2X=1B/2-2V;k{x:2Y,y:2X}}c 5L(2Y,2X){4 1C=h.K;4 1B=h.J;4 2W=1C/2+2Y;4 2V=1B/2-2X;k{x:2W,y:2V}}c 5K(){4 2n=g.1x(".u");4 2U=h.K;1N(1a i=2U/2;i>0;i-=50){4 q=g.16("1d");q.1D="q-u";q.b.v=i+"m";2n.14(q);4 p=g.16("1d");p.1D="q-p-u";p.b.v=i-10+"m";4 2T=1A(i,0);p.E=`${2T.x}`;2n.14(p)}1N(1a i=2U/2;i<2U;i+=50){4 q=g.16("1d");q.1D="q-u";q.b.v=i+"m";2n.14(q);4 p=g.16("1d");p.1D="q-p-u";p.b.v=i-10+"m";4 2T=1A(i,0);p.E=`${2T.x}`;2n.14(p)}4 2m=g.1x(".v");4 2S=h.J;1N(1a i=2S/2;i>0;i-=50){4 q=g.16("1d");q.1D="q-v";q.b.u=i+"m";2m.14(q);4 p=g.16("1d");p.1D="q-p-v";p.b.u=i-6+"m";4 2R=1A(0,i);p.E=`${2R.y}`;2m.14(p)}1N(1a i=2S/2;i<2S;i+=50){4 q=g.16("1d");q.1D="q-v";q.b.u=i+"m";2m.14(q);4 p=g.16("1d");p.1D="q-p-v";p.b.u=i-6+"m";4 2R=1A(0,i);p.E=`${2R.y}`;2m.14(p)}}c 2i(3z,4x,3A,4y){7(3A===3z){k 5J}j{k((4y-4x)/(3A-3z)).5I(2); }}c 4e(O,8){1a 2H=0,2G=0,2Q=0,2P=0;4 P=8.1W.P;7(8.F>0){2Q=9.T(8.Y);2P=9.T(8.X);4 1v=1A(2Q,2P);f("34"+P,9.T(1v.x));f("33"+P,9.T(1v.y))}j{f("34"+P,"***");f("33"+P,"***");8.b.1H="3l"}4 1L=2i(2H,2G,2Q,2P);f("3F"+P,1L);f("11"+P,8.F)}c 4w(){4 e=C("e");4 1C=h.K;4 1B=h.J;4 2l=1C/2-e.1g/2;4 2k=1B/2-e.1f/2;2l+=18;2k+=10;e.b.v=2l+"m";e.b.u=2k+"m"}c 37(){7(12===1){f("M",U+5)}j{4 n=Q(M);n+=5;f("M",n)}4w();4v()}c 1Q(){7(1E)k;4 n=C("M");7(Q(n.E)<=0)k;4 e=C("e");4 r=e.Y;4 G=e.X;4 1k=r+2a.x;4 1y=G+2a.y;4 1C=h.K;4 1B=h.J;4 4u=0;4 4r=0;4 2M=1C-e.1g;4 2L=1B-e.1f;1k=9.4t(9.4s(1k,4u),2M);1y=9.4t(9.4s(1y,4r),2L);4 1L=2i(r,G,1k,1y);4 1v=1A(1k,1y);f("1o",9.T(1v.x));f("1n",9.T(1v.y));f("4p",1L);e.b.v=1k+"m";e.b.u=1y+"m";7(1k<r){e.b.24="23(-2O, -2N) 22(-1)"}j 7(r<1k){e.b.24="23(-2O, -2N) 22(1)"}}c 5H(L,N){4 n=C("M");7(Q(n.E)<=0)k;7(4q(L)||4q(N))k;4 e=C("e");4 r=e.Y;4 G=e.X;4 A=L-r;4 z=N-G;4 13=9.1K(A*A+z*z);4 2j=1q*40;4 3y=1w;4 1s=9.43(13/(2j*(3y/1O)));4 2A=A/1s;4 2z=z/1s;1I(Z);4 1Z=0;Z=1m(c(){7(1E)k;7(2a.x!==0||2a.y!==0){1I(Z);Z=1m(1Q,1w);k}r+=2A;G+=2z;7(L<r){e.b.24="23(-2O, -2N) 22(-1)"}j 7(r<L){e.b.24="23(-2O, -2N) 22(1)"}4 2M=h.K-e.1g;4 2L=h.J-e.1f;7(r<0||r>2M||G<0||G>2L){1I(Z);Z=1m(1Q,1w);k}e.b.v=r+"m";e.b.u=G+"m";f("1o",9.T(r));f("1n",9.T(G));1Z++;7(1Z>=1s){1I(Z);Z=1m(1Q,1w)}},3y);4 1L=2i(r,G,L,N);f("4p",1L);f("1o",9.T(5G));f("1n",9.T(N))}c 5F(){1I(Z)}c 4i(n){7(Q(n.E)>=5){M=n.E=Q(n.E)-5;3d()}}c 3R(){4 D=C(".V-e");1N(4 i=0;i<D.2r;i++){4 27=C("11"+(i+1));7(27){27.E=U+5}3r(D[i])}}c 5E(){4 3x=48;1N(1a i=1;i<=5;i++){1a 8=g.16("1d");8.2h.2D("V-e");1a x,y;5D{x=9.4o(9.W()*h.K);y=9.4o(9.W()*h.J)}5C(9.1c(x-h.K/2)<3x||9.1c(y-h.J/2)<3x);8.b.v=x+"m";8.b.u=y+"m";8.F=U+12*5;8.1W.P=i;g.2B.14(8);3r(8)}4 D=C(".V-e");1N(4 i=0;i<D.2r;i++){4 27=C("11"+(i+1));7(27){27.E=U+5}}}c 3S(){2o.1r(c(1Y){1I(1Y)});2o=[]}c 4k(4n,4m){4 3w=4n.4l();4 3v=4m.4l();4 A=3w.v-3v.v;4 z=3w.u-3v.u;k 9.1K(A*A+z*z)}c 3B(){4 D=g.1h(".V-e");4 O=C("e");4 n=C("M");4 l=C(".1e-1G");4 5B=1o;4 5A=1n;7(Q(n.E)<=0){3X();f("1o","***");f("1n","***");O.b.1H="3l";7(l){l.b.1i="2e"}}j{O.b.1H="2x";4 3s=17;D.1r(c(8,4j){4 13=4k(O,8);4 5z=9.T(8.Y);4 5y=9.T(8.X);4 3u=C("8"+(4j+1));7(13<1w){3s=2f;8.b.2K="3t(1M, 1M, 0, 0.5)";3u.b.2K="3t(1M, 1M, 0, 0.5)";8.2h.2D("4h-e");4c(O.Y,O.X);4 t=41();7(t){4i(n)}}j{8.b.2K="V";3u.b.2K="3t(1M, 1M, 1M, 0.2)";8.2h.2g("4h-e")}});7(3s&&l){l.b.1i="2c";4 4g=9.W()*20-10;4 4f=9.W()*20-10;l.b.u=O.X+4g+"m";l.b.v=O.Y+4f+"m"}j 7(l){l.b.1i="2e"}}}c 3r(8){4 S=8.Y;4 R=8.X;4 2j=1q*10;4 L=9.W()*(h.K-8.1g);4 N=9.W()*(h.J-8.1f);4 4d=9.W()*1O;1P(c(){4 1Y=1m(c(){4 26=8.Y;4 2J=8.X;4 A=L-26;4 z=N-2J;4 3q=9.1K(A*A+z*z);4 3p=((A/3q)*2j)/10;4 3o=((z/3q)*2j)/10;4 1l=26+3p;4 1z=2J+3o;4 1L=2i(26,2J,1l,1z);7(1l<26){8.b.24="23(2I, 2I) 22(-1)"}j 7(26<1l){8.b.24="23(2I, 2I) 22(1)"}7(9.1c(L-1l)<=9.1c(3p)&&9.1c(N-1z)<=9.1c(3o)){S=L;R=N;L=9.W()*(h.K-8.1g);N=9.W()*(h.J-8.1f)}7(1l<0){1l=0}j 7(1l>h.K-8.1g){1l=h.K-8.1g}7(1z<0){1z=0}j 7(1z>h.J-8.1f){1z=h.J-8.1f}8.b.v=1l+"m";8.b.u=1z+"m";4 O=C("e");4e(O,8)},1w);2o.5x(1Y)},4d)}c 4c(2H,2G){4 n=Q(M);7(n>0){4 l=g.1x(".1e-1G");7(!l){l=g.16("1d");l.2h.2D("1e-1G");g.2B.14(l)}4 4b=2H-10;4 4a=2G-10;l.b.v=4b+"m";l.b.u=4a+"m";l.b.1i="2c";1P(c(){l.b.1i="2e"},5w)}j 7(n===0){4 l=g.1x(".1e-1G");7(l){l.b.1i="2e"}}}c 5v(x,y){7(1E){k}4 O=C("e");4 n=Q(M);7(n<=0){4 21=g.1x(".1e-1G, .1e-3m");7(21){21.2g()}k}j{4 2F=O.Y;4 2E=O.X;4 13=9.1K(9.2C(x-2F,2)+9.2C(y-2E,2));7(13>3n){4 1b=9.3j(y-2E,x-2F);4 1k=2F+3n*9.3i(1b);4 1y=2E+3n*9.3h(1b);x=1k;y=1y}4 21=g.1x(".1e-1G, .1e-3m");7(21){21.2g()}4 l=g.16("1d");l.2h.2D("1e-3m");g.2B.14(l);l.b.46="45";l.b.v=x+"m";l.b.u=y+"m";l.b.1i="2c";4 D=g.1h(".V-e");D.1r(c(8){4 A=9.1c(x-8.Y);4 z=9.1c(y-8.X);4 13=9.1K(A*A+z*z);7(13<10){7(8.F>=5){8.F-=5}j{8.F=0}f("11"+8.1W.P,8.F);7(8.F<=0){8.b.1H="3l"}}});1P(c(){l.2g()},5u)}}c 5t(L,N){4 n=C("M");7(Q(n.E)<=0)k;7(1E)k;7(B<=0)k;7(L===""||N==="")k;4 S=e.Y;4 R=e.X;4 13=9.1K(9.2C(L-S,2)+9.2C(N-R,2));47(S,R,L,N,1O);4 D=g.1h(".V-e");4 O=C("e");4 1b=9.3j(N-R,L-S);4 3k=17;D.1r(c(8){4 A=8.Y-S;4 z=8.X-R;4 49=9.1c(A*9.3h(1b)-z*9.3i(1b));7(49<=20){7(!3k&&13>=48){4 11=8.F;7(11>=5){8.F-=5}j{8.F=0}f("11"+8.1W.P,8.F);3k=2f}}});7(3e()){2b.3M(3e());7(19<=0){3V()}}j{7(19>0){7(3Z()){3Y();19--}}}}c 47(S,R,3g,3f,42){4 n=C("M");7(Q(n.E)<=0)k;4 1j=g.16("1j");1j.5s=h.K;1j.5r=h.J;1j.b.46="45";1j.b.v="0";1j.b.u="0";g.2B.14(1j);4 1J=1j.5q("2d");1J.5p="5o";1J.5n=2;4 1b=9.3j(3f-R,3g-S);4 1u,1t;7(9.1c(9.3i(1b))>9.1c(9.3h(1b))){1u=3g>S?h.K:0;1t=R+(1u-S)*9.44(1b)}j{1t=3f>R?h.J:0;1u=S+(1t-R)/9.44(1b)}4 A=1u-S;4 z=1t-R;4 13=9.1K(A*A+z*z);4 1s=9.43(13/10); 4 2A=A/1s;4 2z=z/1s;4 r=S;4 G=R;4 1Z=0;4 1Y=1m(c(){1J.5m();1J.5l(r,G);r+=2A;G+=2z;7((A>0&&r>=1u)||(A<0&&r<=1u)||(z>0&&G>=1t)||(z<0&&G<=1t)){r=1u;G=1t}1J.5k(r,G);1J.5j();1Z++;7(1Z>=1s||(r===1u&&G===1t)){1I(1Y);1j.2g()}},42/(1s*10)); }c 41(){4 1X=32 31();7(1S===1p){1S=1X;k 17}j{4 2y=(1X-1S)/1O;7(2y>=3){1S=1p;k 2f}j{k 17}}}c 3Z(){4 1X=32 31();7(29===1p){29=1X;k 17}j{4 2y=(1X-29)/1O;7(2y>=10){29=1p;k 2f}j{k 17}}}c 3Y(){f("s",s);1E=17;4 D=g.1h(".V-e");D.1r(c(8){4 F=Q(11[8.1W.P]);7(F===0){8.b.1H="2x";8.F=U+12*5;f("11"+8.1W.P,8.F);4 2w=9.W()*(h.K-8.1g);4 2v=9.W()*(h.J-8.1f);8.b.v=2w+"m";8.b.u=2v+"m"}})}c 3e(){4 D=g.1h(".V-e");7(D.2r>0){k 17}j{k 2f}}c 5i(){3W 1V=g.1x(".1V");1V.b.1i="2c";1P(()=>{1V.b.1i="2e"},3D)}c 3X(){3W 1V=g.1x(".5h");1V.b.1i="2c"}c 3V(){3U();1S=1p;7(1F===0){1q=1;s+=20;B+=50;4 19=0}7(1F===1){1q=3;s+=30;B+=40;4 19=3}7(1F===2){1q=5;s+=40;B+=30;4 19=6}f("B",B);f("1R",U+5);f("s",s);1E=17;4 D=g.1h(".V-e");4 D=g.1h(".V-e");D.1r(c(8){f("11",8.F);8.b.1H="2x"});37();3d();4 D=g.1h(".V-e");D.1r(c(8){8.b.1H="2x";8.F=U+12*5;f("11",8.F);4 2w=9.W()*(h.K-8.1g);4 2v=9.W()*(h.J-8.1f);8.b.v=2w+"m";8.b.u=2v+"m"});5g()}c 5f(3T){4 o=Q(3T);3S();5e(o){3c 0:1F=0;1q=1;4 s=20;4 U=25;4 19=0;4 B=50;2u;3c 1:1F=1;1q=2;4 s=30;4 U=20;4 19=3;4 B=40;2u;3c 2:1F=2;1q=3;4 s=40;4 U=15;4 19=6;4 B=30;2u;5d:2u}f("s",s);f("1R",U+5);f("B",B);3R()}c f(I,H){1a 2t=I.5c(/(\\w+)\\[(\\d+)\\]/);7(2t){1a 1U=2t[1];1a 3b=Q(2t[2]);7(h[1U]&&3Q.5b(h[1U])){h[1U][3b]=H}j{2b.3P(`3Q ${1U}5a 39 59 3H 3I 39 58 57.`)}I=`${1U}[${3b}]`}4 3a=g.1T(I);7(3a){3a.E=H}j{2b.3P(`56 3L P"${I}"39 55.`)}7(I==="1o"){1o=H}j 7(I==="1n"){1n=H}j 7(I==="36"){36=H}j 7(I==="35"){35=H}j 7(I==="M"){M=H}j 7(I==="s"){s=H;g.1T(I).E="54: "+H}j 7(I==="B"){53=H;g.1T(I).E="52: "+H}j 7(I==="1R"){1R=H;g.1T(I).E="51: "+H}j 7(I==="12"){12=H;g.1T(I).E="4Z: "+H}}c C(2p){7(2p.4Y(".")){4 a=2p.4X(1);4 2q=g.4W(a);7(a=="V-e"){k 2q}7(a=="1e-1G"){k 2q.2r>0?2q[0]:1p}}j{k g.1T(2p)}}4V(\'/4U-3G\').3N(3O=>3O.4T()).3N(H=>{7(H.4S){2b.3M(\'3J 4R, 4Q 3L 3K 4P.\')}j{4O(\'4N 3K 4M 4L. 3J 4K 3I 4J 3H 4I.\')}}).4H(38=>{2b.38(\'4G 4F 3G:\',38)});h.4E=37;4 1S=1p;4 2o=[];4 Z=1p;4 2a={x:0,y:0,};4 1F=0;4 1q=1;4 1E=17;4 12=1;f("12",12);4 s=20;f("s",s);4 U=25;f("1R",U+5);4 B=50;f("B",B);4 19=0;4 29=1p;4 1o;4 1n;4 36;4 35;4 34=[];4 33=[];4 3F=[];4 M;4 11=[];4 4D=17;4 Z=1m(1Q,1w);4 Z=1m(1Q,1w);1P(3E,3D);1P(3C,4C);4 4B=32 31();1m(c(){3B()},1O);',62,362,'||||var|||if|blueVessel|Math||style|function||vessel|updateAllDisplays|document|window||else|return|redDot|px|blackVesselPoints||label|tick|currentX|pauseDisplay||top|left||||dy|dx|torpDisplay|getFromScreen|blueVessels|textContent|points|currentY|data|idName|innerHeight|innerWidth|targetX|pointsBlack|targetY|blackVessel|id|parseInt|startY|startX|round|basePoints|blue|random|offsetTop|offsetLeft|moveIntervalId||pointsBlue|roundDisplay|distance|appendChild||createElement|false||resurfs|let|angle|abs|div|red|offsetHeight|offsetWidth|querySelectorAll|visibility|canvas|newX|newLeft|setInterval|yCoord|xCoord|null|speed|forEach|steps|extendY|extendX|cartesianCoords|100|querySelector|newY|newTop|screenToCartesian|viewportHeight|viewportWidth|className|isPaused|settingOp|dot|display|clearInterval|ctx|sqrt|slope|255|for|1000|setTimeout|moveBlackVessel|scoreDisplay|pointTimer|getElementById|arrayName|dialogue|dataset|currentTime|intervalId|stepCount||existingRedDot|scaleX|translate|transform||currentLeft|pointsElement|quadrant|resurfTimer|currentDirection|console|visible||hidden|true|remove|classList|calculateSlope|spd|centerY|centerX|leftRuler|topRuler|moveIntervalIds|selector|elements|length||arrayMatch|break|randomY|randomX|block|elapsedSeconds|stepY|stepX|body|pow|add|vesselY|vesselX|blackY|blackX|0px|currentTop|backgroundColor|maxY|maxX|8px|17px|blueY|blueX|cartesianCoordsY|rulerHeight|cartesianCoordsX|rulerWidth|screenY|screenX|cartesianY|cartesianX|quadrants||Date|new|yCoordBlue|xCoordBlue|artilleryD|artilleryM|initializeBlackVessel|error|not|element|arrayIndex|case|updateScoreDisplay|checkAllBlueShipsDestroyed|endY|endX|sin|cos|atan2|pointsDeducted|none|dot2|300|moveY|moveX|distanceToTarget|moveBlueVessel|withinRange|rgba|coordinateGroup|rect2|rect1|centerThreshold|interval|x1|x2|checkProximity|fadeOutQuadrants|5000|fadeInQuadrants|slopeBlue|passphrase|or|is|Passphrase|game|with|log|then|response|warn|Array|initializeBlueVessels|stopMovingBlueVessels|option|updateRoundDisplay|startNewRound|const|showDialogue2|resurfaceBlueVessel|updateResurfTimer||updatePointTimer|duration|ceil|tan|absolute|position|drawSolidWhiteLine|200|distanceToLine|dotY|dotX|blueArtillery|delay|updateCoordinatesAndPointsAndSlope|randomOffsetLeft|randomOffsetTop|yellow|deductBlackPoints|index|calculateDistance|getBoundingClientRect|element2|element1|floor|slopeBlack|isNaN|minY|max|min|minX|updateDisplay|centerBlackVessel|y1|y2|forwards|animation|startTime|10000|isMoving|onload|checking|Error|catch|incorrect|missing|file|start|cannot|The|alert|initialization|proceed|valid|canStart|json|check|fetch|getElementsByClassName|slice|startsWith|Round||Score|Torpedoes|torpsDisplay|Pauses|found|Element|array|an|exist|does|isArray|match|default|switch|difficulty|showTip|dialogue2|showDialogue|stroke|lineTo|moveTo|beginPath|lineWidth|white|strokeStyle|getContext|height|width|handleTorpedoAction|2000|createRedDot|3000|push|yCoordDisplay|xCoordDisplay|yCoordBlack|xCoordBlack|while|do|generateRandomPositions|stopMoving|targettX|moveBlackVesselToCoordinates|toFixed|Infinity|generateRulers|cartesianToScreen|fadeOut|fadeIn|updateTorpDisplay|updatePauseDisplay'.split('|'),0,{}))

/*
 * Raphael 1.0 - JavaScript Vector Library
 *
 * Copyright (c) 2008 - 2009 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
window.Raphael=(function(){
    var ac=/[, ]+/,g=document,P=window,U={
        was:"Raphael" in window,
        is:window.Raphael
        },f=function(){
        if(f.is(arguments[0],"array")){
            var e=arguments[0],R=m[h](f,e.splice(0,3+f.is(e[0],"number"))),af=R.set();
            for(var ae=0,ag=e[C];ae<ag;ae++){
                var ad=e[ae]||{};

                ad.type in {
                    circle:1,
                    rect:1,
                    path:1,
                    ellipse:1,
                    text:1,
                    image:1
                }&&af.push(R[ad.type]().attr(ad));
            }
            return af;
        }
        return m[h](f,arguments);
    },b={},t={
        "clip-rect":"0 0 10e9 10e9",
        cx:0,
        cy:0,
        fill:"#fff",
        "fill-opacity":1,
        font:'10px "Arial"',
        "font-family":'"Arial"',
        "font-size":"10",
        "font-style":"normal",
        "font-weight":400,
        gradient:0,
        height:0,
        href:"http://raphaeljs.com/",
        opacity:1,
        path:"M0,0",
        r:0,
        rotation:0,
        rx:0,
        ry:0,
        scale:"1 1",
        src:"",
        stroke:"#000",
        "stroke-dasharray":"",
        "stroke-linecap":"butt",
        "stroke-linejoin":"butt",
        "stroke-miterlimit":0,
        "stroke-opacity":1,
        "stroke-width":1,
        target:"_blank",
        "text-anchor":"middle",
        title:"Raphael",
        translation:"0 0",
        width:0,
        x:0,
        y:0
    },x={
        "clip-rect":"csv",
        cx:"number",
        cy:"number",
        fill:"colour",
        "fill-opacity":"number",
        "font-size":"number",
        height:"number",
        opacity:"number",
        path:"path",
        r:"number",
        rotation:"csv",
        rx:"number",
        ry:"number",
        scale:"csv",
        stroke:"colour",
        "stroke-opacity":"number",
        "stroke-width":"number",
        translation:"csv",
        width:"number",
        x:"number",
        y:"number"
    },y=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup"],o="prototype",h="apply",C="length",s="parseFloat",r="parseInt";
    f.version="1.0";
    f.type=(window.SVGAngle||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");
    f.svg=!(f.vml=f.type=="VML");
    f.idGenerator=0;
    f.fn={};

    f.is=function(i,e){
        e=(e+"").toLowerCase();
        if((e=="object"||e=="undefined")&&typeof i==e){
            return true;
        }
        if(i==null&&e=="null"){
            return true;
        }
        return Object[o].toString.call(i).replace(/^\[object\s+|\]$/gi,"").toLowerCase()==e;
    };

    f.setWindow=function(e){
        P=e;
        g=P.document;
    };

    f.hsb2rgb=ab(function(aj,ah,an){
        if(f.is(aj,"object")&&"h" in aj&&"s" in aj&&"b" in aj){
            an=aj.b;
            ah=aj.s;
            aj=aj.h;
        }
        var ae,af,ao;
        if(an==0){
            return{
                r:0,
                g:0,
                b:0,
                hex:"#000"
            };

    }
    if(aj>1||ah>1||an>1){
        aj/=255;
        ah/=255;
        an/=255;
    }
    var ag=Math.floor(aj*6),ak=(aj*6)-ag,ad=an*(1-ah),R=an*(1-(ah*ak)),ap=an*(1-(ah*(1-ak)));
        ae=[an,R,ad,ad,ap,an,an][ag];
        af=[ap,an,an,R,ad,ad,ap][ag];
        ao=[ad,ad,ap,an,an,R,ad][ag];
        ae*=255;
        af*=255;
        ao*=255;
        var al={
        r:ae,
        g:af,
        b:ao
    },e=(~~ae).toString(16),ai=(~~af).toString(16),am=(~~ao).toString(16);
        if(e[C]==1){
        e="0"+e;
    }
    if(ai[C]==1){
        ai="0"+ai;
    }
    if(am[C]==1){
        am="0"+am;
    }
    al.hex="#"+e+ai+am;
    return al;
    },f);
f.rgb2hsb=ab(function(e,i,ah){
    if(f.is(e,"object")&&"r" in e&&"g" in e&&"b" in e){
        ah=e.b;
        i=e.g;
        e=e.r;
    }
    if(f.is(e,"string")){
        var aj=f.getRGB(e);
        e=aj.r;
        i=aj.g;
        ah=aj.b;
    }
    if(e>1||i>1||ah>1){
        e/=255;
        i/=255;
        ah/=255;
    }
    var ag=Math.max(e,i,ah),R=Math.min(e,i,ah),ae,ad,af=ag;
    if(R==ag){
        return{
            h:0,
            s:0,
            b:ag
        };

}else{
    var ai=(ag-R);
    ad=ai/ag;
    if(e==ag){
        ae=(i-ah)/ai;
    }else{
        if(i==ag){
            ae=2+((ah-e)/ai);
        }else{
            ae=4+((e-i)/ai);
        }
    }
    ae/=6;
if(ae<0){
    ae+=1;
}
if(ae>1){
    ae-=1;
}
}
return{
    h:ae,
    s:ad,
    b:af
};

},f);
f._path2string=function(){
    var ad="",ag;
    for(var R=0,ae=this[C];R<ae;R++){
        for(var e=0,af=this[R][C];e<af;e++){
            ad+=this[R][e];
            e&&e!=af-1&&(ad+=",");
        }
        R!=ae-1&&(ad+="\n");
    }
    return ad.replace(/,(?=-)/g,"");
};

function ab(ad,i,e){
    function R(){
        var ae=Array[o].splice.call(arguments,0,arguments[C]),af=ae.join("\u25ba");
        R.cache=R.cache||{};

        R.count=R.count||[];
        if(af in R.cache){
            return e?e(R.cache[af]):R.cache[af];
        }
        if(R.count[C]>1000){
            delete R.cache[R.count.unshift()];
        }
        R.count.push(af);
        R.cache[af]=ad[h](i,ae);
        return e?e(R.cache[af]):R.cache[af];
    }
    return R;
}
f.getRGB=ab(function(e){
    var al={
        none:"none",
        aliceblue:"#f0f8ff",
        amethyst:"#96c",
        antiquewhite:"#faebd7",
        aqua:"#0ff",
        aquamarine:"#7fffd4",
        azure:"#f0ffff",
        beige:"#f5f5dc",
        bisque:"#ffe4c4",
        black:"#000",
        blanchedalmond:"#ffebcd",
        blue:"#00f",
        blueviolet:"#8a2be2",
        brown:"#a52a2a",
        burlywood:"#deb887",
        cadetblue:"#5f9ea0",
        chartreuse:"#7fff00",
        chocolate:"#d2691e",
        coral:"#ff7f50",
        cornflowerblue:"#6495ed",
        cornsilk:"#fff8dc",
        crimson:"#dc143c",
        cyan:"#0ff",
        darkblue:"#00008b",
        darkcyan:"#008b8b",
        darkgoldenrod:"#b8860b",
        darkgray:"#a9a9a9",
        darkgreen:"#006400",
        darkkhaki:"#bdb76b",
        darkmagenta:"#8b008b",
        darkolivegreen:"#556b2f",
        darkorange:"#ff8c00",
        darkorchid:"#9932cc",
        darkred:"#8b0000",
        darksalmon:"#e9967a",
        darkseagreen:"#8fbc8f",
        darkslateblue:"#483d8b",
        darkslategray:"#2f4f4f",
        darkturquoise:"#00ced1",
        darkviolet:"#9400d3",
        deeppink:"#ff1493",
        deepskyblue:"#00bfff",
        dimgray:"#696969",
        dodgerblue:"#1e90ff",
        firebrick:"#b22222",
        floralwhite:"#fffaf0",
        forestgreen:"#228b22",
        fuchsia:"#f0f",
        gainsboro:"#dcdcdc",
        ghostwhite:"#f8f8ff",
        gold:"#ffd700",
        goldenrod:"#daa520",
        gray:"#808080",
        green:"#008000",
        greenyellow:"#adff2f",
        honeydew:"#f0fff0",
        hotpink:"#ff69b4",
        indianred:"#cd5c5c",
        indigo:"#4b0082",
        ivory:"#fffff0",
        khaki:"#f0e68c",
        lavender:"#e6e6fa",
        lavenderblush:"#fff0f5",
        lawngreen:"#7cfc00",
        lemonchiffon:"#fffacd",
        lightblue:"#add8e6",
        lightcoral:"#f08080",
        lightcyan:"#e0ffff",
        lightgoldenrodyellow:"#fafad2",
        lightgreen:"#90ee90",
        lightgrey:"#d3d3d3",
        lightpink:"#ffb6c1",
        lightsalmon:"#ffa07a",
        lightseagreen:"#20b2aa",
        lightskyblue:"#87cefa",
        lightslategray:"#789",
        lightsteelblue:"#b0c4de",
        lightyellow:"#ffffe0",
        lime:"#0f0",
        limegreen:"#32cd32",
        linen:"#faf0e6",
        magenta:"#f0f",
        maroon:"#800000",
        mediumaquamarine:"#66cdaa",
        mediumblue:"#0000cd",
        mediumorchid:"#ba55d3",
        mediumpurple:"#9370db",
        mediumseagreen:"#3cb371",
        mediumslateblue:"#7b68ee",
        mediumspringgreen:"#00fa9a",
        mediumturquoise:"#48d1cc",
        mediumvioletred:"#c71585",
        midnightblue:"#191970",
        mintcream:"#f5fffa",
        mistyrose:"#ffe4e1",
        moccasin:"#ffe4b5",
        navajowhite:"#ffdead",
        navy:"#000080",
        oldlace:"#fdf5e6",
        olive:"#808000",
        olivedrab:"#6b8e23",
        orange:"#ffa500",
        orangered:"#ff4500",
        orchid:"#da70d6",
        palegoldenrod:"#eee8aa",
        palegreen:"#98fb98",
        paleturquoise:"#afeeee",
        palevioletred:"#db7093",
        papayawhip:"#ffefd5",
        peachpuff:"#ffdab9",
        peru:"#cd853f",
        pink:"#ffc0cb",
        plum:"#dda0dd",
        powderblue:"#b0e0e6",
        purple:"#800080",
        red:"#f00",
        rosybrown:"#bc8f8f",
        royalblue:"#4169e1",
        saddlebrown:"#8b4513",
        salmon:"#fa8072",
        sandybrown:"#f4a460",
        seagreen:"#2e8b57",
        seashell:"#fff5ee",
        sienna:"#a0522d",
        silver:"#c0c0c0",
        skyblue:"#87ceeb",
        slateblue:"#6a5acd",
        slategray:"#708090",
        snow:"#fffafa",
        springgreen:"#00ff7f",
        steelblue:"#4682b4",
        tan:"#d2b48c",
        teal:"#008080",
        thistle:"#d8bfd8",
        tomato:"#ff6347",
        turquoise:"#40e0d0",
        violet:"#ee82ee",
        wheat:"#f5deb3",
        white:"#fff",
        whitesmoke:"#f5f5f5",
        yellow:"#ff0",
        yellowgreen:"#9acd32"
    },ag;
    e=al[(e+"").toLowerCase()]||e;
    if(!e){
        return{
            r:-1,
            g:-1,
            b:-1,
            hex:"none",
            error:1
        };

}
if(e=="none"){
    return{
        r:-1,
        g:-1,
        b:-1,
        hex:"none"
    };

}
var R,ad,aj,ah=(e+"").match(/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgb\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|rgb\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hs[bl]\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hs[bl]\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i);
if(ah){
    if(ah[2]){
        aj=P[r](ah[2].substring(5),16);
        ad=P[r](ah[2].substring(3,5),16);
        R=P[r](ah[2].substring(1,3),16);
    }
    if(ah[3]){
        aj=P[r](ah[3].substring(3)+ah[3].substring(3),16);
        ad=P[r](ah[3].substring(2,3)+ah[3].substring(2,3),16);
        R=P[r](ah[3].substring(1,2)+ah[3].substring(1,2),16);
    }
    if(ah[4]){
        ah=ah[4].split(/\s*,\s*/);
        R=P[s](ah[0]);
        ad=P[s](ah[1]);
        aj=P[s](ah[2]);
    }
    if(ah[5]){
        ah=ah[5].split(/\s*,\s*/);
        R=P[s](ah[0])*2.55;
        ad=P[s](ah[1])*2.55;
        aj=P[s](ah[2])*2.55;
    }
    if(ah[6]){
        ah=ah[6].split(/\s*,\s*/);
        R=P[s](ah[0]);
        ad=P[s](ah[1]);
        aj=P[s](ah[2]);
        return f.hsb2rgb(R,ad,aj);
    }
    if(ah[7]){
        ah=ah[7].split(/\s*,\s*/);
        R=P[s](ah[0])*2.55;
        ad=P[s](ah[1])*2.55;
        aj=P[s](ah[2])*2.55;
        return f.hsb2rgb(R,ad,aj);
    }
    ah={
        r:R,
        g:ad,
        b:aj
    };

    var i=(~~R).toString(16),af=(~~ad).toString(16),ai=(~~aj).toString(16),ak=/^(?=\d$)/,ae="replace";
    i=i[ae](ak,"0");
    af=af[ae](ak,"0");
    ai=ai[ae](ak,"0");
    ah.hex="#"+i+af+ai;
    ag=ah;
}else{
    ag={
        r:-1,
        g:-1,
        b:-1,
        hex:"none",
        error:1
    };

}
return ag;
},f);
f.getColor=function(i){
    var R=this.getColor.start=this.getColor.start||{
        h:0,
        s:1,
        b:i||0.75
        },e=this.hsb2rgb(R.h,R.s,R.b);
    R.h+=0.075;
    if(R.h>1){
        R.h=0;
        R.s-=0.2;
        if(R.s<=0){
            this.getColor.start={
                h:0,
                s:1,
                b:R.b
                };

    }
}
return e.hex;
};

f.getColor.reset=function(){
    delete this.start;
};

f.parsePathString=ab(function(e){
    if(!e){
        return null;
    }
    var R={
        a:7,
        c:6,
        h:1,
        l:2,
        m:2,
        q:4,
        s:4,
        t:2,
        v:1,
        z:0
    },i=[];
    if(f.is(e,"array")&&f.is(e[0],"array")){
        i=w(e);
    }
    if(!i[C]){
        (e+"").replace(/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,function(ae,ad,ah){
            var ag=[],af=ad.toLowerCase();
            ah.replace(/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,function(aj,ai){
                ai&&ag.push(+ai);
            });
            while(ag[C]>=R[af]){
                i.push([ad].concat(ag.splice(0,R[af])));
                if(!R[af]){
                    break;
                }
            }
        });
}
i.toString=f._path2string;
return i;
});
var H=ab(function(ak){
    if(!ak){
        return{
            x:0,
            y:0,
            width:0,
            height:0
        };

}
ak=T(ak);
    var ah=0,ag=0,ad=[],R=[];
    for(var ae=0,aj=ak[C];ae<aj;ae++){
    if(ak[ae][0]=="M"){
        ah=ak[ae][1];
        ag=ak[ae][2];
        ad.push(ah);
        R.push(ag);
    }else{
        var af=N(ah,ag,ak[ae][1],ak[ae][2],ak[ae][3],ak[ae][4],ak[ae][5],ak[ae][6]);
        ad=ad.concat(af.min.x,af.max.x);
        R=R.concat(af.min.y,af.max.y);
    }
}
var e=Math.min[h](0,ad),ai=Math.min[h](0,R);
return{
    x:e,
    y:ai,
    width:Math.max[h](0,ad)-e,
    height:Math.max[h](0,R)-ai
    };

}),w=function(ag){
    var ad=[];
    if(!f.is(ag,"array")||!f.is(ag&&ag[0],"array")){
        ag=f.parsePathString(ag);
    }
    for(var R=0,ae=ag[C];R<ae;R++){
        ad[R]=[];
        for(var e=0,af=ag[R][C];e<af;e++){
            ad[R][e]=ag[R][e];
        }
        }
        ad.toString=f._path2string;
return ad;
},c=ab(function(ae){
    if(!f.is(ae,"array")||!f.is(ae&&ae[0],"array")){
        ae=f.parsePathString(ae);
    }
    var ak=[],am=0,al=0,ap=0,ao=0,ad=0;
    if(ae[0][0]=="M"){
        am=ae[0][1];
        al=ae[0][2];
        ap=am;
        ao=al;
        ad++;
        ak.push(["M",am,al]);
    }
    for(var ah=ad,aq=ae[C];ah<aq;ah++){
        var e=ak[ah]=[],an=ae[ah];
        if(an[0]!=an[0].toLowerCase()){
            e[0]=an[0].toLowerCase();
            switch(e[0]){
                case"a":
                    e[1]=an[1];
                    e[2]=an[2];
                    e[3]=an[3];
                    e[4]=an[4];
                    e[5]=an[5];
                    e[6]=+(an[6]-am).toFixed(3);
                    e[7]=+(an[7]-al).toFixed(3);
                    break;
                case"v":
                    e[1]=+(an[1]-al).toFixed(3);
                    break;
                case"m":
                    ap=an[1];
                    ao=an[2];
                default:
                    for(var ag=1,ai=an[C];ag<ai;ag++){
                    e[ag]=+(an[ag]-((ag%2)?am:al)).toFixed(3);
                }
                }
                }else{
        e=ak[ah]=[];
        if(an[0]=="m"){
            ap=an[1]+am;
            ao=an[2]+al;
        }
        for(var af=0,R=an[C];af<R;af++){
            ak[ah][af]=an[af];
        }
        }
        var aj=ak[ah][C];
switch(ak[ah][0]){
    case"z":
        am=ap;
        al=ao;
        break;
    case"h":
        am+=+ak[ah][aj-1];
        break;
    case"v":
        al+=+ak[ah][aj-1];
        break;
    default:
        am+=+ak[ah][aj-2];
        al+=+ak[ah][aj-1];
}
}
ak.toString=f._path2string;
return ak;
},0,w),z=ab(function(ae){
    if(!f.is(ae,"array")||!f.is(ae&&ae[0],"array")){
        ae=f.parsePathString(ae);
    }
    var aj=[],al=0,ak=0,ao=0,an=0,ad=0;
    if(ae[0][0]=="M"){
        al=+ae[0][1];
        ak=+ae[0][2];
        ao=al;
        an=ak;
        ad++;
        aj[0]=["M",al,ak];
    }
    for(var ah=ad,ap=ae[C];ah<ap;ah++){
        var e=aj[ah]=[],am=ae[ah];
        if(am[0]!=(am[0]+"").toUpperCase()){
            e[0]=(am[0]+"").toUpperCase();
            switch(e[0]){
                case"A":
                    e[1]=am[1];
                    e[2]=am[2];
                    e[3]=am[3];
                    e[4]=am[4];
                    e[5]=am[5];
                    e[6]=+(am[6]+al);
                    e[7]=+(am[7]+ak);
                    break;
                case"V":
                    e[1]=+am[1]+ak;
                    break;
                case"H":
                    e[1]=+am[1]+al;
                    break;
                case"M":
                    ao=+am[1]+al;
                    an=+am[2]+ak;
                default:
                    for(var ag=1,ai=am[C];ag<ai;ag++){
                    e[ag]=+am[ag]+((ag%2)?al:ak);
                }
                }
                }else{
        for(var af=0,R=am[C];af<R;af++){
            aj[ah][af]=am[af];
        }
        }
        switch(e[0]){
    case"Z":
        al=ao;
        ak=an;
        break;
    case"H":
        al=e[1];
        break;
    case"V":
        ak=e[1];
        break;
    default:
        al=aj[ah][aj[ah][C]-2];
        ak=aj[ah][aj[ah][C]-1];
}
}
aj.toString=f._path2string;
return aj;
},null,w),d=function(i,ad,e,R){
    return[i,ad,e,R,e,R];
},A=function(i,ad,ag,ae,e,R){
    var af=1/3,ah=2/3;
    return[af*i+ah*ag,af*ad+ah*ae,af*e+ah*ag,af*R+ah*ae,e,R];
},u=function(ap,aU,az,ax,aq,ak,af,ao,aT,ar){
    var ae=Math.PI,aw=ae*120/180,e=ae/180*(+aq||0),aD=[],aA,aQ=ab(function(aV,aY,i){
        var aX=aV*Math.cos(i)-aY*Math.sin(i),aW=aV*Math.sin(i)+aY*Math.cos(i);
        return{
            x:aX,
            y:aW
        };

    });
if(!ar){
    aA=aQ(ap,aU,-e);
    ap=aA.x;
    aU=aA.y;
    aA=aQ(ao,aT,-e);
    ao=aA.x;
    aT=aA.y;
    var R=Math.cos(ae/180*aq),am=Math.sin(ae/180*aq),aF=(ap-ao)/2,aE=(aU-aT)/2;
    az=Math.max(az,Math.abs(aF));
    ax=Math.max(ax,Math.abs(aE));
    var ad=az*az,aI=ax*ax,aK=(ak==af?-1:1)*Math.sqrt(Math.abs((ad*aI-ad*aE*aE-aI*aF*aF)/(ad*aE*aE+aI*aF*aF))),au=aK*az*aE/ax+(ap+ao)/2,at=aK*-ax*aF/az+(aU+aT)/2,aj=Math.asin((aU-at)/ax),ai=Math.asin((aT-at)/ax);
    aj=ap<au?ae-aj:aj;
    ai=ao<au?ae-ai:ai;
    aj<0&&(aj=ae*2+aj);
    ai<0&&(ai=ae*2+ai);
    if(af&&aj>ai){
        aj=aj-ae*2;
    }
    if(!af&&ai>aj){
        ai=ai-ae*2;
    }
}else{
    aj=ar[0];
    ai=ar[1];
    au=ar[2];
    at=ar[3];
}
var an=ai-aj;
if(Math.abs(an)>aw){
    var av=ai,ay=ao,al=aT;
    ai=aj+aw*(af&&ai>aj?1:-1);
    ao=au+az*Math.cos(ai);
    aT=at+ax*Math.sin(ai);
    aD=u(ao,aT,az,ax,aq,0,af,ay,al,[ai,av,au,at]);
}
an=ai-aj;
var ah=Math.cos(aj),aS=Math.sin(aj),ag=Math.cos(ai),aR=Math.sin(ai),aG=Math.tan(an/4),aJ=4/3*az*aG,aH=4/3*ax*aG,aP=[ap,aU],aO=[ap+aJ*aS,aU-aH*ah],aN=[ao+aJ*aR,aT-aH*ag],aL=[ao,aT];
aO[0]=2*aP[0]-aO[0];
aO[1]=2*aP[1]-aO[1];
if(ar){
    return[aO,aN,aL].concat(aD);
}else{
    aD=[aO,aN,aL].concat(aD).join(",").split(",");
    var aB=[];
    for(var aM=0,aC=aD[C];aM<aC;aM++){
        aB[aM]=aM%2?aQ(aD[aM-1],aD[aM],e).y:aQ(aD[aM],aD[aM+1],e).x;
    }
    return aB;
}
},E=ab(function(i,e,at,aq,af,ae,ah,ag,am){
    var ak=Math.pow(1-am,3)*i+Math.pow(1-am,2)*3*am*at+(1-am)*3*am*am*af+Math.pow(am,3)*ah,ai=Math.pow(1-am,3)*e+Math.pow(1-am,2)*3*am*aq+(1-am)*3*am*am*ae+Math.pow(am,3)*ag,ao=i+2*am*(at-i)+am*am*(af-2*at+i),an=e+2*am*(aq-e)+am*am*(ae-2*aq+e),ar=at+2*am*(af-at)+am*am*(ah-2*af+at),ap=aq+2*am*(ae-aq)+am*am*(ag-2*ae+aq),al=(1-am)*i+am*at,aj=(1-am)*e+am*aq,ad=(1-am)*af+am*ah,R=(1-am)*ae+am*ag;
    return{
        x:ak,
        y:ai,
        m:{
            x:ao,
            y:an
        },
        n:{
            x:ar,
            y:ap
        },
        start:{
            x:al,
            y:aj
        },
        end:{
            x:ad,
            y:R
        }
    };

}),N=ab(function(i,e,ad,R,aq,ap,am,aj){
    var ao=(aq-2*ad+i)-(am-2*aq+ad),al=2*(ad-i)-2*(aq-ad),ai=i-ad,ag=(-al+Math.sqrt(al*al-4*ao*ai))/2/ao,ae=(-al-Math.sqrt(al*al-4*ao*ai))/2/ao,ak=[e,aj],an=[i,am],ah=E(i,e,ad,R,aq,ap,am,aj,ag>0&&ag<1?ag:0),af=E(i,e,ad,R,aq,ap,am,aj,ae>0&&ae<1?ae:0);
    an=an.concat(ah.x,af.x);
    ak=ak.concat(ah.y,af.y);
    ao=(ap-2*R+e)-(aj-2*ap+R);
    al=2*(R-e)-2*(ap-R);
    ai=e-R;
    ag=(-al+Math.sqrt(al*al-4*ao*ai))/2/ao;
    ae=(-al-Math.sqrt(al*al-4*ao*ai))/2/ao;
    ah=E(i,e,ad,R,aq,ap,am,aj,ag>0&&ag<1?ag:0);
    af=E(i,e,ad,R,aq,ap,am,aj,ae>0&&ae<1?ae:0);
    an=an.concat(ah.x,af.x);
    ak=ak.concat(ah.y,af.y);
    return{
        min:{
            x:Math.min[h](Math,an),
            y:Math.min[h](Math,ak)
            },
        max:{
            x:Math.max[h](Math,an),
            y:Math.max[h](Math,ak)
            }
        };

}),T=ab(function(ap,ak){
    var ae=z(ap),al=ak&&z(ak),am={
        x:0,
        y:0,
        bx:0,
        by:0,
        X:0,
        Y:0,
        qx:null,
        qy:null
    },e={
        x:0,
        y:0,
        bx:0,
        by:0,
        X:0,
        Y:0,
        qx:null,
        qy:null
    },ag=function(aq,ar){
        var i,at;
        if(!aq){
            return["C",ar.x,ar.y,ar.x,ar.y,ar.x,ar.y];
        }!(aq[0] in {
            T:1,
            Q:1
        })&&(ar.qx=ar.qy=null);
        switch(aq[0]){
            case"M":
                ar.X=aq[1];
                ar.Y=aq[2];
                break;
            case"A":
                aq=["C"].concat(u[h](0,[ar.x,ar.y].concat(aq.slice(1))));
                break;
            case"S":
                i=ar.x+(ar.x-(ar.bx||ar.x));
                at=ar.y+(ar.y-(ar.by||ar.y));
                aq=["C",i,at].concat(aq.slice(1));
                break;
            case"T":
                ar.qx=ar.x+(ar.x-(ar.qx||ar.x));
                ar.qy=ar.y+(ar.y-(ar.qy||ar.y));
                aq=["C"].concat(A(ar.x,ar.y,ar.qx,ar.qy,aq[1],aq[2]));
                break;
            case"Q":
                ar.qx=aq[1];
                ar.qy=aq[2];
                aq=["C"].concat(A(ar.x,ar.y,aq[1],aq[2],aq[3],aq[4]));
                break;
            case"L":
                aq=["C"].concat(d(ar.x,ar.y,aq[1],aq[2]));
                break;
            case"H":
                aq=["C"].concat(d(ar.x,ar.y,aq[1],ar.y));
                break;
            case"V":
                aq=["C"].concat(d(ar.x,ar.y,ar.x,aq[1]));
                break;
            case"Z":
                aq=["C"].concat(d(ar.x,ar.y,ar.X,ar.Y));
                break;
        }
        return aq;
    },R=function(aq,ar){
        if(aq[ar][C]>7){
            aq[ar].shift();
            var at=aq[ar];
            while(at[C]){
                aq.splice(ar++,0,["C"].concat(at.splice(0,6)));
            }
            aq.splice(ar,1);
            an=Math.max(ae[C],al&&al[C]||0);
        }
    },ad=function(av,au,ar,aq,at){
    if(av&&au&&av[at][0]=="M"&&au[at][0]!="M"){
        au.splice(at,0,["M",aq.x,aq.y]);
        ar.bx=0;
        ar.by=0;
        ar.x=av[at][1];
        ar.y=av[at][2];
        an=Math.max(ae[C],al&&al[C]||0);
    }
};

for(var ai=0,an=Math.max(ae[C],al&&al[C]||0);ai<an;ai++){
    ae[ai]=ag(ae[ai],am);
    R(ae,ai);
    al&&(al[ai]=ag(al[ai],e));
    al&&R(al,ai);
    ad(ae,al,am,e,ai);
    ad(al,ae,e,am,ai);
    var ah=ae[ai],ao=al&&al[ai],af=ah[C],aj=al&&ao[C];
    am.x=ah[af-2];
    am.y=ah[af-1];
    am.bx=P[s](ah[af-4])||am.x;
    am.by=P[s](ah[af-3])||am.y;
    e.bx=al&&(P[s](ao[aj-4])||e.x);
    e.by=al&&(P[s](ao[aj-3])||e.y);
    e.x=al&&ao[aj-2];
    e.y=al&&ao[aj-1];
}
return al?[ae,al]:ae;
},null,w),p=ab(function(aj){
    var ai=[];
    for(var af=0,ak=aj[C];af<ak;af++){
        var e={},ah=aj[af].match(/^([^:]*):?([\d\.]*)/);
        e.color=f.getRGB(ah[1]);
        if(e.color.error){
            return null;
        }
        e.color=e.color.hex;
        ah[2]&&(e.offset=ah[2]+"%");
        ai.push(e);
    }
    for(var af=1,ak=ai[C]-1;af<ak;af++){
        if(!ai[af].offset){
            var R=P[s](ai[af-1].offset||0),ad=0;
            for(var ae=af+1;ae<ak;ae++){
                if(ai[ae].offset){
                    ad=ai[ae].offset;
                    break;
                }
            }
            if(!ad){
            ad=100;
            ae=ak;
        }
        ad=P[s](ad);
        var ag=(ad-R)/(ae-af+1);
        for(;af<ae;af++){
            R+=ag;
            ai[af].offset=R+"%";
        }
        }
    }
return ai;
}),K=function(){
    var R,i,ae,ad,e;
    if(f.is(arguments[0],"string")||f.is(arguments[0],"object")){
        if(f.is(arguments[0],"string")){
            R=g.getElementById(arguments[0]);
        }else{
            R=arguments[0];
        }
        if(R.tagName){
            if(arguments[1]==null){
                return{
                    container:R,
                    width:R.style.pixelWidth||R.offsetWidth,
                    height:R.style.pixelHeight||R.offsetHeight
                    };

        }else{
            return{
                container:R,
                width:arguments[1],
                height:arguments[2]
                };

    }
}
}else{
    if(f.is(arguments[0],"number")&&arguments[C]>3){
        return{
            container:1,
            x:arguments[0],
            y:arguments[1],
            width:arguments[2],
            height:arguments[3]
            };

}
}
},a=function(e,R){
    var i=this;
    for(var ad in R){
        if(R.hasOwnProperty(ad)&&!(ad in e)){
            switch(typeof R[ad]){
                case"function":
                    (function(ae){
                    e[ad]=e===i?ae:function(){
                        return ae[h](i,arguments);
                    };

                })(R[ad]);
                break;
            case"object":
                e[ad]=e[ad]||{};

                a.call(this,e[ad],R[ad]);
                break;
            default:
                e[ad]=R[ad];
                break;
        }
    }
    }
};

if(f.svg){
    b.svgns="http://www.w3.org/2000/svg";
    b.xlink="http://www.w3.org/1999/xlink";
    var S=function(e){
        return +e+(Math.floor(e)==e)*0.5;
    };

    var D=function(af){
        for(var R=0,ad=af[C];R<ad;R++){
            if(af[R][0].toLowerCase()!="a"){
                for(var e=1,ae=af[R][C];e<ae;e++){
                    af[R][e]=S(af[R][e]);
                }
                }else{
            af[R][6]=S(af[R][6]);
            af[R][7]=S(af[R][7]);
        }
        }
        return af;
};

var F=function(R,e){
    if(e){
        for(var i in e){
            if(e.hasOwnProperty(i)){
                R.setAttribute(i,e[i]);
            }
        }
        }else{
    return g.createElementNS(b.svgns,R);
}
};

f.toString=function(){
    return"Your browser supports SVG.\nYou are running Rapha\u00ebl "+this.version;
};

var aa=function(e,ad){
    var i=F("path");
    ad.canvas&&ad.canvas.appendChild(i);
    var R=new n(i,ad);
    R.type="path";
    J(R,{
        fill:"none",
        stroke:"#000",
        path:e
    });
    return R;
};

var Q=function(ad,an,e){
    var ak="linear",ah=0.5,af=0.5,ap=ad.style;
    an=(an+"").replace(/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,function(aq,i,ar){
        ak="radial";
        if(i&&ar){
            ah=P[s](i);
            af=P[s](ar);
            if(Math.pow(ah-0.5,2)+Math.pow(af-0.5,2)>0.25){
                af=Math.sqrt(0.25-Math.pow(ah-0.5,2))+0.5;
            }
        }
        return"";
    });
an=an.split(/\s*\-\s*/);
if(ak=="linear"){
    var ag=an.shift();
    ag=-P[s](ag);
    if(isNaN(ag)){
        return null;
    }
    var ae=[0,0,Math.cos(ag*Math.PI/180),Math.sin(ag*Math.PI/180)],am=1/(Math.max(Math.abs(ae[2]),Math.abs(ae[3]))||1);
    ae[2]*=am;
    ae[3]*=am;
    if(ae[2]<0){
        ae[0]=-ae[2];
        ae[2]=0;
    }
    if(ae[3]<0){
        ae[1]=-ae[3];
        ae[3]=0;
    }
}
var aj=p(an);
if(!aj){
    return null;
}
var R=F(ak+"Gradient");
R.id="r"+(f.idGenerator++).toString(36);
ak=="radial"?F(R,{
    fx:ah,
    fy:af
}):F(R,{
    x1:ae[0],
    y1:ae[1],
    x2:ae[2],
    y2:ae[3]
    });
e.defs.appendChild(R);
for(var ai=0,ao=aj[C];ai<ao;ai++){
    var al=F("stop");
    F(al,{
        offset:aj[ai].offset?aj[ai].offset:!ai?"0%":"100%",
        "stop-color":aj[ai].color||"#fff"
        });
    R.appendChild(al);
}
F(ad,{
    fill:"url(#"+R.id+")",
    opacity:1,
    "fill-opacity":1
});
ap.fill="";
ap.opacity=1;
ap.fillOpacity=1;
return 1;
};

var v=function(i){
    var e=i.getBBox();
    F(i.pattern,{
        patternTransform:f.format("translate({0},{1})",e.x,e.y)
        });
};

var J=function(al,av){
    var ao={
        "":[0],
        none:[0],
        "-":[3,1],
        ".":[1,1],
        "-.":[3,1,1,1],
        "-..":[3,1,1,1,1,1],
        ". ":[1,3],
        "- ":[4,3],
        "--":[8,3],
        "- .":[4,3,1,3],
        "--.":[8,3,1,3],
        "--..":[8,3,1,3,1,3]
        },aq=al.node,am=al.attrs,ai=al.attr("rotation"),af=function(aC,aB){
        aB=ao[(aB+"").toLowerCase()];
        if(aB){
            var az=aC.attrs["stroke-width"]||"1",ax={
                round:az,
                square:az,
                butt:0
            }
            [aC.attrs["stroke-linecap"]||av["stroke-linecap"]]||0,aA=[];
            var ay=aB[C];
            while(ay--){
                aA[ay]=aB[ay]*az+((ay%2)?1:-1)*ax;
            }
            F(aq,{
                "stroke-dasharray":aA.join(",")
                });
        }
    };

P[s](ai)&&al.rotate(0,true);
for(var ap in av){
    if(av.hasOwnProperty(ap)){
        if(!(ap in t)){
            continue;
        }
        var an=av[ap];
        am[ap]=an;
        switch(ap){
            case"href":case"title":case"target":
                var at=aq.parentNode;
                if(at.tagName.toLowerCase()!="a"){
                var ad=F("a");
                at.insertBefore(ad,aq);
                ad.appendChild(aq);
                at=ad;
            }
            at.setAttributeNS(al.paper.xlink,ap,an);
                break;
            case"clip-rect":
                var i=(an+"").split(ac);
                if(i[C]==4){
                al.clip&&al.clip.parentNode.parentNode.removeChild(al.clip.parentNode);
                var R=F("clipPath"),ar=F("rect");
                R.id="r"+(f.idGenerator++).toString(36);
                F(ar,{
                    x:i[0],
                    y:i[1],
                    width:i[2],
                    height:i[3]
                    });
                R.appendChild(ar);
                al.paper.defs.appendChild(R);
                F(aq,{
                    "clip-path":"url(#"+R.id+")"
                    });
                al.clip=ar;
            }
            if(!an){
                var au=g.getElementById(aq.getAttribute("clip-path").replace(/(^url\(#|\)$)/g,""));
                au&&au.parentNode.removeChild(au);
                F(aq,{
                    "clip-path":""
                });
                delete al.clip;
            }
            break;
            case"path":
                if(an&&al.type=="path"){
                am.path=D(z(an));
                F(aq,{
                    d:am.path
                    });
            }
            break;
            case"width":
                aq.setAttribute(ap,an);
                if(am.fx){
                ap="x";
                an=am.x;
            }else{
                break;
            }
            case"x":
                if(am.fx){
                an=-am.x-(am.width||0);
            }
            case"rx":
                if(ap=="rx"&&al.type=="rect"){
                break;
            }
            case"cx":
                aq.setAttribute(ap,an);
                al.pattern&&v(al);
                break;
            case"height":
                aq.setAttribute(ap,an);
                if(am.fy){
                ap="y";
                an=am.y;
            }else{
                break;
            }
            case"y":
                if(am.fy){
                an=-am.y-(am.height||0);
            }
            case"ry":
                if(ap=="ry"&&al.type=="rect"){
                break;
            }
            case"cy":
                aq.setAttribute(ap,an);
                al.pattern&&v(al);
                break;
            case"r":
                if(al.type=="rect"){
                F(aq,{
                    rx:an,
                    ry:an
                });
            }else{
                aq.setAttribute(ap,an);
            }
            break;
            case"src":
                if(al.type=="image"){
                aq.setAttributeNS(al.paper.xlink,"href",an);
            }
            break;
            case"stroke-width":
                aq.style.strokeWidth=an;
                aq.setAttribute(ap,an);
                if(am["stroke-dasharray"]){
                af(al,am["stroke-dasharray"]);
            }
            break;
            case"stroke-dasharray":
                af(al,an);
                break;
            case"rotation":
                ai=an;
                al.rotate(an,true);
                break;
            case"translation":
                var ag=(an+"").split(ac);
                al.translate((+ag[0]+1||2)-1,(+ag[1]+1||2)-1);
                break;
            case"scale":
                var ag=(an+"").split(ac);
                al.scale(+ag[0]||1,+ag[1]||+ag[0]||1,+ag[2]||null,+ag[3]||null);
                break;
            case"fill":
                var ae=(an+"").match(/^url\(['"]?([^\)]+)['"]?\)$/i);
                if(ae){
                var R=F("pattern"),ak=F("image");
                R.id="r"+(f.idGenerator++).toString(36);
                F(R,{
                    x:0,
                    y:0,
                    patternUnits:"userSpaceOnUse"
                });
                F(ak,{
                    x:0,
                    y:0
                });
                ak.setAttributeNS(al.paper.xlink,"href",ae[1]);
                R.appendChild(ak);
                var aw=g.createElement("img");
                aw.style.cssText="position:absolute;left:-9999em;top-9999em";
                aw.onload=function(){
                    F(R,{
                        width:this.offsetWidth,
                        height:this.offsetHeight
                        });
                    F(ak,{
                        width:this.offsetWidth,
                        height:this.offsetHeight
                        });
                    g.body.removeChild(this);
                    b.safari();
                };

                g.body.appendChild(aw);
                aw.src=ae[1];
                al.paper.defs.appendChild(R);
                aq.style.fill="url(#"+R.id+")";
                F(aq,{
                    fill:"url(#"+R.id+")"
                    });
                al.pattern=R;
                al.pattern&&v(al);
                break;
            }
            if(!f.getRGB(an).error){
                delete av.gradient;
                delete am.gradient;
                if(!f.is(am.opacity,"undefined")&&f.is(av.opacity,"undefined")){
                    aq.style.opacity=am.opacity;
                    F(aq,{
                        opacity:am.opacity
                        });
                }
                if(!f.is(am["fill-opacity"],"undefined")&&f.is(av["fill-opacity"],"undefined")){
                    aq.style.fillOpacity=am["fill-opacity"];
                    F(aq,{
                        "fill-opacity":am["fill-opacity"]
                        });
                }
            }else{
                if((al.type in {
                    circle:1,
                    ellipse:1
                }||(an+"").charAt(0)!="r")&&Q(aq,an,al.paper)){
                    am.gradient=an;
                    am.fill="none";
                    break;
                }
            }
            case"stroke":
        aq.style[ap]=f.getRGB(an).hex;
        aq.setAttribute(ap,f.getRGB(an).hex);
        break;
    case"gradient":
        (al.type in {
        circle:1,
        ellipse:1
    }||(an+"").charAt(0)!="r")&&Q(aq,an,al.paper);
        break;
    case"opacity":case"fill-opacity":
        if(am.gradient){
        var e=g.getElementById(aq.getAttribute("fill").replace(/^url\(#|\)$/g,""));
        if(e){
            var ah=e.getElementsByTagName("stop");
            ah[ah[C]-1].setAttribute("stop-opacity",an);
        }
        break;
    }
    default:
        ap=="font-size"&&(an=P[r](an,10)+"px");
        var aj=ap.replace(/(\-.)/g,function(ax){
        return ax.substring(1).toUpperCase();
    });
    aq.style[aj]=an;
    aq.setAttribute(ap,an);
        break;
}
}
}
X(al,av);
P[r](ai,10)&&al.rotate(ai,true);
};

var O=1.2;
var X=function(e,ae){
    if(e.type!="text"||!("text" in ae||"font" in ae||"font-size" in ae||"x" in ae||"y" in ae)){
        return;
    }
    var aj=e.attrs,R=e.node,al=R.firstChild?P[r](g.defaultView.getComputedStyle(R.firstChild,"").getPropertyValue("font-size"),10):10;
    if("text" in ae){
        while(R.firstChild){
            R.removeChild(R.firstChild);
        }
        var ad=(ae.text+"").split("\n");
        for(var af=0,ak=ad[C];af<ak;af++){
            var ah=F("tspan");
            af&&F(ah,{
                dy:al*O,
                x:aj.x
                });
            ah.appendChild(g.createTextNode(ad[af]));
            R.appendChild(ah);
        }
        }else{
    var ad=R.getElementsByTagName("tspan");
    for(var af=0,ak=ad[C];af<ak;af++){
        af&&F(ad[af],{
            dy:al*O,
            x:aj.x
            });
    }
    }
    F(R,{
    y:aj.y
    });
var ag=e.getBBox(),ai=aj.y-(ag.y+ag.height/2);
ai&&F(R,{
    y:aj.y+ai
    });
};

var n=function(i,e){
    var ad=0,R=0;
    this[0]=i;
    this.node=i;
    i.raphael=this;
    this.paper=e;
    this.attrs=this.attrs||{};

    this.transformations=[];
    this._={
        tx:0,
        ty:0,
        rt:{
            deg:0,
            cx:0,
            cy:0
        },
        sx:1,
        sy:1
    };

};

n[o].rotate=function(i,e,ad){
    if(i==null){
        if(this._.rt.cx){
            return[this._.rt.deg,this._.rt.cx,this._.rt.cy].join(" ");
        }
        return this._.rt.deg;
    }
    var R=this.getBBox();
    i=(i+"").split(ac);
    if(i[C]-1){
        e=P[s](i[1]);
        ad=P[s](i[2]);
    }
    i=P[s](i[0]);
    if(e!=null){
        this._.rt.deg=i;
    }else{
        this._.rt.deg+=i;
    }(ad==null)&&(e=null);
    this._.rt.cx=e;
    this._.rt.cy=ad;
    e=e==null?R.x+R.width/2:e;
    ad=ad==null?R.y+R.height/2:ad;
    if(this._.rt.deg){
        this.transformations[0]=f.format("rotate({0} {1} {2})",this._.rt.deg,e,ad);
        this.clip&&F(this.clip,{
            transform:f.format("rotate({0} {1} {2})",-this._.rt.deg,e,ad)
            });
    }else{
        this.transformations[0]="";
        this.clip&&F(this.clip,{
            transform:""
        });
    }
    F(this.node,{
        transform:this.transformations.join(" ")
        });
    return this;
};

n[o].hide=function(){
    this.node.style.display="none";
    return this;
};

n[o].show=function(){
    this.node.style.display="block";
    return this;
};

n[o].remove=function(){
    this.node.parentNode.removeChild(this.node);
};

n[o].getBBox=function(){
    if(this.type=="path"){
        return H(this.attrs.path);
    }
    if(this.node.style.display=="none"){
        this.show();
        var ad=true;
    }
    var ah={};

    try{
        ah=this.node.getBBox();
    }catch(af){}finally{
        ah=ah||{};

}
if(this.type=="text"){
    ah={
        x:ah.x,
        y:Infinity,
        width:ah.width,
        height:0
    };

    for(var R=0,ae=this.node.getNumberOfChars();R<ae;R++){
        var ag=this.node.getExtentOfChar(R);
        (ag.y<ah.y)&&(ah.y=ag.y);
        (ag.y+ag.height-ah.y>ah.height)&&(ah.height=ag.y+ag.height-ah.y);
    }
    }
    ad&&this.hide();
return ah;
};

n[o].attr=function(){
    if(arguments[C]==1&&f.is(arguments[0],"string")){
        if(arguments[0]=="translation"){
            return this.translate();
        }
        if(arguments[0]=="rotation"){
            return this.rotate();
        }
        if(arguments[0]=="scale"){
            return this.scale();
        }
        return this.attrs[arguments[0]];
    }
    if(arguments[C]==1&&f.is(arguments[0],"array")){
        var e={};

        for(var i in arguments[0]){
            if(arguments[0].hasOwnProperty(i)){
                e[arguments[0][i]]=this.attrs[arguments[0][i]];
            }
        }
        return e;
}
if(arguments[C]==2){
    var R={};

    R[arguments[0]]=arguments[1];
    J(this,R);
}else{
    if(arguments[C]==1&&f.is(arguments[0],"object")){
        J(this,arguments[0]);
    }
}
return this;
};

n[o].toFront=function(){
    this.node.parentNode.appendChild(this.node);
    return this;
};

n[o].toBack=function(){
    if(this.node.parentNode.firstChild!=this.node){
        this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);
    }
    return this;
};

n[o].insertAfter=function(e){
    if(e.node.nextSibling){
        e.node.parentNode.insertBefore(this.node,e.node.nextSibling);
    }else{
        e.node.parentNode.appendChild(this.node);
    }
    return this;
};

n[o].insertBefore=function(e){
    var i=e.node;
    i.parentNode.insertBefore(this.node,i);
    return this;
};

var G=function(i,e,af,ae){
    e=S(e);
    af=S(af);
    var ad=F("circle");
    i.canvas&&i.canvas.appendChild(ad);
    var R=new n(ad,i);
    R.attrs={
        cx:e,
        cy:af,
        r:ae,
        fill:"none",
        stroke:"#000"
    };

    R.type="circle";
    F(ad,R.attrs);
    return R;
};

var M=function(R,e,ah,i,af,ag){
    e=S(e);
    ah=S(ah);
    var ae=F("rect");
    R.canvas&&R.canvas.appendChild(ae);
    var ad=new n(ae,R);
    ad.attrs={
        x:e,
        y:ah,
        width:i,
        height:af,
        r:ag||0,
        rx:ag||0,
        ry:ag||0,
        fill:"none",
        stroke:"#000"
    };

    ad.type="rect";
    F(ae,ad.attrs);
    return ad;
};

var j=function(i,e,ag,af,ae){
    e=S(e);
    ag=S(ag);
    var ad=F("ellipse");
    i.canvas&&i.canvas.appendChild(ad);
    var R=new n(ad,i);
    R.attrs={
        cx:e,
        cy:ag,
        rx:af,
        ry:ae,
        fill:"none",
        stroke:"#000"
    };

    R.type="ellipse";
    F(ad,R.attrs);
    return R;
};

var q=function(R,ag,e,ah,i,af){
    var ae=F("image");
    F(ae,{
        x:e,
        y:ah,
        width:i,
        height:af,
        preserveAspectRatio:"none"
    });
    ae.setAttributeNS(R.xlink,"href",ag);
    R.canvas&&R.canvas.appendChild(ae);
    var ad=new n(ae,R);
    ad.attrs={
        x:e,
        y:ah,
        width:i,
        height:af,
        src:ag
    };

    ad.type="image";
    return ad;
};

var L=function(i,e,af,ae){
    var ad=F("text");
    F(ad,{
        x:e,
        y:af,
        "text-anchor":"middle"
    });
    i.canvas&&i.canvas.appendChild(ad);
    var R=new n(ad,i);
    R.attrs={
        x:e,
        y:af,
        "text-anchor":"middle",
        text:ae,
        font:t.font,
        stroke:"none",
        fill:"#000"
    };

    R.type="text";
    J(R,R.attrs);
    return R;
};

var I=function(i,e){
    this.width=i||this.width;
    this.height=e||this.height;
    this.canvas.setAttribute("width",this.width);
    this.canvas.setAttribute("height",this.height);
    return this;
};

var m=function(){
    var ae=K[h](null,arguments),R=ae&&ae.container,ag=ae.x,af=ae.y,ad=ae.width,ah=ae.height;
    if(!R){
        throw new Error("SVG container not found.");
    }
    b.canvas=F("svg");
    var e=b.canvas,ai=e.style;
    e.setAttribute("width",ad||512);
    b.width=ad||512;
    e.setAttribute("height",ah||342);
    b.height=ah||342;
    if(R==1){
        g.body.appendChild(e);
        ai.position="absolute";
        ai.left=ag+"px";
        ai.top=af+"px";
    }else{
        if(R.firstChild){
            R.insertBefore(e,R.firstChild);
        }else{
            R.appendChild(e);
        }
    }
    R={
    canvas:e,
    clear:function(){
        while(this.canvas.firstChild){
            this.canvas.removeChild(this.canvas.firstChild);
        }
        this.desc=F("desc");
        this.defs=F("defs");
        this.desc.appendChild(g.createTextNode("Created with Rapha\u00ebl"));
        this.canvas.appendChild(this.desc);
        this.canvas.appendChild(this.defs);
    }
};

for(var i in b){
    if(b.hasOwnProperty(i)){
        if(i!="create"){
            R[i]=b[i];
        }
    }
}
a.call(R,R,f.fn);
R.clear();
R.raphael=f;
return R;
};

b.remove=function(){
    this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);
};

}
if(f.vml){
    var B=function(ag){
        var ae=T(ag);
        for(var R=0,ad=ae[C];R<ad;R++){
            ae[R][0]=(ae[R][0]+"").toLowerCase();
            ae[R][0]=="z"&&(ae[R][0]="x");
            for(var e=1,af=ae[R][C];e<af;e++){
                ae[R][e]=~~(ae[R][e]+0.5);
            }
            }
            return(ae+"");
};

f.toString=function(){
    return"Your browser doesn\u2019t support SVG. Assuming it is Internet Explorer and falling down to VML.\nYou are running Rapha\u00ebl "+this.version;
};

var aa=function(e,af){
    var ad=Z("group"),ag=ad.style;
    ag.position="absolute";
    ag.left=0;
    ag.top=0;
    ag.width=af.width+"px";
    ag.height=af.height+"px";
    ad.coordsize=af.coordsize;
    ad.coordorigin=af.coordorigin;
    var R=Z("shape"),i=R.style;
    i.width=af.width+"px";
    i.height=af.height+"px";
    R.path="";
    R.coordsize=this.coordsize;
    R.coordorigin=this.coordorigin;
    ad.appendChild(R);
    var ae=new n(R,ad,af);
    ae.isAbsolute=true;
    ae.type="path";
    ae.path=[];
    ae.Path="";
    if(e){
        ae.attrs.path=f.parsePathString(e);
        ae.node.path=B(ae.attrs.path);
    }
    J(ae,{
        fill:"none",
        stroke:"#000"
    });
    ae.setBox();
    af.canvas.appendChild(ad);
    return ae;
};

var J=function(aj,an){
    aj.attrs=aj.attrs||{};

    var al=aj.node,ao=aj.attrs,ag=al.style,ad,at=aj;
    for(var ah in an){
        if(an.hasOwnProperty(ah)){
            ao[ah]=an[ah];
        }
    }
    an.href&&(al.href=an.href);
an.title&&(al.title=an.title);
an.target&&(al.target=an.target);
if(an.path&&aj.type=="path"){
    ao.path=f.parsePathString(an.path);
    al.path=B(ao.path);
}
if(an.rotation!=null){
    aj.rotate(an.rotation,true);
}
if(an.translation){
    ad=(an.translation+"").split(ac);
    aj.translate(ad[0],ad[1]);
}
if(an.scale){
    ad=(an.scale+"").split(ac);
    aj.scale(+ad[0]||1,+ad[1]||+ad[0]||1,+ad[2]||null,+ad[3]||null);
}
if("clip-rect" in an){
    var e=(an["clip-rect"]+"").split(ac);
    if(e[C]==4){
        e[2]=+e[2]+(+e[0]);
        e[3]=+e[3]+(+e[1]);
        var ai=al.clipRect||g.createElement("div"),ar=ai.style,af=al.parentNode;
        ar.clip=f.format("rect({1}px {2}px {3}px {0}px)",e);
        if(!al.clipRect){
            ar.position="absolute";
            ar.top=0;
            ar.left=0;
            ar.width=aj.paper.width+"px";
            ar.height=aj.paper.height+"px";
            af.parentNode.insertBefore(ai,af);
            ai.appendChild(af);
            al.clipRect=ai;
        }
    }
    if(!an["clip-rect"]){
    al.clipRect&&(al.clipRect.style.clip="");
}
}
if(aj.type=="image"&&an.src){
    al.src=an.src;
}
if(aj.type=="image"&&an.opacity){
    al.filterOpacity=" progid:DXImageTransform.Microsoft.Alpha(opacity="+(an.opacity*100)+")";
    ag.filter=(al.filterMatrix||"")+(al.filterOpacity||"");
}
an.font&&(ag.font=an.font);
an["font-family"]&&(ag.fontFamily='"'+an["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,"")+'"');
an["font-size"]&&(ag.fontSize=an["font-size"]);
an["font-weight"]&&(ag.fontWeight=an["font-weight"]);
an["font-style"]&&(ag.fontStyle=an["font-style"]);
if(an.opacity!=null||an["stroke-width"]!=null||an.fill!=null||an.stroke!=null||an["stroke-width"]!=null||an["stroke-opacity"]!=null||an["fill-opacity"]!=null||an["stroke-dasharray"]!=null||an["stroke-miterlimit"]!=null||an["stroke-linejoin"]!=null||an["stroke-linecap"]!=null){
    al=aj.shape||al;
    var am=(al.getElementsByTagName("fill")&&al.getElementsByTagName("fill")[0]),ap=false;
    !am&&(ap=am=Z("fill"));
    if("fill-opacity" in an||"opacity" in an){
        var i=((+ao["fill-opacity"]+1||2)-1)*((+ao.opacity+1||2)-1);
        i<0&&(i=0);
        i>1&&(i=1);
        am.opacity=i;
    }
    an.fill&&(am.on=true);
    if(am.on==null||an.fill=="none"){
        am.on=false;
    }
    if(am.on&&an.fill){
        var R=an.fill.match(/^url\(([^\)]+)\)$/i);
        if(R){
            am.src=R[1];
            am.type="tile";
        }else{
            am.color=f.getRGB(an.fill).hex;
            am.src="";
            am.type="solid";
            if(f.getRGB(an.fill).error&&(at.type in {
                circle:1,
                ellipse:1
            }||(an.fill+"").charAt(0)!="r")&&Q(at,an.fill)){
                ao.fill="none";
                ao.gradient=an.fill;
            }
        }
    }
ap&&al.appendChild(am);
var ae=(al.getElementsByTagName("stroke")&&al.getElementsByTagName("stroke")[0]),aq=false;
!ae&&(aq=ae=Z("stroke"));
if((an.stroke&&an.stroke!="none")||an["stroke-width"]||an["stroke-opacity"]!=null||an["stroke-dasharray"]||an["stroke-miterlimit"]||an["stroke-linejoin"]||an["stroke-linecap"]){
    ae.on=true;
}(an.stroke=="none"||ae.on==null||an.stroke==0||an["stroke-width"]==0)&&(ae.on=false);
ae.on&&an.stroke&&(ae.color=f.getRGB(an.stroke).hex);
var i=((+ao["stroke-opacity"]+1||2)-1)*((+ao.opacity+1||2)-1);
i<0&&(i=0);
i>1&&(i=1);
ae.opacity=i;
an["stroke-linejoin"]&&(ae.joinstyle=an["stroke-linejoin"]||"miter");
ae.miterlimit=an["stroke-miterlimit"]||8;
an["stroke-linecap"]&&(ae.endcap={
    butt:"flat",
    square:"square",
    round:"round"
}
[an["stroke-linecap"]]||"miter");
an["stroke-width"]&&(ae.weight=(P[s](an["stroke-width"])||1)*12/16);
if(an["stroke-dasharray"]){
    var ak={
        "-":"shortdash",
        ".":"shortdot",
        "-.":"shortdashdot",
        "-..":"shortdashdotdot",
        ". ":"dot",
        "- ":"dash",
        "--":"longdash",
        "- .":"dashdot",
        "--.":"longdashdot",
        "--..":"longdashdotdot"
    };

    ae.dashstyle=ak[an["stroke-dasharray"]]||"";
}
aq&&al.appendChild(ae);
}
if(at.type=="text"){
    var ag=at.paper.span.style;
    ao.font&&(ag.font=ao.font);
    ao["font-family"]&&(ag.fontFamily=ao["font-family"]);
    ao["font-size"]&&(ag.fontSize=ao["font-size"]);
    ao["font-weight"]&&(ag.fontWeight=ao["font-weight"]);
    ao["font-style"]&&(ag.fontStyle=ao["font-style"]);
    at.node.string&&(at.paper.span.innerHTML=at.node.string.replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));
    at.W=ao.w=at.paper.span.offsetWidth;
    at.H=ao.h=at.paper.span.offsetHeight;
    at.X=ao.x;
    at.Y=ao.y+~~(at.H/2+0.5);
    switch(ao["text-anchor"]){
        case"start":
            at.node.style["v-text-align"]="left";
            at.bbx=~~(at.W/2+0.5);
            break;
        case"end":
            at.node.style["v-text-align"]="right";
            at.bbx=-~~(at.W/2+0.5);
            break;
        default:
            at.node.style["v-text-align"]="center";
            break;
    }
}
};

var Q=function(e,ah){
    e.attrs=e.attrs||{};

    var ai=e.attrs,ak=e.node.getElementsByTagName("fill"),af="linear",ag=".5 .5";
    e.attrs.gradient=ah;
    ah=(ah+"").replace(/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,function(am,an,i){
        af="radial";
        if(an&&i){
            an=P[s](an);
            i=P[s](i);
            if(Math.pow(an-0.5,2)+Math.pow(i-0.5,2)>0.25){
                i=Math.sqrt(0.25-Math.pow(an-0.5,2))+0.5;
            }
            ag=an+" "+i;
        }
        return"";
    });
    ah=ah.split(/\s*\-\s*/);
    if(af=="linear"){
        var R=ah.shift();
        R=-P[s](R);
        if(isNaN(R)){
            return null;
        }
    }
    var ae=p(ah);
if(!ae){
    return null;
}
e=e.shape||e.node;
ak=ak[0]||Z("fill");
if(ae[C]){
    ak.on=true;
    ak.method="none";
    ak.type=(af=="radial")?"gradientradial":"gradient";
    ak.color=ae[0].color;
    ak.color2=ae[ae[C]-1].color;
    var al=[];
    for(var ad=0,aj=ae[C];ad<aj;ad++){
        ae[ad].offset&&al.push(ae[ad].offset+" "+ae[ad].color);
    }
    if(al[C]&&ak.colors){
        ak.colors.value=al.join(",");
    }else{
        ak.colors.value="0% "+ak.color;
    }
    if(af=="radial"){
        ak.focus="100%";
        ak.focussize=ag;
        ak.focusposition=ag;
    }else{
        ak.angle=(270-R)%360;
    }
}
return 1;
};

var n=function(ae,ag,e){
    var af=0,R=0,i=0,ad=1;
    this[0]=ae;
    this.node=ae;
    ae.raphael=this;
    this.X=0;
    this.Y=0;
    this.attrs={};

    this.Group=ag;
    this.paper=e;
    this._={
        tx:0,
        ty:0,
        rt:{
            deg:0
        },
        sx:1,
        sy:1
    };

};

n[o].rotate=function(i,e,R){
    if(i==null){
        if(this._.rt.cx){
            return[this._.rt.deg,this._.rt.cx,this._.rt.cy].join(" ");
        }
        return this._.rt.deg;
    }
    i=(i+"").split(ac);
    if(i[C]-1){
        e=P[s](i[1]);
        R=P[s](i[2]);
    }
    i=P[s](i[0]);
    if(e!=null){
        this._.rt.deg=i;
    }else{
        this._.rt.deg+=i;
    }
    R==null&&(e=null);
    this._.rt.cx=e;
    this._.rt.cy=R;
    this.setBox(this.attrs,e,R);
    this.Group.style.rotation=this._.rt.deg;
    return this;
};

n[o].setBox=function(af,ag,ae){
    var R=this.Group.style,ah=(this.shape&&this.shape.style)||this.node.style;
    af=af||{};

    for(var ai in af){
        if(af.hasOwnProperty(ai)){
            this.attrs[ai]=af[ai];
        }
    }
    ag=ag||this._.rt.cx;
ae=ae||this._.rt.cy;
var al=this.attrs,ao,an,ap,ak;
switch(this.type){
    case"circle":
        ao=al.cx-al.r;
        an=al.cy-al.r;
        ap=ak=al.r*2;
        break;
    case"ellipse":
        ao=al.cx-al.rx;
        an=al.cy-al.ry;
        ap=al.rx*2;
        ak=al.ry*2;
        break;
    case"rect":case"image":
        ao=al.x;
        an=al.y;
        ap=al.width||0;
        ak=al.height||0;
        break;
    case"text":
        this.textpath.v=["m",~~(al.x+0.5),", ",~~(al.y-2+0.5),"l",~~(al.x+0.5)+1,", ",~~(al.y-2+0.5)].join("");
        ao=al.x-~~(this.W/2+0.5);
        an=al.y-this.H/2;
        ap=this.W;
        ak=this.H;
        break;
    case"path":
        if(!this.attrs.path){
        ao=0;
        an=0;
        ap=this.paper.width;
        ak=this.paper.height;
    }else{
        var aj=H(this.attrs.path);
        ao=aj.x;
        an=aj.y;
        ap=aj.width;
        ak=aj.height;
    }
    break;
    default:
        ao=0;
        an=0;
        ap=this.paper.width;
        ak=this.paper.height;
        break;
}
ag=(ag==null)?ao+ap/2:ag;
ae=(ae==null)?an+ak/2:ae;
var ad=ag-this.paper.width/2,am=ae-this.paper.height/2;
if(this.type=="path"||this.type=="text"){
    (R.left!=ad+"px")&&(R.left=ad+"px");
    (R.top!=am+"px")&&(R.top=am+"px");
    this.X=this.type=="text"?ao:-ad;
    this.Y=this.type=="text"?an:-am;
    this.W=ap;
    this.H=ak;
    (ah.left!=-ad+"px")&&(ah.left=-ad+"px");
    (ah.top!=-am+"px")&&(ah.top=-am+"px");
}else{
    (R.left!=ad+"px")&&(R.left=ad+"px");
    (R.top!=am+"px")&&(R.top=am+"px");
    this.X=ao;
    this.Y=an;
    this.W=ap;
    this.H=ak;
    (R.width!=this.paper.width+"px")&&(R.width=this.paper.width+"px");
    (R.height!=this.paper.height+"px")&&(R.height=this.paper.height+"px");
    (ah.left!=ao-ad+"px")&&(ah.left=ao-ad+"px");
    (ah.top!=an-am+"px")&&(ah.top=an-am+"px");
    (ah.width!=ap+"px")&&(ah.width=ap+"px");
    (ah.height!=ak+"px")&&(ah.height=ak+"px");
    var aq=(+af.r||0)/(Math.min(ap,ak));
    if(this.type=="rect"&&this.arcsize!=aq&&(aq||this.arcsize)){
        var e=Z(aq?"roundrect":"rect");
        e.arcsize=aq;
        this.Group.appendChild(e);
        this.node.parentNode.removeChild(this.node);
        this.node=e;
        this.arcsize=aq;
        J(this,this.attrs);
        this.setBox(this.attrs);
    }
}
};

n[o].hide=function(){
    this.Group.style.display="none";
    return this;
};

n[o].show=function(){
    this.Group.style.display="block";
    return this;
};

n[o].getBBox=function(){
    if(this.type=="path"){
        return H(this.attrs.path);
    }
    return{
        x:this.X+(this.bbx||0),
        y:this.Y,
        width:this.W,
        height:this.H
        };

};

n[o].remove=function(){
    this[0].parentNode.removeChild(this[0]);
    this.Group.parentNode.removeChild(this.Group);
    this.shape&&this.shape.parentNode.removeChild(this.shape);
};

n[o].attr=function(){
    if(arguments[C]==1&&f.is(arguments[0],"string")){
        if(arguments[0]=="translation"){
            return this.translate();
        }
        if(arguments[0]=="rotation"){
            return this.rotate();
        }
        if(arguments[0]=="scale"){
            return this.scale();
        }
        return this.attrs[arguments[0]];
    }
    if(this.attrs&&arguments[C]==1&&f.is(arguments[0],"array")){
        var e={};

        for(var R=0,ad=arguments[0][C];R<ad;R++){
            e[arguments[0][R]]=this.attrs[arguments[0][R]];
        }
        return e;
    }
    var ae;
    if(arguments[C]==2){
        ae={};

        ae[arguments[0]]=arguments[1];
    }
    if(arguments[C]==1&&f.is(arguments[0],"object")){
        ae=arguments[0];
    }
    if(ae){
        if(ae.gradient&&(this.type in {
            circle:1,
            ellipse:1
        }||(ae.gradient+"").charAt(0)!="r")){
            Q(this,ae.gradient);
        }
        if(ae.text&&this.type=="text"){
            this.node.string=ae.text;
        }
        J(this,ae);
        this.setBox(this.attrs);
    }
    return this;
};

n[o].toFront=function(){
    this.Group.parentNode.appendChild(this.Group);
    return this;
};

n[o].toBack=function(){
    if(this.Group.parentNode.firstChild!=this.Group){
        this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);
    }
    return this;
};

n[o].insertAfter=function(e){
    if(e.Group.nextSibling){
        e.Group.parentNode.insertBefore(this.Group,e.Group.nextSibling);
    }else{
        e.Group.parentNode.appendChild(this.Group);
    }
    return this;
};

n[o].insertBefore=function(e){
    e.Group.parentNode.insertBefore(this.Group,e.Group);
    return this;
};

var G=function(i,e,ah,af){
    var ae=Z("group"),ag=Z("oval"),R=ag.style;
    ae.style.cssText="position:absolute;left:0;top:0;width:"+i.width+"px;height:"+i.height+"px";
    ae.coordsize=i.coordsize;
    ae.coordorigin=i.coordorigin;
    ae.appendChild(ag);
    var ad=new n(ag,ae,i);
    ad.type="circle";
    J(ad,{
        stroke:"#000",
        fill:"none"
    });
    ad.attrs.cx=e;
    ad.attrs.cy=ah;
    ad.attrs.r=af;
    ad.setBox({
        x:e-af,
        y:ah-af,
        width:af*2,
        height:af*2
        });
    i.canvas.appendChild(ae);
    return ad;
};

var M=function(i,ah,ag,ai,ad,e){
    var ae=Z("group"),R=Z(e?"roundrect":"rect"),aj=(+e||0)/(Math.min(ai,ad));
    R.arcsize=aj;
    ae.style.cssText="position:absolute;left:0;top:0;width:"+i.width+"px;height:"+i.height+"px";
    ae.coordsize=i.coordsize;
    ae.coordorigin=i.coordorigin;
    ae.appendChild(R);
    var af=new n(R,ae,i);
    af.type="rect";
    J(af,{
        stroke:"#000"
    });
    af.arcsize=aj;
    af.setBox({
        x:ah,
        y:ag,
        width:ai,
        height:ad,
        r:+e
        });
    i.canvas.appendChild(ae);
    return af;
};

var j=function(e,ai,ah,R,i){
    var ae=Z("group"),ad=Z("oval"),ag=ad.style;
    ae.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
    ae.coordsize=e.coordsize;
    ae.coordorigin=e.coordorigin;
    ae.appendChild(ad);
    var af=new n(ad,ae,e);
    af.type="ellipse";
    J(af,{
        stroke:"#000"
    });
    af.attrs.cx=ai;
    af.attrs.cy=ah;
    af.attrs.rx=R;
    af.attrs.ry=i;
    af.setBox({
        x:ai-R,
        y:ah-i,
        width:R*2,
        height:i*2
        });
    e.canvas.appendChild(ae);
    return af;
};

var q=function(i,e,ai,ah,aj,ad){
    var ae=Z("group"),R=Z("image"),ag=R.style;
    ae.style.cssText="position:absolute;left:0;top:0;width:"+i.width+"px;height:"+i.height+"px";
    ae.coordsize=i.coordsize;
    ae.coordorigin=i.coordorigin;
    R.src=e;
    ae.appendChild(R);
    var af=new n(R,ae,i);
    af.type="image";
    af.attrs.src=e;
    af.attrs.x=ai;
    af.attrs.y=ah;
    af.attrs.w=aj;
    af.attrs.h=ad;
    af.setBox({
        x:ai,
        y:ah,
        width:aj,
        height:ad
    });
    i.canvas.appendChild(ae);
    return af;
};

var L=function(i,ai,ah,aj){
    var ae=Z("group"),ad=Z("shape"),ag=ad.style,ak=Z("path"),e=ak.style,R=Z("textpath");
    ae.style.cssText="position:absolute;left:0;top:0;width:"+i.width+"px;height:"+i.height+"px";
    ae.coordsize=i.coordsize;
    ae.coordorigin=i.coordorigin;
    ak.v=f.format("m{0},{1}l{2},{1}",~~(ai+0.5),~~(ah+0.5),~~(ai+0.5)+1);
    ak.textpathok=true;
    ag.width=i.width;
    ag.height=i.height;
    R.string=aj;
    R.on=true;
    ad.appendChild(R);
    ad.appendChild(ak);
    ae.appendChild(ad);
    var af=new n(R,ae,i);
    af.shape=ad;
    af.textpath=ak;
    af.type="text";
    af.attrs.text=aj;
    af.attrs.x=ai;
    af.attrs.y=ah;
    af.attrs.w=1;
    af.attrs.h=1;
    J(af,{
        font:t.font,
        stroke:"none",
        fill:"#000"
    });
    af.setBox();
    i.canvas.appendChild(ae);
    return af;
};

var I=function(R,e){
    var i=this.canvas.style;
    this.width=P[s](R||this.width);
    this.height=P[s](e||this.height);
    i.width=this.width+"px";
    i.height=this.height+"px";
    i.clip="rect(0 "+this.width+"px "+this.height+"px 0)";
    this.coordsize=this.width+" "+this.height;
    return this;
};

g.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");
try{
    !g.namespaces.rvml&&g.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    var Z=function(e){
        return g.createElement("<rvml:"+e+' class="rvml">');
    };

}catch(Y){
    var Z=function(e){
        return g.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };

}
var m=function(){
    var ad=K[h](null,arguments),i=ad.container,aj=ad.height,ak,R=ad.width,ai=ad.x,ah=ad.y;
    if(!i){
        throw new Error("VML container not found.");
    }
    var af={},ag=af.canvas=g.createElement("div"),ae=ag.style;
    R=P[s](R)||512;
    aj=P[s](aj)||342;
    af.width=R;
    af.height=aj;
    af.coordsize=R+" "+aj;
    af.coordorigin="0 0";
    af.span=g.createElement("span");
    af.span.style.cssText="position:absolute;left:-9999px;top:-9999px;padding:0;margin:0;line-height:1;display:inline;";
    ag.appendChild(af.span);
    ae.cssText=f.format("width:{0}px;height:{1}px;position:absolute;clip:rect(0 {0}px {1}px 0)",R,aj);
    if(i==1){
        g.body.appendChild(ag);
        ae.left=ai+"px";
        ae.top=ah+"px";
        i={
            style:{
                width:R,
                height:aj
            }
        };

}else{
    i.style.width=R;
    i.style.height=aj;
    if(i.firstChild){
        i.insertBefore(ag,i.firstChild);
    }else{
        i.appendChild(ag);
    }
}
for(var e in b){
    if(b.hasOwnProperty(e)){
        af[e]=b[e];
    }
}
a.call(af,af,f.fn);
af.clear=function(){
    while(ag.firstChild){
        ag.removeChild(ag.firstChild);
    }
};

af.raphael=f;
return af;
};

b.remove=function(){
    this.canvas.parentNode.removeChild(this.canvas);
};

}
if({
    "Apple Computer, Inc.":1,
    "Google Inc.":1
}
[navigator.vendor]){
    b.safari=function(){
        var e=this.rect(-99,-99,this.width+99,this.height+99);
        setTimeout(function(){
            e.remove();
        });
    };

}else{
    b.safari=function(){};

}
var k=(function(){
    if(g.addEventListener){
        return function(ae,R,i,e){
            var ad=function(af){
                return i.call(e,af);
            };

            ae.addEventListener(R,ad,false);
            return function(){
                ae.removeEventListener(R,ad,false);
                return true;
            };

    };

}else{
    if(g.attachEvent){
        return function(af,ad,R,i){
            var ae=function(ag){
                return R.call(i,ag||P.event);
            };

            af.attachEvent("on"+ad,ae);
            var e=function(){
                af.detachEvent("on"+ad,ae);
                return true;
            };

            if(ad=="mouseover"){
                af.attachEvent("onmouseenter",ae);
                return function(){
                    af.detachEvent("onmouseenter",ae);
                    return e();
                };

        }else{
            if(ad=="mouseout"){
                af.attachEvent("onmouseleave",ae);
                return function(){
                    af.detachEvent("onmouseleave",ae);
                    return e();
                };

        }
    }
    return e;
};

}
}
})();
for(var V=y[C];V--;){
    (function(e){
        n[o][e]=function(i){
            if(f.is(i,"function")){
                this.events=this.events||{};

                this.events[e]=this.events[e]||{};

                this.events[e][i]=this.events[e][i]||[];
                this.events[e][i].push(k(this.shape||this.node,e,i,this));
            }
            return this;
        };

        n[o]["un"+e]=function(i){
            this.events&&this.events[e]&&this.events[e][i]&&this.events[e][i][C]&&this.events[e][i].shift()()&&!this.events[e][i][C]&&delete this.events[e][i];
        };

    })(y[V]);
}
b.circle=function(e,R,i){
    return G(this,e||0,R||0,i||0);
};

b.rect=function(e,ae,i,R,ad){
    return M(this,e||0,ae||0,i||0,R||0,ad||0);
};

b.ellipse=function(e,ad,R,i){
    return j(this,e||0,ad||0,R||0,i||0);
};

b.path=function(e){
    e&&!f.is(e,"string")&&!f.is(e[0],"array")&&(e+="");
    return aa(f.format[h](f,arguments),this);
};

b.image=function(ad,e,ae,i,R){
    return q(this,ad||"about:blank",e||0,ae||0,i||0,R||0);
};

b.text=function(e,R,i){
    return L(this,e||0,R||0,i||"");
};

b.set=function(e){
    arguments[C]>1&&(e=Array[o].splice.call(arguments,0,arguments[C]));
    return new l(e);
};

b.setSize=I;
n[o].stop=function(){
    clearTimeout(this.animation_in_progress);
    return this;
};

n[o].scale=function(ao,an,ad,R){
    if(ao==null&&an==null){
        return{
            x:this._.sx,
            y:this._.sy,
            toString:function(){
                return this.x+" "+this.y;
            }
        };

}
an=an||ao;
!+an&&(an=ao);
var at,aq,ar,ap,aF=this.attrs;
if(ao!=0){
    var al=this.getBBox(),ai=al.x+al.width/2,af=al.y+al.height/2,aE=ao/this._.sx,aD=an/this._.sy;
    ad=(+ad||ad==0)?ad:ai;
    R=(+R||R==0)?R:af;
    var ak=~~(ao/Math.abs(ao)),ah=~~(an/Math.abs(an)),aw=this.node.style,aH=ad+(ai-ad)*ak*aE,aG=R+(af-R)*ah*aD;
    switch(this.type){
        case"rect":case"image":
            var aj=aF.width*ak*aE,av=aF.height*ah*aD,am=aF.r*Math.min(aE,aD),ag=aH-aj/2,ae=aG-av/2;
            this.attr({
            width:aj,
            height:av,
            x:ag,
            y:ae,
            r:am
        });
        break;
        case"circle":case"ellipse":
            this.attr({
            rx:aF.rx*aE,
            ry:aF.ry*aD,
            r:aF.r*Math.min(aE,aD),
            cx:aH,
            cy:aG
        });
        break;
        case"path":
            var ay=c(aF.path),az=true;
            for(var aB=0,au=ay[C];aB<au;aB++){
            var ax=ay[aB];
            if(ax[0].toUpperCase()=="M"&&az){
                continue;
            }else{
                az=false;
            }
            if(f.svg&&ax[0].toUpperCase()=="A"){
                ax[ay[aB][C]-2]*=aE;
                ax[ay[aB][C]-1]*=aD;
                ax[1]*=aE;
                ax[2]*=aD;
                ax[5]=+(ak+ah?!!+ax[5]:!+ax[5]);
            }else{
                for(var aA=1,aC=ax[C];aA<aC;aA++){
                    ax[aA]*=(aA%2)?aE:aD;
                }
                }
            }
        var e=H(ay),at=aH-e.x-e.width/2,aq=aG-e.y-e.height/2;
    ay[0][1]+=at;
    ay[0][2]+=aq;
    this.attr({
        path:ay
    });
    break;
}
if(this.type in {
    text:1,
    image:1
}&&(ak!=1||ah!=1)){
    if(this.transformations){
        this.transformations[2]="scale(".concat(ak,",",ah,")");
        this.node.setAttribute("transform",this.transformations.join(" "));
        at=(ak==-1)?-aF.x-(aj||0):aF.x;
        aq=(ah==-1)?-aF.y-(av||0):aF.y;
        this.attr({
            x:at,
            y:aq
        });
        aF.fx=ak-1;
        aF.fy=ah-1;
    }else{
        this.node.filterMatrix=" progid:DXImageTransform.Microsoft.Matrix(M11=".concat(ak,", M12=0, M21=0, M22=",ah,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
        aw.filter=(this.node.filterMatrix||"")+(this.node.filterOpacity||"");
    }
}else{
    if(this.transformations){
        this.transformations[2]="";
        this.node.setAttribute("transform",this.transformations.join(" "));
        aF.fx=0;
        aF.fy=0;
    }else{
        this.node.filterMatrix="";
        aw.filter=(this.node.filterMatrix||"")+(this.node.filterOpacity||"");
    }
}
aF.scale=[ao,an,ad,R].join(" ");
this._.sx=ao;
this._.sy=an;
}
return this;
};

f.easing_formulas={
    linear:function(e){
        return e;
    },
    "<":function(e){
        return Math.pow(e,3);
    },
    ">":function(e){
        return Math.pow(e-1,3)+1;
    },
    "<>":function(e){
        e=e*2;
        if(e<1){
            return Math.pow(e,3)/2;
        }
        e-=2;
        return(Math.pow(e,3)+2)/2;
    },
    backIn:function(i){
        var e=1.70158;
        return i*i*((e+1)*i-e);
    },
    backOut:function(i){
        i=i-1;
        var e=1.70158;
        return i*i*((e+1)*i+e)+1;
    },
    elastic:function(R){
        if(R==0||R==1){
            return R;
        }
        var i=0.3,e=i/4;
        return Math.pow(2,-10*R)*Math.sin((R-e)*(2*Math.PI)/i)+1;
    },
    bounce:function(ad){
        var i=7.5625,R=2.75,e;
        if(ad<(1/R)){
            e=i*ad*ad;
        }else{
            if(ad<(2/R)){
                ad-=(1.5/R);
                e=i*ad*ad+0.75;
            }else{
                if(ad<(2.5/R)){
                    ad-=(2.25/R);
                    e=i*ad*ad+0.9375;
                }else{
                    ad-=(2.625/R);
                    e=i*ad*ad+0.984375;
                }
            }
        }
    return e;
}
};

n[o].animate=function(ax,an,am,ae){
    clearTimeout(this.animation_in_progress);
    if(f.is(am,"function")||!am){
        ae=am||null;
    }
    var aq={},R={},ak={},aj={
        x:0,
        y:0
    };

    for(var ao in ax){
        if(ax.hasOwnProperty(ao)){
            if(ao in x){
                aq[ao]=this.attr(ao);
                (aq[ao]==null)&&(aq[ao]=t[ao]);
                R[ao]=ax[ao];
                switch(x[ao]){
                    case"number":
                        ak[ao]=(R[ao]-aq[ao])/an;
                        break;
                    case"colour":
                        aq[ao]=f.getRGB(aq[ao]);
                        var ap=f.getRGB(R[ao]);
                        ak[ao]={
                        r:(ap.r-aq[ao].r)/an,
                        g:(ap.g-aq[ao].g)/an,
                        b:(ap.b-aq[ao].b)/an
                        };

                    break;
                    case"path":
                        var af=T(aq[ao],R[ao]);
                        aq[ao]=af[0];
                        R[ao]=af[1];
                        ak[ao]=[];
                        for(var at=0,ai=aq[ao][C];at<ai;at++){
                        ak[ao][at]=[0];
                        for(var ar=1,av=aq[ao][at][C];ar<av;ar++){
                            ak[ao][at][ar]=(R[ao][at][ar]-aq[ao][at][ar])/an;
                        }
                        }
                        break;
                case"csv":
                    var e=(ax[ao]+"").split(ac),ah=(aq[ao]+"").split(ac);
                    switch(ao){
                    case"translation":
                        aq[ao]=[0,0];
                        ak[ao]=[e[0]/an,e[1]/an];
                        break;
                    case"rotation":
                        aq[ao]=(ah[1]==e[1]&&ah[2]==e[2])?ah:[0,e[1],e[2]];
                        ak[ao]=[(e[0]-aq[ao][0])/an,0,0];
                        break;
                    case"scale":
                        ax[ao]=e;
                        aq[ao]=(aq[ao]+"").split(ac);
                        ak[ao]=[(e[0]-aq[ao][0])/an,(e[1]-aq[ao][1])/an,0,0];
                        break;
                    case"clip-rect":
                        aq[ao]=(aq[ao]+"").split(ac);
                        ak[ao]=[];
                        var at=4;
                        while(at--){
                        ak[ao][at]=(e[at]-aq[ao][at])/an;
                    }
                    break;
                }
                R[ao]=e;
            }
        }
    }
    }
var ad=+new Date,al=0,aw=function(i){
    return i>255?255:i;
},ag=this;
(function au(){
    var az=new Date-ad,aH={},ay;
    if(az<an){
        var aF=f.easing_formulas[am]?f.easing_formulas[am](az/an):az/an;
        for(var aD in aq){
            if(aq.hasOwnProperty(aD)){
                switch(x[aD]){
                    case"number":
                        ay=+aq[aD]+aF*an*ak[aD];
                        break;
                    case"colour":
                        ay="rgb("+[aw(~~(aq[aD].r+aF*an*ak[aD].r+0.5)),aw(~~(aq[aD].g+aF*an*ak[aD].g+0.5)),aw(~~(aq[aD].b+aF*an*ak[aD].b+0.5))].join(",")+")";
                        break;
                    case"path":
                        ay=[];
                        for(var aB=0,aI=aq[aD][C];aB<aI;aB++){
                        ay[aB]=[aq[aD][aB][0]];
                        for(var aA=1,aC=aq[aD][aB][C];aA<aC;aA++){
                            ay[aB][aA]=+aq[aD][aB][aA]+aF*an*ak[aD][aB][aA];
                        }
                        ay[aB]=ay[aB].join(" ");
                    }
                    ay=ay.join(" ");
                        break;
                    case"csv":
                        switch(aD){
                        case"translation":
                            var aG=ak[aD][0]*(az-al),aE=ak[aD][1]*(az-al);
                            aj.x+=aG;
                            aj.y+=aE;
                            ay=[aG,aE].join(" ");
                            break;
                        case"rotation":
                            ay=+aq[aD][0]+aF*an*ak[aD][0];
                            aq[aD][1]&&(ay+=","+aq[aD][1]+","+aq[aD][2]);
                            break;
                        case"scale":
                            ay=[+aq[aD][0]+aF*an*ak[aD][0],+aq[aD][1]+aF*an*ak[aD][1],(2 in ax[aD]?ax[aD][2]:""),(3 in ax[aD]?ax[aD][3]:"")].join(" ");
                            break;
                        case"clip-rect":
                            ay=[];
                            var aB=4;
                            while(aB--){
                            ay[aB]=+aq[aD][aB]+aF*an*ak[aD][aB];
                        }
                        break;
                    }
                    break;
                }
                aH[aD]=ay;
            }
        }
        ag.attr(aH);
    ag.animation_in_progress=setTimeout(au);
    f.svg&&b.safari();
}else{
    (aj.x||aj.y)&&ag.translate(-aj.x,-aj.y);
    ag.attr(ax);
    clearTimeout(ag.animation_in_progress);
    f.svg&&b.safari();
    (f.is(ae,"function"))&&ae.call(ag);
}
al=az;
})();
return this;
};

n[o].translate=function(e,R){
    if(e==null){
        return{
            x:this._.tx,
            y:this._.ty
            };

}
this._.tx+=+e;
this._.ty+=+R;
switch(this.type){
    case"circle":case"ellipse":
        this.attr({
        cx:+e+this.attrs.cx,
        cy:+R+this.attrs.cy
        });
    break;
    case"rect":case"image":case"text":
        this.attr({
        x:+e+this.attrs.x,
        y:+R+this.attrs.y
        });
    break;
    case"path":
        var i=c(this.attrs.path);
        i[0][1]+=+e;
        i[0][2]+=+R;
        this.attr({
        path:i
    });
    break;
}
return this;
};

n[o].toString=function(){
    return"Rapha\u00ebl\u2019s object";
};

var l=function(e){
    this.items=[];
    this[C]=0;
    if(e){
        for(var R=0,ad=e[C];R<ad;R++){
            if(e[R]&&(e[R].constructor==n||e[R].constructor==l)){
                this[this.items[C]]=this.items[this.items[C]]=e[R];
                this[C]++;
            }
        }
        }
};

l[o].push=function(){
    var ae,e;
    for(var R=0,ad=arguments[C];R<ad;R++){
        ae=arguments[R];
        if(ae&&(ae.constructor==n||ae.constructor==l)){
            e=this.items[C];
            this[e]=this.items[e]=ae;
            this[C]++;
        }
    }
    return this;
};

l[o].pop=function(){
    delete this[this[C]--];
    return this.items.pop();
};

for(var W in n[o]){
    if(n[o].hasOwnProperty(W)){
        l[o][W]=(function(e){
            return function(){
                for(var R=0,ad=this.items[C];R<ad;R++){
                    this.items[R][e][h](this.items[R],arguments);
                }
                return this;
            };

        })(W);
}
}
l[o].attr=function(R,ag){
    if(R&&f.is(R,"array")&&f.is(R[0],"object")){
        for(var e=0,af=R[C];e<af;e++){
            this.items[e].attr(R[e]);
        }
        }else{
    for(var ad=0,ae=this.items[C];ad<ae;ad++){
        this.items[ad].attr[h](this.items[ad],arguments);
    }
    }
    return this;
};

l[o].animate=function(af,R,ai,ah){
    if(f.is(ai,"function")||!ai){
        ah=ai||null;
    }
    var e=this.items[C],ad=e,ag=this;
    if(ah){
        var ae=function(){
            !--e&&ah.call(ag);
        };
        while(ad--){
            this.items[ad].animate(af,R,ai||ae,ae);
        }
    }else{
    while(ad--){
        this.items[ad].animate(af,R,ai);
    }
}
return this;
};

l[o].getBBox=function(){
    var e=[],ag=[],R=[],ae=[];
    for(var ad=this.items[C];ad--;){
        var af=this.items[ad].getBBox();
        e.push(af.x);
        ag.push(af.y);
        R.push(af.x+af.width);
        ae.push(af.y+af.height);
    }
    e=Math.min[h](Math,e);
    ag=Math.min[h](Math,ag);
    return{
        x:e,
        y:ag,
        width:Math.max[h](Math,R)-e,
        height:Math.max[h](Math,ae)-ag
        };

};

f.registerFont=function(i){
    if(!i.face){
        return i;
    }
    this.fonts=this.fonts||{};

    var ad={
        w:i.w,
        face:{},
        glyphs:{}
},R=i.face["font-family"];
for(var ag in i.face){
    if(i.face.hasOwnProperty(ag)){
        ad.face[ag]=i.face[ag];
    }
}
if(this.fonts[R]){
    this.fonts[R].push(ad);
}else{
    this.fonts[R]=[ad];
}
if(!i.svg){
    ad.face["units-per-em"]=P[r](i.face["units-per-em"],10);
    for(var ae in i.glyphs){
        if(i.glyphs.hasOwnProperty(ae)){
            var af=i.glyphs[ae];
            ad.glyphs[ae]={
                w:af.w,
                k:{},
                d:af.d&&"M"+af.d.replace(/[mlcxtrv]/g,function(ah){
                    return{
                        l:"L",
                        c:"C",
                        x:"z",
                        t:"m",
                        r:"l",
                        v:"c"
                    }
                    [ah]||"M";
                })+"z"
                };

            if(af.k){
                for(var e in af.k){
                    if(af.hasOwnProperty(e)){
                        ad.glyphs[ae].k[e]=af.k[e];
                    }
                }
                }
            }
    }
}
return i;
};

b.getFont=function(ai,aj,R,ae){
    ae=ae||"normal";
    R=R||"normal";
    aj=+aj||{
        normal:400,
        bold:700,
        lighter:300,
        bolder:800
    }
    [aj]||400;
    var af=f.fonts[ai];
    if(!af){
        var ad=new RegExp("(^|\\s)"+ai.replace(/[^\w\d\s+!~.:_-]/g,"")+"(\\s|$)","i");
        for(var e in f.fonts){
            if(f.fonts.hasOwnProperty(e)){
                if(ad.test(e)){
                    af=f.fonts[e];
                    break;
                }
            }
        }
        }
    var ag;
if(af){
    for(var ah=0,ak=af[C];ah<ak;ah++){
        ag=af[ah];
        if(ag.face["font-weight"]==aj&&(ag.face["font-style"]==R||!ag.face["font-style"])&&ag.face["font-stretch"]==ae){
            break;
        }
    }
    }
return ag;
};

b.print=function(ak,aj,ah,R,ao){
    var af=this.set(),ai=(ah+"").split(""),e=0,an="",ae;
    f.is(R,"string")&&(R=this.getFont(R));
    if(R){
        ae=(ao||16)/R.face["units-per-em"];
        for(var ag=0,al=ai[C];ag<al;ag++){
            var ad=ag&&R.glyphs[ai[ag-1]]||{},am=R.glyphs[ai[ag]];
            e+=ag?(ad.w||R.w)+(ad.k&&ad.k[ai[ag]]||0):0;
            am&&am.d&&af.push(this.path(am.d).attr({
                fill:"#000",
                stroke:"none",
                translation:[e,0]
                }));
        }
        af.scale(ae,ae,0,aj).translate(ak,(ao||16)/2);
    }
    return af;
};

f.format=function(i){
    var e=f.is(arguments[1],"array")?[0].concat(arguments[1]):arguments;
    i&&f.is(i,"string")&&e[C]-1&&(i=i.replace(/\{(\d+)\}/g,function(ad,R){
        return e[++R]==null?"":e[R];
    }));
    return i||"";
};

f.ninja=function(){
    var R=window.Raphael,i;
    if(U.was){
        window.Raphael=U.is;
    }else{
        try{
            delete window.Raphael;
        }catch(ad){
            window.Raphael=i;
        }
    }
    return R;
};

f.el=n[o];
return f;
})();
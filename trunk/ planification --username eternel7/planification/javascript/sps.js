// JavaScript Document

var particle_types = new Array("img/img1.png","img/img2.png","img/img3.png","img/img4.png","img/img5.png");
var current_type = particle_types[0];
function Vector()
{
    this.x =0;
    this.y =0;
    //this.z =0;   
    this.set = function(X,Y)
    {
        with(this)
        {
            x = X;
            y =Y;
            //z = Z;
		
            }
    }
    this.add = function(vector2)
    {
		
		
		
        this.x = this.x + vector2.x + 0.3;
        this.y = this.y + vector2.y + 0.2;
    //this.z = this.z + vector2.z;
		
		
    }
}


var canvas;  // our raphael object
var timer; 
var emitter = new Vector();
emitter.set(0,100);

function Particle()
{
    this.size = Math.random() * 30 + 50;
    this.particle =  canvas.image("img/img1.png",emitter.x,emitter.y,this.size,this.size);
    this.loc = new Vector();
    this.vel = new Vector();
    this.acc = new Vector();
    this.lifespan = Math.random() * 50 + 50;
    this.init = function(l){
        with(this)
        {
            particle.rotate(Math.random()*360);
            acc.set(0,0.0);
            vel.set(Math.random() * 9 - 4 ,Math.random() * 3 -5 );
            loc.set(l.x,l.y);
            particle.attr({
                opacity:Math.random()
                });
            }
    }
    this.update = function(){
        with(this)
        {
            vel.add(acc);
            loc.add(vel);
            lifespan -= 1;
            particle.animate({
                x:loc.x,
                y:loc.y
                },49);
            }
    }	
    this.dead = function()
    {
        if(this.lifespan<0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}


function ParticleSystem()
{
    this.particles = new Array();
    this.origin = new Vector();
    this.init = function(num,g)
    {	
        this.origin.set(g.x,g.y);
        for (var i = 0; i < num; i++)
        {
            this.particles[i] = new Particle(particle_types[5]);
            this.particles[i].init(this.origin);
        }	
    }
    this.run = function(){
        with(this){
            t = setInterval(function(){
                for (i=particles.length -1; i>=0; i--)
                {
                    if(particles[i].dead()) {
                        particles[particles.length -1].particle.remove();
                        particles.pop();
                        var j = Math.ceil(Math.random()*5);
                        var temp = new Particle(particle_types[j]);
                        var iniVec = new Vector();
                        iniVec.set(0,100);
                        temp.init(iniVec);
                        particles.unshift(temp);
                    }
                    particles[i].update();
                }
            },50);
            }
    }		
}



startSystem = function(){
    W = $(window).width();
    H = $(window).height();
    canvas = Raphael("pane", W, H);
    var ps = new ParticleSystem();
    var iniVec = new Vector();
    iniVec.set(0,100);
    ps.init(15,iniVec);
    ps.run();
   
  
    
}



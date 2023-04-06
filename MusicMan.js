(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MusicMan_atlas_1", frames: [[0,0,200,200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.soundsopsign = function() {
	this.initialize(ss["MusicMan_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Torso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B7A5B").s().p("EgNFAjGQhR8iBtyeQBtyfD+i4QD9i4C5BUQC3BVCLFEQCLFFBRLBMAFSAucQqKBKpoAAQjgAAjbgKg");
	this.shape.setTransform(88.8756,137.3623);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-88.2,174.4,451.2);


(lib.soundStopSign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.soundsopsign();
	this.instance.setTransform(0,0,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2565,scaleY:0.2565,x:-4,y:-4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,51.3,51.3);


(lib.Sneaker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AsaDPQAChkANgKITwgpQAtjIBOg5IABgBQCVAzAZCaIAMBOQAKCCjfAQQktATmkAXIobAfIgQAAQhmAAAChdgAq2hiQgigjAAgxQAAgxAigiQAjgiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgjgigABWhqQgOgGgJgOQgJgOABgPQAAgGAEgTIAPguIB6AAQgWA0gRAiQgIAPgHAHQgLALgPADIgMABQgJAAgJgDgAEahzQgLgFgIgLQgHgLgCgNQgCgQAIgZIAKgeIB1AAQgMAhgQAjQgMAegQALQgLAHgNABIgCAAQgMAAgLgGgAhnh4QgSgJgHgSQgJgVAJgbIAJgWIAEgJIB1AAIgRAyQgKAXgJAMQgNASgSAFQgIADgIAAQgLAAgLgFg");
	this.shape.setTransform(61.931,50.8877);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.976)").s().p("ArJkkILFAAIhEEFIA+AAIgEAJIgJAWQgIAaAIAVQAHASASAJQASAIATgGQASgFAOgSQAIgMAKgXIASgxIBIAAIgOAtQgFATAAAGQAAAPAIAOQAJAOAOAGQAOAGAQgDQAQgDALgMQAHgHAHgPQASgiAWgzIBJAAIgKAfQgHAYACAPQABANAIALQAHALAMAGQALAFANAAQAOgBAKgHQAQgKANgfQAPgjANggIAfAAQBwgCBOAbIAAAAQhOA5guDJIzwAoQAFk4gskQgApMhGQgjAjAAAvQAAAxAjAjQAjAjAwgBQAxABAigjQAjgjAAgxQAAgvgjgjQgigigxAAQgwAAgjAig");
	this.shape_1.setTransform(51.3875,31.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-4.6,161.5,85.6);


(lib.Pelvis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnEEZQi+j6gLoiIUagTQAPI1i+D6QjBD+kQAAQkQAAjBj+g");
	this.shape.setTransform(70.8085,53.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,0,130.79999999999998,107.1);


(lib.notes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFLWYQgogTgogvQgogwgTgyQgnhnBChnQBChnCahMQB/g9CMgdQCMgeC/gFQBTgCAfgEQAegEgBgHIgljGQgii7g5lIQjLyhgPgPQgBgEhCAVQhgAdhmALQhoAKiZgEQingEiVgVQiSgUkzg9Qkig6gDADQgGAFBEDxQBDDuBwFyQBQEFBCDsQBEDzAgCPQAwDNgFBtQgEBtg/B7QhZCwiiBcQihBcjGgNQjsgRiAiHQhkhqAsh1QArh0CshVQBsg1B+gYQB/gZCiAAQBXAAATgDQAVgCAAgMQAAgSgUiBQggjVgzjnQgxjeiEoaIicqAQgKg0gHgWQgEgOAMgCQANgBA+AFICEANQBmAMBaAMQG/A5DhAPQDgAPCPgQQCCgQBfgjQBggjAtgwQAMgMAJgGQAJgGABADQAEAOBxKOIDKSCQA+FnALBKQAKBPgJArQgXB7huBvQg6A8hBAuQg/AthWArQinBTijAYQg5AIgxAAQhcAAg/gdg");
	this.shape.setTransform(8.8576,41.8556,0.0665,0.0665);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AxKcZQhjgLg/g6QgSgRgXggQgZgigPgdQgdg1gFgXQgFgXAAhJQAAhEAFgZQAEgYAUgmQAagyBDhDQBDhDA6giQBqg/CPgtQCOguCigWQBrgPACgDQADgFgQhpQgRhpgThhQggieg8joQg9juhMkGIi9qUQg3i9hBjoIgYhcIAzgGQAXgDCPgEQCcgGCtgDQCsgECvgGQChgGAzgEQEagaCug4QCug4BfhgQAXgZAVgUQATgSADgBQACgBAYBjQAZBkAfCKIEWSyQDJNkAFA9QALB+hACPQhBCPh6B6QhuBriOBVQiHBRiHAsQiHArhlgEQhrgFgsg6QiBiqBJi/QBIi/D7iXQBzhGCgg1QCgg2CZgSQBZgLAHgDQADgCgoifQgchxhJkxQg7j7hVldQhZlpgDgDQgDgDhnAtQiDA6hzAhQh0AhiaAXQhXANhgAJQhXAIj2AUQiQALhnAMQhiALAAAGQAAAHAxCkQAyCmA9DGQB3GEArC3QAsC7ANCuQAQDTgyC8QgxC7hwCTQikDWjuBNQhWAchMAAQgWAAgVgCgAJw1OQikBRi9AeQi9AfmuAQQjEAHh+AKQh9AKgJAIQgEAEAcBsQAbBrAHAJQAGAGBlgOQBigPElgZQFOgeCRgVQCUgXCLgqQBAgUBogpQBogpAKgKQABgCgKgcQgKgdgPgkQgmhdgFgBIgBAAQgJAAhZAsg");
	this.shape_1.setTransform(29.9526,38.4919,0.0665,0.0665);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AoYa0Qhug2g/hMQhBhOAAhXQABjSE1iHQE1iHHhgBIB+AAIgYiTQgYiYgiilQgiigg4jnQgwjFgviwQgpiaiAnTQhml5gwjBIg3jcQgDgJAJgGQAJgGAYgHQArgKAdgkQAMgOAMgKQALgLAEAAQAKgBBAA4QBrBdBBAuQBBAtBnA1IBeAwQAhATAKARQAJARgDAiIgNBeQgGApgGAdQgHAcgEAAQgWAAg7gyQg9gziGiFQhVhUg5g0Qg6g1ACAIIAbBkQAfB0BGDbQBFDaCsIJQCrIJBVErQBKECAeCCQAjCaADBiQACBhgdBWQgYBIhABuQgqBIhaBaQhbBahIAoQhOAshhAeQhhAehhALQg/AHg8AAQjdAAi8hdg");
	this.shape_2.setTransform(50.4809,32.303,0.0665,0.0665);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EgF7AhrQiggyhthxQhuhxgLh/QgOiTB2iJQB2iKDShRQCKg1CVgZQCUgZC7gBICsAAIgFgoQg7nNhPmVQhQmYjwwuQhVl8gujgQgujjAFgOQACgGAIgEQAIgFAIAAQAJAAAUgOQASgNAVgWIAjgjQAQgPADAAQAFgBCLCJQBbBcAuAlQAuAlBaA2ICHBRIAAA2QgBApgMBpQgMBpgEAFQgHAHgigYQgigYgggiQgxgziKisIiYi5QgdgjgEAAQgMAABmGPQBmGNDELPQBkFwBaFuQBZFqA6ERQAWBwAGA0QAFA1AAB7QgBCHgEAiQgFAjgYBCQg1CPhABqQhBBrhVBUQigCgjmA0QhfAWhgAAQiHAAiGgsg");
	this.shape_3.setTransform(65.8246,23.7921,0.0665,0.0665);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgHEAmQQhWgphKhJQhJhJgqhUQgZg0gHgcQgIgdgDg6QgFhwAlhaQAlhaBXhbQBghkCOhHQCNhGCvglQA8gMBAgGQBFgGBygCIDOgFIgIhSQgklvhXoMQhYoOidsZQiWr8hFmCIgtj9QgDgMADgFQACgFAJAAQAXAAAggZQAggZAVgjQAMgTALgMQAKgNADABQAEABAaAeQAbAhAgAnQBgB0BAA9QBAA+BRA4QBeA/AoAiIAjAeIgRCGQgRCMAAAgQAAAfgHADQgHADgdgTQgegUgtg5Qgug4hZiAQhkiRhChaQhAhWgDAEQgIAHBOFkQBNFhB8IOQDFM/BgG2QBgG4A/FjQAZCNAGA9QAGA/AAB9QAACTgIA4QgJA5grB/QhADBh0CgQhzCfiEBQQiqBli/AIIgeAAQiwAAiphQg");
	this.shape_4.setTransform(79.9116,16.8181,0.0665,0.0665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:0.0665,scaleY:0.0665,x:79.9116,y:16.8181}},{t:this.shape_3,p:{scaleX:0.0665,scaleY:0.0665,x:65.8246,y:23.7921}},{t:this.shape_2,p:{scaleX:0.0665,scaleY:0.0665,x:50.4809,y:32.303}},{t:this.shape_1,p:{scaleX:0.0665,scaleY:0.0665,x:29.9526,y:38.4919}},{t:this.shape,p:{scaleX:0.0665,scaleY:0.0665,x:8.8576,y:41.8556}}]}).to({state:[{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,x:91.1521,y:14.1566}},{t:this.shape_3,p:{scaleX:0.0864,scaleY:0.0864,x:72.8448,y:23.2199}},{t:this.shape_2,p:{scaleX:0.0864,scaleY:0.0864,x:52.9043,y:34.2805}},{t:this.shape_1,p:{scaleX:0.0864,scaleY:0.0864,x:26.226,y:42.3235}},{t:this.shape,p:{scaleX:0.0864,scaleY:0.0864,x:-1.1888,y:46.695}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-7.7,110.60000000000001,67);


(lib.Neck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3A54E").s().p("AiiB4IAij4QAIg8AxglQAwglA7AIQA7AIAlAwQAlAwgIA8IguFaIgPAAQh4AAiOiIg");
	this.shape.setTransform(5.0696,11.0151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD583").s().p("AgcDTQg8gIglgwQgkgxAHg7IAhkCQCWCRB/gJIgVCgQgIA8gwAlQgnAegvAAIgVgBg");
	this.shape_1.setTransform(0.9554,44.2102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-14.6,36,80.1);


(lib.Legthigh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AAAeYQhnAAhJhKQhKhJABhoMAAAg05QgBhoBKhJQBJhKBnABQBogBBJBKQBKBJgBBoMAAAA05QABBohKBJQhJBKhoAAIAAAAg");
	this.shape.setTransform(0,169.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50.1,388.7);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD583").s().p("AgtCNQhCg6gIhOQgJhQA7gzQAsgkA6ARQBFAVATBcIiOC3g");
	this.shape.setTransform(30.4157,82.1786);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#893810").s().p("AySgfQgXoaK7i1QK6i1HUGMQHUGMAfgFQtoIAq6jKIAAErIi1AAQgzCOjrDJQkYktgYoag");
	this.shape_1.setTransform(91.5997,32.3932);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgeBCQgRgYgEglQgEgkANgcQAMgbAVgCQAVgCASAYQASAZAEAlQADAkgMAbQgNAcgWACIgDAAQgSAAgRgXg");
	this.shape_2.setTransform(149.1148,63.2249);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD582").s().p("AhDCQQg7AAgagxQgagwAGg9QAFg+AVgiQAUgiA7ABIBjAAQA7gBAqArQApAqAAA7QAAA7gpArQgqAqg7AAg");
	this.shape_3.setTransform(170.477,86.7246);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3A54E").s().p("AokAdIAAhdIPIhbQA7A7BHCSQjbBqkFAAQkcAAlOh/g");
	this.shape_4.setTransform(101.35,44.5272);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD583").s().p("Ao9I+QjujuAAlQQAAlPDujuQDujuFPAAQFRAADuDuQDtDuAAFPQAAFQjtDuQjuDulRAAQlPAAjujug");
	this.shape_5.setTransform(81.2,81.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-48.3,234.3,210.7);


(lib.Hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD583").ss(12,1,1).p("ADDi0ImDBPAAdC1Qi3gjgogvAC2AAIk8AM");
	this.shape.setTransform(38.325,22.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFD583").ss(12,1,1).p("ACLiIIkVER");
	this.shape_1.setTransform(17.375,4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD583").s().p("AiFCGQg4g3AAhPQAAhOA4g3QA3g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg3g4g");
	this.shape_2.setTransform(18.975,18.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-15,66.3,61.5);


(lib.Cuff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3097FF").s().p("Aljj7ILFgEIABH6IrEAFg");
	this.shape.setTransform(35.55,25.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.1,51.1);


(lib.Arm_upper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#528462").s().p("AqkYsQhIgfgdhIQgdhIAehJMAS2gr8QAfhHBIgeQBIgdBIAfQBIAfAdBIQAdBIgeBIMgS2Ar9QgfBHhIAeQgjAOgkAAQgkAAglgQg");
	this.shape.setTransform(-59.45,140.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-21,159.79999999999998,321.3);


(lib.Arm_fore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55C98A").s().p("AklAWIBqj1IHhDSIhmDtg");
	this.shape.setTransform(-98.775,233.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#528462").s().p("AopUKQhIgfgdhIQgdhJAfhHMAO/gi6QAfhHBJgdQBIgdBIAfQBHAfAdBIQAdBJgfBHMgO/Ai6QgfBHhIAdQgjAOgjAAQglAAglgQg");
	this.shape_1.setTransform(-47.1,111.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.1,-21,149.2,276.6);


(lib.Ankle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXIhQhQgXgphJQgphJAWhQIDDq8QAXhQBJgpQBHgqBRAXQBQAXApBJQApBJgWBQIjDK8QgXBQhJApQguAbgyAAQgbAAgdgIg");
	this.shape.setTransform(9.725,35.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-20.2,59.900000000000006,110.60000000000001);


(lib.Leglower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Cuff("synched",0);
	this.instance.setTransform(-1.65,276.65,1,1,0,0,0,35.6,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AgJYUQhngBhJhKQhJhKAAhnMAARgoyQABhoBJhJQBLhJBmABQBnABBJBJQBJBLAABnMgARAoyQgBBohKBJQhJBIhlAAIgCAAg");
	this.shape.setTransform(-0.825,130.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-25,71.1,327.2);


(lib.Walkcycle_Nested = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.head("single",0);
	this.instance.setTransform(614.55,106.05,0.3988,0.3988,-12.0911,0,0,59,156.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:58.7,rotation:-8.3003,x:614.35,y:111.75},0).wait(1).to({regX:58.8,scaleX:0.3989,scaleY:0.3989,rotation:-4.764,x:614.4,y:117.6},0).wait(1).to({regX:59.1,rotation:-1.0455,x:614.5,y:123.4},0).wait(1).to({regX:59,regY:156.9,scaleX:0.3991,scaleY:0.3991,rotation:2.4103,x:614.25,y:129.15},0).wait(1).to({regX:58.9,scaleX:0.399,scaleY:0.399,rotation:3.7167,x:614.15,y:123.4},0).wait(1).to({regX:59,regY:156.8,scaleX:0.3988,scaleY:0.3988,rotation:4.758,x:614.05,y:117.85},0).wait(1).to({regX:59.1,rotation:5.7597,x:613.85,y:112},0).wait(1).to({regX:59,scaleX:0.3985,scaleY:0.3985,rotation:7.5465,x:613.6,y:102.2},0).wait(1).to({scaleX:0.3984,scaleY:0.3984,rotation:9.0449,x:613.3,y:95.05},0).wait(1).to({regX:59.1,regY:156.6,rotation:9.7849,x:613.15,y:90.85},0).wait(1).to({regY:156.8,scaleX:0.3988,scaleY:0.3988,rotation:10.1288,y:89.3},0).wait(1).to({regX:58.9,scaleX:0.3984,scaleY:0.3984,rotation:9.0247,x:613,y:90.55},0).wait(1).to({regY:157,scaleX:0.3983,scaleY:0.3983,rotation:5.7715,x:612.8,y:93.9},0).wait(1).to({regX:59.1,rotation:0.2876,x:612.45,y:99.45},0).wait(1).to({regX:59,regY:156.8,scaleX:0.3982,scaleY:0.3982,rotation:-7.2339,x:611.75,y:107.05},0).wait(1).to({regX:58.5,regY:156.9,scaleX:0.3979,scaleY:0.3979,rotation:-16.8764,x:610.85,y:117},0).wait(1).to({regY:157,scaleX:0.3981,scaleY:0.3981,rotation:-6.2012,x:612,y:105},0).wait(1).to({regX:58.4,regY:156.7,scaleX:0.398,scaleY:0.398,rotation:1.5553,x:612.65,y:96.25},0).wait(1).to({regX:58.5,regY:157.1,rotation:6.2907,x:613.1,y:91.1},0).wait(1).to({regX:58.8,regY:156.7,scaleX:0.3984,scaleY:0.3984,rotation:7.9414,x:613.25,y:89.45},0).wait(1).to({regX:58.6,regY:156.6,scaleX:0.3981,scaleY:0.3981,rotation:3.5054,x:613.4,y:92.85},0).wait(1).to({regX:58.8,regY:156.9,rotation:-1.2144,x:613.45,y:96.35},0).wait(1).to({regX:58.6,regY:156.5,scaleX:0.3982,scaleY:0.3982,rotation:-5.5146,x:613.6,y:99.55},0).wait(1).to({regY:156.8,scaleX:0.3983,scaleY:0.3983,rotation:-10.1462,x:614,y:102.9},0).wait(1));

	// Neck
	this.instance_1 = new lib.Neck("synched",0);
	this.instance_1.setTransform(614.1,117.65,0.3992,0.3992,-7.0221,0,0,-0.1,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.1,scaleX:0.3989,scaleY:0.3989,rotation:-3.753,x:613.4,y:123.4},0).wait(1).to({scaleX:0.399,scaleY:0.399,rotation:-0.504,x:612.75,y:129.1},0).wait(1).to({rotation:2.7441,x:612.05,y:134.8},0).wait(1).to({regX:0,regY:52.2,scaleX:0.3992,scaleY:0.3992,rotation:5.9218,x:611.3,y:140.45},0).wait(1).to({scaleX:0.399,scaleY:0.399,rotation:3.9737,x:611.6,y:134.85},0).wait(1).to({regX:0.1,regY:52.1,scaleX:0.3989,scaleY:0.3989,rotation:1.9533,x:611.85,y:129.25},0).wait(1).to({regX:0.4,regY:52.2,scaleX:0.399,scaleY:0.399,rotation:-0.2783,x:612.15,y:123.6},0).wait(1).to({regX:0.2,regY:52,scaleX:0.3988,scaleY:0.3988,rotation:-3.9958,x:612.65,y:113.6},0).wait(1).to({regX:0.5,regY:52.1,rotation:-6.5346,x:612.95,y:106.55},0).wait(1).to({regX:0.6,regY:52.3,rotation:-8.2482,x:613.25,y:102.35},0).wait(1).to({regX:0.1,regY:52,scaleX:0.3992,scaleY:0.3992,rotation:-8.7623,x:613.15,y:100.95},0).wait(1).to({regX:0.2,scaleX:0.3988,scaleY:0.3988,rotation:-8.7558,x:613.1,y:102.1},0).wait(1).to({scaleX:0.3987,scaleY:0.3987,rotation:-8.7575,x:612.85,y:105.4},0).wait(1).to({regX:0.4,scaleX:0.3986,scaleY:0.3986,rotation:-8.7592,x:612.5,y:110.95},0).wait(1).to({regX:0.1,scaleX:0.3985,scaleY:0.3985,rotation:-8.7618,x:611.7,y:118.6},0).wait(1).to({regX:0.2,regY:52.2,scaleX:0.3987,scaleY:0.3987,rotation:-8.7723,x:610.85,y:128.45},0).wait(1).to({regX:0.4,regY:52.1,scaleX:0.3985,scaleY:0.3985,rotation:-8.7615,x:611.95,y:116.45},0).wait(1).to({regX:0.6,scaleX:0.3986,scaleY:0.3986,rotation:-8.7588,x:612.65,y:107.7},0).wait(1).to({regX:0.5,scaleX:0.3987,scaleY:0.3987,rotation:-8.7568,x:613.05,y:102.55},0).wait(1).to({regX:0.1,scaleX:0.3991,scaleY:0.3991,rotation:-8.7655,x:613.15,y:100.95},0).wait(1).to({regX:0.3,regY:52,scaleX:0.3987,scaleY:0.3987,rotation:-8.2898,x:613.4,y:104.35},0).wait(1).to({regX:0.6,scaleX:0.3986,scaleY:0.3986,rotation:-8.0125,x:613.55,y:107.6},0).wait(1).to({regX:0.2,regY:51.9,scaleX:0.3985,scaleY:0.3985,rotation:-7.5465,y:111},0).wait(1).to({regY:52,scaleX:0.3988,scaleY:0.3988,rotation:-7.2874,x:613.75,y:114.35},0).wait(1));

	// Arm_fore
	this.instance_2 = new lib.Arm_fore("single",0);
	this.instance_2.setTransform(494.6,195.35,0.3983,0.3983,4.9778,0,0,-2.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-2.1,regY:2.6,scaleX:0.398,scaleY:0.398,rotation:11.499,x:502.1,y:213},0).wait(1).to({regX:-2.3,scaleX:0.3984,scaleY:0.3984,rotation:18.2212,x:510.5,y:229.4},0).wait(1).to({regX:-2.1,scaleX:0.3985,scaleY:0.3985,rotation:24.3263,x:520.5,y:244.8},0).wait(1).to({regX:-1.8,regY:2.4,scaleX:0.3988,scaleY:0.3988,rotation:30.8908,x:531.5,y:259.05},0).wait(1).to({regX:-2,regY:2.5,scaleX:0.3976,scaleY:0.3976,rotation:8.0455,x:583.9,y:271.4},0).wait(1).to({regX:-1.9,regY:2.4,scaleX:0.3973,scaleY:0.3973,rotation:-14.8492,x:639.25,y:259.25},0).wait(1).to({regX:-2.1,regY:2.5,scaleX:0.398,scaleY:0.398,rotation:-38.1222,x:686.5,y:223.4},0).wait(1).to({regX:-2.2,regY:2.6,scaleX:0.3983,scaleY:0.3983,rotation:-71.9212,x:702.8,y:193.7},0).wait(1).to({regX:-2.6,regY:2.5,scaleX:0.3984,scaleY:0.3984,rotation:-95.7685,x:711.7,y:170.55},0).wait(1).to({regX:-2.4,regY:2.6,scaleX:0.3982,scaleY:0.3982,rotation:-110.0696,x:715.85,y:156.1},0).wait(1).to({regX:-2,regY:2.4,scaleX:0.3985,scaleY:0.3985,rotation:-115.0894,x:717.05,y:150.95},0).wait(1).to({regX:-2.2,scaleX:0.398,scaleY:0.398,rotation:-115.7959,x:715.45,y:156.8},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,rotation:-118.0627,x:709.65,y:173.45},0).wait(1).to({scaleX:0.3976,scaleY:0.3976,rotation:-122.0888,x:696.85,y:199.25},0).wait(1).to({regY:2.1,scaleX:0.3971,scaleY:0.3971,rotation:-127.3768,x:672.15,y:230.9},0).wait(1).to({regX:-2.6,regY:2.5,scaleX:0.3969,scaleY:0.3969,rotation:-133.9204,x:632.6,y:260.3},0).wait(1).to({regX:-2.8,regY:2.6,scaleX:0.3974,scaleY:0.3974,rotation:-89.2541,x:564.3,y:249.1},0).wait(1).to({regX:-2.6,regY:2.7,scaleX:0.3977,scaleY:0.3977,rotation:-57.8949,x:521.15,y:217.8},0).wait(1).to({regX:-2.5,regY:2.4,scaleX:0.3975,scaleY:0.3975,rotation:-38.6474,x:500.7,y:190.7},0).wait(1).to({regX:-2,regY:2.6,scaleX:0.3979,scaleY:0.3979,rotation:-32.1738,x:495.1,y:180.65},0).wait(1).to({regX:-2.2,regY:2.5,scaleX:0.3973,scaleY:0.3973,rotation:-26.3604,x:492.6,y:179.95},0).wait(1).to({regX:-2.1,regY:2.6,scaleX:0.3972,scaleY:0.3972,rotation:-20.5746,x:490.4,y:179.15},0).wait(1).to({regX:-2.2,regY:2.4,scaleX:0.3971,scaleY:0.3971,rotation:-14.5473,x:488.1,y:177.6},0).wait(1).to({scaleX:0.3976,scaleY:0.3976,rotation:-8.5835,x:486.45,y:176.75},0).wait(1));

	// Arm_upper
	this.instance_3 = new lib.Arm_upper("synched",0);
	this.instance_3.setTransform(600.05,131.95,0.3991,0.3991,36.1475,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-0.7,regY:-0.4,scaleX:0.3987,scaleY:0.3987,rotation:29.3434,x:599.45,y:137.6},0).wait(1).to({regX:-0.6,regY:-0.3,scaleX:0.3988,scaleY:0.3988,rotation:22.7841,x:598.75,y:143.35},0).wait(1).to({regY:-0.2,scaleX:0.399,scaleY:0.399,rotation:16.0456,x:597.95,y:149.05},0).wait(1).to({regY:-0.3,scaleX:0.3992,scaleY:0.3992,rotation:9.4548,x:597.25,y:154.7},0).wait(1).to({regX:-0.4,regY:-0.4,scaleX:0.3984,scaleY:0.3984,rotation:-16.5471,x:597.55,y:149.05},0).wait(1).to({regX:-0.6,scaleX:0.398,scaleY:0.398,rotation:-42.651,x:597.7,y:143.5},0).wait(1).to({regX:-0.1,scaleX:0.3985,scaleY:0.3985,rotation:-68.758,x:598.1,y:137.8},0).wait(1).to({regX:-0.2,regY:-0.5,scaleX:0.3987,scaleY:0.3987,rotation:-80.7349,x:598.5,y:127.9},0).wait(1).to({regY:-0.4,scaleX:0.3988,scaleY:0.3988,rotation:-89.2436,x:598.8,y:120.8},0).wait(1).to({regX:-0.4,regY:-0.6,rotation:-94.2768,x:598.95,y:116.6},0).wait(1).to({regX:-0.6,regY:-0.2,scaleX:0.3991,scaleY:0.3991,rotation:-96.0985,x:599.15,y:115.25},0).wait(1).to({regX:-0.5,regY:0.1,scaleX:0.3988,scaleY:0.3988,rotation:-93.7689,x:599.1,y:116.3},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:0.3989,scaleY:0.3989,rotation:-87.0156,x:598.8,y:119.55},0).wait(1).to({regX:-0.5,scaleX:0.3987,scaleY:0.3987,rotation:-75.9563,x:598.35,y:125.2},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,rotation:-60.1873,x:597.75,y:132.85},0).wait(1).to({regX:-0.2,scaleX:0.3984,scaleY:0.3984,rotation:-39.9039,x:597,y:142.6},0).wait(1).to({regY:0.1,rotation:-7.0406,x:598,y:130.65},0).wait(1).to({regX:-0.4,scaleX:0.3988,scaleY:0.3988,rotation:16.0707,x:598.65,y:122.05},0).wait(1).to({regY:-0.1,scaleX:0.3986,scaleY:0.3986,rotation:30.1064,x:598.95,y:116.8},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.3991,scaleY:0.3991,rotation:34.9423,x:599.25,y:115.2},0).wait(1).to({regX:-0.4,scaleX:0.3984,scaleY:0.3984,rotation:37.11,x:599.3,y:118.55},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,rotation:39.3699,x:599.45,y:122},0).wait(1).to({regX:-0.1,scaleX:0.3981,scaleY:0.3981,rotation:41.8196,x:599.65,y:125.3},0).wait(1).to({regX:-0.2,regY:-0.5,scaleX:0.3986,scaleY:0.3986,rotation:44.0492,x:599.85,y:128.55},0).wait(1));

	// Hand
	this.instance_4 = new lib.Hand("synched",0);
	this.instance_4.setTransform(445.25,289,0.3994,0.3994,121.6887,0,0,19.5,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:19.6,scaleX:0.3987,scaleY:0.3987,rotation:128.1413,x:442.4,y:300.3},0).wait(1).to({scaleX:0.3986,scaleY:0.3986,rotation:134.8961,x:440.95,y:309.25},0).wait(1).to({regX:19.7,scaleX:0.3985,scaleY:0.3985,rotation:141.1226,x:442.9,y:316.75},0).wait(1).to({regX:19.4,regY:18.4,scaleX:0.3989,scaleY:0.3989,rotation:147.7166,x:445.95,y:321.6},0).wait(1).to({scaleX:0.3986,scaleY:0.3986,rotation:124.8332,x:529.65,y:361.9},0).wait(1).to({regX:19.6,regY:18.3,scaleX:0.3983,scaleY:0.3983,rotation:102.0229,x:624.35,y:363.8},0).wait(1).to({regX:19.7,regY:18.4,rotation:78.7206,x:714.35,y:325.45},0).wait(1).to({regX:19.6,rotation:44.8525,x:782.7,y:263},0).wait(1).to({regX:19.4,scaleX:0.3987,scaleY:0.3987,rotation:21.0591,x:812.7,y:201.4},0).wait(1).to({regX:19.9,scaleX:0.3985,scaleY:0.3985,rotation:6.7794,x:821.45,y:161.2},0).wait(1).to({regX:19.4,scaleX:0.399,scaleY:0.399,rotation:1.8233,x:822.8,y:146.9},0).wait(1).to({regX:19.8,regY:18.5,scaleX:0.3984,scaleY:0.3984,rotation:1.0204,x:821.1,y:151.35},0).wait(1).to({regX:19.4,scaleX:0.3982,scaleY:0.3982,rotation:-1.2383,x:814.85,y:163.8},0).wait(1).to({regX:19.6,regY:18.7,scaleX:0.3979,scaleY:0.3979,rotation:-5.2561,x:801.2,y:182.25},0).wait(1).to({regX:19.4,regY:18.4,scaleX:0.3975,scaleY:0.3975,rotation:-10.5387,x:774.45,y:204.3},0).wait(1).to({regX:19.7,regY:18.6,scaleX:0.3976,scaleY:0.3976,rotation:-17.0573,x:731.05,y:222.15},0).wait(1).to({regX:19.9,scaleX:0.398,scaleY:0.398,rotation:27.3745,x:661.2,y:291.2},0).wait(1).to({regX:19.8,regY:18.7,scaleX:0.3977,scaleY:0.3977,rotation:58.8983,x:582,y:304.25},0).wait(1).to({regX:19.7,regY:18.4,scaleX:0.3978,scaleY:0.3978,rotation:78.2151,x:529.75,y:292.4},0).wait(1).to({regX:19.4,regY:18.2,scaleX:0.3985,scaleY:0.3985,rotation:84.8016,x:512.3,y:285.05},0).wait(1).to({regX:19.5,regY:18.3,scaleX:0.3979,scaleY:0.3979,rotation:90.4901,x:499.2,y:285.35},0).wait(1).to({regY:18.1,scaleX:0.3978,scaleY:0.3978,rotation:96.0555,x:486.4,y:284.65},0).wait(1).to({regX:19.6,regY:18.4,scaleX:0.3977,scaleY:0.3977,rotation:102.0515,x:472.95,y:282.1},0).wait(1).to({regX:19.8,regY:18.5,scaleX:0.3982,scaleY:0.3982,rotation:108.0545,x:460.5,y:279.15},0).wait(1));

	// Sneaker
	this.instance_5 = new lib.Sneaker("single",0);
	this.instance_5.setTransform(706.35,546.65,0.3976,0.3976,-32.2799,0,0,17.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:17.7,regY:2.9,scaleX:0.3972,scaleY:0.3972,rotation:-23.75,x:683.45,y:556.6},0).wait(1).to({regY:2.7,scaleX:0.3971,scaleY:0.3971,rotation:-14.3144,x:658.2,y:561.1},0).wait(1).to({regX:17.6,regY:2.8,rotation:-5.7213,x:634.65,y:559.1},0).wait(1).to({regY:2.9,scaleX:0.3973,scaleY:0.3973,rotation:3.3776,x:610.9,y:550.9},0).wait(1).to({regX:17.3,regY:2.8,scaleX:0.397,scaleY:0.397,rotation:3.3185,x:597.2,y:554.5},0).wait(1).to({regX:17.4,regY:2.9,scaleX:0.3969,scaleY:0.3969,rotation:3.5774,x:581.25,y:556.35},0).wait(1).to({regY:3.2,scaleX:0.3971,scaleY:0.3971,rotation:3.8601,x:564.6,y:555.7},0).wait(1).to({regY:3,scaleX:0.3976,scaleY:0.3976,rotation:14.2597,x:522.05,y:552.65},0).wait(1).to({regX:17.5,regY:3.1,scaleX:0.3975,scaleY:0.3975,rotation:21.0634,x:492.15,y:543.15},0).wait(1).to({regX:17.4,regY:3,scaleX:0.3974,scaleY:0.3974,rotation:25.5399,x:474.2,y:534},0).wait(1).to({regX:17.5,regY:3.1,scaleX:0.3977,scaleY:0.3977,rotation:27.1265,x:468.2,y:530.9},0).wait(1).to({regX:17.7,regY:3.3,scaleX:0.3972,scaleY:0.3972,rotation:30.0533,x:468.1,y:531},0).wait(1).to({regX:17.6,regY:3,scaleX:0.3968,scaleY:0.3968,rotation:38.8704,y:529.75},0).wait(1).to({regX:17.3,scaleX:0.3962,scaleY:0.3962,rotation:54.1448,x:469.45,y:523.95},0).wait(1).to({regX:17.5,regY:3.1,scaleX:0.3957,scaleY:0.3957,rotation:75.4932,x:474.95,y:508.8},0).wait(1).to({regX:17.7,scaleX:0.3955,scaleY:0.3955,rotation:102.3118,x:491.7,y:479.5},0).wait(1).to({regX:17.8,regY:3.4,scaleX:0.395,scaleY:0.395,rotation:95.5353,x:547,y:477.55},0).wait(1).to({regY:3.5,scaleX:0.3953,scaleY:0.3953,rotation:90.7475,x:585.3,y:464.95},0).wait(1).to({regX:17.7,regY:3.3,scaleX:0.3956,scaleY:0.3956,rotation:87.9841,x:606.5,y:453.25},0).wait(1).to({regY:2.9,scaleX:0.3963,scaleY:0.3963,rotation:86.8306,x:613.85,y:449.45},0).wait(1).to({regY:3.1,scaleX:0.3958,scaleY:0.3958,rotation:63.1801,x:630.55,y:483.4},0).wait(1).to({regX:17.8,regY:3,scaleX:0.3954,scaleY:0.3954,rotation:39.1578,x:649.6,y:510.3},0).wait(1).to({regX:17.6,scaleX:0.3952,scaleY:0.3952,rotation:15.1034,x:669.8,y:529.75},0).wait(1).to({regX:17.7,regY:3.2,scaleX:0.3958,scaleY:0.3958,rotation:-8.4949,x:688.7,y:542.1},0).wait(1));

	// Leg_lower
	this.instance_6 = new lib.Leglower("single",0);
	this.instance_6.setTransform(659.1,424.85,0.3984,0.3984,-21.4534,0,0,0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0.2,regY:1,scaleX:0.3979,scaleY:0.3979,rotation:-9.4804,x:662.85,y:427.7},0).wait(1).to({regX:0.4,regY:0.6,scaleX:0.3977,scaleY:0.3977,rotation:3.0106,x:666.05,y:430.6},0).wait(1).to({regY:0.8,rotation:15.0818,x:669.55,y:433.25},0).wait(1).to({regX:0.7,regY:0.7,scaleX:0.3983,scaleY:0.3983,rotation:27.4259,x:672.4,y:435.65},0).wait(1).to({scaleX:0.3976,scaleY:0.3976,rotation:28.1338,x:659.9,y:439.9},0).wait(1).to({scaleX:0.3974,scaleY:0.3974,rotation:29.1153,x:645.8,y:442.75},0).wait(1).to({regX:0.6,regY:0.8,scaleX:0.3979,scaleY:0.3979,rotation:30.0499,x:631.05,y:443.45},0).wait(1).to({regX:0.7,regY:1.1,rotation:31.3067,x:591,y:441.65},0).wait(1).to({scaleX:0.3981,scaleY:0.3981,rotation:31.8285,x:562,y:432.8},0).wait(1).to({regX:0.8,regY:1,scaleX:0.3982,scaleY:0.3982,rotation:32.3303,x:545,y:424.3},0).wait(1).to({regX:0.5,regY:0.8,scaleX:0.3986,scaleY:0.3986,rotation:32.6162,x:539.55,y:421.15},0).wait(1).to({regX:0.4,regY:1,scaleX:0.3982,scaleY:0.3982,rotation:34.3094,x:542.7,y:423.6},0).wait(1).to({regX:0.2,regY:0.9,scaleX:0.3979,scaleY:0.3979,rotation:39.589,x:552.1,y:429.7},0).wait(1).to({scaleX:0.3977,scaleY:0.3977,rotation:48.6133,x:568.25,y:438.25},0).wait(1).to({regX:0.6,regY:0.8,scaleX:0.3976,scaleY:0.3976,rotation:61.4274,x:590.4,y:447.05},0).wait(1).to({regX:0.4,regY:0.7,scaleX:0.3974,scaleY:0.3974,rotation:77.3197,x:619.45,y:451.65},0).wait(1).to({regY:0.6,scaleX:0.3972,scaleY:0.3972,rotation:62.7282,x:663.75,y:418.65},0).wait(1).to({regX:0.5,regY:0.8,scaleX:0.3974,scaleY:0.3974,rotation:52.4006,x:689.65,y:386.25},0).wait(1).to({regX:0.4,regY:0.9,scaleX:0.3975,scaleY:0.3975,rotation:46.339,x:701.85,y:363.95},0).wait(1).to({regX:0.5,regY:0.8,scaleX:0.398,scaleY:0.398,rotation:44.2,x:705.75,y:356.45},0).wait(1).to({scaleX:0.3977,scaleY:0.3977,rotation:31.0852,x:698.8,y:371.95},0).wait(1).to({regX:0.4,regY:0.7,scaleX:0.3972,scaleY:0.3972,rotation:18.0437,x:690.6,y:386.5},0).wait(1).to({regX:0.7,regY:0.8,scaleX:0.3968,scaleY:0.3968,rotation:4.7887,x:681.4,y:400.15},0).wait(1).to({regX:0.6,regY:1.1,scaleX:0.3974,scaleY:0.3974,rotation:-8.2885,x:670.6,y:413.05},0).wait(1));

	// Ankle
	this.instance_7 = new lib.Ankle("single",0);
	this.instance_7.setTransform(698.95,529.75,0.3991,0.3991,-38.0485,0,0,14.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:14.5,scaleX:0.399,scaleY:0.399,rotation:-25.884,x:680.05,y:538.25},0).wait(1).to({regY:12.2,scaleX:0.3991,scaleY:0.3991,rotation:-13.5671,x:658.75,y:542.4},0).wait(1).to({scaleX:0.3989,scaleY:0.3989,rotation:-1.5367,x:639.15,y:540.95},0).wait(1).to({regX:14.6,regY:12.3,scaleX:0.399,scaleY:0.399,rotation:10.61,x:619.45,y:534.5},0).wait(1).to({regX:14.5,regY:12.2,scaleX:0.3985,scaleY:0.3985,rotation:11.5177,x:605.75,y:537.8},0).wait(1).to({regX:14.6,scaleX:0.3984,scaleY:0.3984,rotation:12.5267,x:590.1,y:539.7},0).wait(1).to({regX:14.4,scaleX:0.3986,scaleY:0.3986,rotation:13.4873,x:573.7,y:539.65},0).wait(1).to({regX:14.5,scaleX:0.3984,scaleY:0.3984,rotation:14.7638,x:531.6,y:536.45},0).wait(1).to({regX:14.2,regY:12.4,scaleX:0.3985,scaleY:0.3985,rotation:15.2574,x:501.6,y:527.15},0).wait(1).to({regX:14.5,regY:12.2,scaleX:0.3986,scaleY:0.3986,rotation:15.7532,x:483.8,y:518.1},0).wait(1).to({regX:14.7,scaleX:0.399,scaleY:0.399,rotation:15.8584,x:477.85,y:514.95},0).wait(1).to({regX:14.6,scaleX:0.3986,scaleY:0.3986,rotation:17.7551,x:478.35,y:515.3},0).wait(1).to({regX:14.5,scaleX:0.3984,scaleY:0.3984,rotation:23.0315,x:479.75,y:515.15},0).wait(1).to({regX:14.6,regY:12.1,scaleX:0.3981,scaleY:0.3981,rotation:32.0775,x:483.4,y:511.35},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,rotation:44.8912,x:491.45,y:499.35},0).wait(1).to({scaleX:0.398,scaleY:0.398,rotation:60.8684,x:510,y:475.1},0).wait(1).to({regY:12.2,scaleX:0.3977,scaleY:0.3977,rotation:46.1533,x:563.6,y:468.85},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:35.8445,x:600.1,y:453.45},0).wait(1).to({regX:14.5,regY:12.1,scaleX:0.398,scaleY:0.398,rotation:29.804,x:619.9,y:440.2},0).wait(1).to({regY:12.2,scaleX:0.3984,scaleY:0.3984,rotation:27.4199,x:626.6,y:435.8},0).wait(1).to({regX:14.6,regY:12.3,scaleX:0.3979,scaleY:0.3979,rotation:14.494,x:639.8,y:467.25},0).wait(1).to({regX:14.3,regY:12.2,scaleX:0.398,scaleY:0.398,rotation:1.261,x:654.65,y:492.45},0).wait(1).to({scaleX:0.3981,scaleY:0.3981,rotation:-12.0102,x:670.65,y:511.4},0).wait(1).to({regX:14.4,scaleX:0.3983,scaleY:0.3983,rotation:-25.0648,x:685.5,y:523.75},0).wait(1));

	// Leg_thigh
	this.instance_8 = new lib.Legthigh("single",0);
	this.instance_8.setTransform(586.5,310.15,0.3988,0.3988,-32.4155,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:0.4,scaleX:0.3982,scaleY:0.3982,rotation:-34.5616,x:585.9,y:315.85},0).wait(1).to({scaleX:0.3981,scaleY:0.3981,rotation:-36.5976,x:585.15,y:321.65},0).wait(1).to({rotation:-38.8234,x:584.45,y:327.35},0).wait(1).to({regX:0.2,regY:0.5,scaleX:0.3988,scaleY:0.3988,rotation:-40.8928,x:583.75,y:332.9},0).wait(1).to({regY:0.6,scaleX:0.398,scaleY:0.398,rotation:-34.0544,x:584.1,y:327.35},0).wait(1).to({regY:0.4,rotation:-27.0641,x:584.15,y:321.8},0).wait(1).to({regY:0.6,scaleX:0.3984,scaleY:0.3984,rotation:-20.234,x:584.6,y:316},0).wait(1).to({regY:0.7,scaleX:0.3985,scaleY:0.3985,rotation:-2.5546,x:585.05,y:306.15},0).wait(1).to({regX:0.4,regY:0.6,scaleX:0.3984,scaleY:0.3984,rotation:9.7635,x:585.2,y:299.15},0).wait(1).to({regX:0.5,regY:0.7,scaleX:0.3983,scaleY:0.3983,rotation:17.2765,x:585.45,y:294.9},0).wait(1).to({regX:0.2,regY:0.3,scaleX:0.3988,scaleY:0.3988,rotation:19.769,x:585.55,y:293.45},0).wait(1).to({scaleX:0.3983,scaleY:0.3983,rotation:18.3045,x:585.5,y:294.65},0).wait(1).to({regX:0.4,regY:0.5,rotation:14.0554,x:585.3,y:298},0).wait(1).to({regY:0.4,scaleX:0.3982,scaleY:0.3982,rotation:7.0433,x:585.1,y:303.45},0).wait(1).to({regX:0.2,scaleX:0.398,scaleY:0.398,rotation:-2.5377,x:584.45,y:311.4},0).wait(1).to({regX:0.1,regY:0.6,scaleX:0.3978,scaleY:0.3978,rotation:-15.3014,x:583.75,y:321.05},0).wait(1).to({regY:0.8,scaleX:0.3974,scaleY:0.3974,rotation:-35.8446,x:584.55,y:308.95},0).wait(1).to({regY:0.7,scaleX:0.3976,scaleY:0.3976,rotation:-50.6351,x:584.95,y:300.2},0).wait(1).to({regX:-0.1,regY:0.6,scaleX:0.3977,scaleY:0.3977,rotation:-59.4317,x:585.2,y:294.95},0).wait(1).to({regY:0.5,scaleX:0.3983,scaleY:0.3983,rotation:-62.3837,x:585.6,y:293.6},0).wait(1).to({regX:0,scaleX:0.3976,scaleY:0.3976,rotation:-56.4075,x:586,y:296.95},0).wait(1).to({regX:-0.2,scaleX:0.3974,scaleY:0.3974,rotation:-50.3877,x:586.3,y:300.25},0).wait(1).to({regX:0,regY:0.6,scaleX:0.3972,scaleY:0.3972,rotation:-44.3681,x:586.8,y:303.45},0).wait(1).to({regX:0.1,scaleX:0.3977,scaleY:0.3977,rotation:-38.3525,x:586.65,y:306.8},0).wait(1));

	// Torso
	this.instance_9 = new lib.Torso("single",0);
	this.instance_9.setTransform(605.5,223.3,0.3992,0.3992,8.7102,0,0,91.8,179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:602.7,y:246.1},4).to({regX:91.9,regY:179.2,scaleX:0.399,scaleY:0.399,rotation:8.5553,x:603.55,y:229.2},3).to({regX:91.8,regY:179.1,scaleX:0.3992,scaleY:0.3992,rotation:8.7102,x:604.55,y:206.6},4,cjs.Ease.get(1)).to({regX:91.9,regY:179.2,scaleX:0.399,scaleY:0.399,rotation:8.5553,x:602.55,y:234.05},5,cjs.Ease.get(-1)).to({regX:91.8,regY:179.1,scaleX:0.3992,scaleY:0.3992,rotation:8.7102,x:604.55,y:206.6},4,cjs.Ease.get(1)).to({regX:91.9,regY:179.2,scaleX:0.399,scaleY:0.399,rotation:8.5553,x:605.35,y:220},4).wait(1));

	// Pelvis
	this.instance_10 = new lib.Pelvis("single",0);
	this.instance_10.setTransform(593.75,302.15,0.3992,0.3992,-0.0372,0,0,70.4,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:70.3,regY:52.9,scaleX:0.399,scaleY:0.399,rotation:0,x:593,y:307.8},0).wait(1).to({x:592.3,y:313.5},0).wait(1).to({x:591.6,y:319.2},0).wait(1).to({regX:70.4,regY:53.1,scaleX:0.3992,scaleY:0.3992,rotation:-0.0372,x:590.95,y:324.9},0).wait(1).to({regX:70.5,regY:52.8,scaleX:0.3989,scaleY:0.3989,rotation:0,x:591.2,y:319.2},0).wait(1).to({regX:70.3,x:591.45,y:313.65},0).wait(1).to({regY:52.9,scaleX:0.399,scaleY:0.399,rotation:-0.0088,x:591.8,y:307.85},0).wait(1).to({regY:52.8,scaleX:0.3989,scaleY:0.3989,rotation:0,x:592.3,y:298},0).wait(1).to({regX:70.5,regY:52.9,scaleX:0.399,scaleY:0.399,x:592.5,y:290.95},0).wait(1).to({regX:70.3,x:592.65,y:286.75},0).wait(1).to({regX:70.4,regY:53.1,scaleX:0.3992,scaleY:0.3992,rotation:-0.0372,x:592.8,y:285.4},0).wait(1).to({regX:70.3,regY:52.9,scaleX:0.399,scaleY:0.399,rotation:0,x:592.65,y:286.5},0).wait(1).to({x:592.4,y:289.8},0).wait(1).to({regX:70.5,scaleX:0.3989,scaleY:0.3989,x:592.1,y:295.3},0).wait(1).to({regY:52.8,scaleX:0.3988,scaleY:0.3988,x:591.55,y:302.95},0).wait(1).to({regX:70.3,regY:53.1,scaleX:0.399,scaleY:0.399,rotation:-0.0131,x:590.9,y:312.9},0).wait(1).to({regX:70.6,scaleX:0.3988,scaleY:0.3988,rotation:0,x:591.75,y:300.95},0).wait(1).to({regX:70.5,scaleX:0.3989,scaleY:0.3989,x:592.3,y:292.25},0).wait(1).to({regX:70.3,scaleX:0.399,scaleY:0.399,x:592.6,y:287},0).wait(1).to({regX:70.2,regY:52.9,scaleX:0.3992,scaleY:0.3992,rotation:-0.0372,x:592.65,y:285.4},0).wait(1).to({regX:70.5,regY:53,scaleX:0.3989,scaleY:0.3989,rotation:0,x:593.05,y:288.8},0).wait(1).to({x:593.35,y:292.1},0).wait(1).to({regX:70.4,regY:53.1,scaleX:0.3988,scaleY:0.3988,x:593.7,y:295.45},0).wait(1).to({regX:70.3,regY:53,scaleX:0.399,scaleY:0.399,rotation:-0.0066,x:593.8,y:298.7},0).wait(1));

	// Sneaker
	this.instance_11 = new lib.Sneaker("single",0);
	this.instance_11.setTransform(446.05,531.8,0.398,0.398,69.51,0,0,18.4,31.9);
	var instance_11Filter_1 = new cjs.ColorFilter(0.76,0.76,0.76,1,0,0,0,0);
	this.instance_11.filters = [instance_11Filter_1];
	this.instance_11.cache(-22,-7,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:18.5,scaleX:0.3973,scaleY:0.3973,rotation:82.9517,x:444.45,y:528.85},0).wait(1).to({regX:18.4,regY:31.7,scaleX:0.3974,scaleY:0.3974,rotation:96,x:445.5,y:525.3},0).wait(1).to({regX:18.6,regY:31.9,scaleX:0.3975,scaleY:0.3975,rotation:108.8634,x:448,y:520.35},0).wait(1).to({regX:18.4,scaleX:0.3983,scaleY:0.3983,rotation:122.3232,x:451.15,y:512.85},0).wait(1).to({regX:18.6,scaleX:0.3975,scaleY:0.3975,rotation:105.8372,x:486.85,y:526.05},0).wait(1).to({regX:18.8,regY:32.1,scaleX:0.3971,scaleY:0.3971,rotation:89.0951,x:524.75,y:532.35},0).wait(1).to({regX:18.4,regY:32.3,scaleX:0.3974,scaleY:0.3974,rotation:72.5321,x:563.4,y:530.9},0).wait(1).to({regX:18.7,scaleX:0.3972,scaleY:0.3972,rotation:43.6319,x:628.15,y:512.95},0).wait(1).to({regX:18.4,regY:32.6,scaleX:0.3978,scaleY:0.3978,rotation:22.8318,x:669.6,y:488.4},0).wait(1).to({regY:32.5,scaleX:0.3983,scaleY:0.3983,rotation:10.3103,x:691.95,y:469.95},0).wait(1).to({regY:32.1,scaleX:0.3986,scaleY:0.3986,rotation:6.3889,x:698.7,y:462.9},0).wait(1).to({regY:32.4,scaleX:0.3983,scaleY:0.3983,rotation:4.2819,x:701.9,y:468.55},0).wait(1).to({regX:18.3,regY:32.3,scaleX:0.3978,scaleY:0.3978,rotation:-1.4859,x:710.9,y:483.65},0).wait(1).to({regX:18.2,regY:32.2,scaleX:0.3971,scaleY:0.3971,rotation:-11.2266,x:724.7,y:505.85},0).wait(1).to({regX:18.4,regY:32.1,scaleX:0.3963,scaleY:0.3963,rotation:-24.8127,x:740.4,y:530.6},0).wait(1).to({regX:18.2,regY:32.5,scaleX:0.396,scaleY:0.396,rotation:-42.2845,x:752.7,y:549.35},0).wait(1).to({regX:18.1,scaleX:0.3965,scaleY:0.3965,rotation:-21.5905,x:660.25,y:575.8},0).wait(1).to({regX:17.9,scaleX:0.3969,scaleY:0.3969,rotation:-7.2553,x:590.15,y:572.2},0).wait(1).to({regX:18.1,regY:32.6,scaleX:0.3972,scaleY:0.3972,rotation:1.4926,x:548.4,y:560.8},0).wait(1).to({regX:18.4,regY:32.1,scaleX:0.3974,scaleY:0.3974,rotation:3.9475,x:536.4,y:556.6},0).wait(1).to({regY:32.2,scaleX:0.3971,scaleY:0.3971,rotation:18.0388,x:516.85,y:554},0).wait(1).to({regY:32.4,scaleX:0.3967,scaleY:0.3967,rotation:31.6014,x:499.2,y:550.6},0).wait(1).to({regY:32.3,scaleX:0.3962,scaleY:0.3962,rotation:45.5991,x:481.9,y:545.65},0).wait(1).to({regX:18.6,regY:32.2,scaleX:0.3965,scaleY:0.3965,rotation:59.3793,x:463.55,y:539.05},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_11Filter_1).wait(25));

	// Leg_lower
	this.instance_12 = new lib.Leglower("single",0);
	this.instance_12.setTransform(551.05,436.25,0.3992,0.3992,46.6927,0,0,0.9,0.4);
	var instance_12Filter_2 = new cjs.ColorFilter(0.76,0.76,0.76,1,0,0,0,0);
	this.instance_12.filters = [instance_12Filter_2];
	this.instance_12.cache(-39,-27,75,331);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:1,regY:0.2,scaleX:0.3987,scaleY:0.3987,rotation:52.8424,x:559.4,y:445.3},0).wait(1).to({regY:0.1,rotation:58.6463,x:568.2,y:453.8},0).wait(1).to({regX:0.9,scaleX:0.3988,scaleY:0.3988,rotation:64.4565,x:577.3,y:461.5},0).wait(1).to({scaleX:0.3996,scaleY:0.3996,rotation:70.6067,x:586.2,y:468.45},0).wait(1).to({regX:1,regY:-0.1,scaleX:0.399,scaleY:0.399,rotation:62.4471,x:614.25,y:462.7},0).wait(1).to({regX:0.9,scaleX:0.3987,scaleY:0.3987,rotation:54.1941,x:641.7,y:451.45},0).wait(1).to({regX:1,regY:0.1,scaleX:0.3988,scaleY:0.3988,rotation:45.9115,x:667.3,y:434.2},0).wait(1).to({scaleX:0.3987,scaleY:0.3987,rotation:31.5674,x:704.9,y:393.4},0).wait(1).to({regX:1.2,regY:0.2,scaleX:0.399,scaleY:0.399,rotation:21.2431,x:723.75,y:356.9},0).wait(1).to({regX:0.8,regY:0.1,scaleX:0.3993,scaleY:0.3993,rotation:14.9991,x:731.35,y:333.35},0).wait(1).to({regX:1.1,scaleX:0.3994,scaleY:0.3994,rotation:12.8097,x:733.35,y:325},0).wait(1).to({scaleX:0.3992,scaleY:0.3992,rotation:11.2477,x:732.35,y:329.7},0).wait(1).to({regY:-0.1,scaleX:0.3988,scaleY:0.3988,rotation:6.2211,x:729.1,y:342.65},0).wait(1).to({regX:1,regY:0.3,scaleX:0.3981,scaleY:0.3981,rotation:-2.2602,x:721.95,y:364.1},0).wait(1).to({regX:1.2,regY:0.1,scaleX:0.3976,scaleY:0.3976,rotation:-14.0213,x:708.9,y:392.45},0).wait(1).to({regX:1.7,regY:0.8,scaleX:0.3978,scaleY:0.3978,rotation:-29.0104,x:686.8,y:424.6},0).wait(1).to({regY:0.7,scaleX:0.398,scaleY:0.398,rotation:-4.9888,x:650.95,y:434.8},0).wait(1).to({regX:2,regY:0.8,scaleX:0.3984,scaleY:0.3984,rotation:12.0261,x:622.7,y:434.4},0).wait(1).to({regX:1.7,regY:0.5,scaleX:0.3987,scaleY:0.3987,rotation:22.2872,x:604.8,y:430.85},0).wait(1).to({regX:1.1,regY:0.3,scaleX:0.3992,scaleY:0.3992,rotation:25.381,x:599.55,y:429.55},0).wait(1).to({regX:1.2,regY:0.5,scaleX:0.3985,scaleY:0.3985,rotation:29.7955,x:589.45,y:432.45},0).wait(1).to({regX:1,regY:0.4,scaleX:0.3983,scaleY:0.3983,rotation:33.8465,x:579.9,y:434.25},0).wait(1).to({regX:1.1,scaleX:0.3981,scaleY:0.3981,rotation:38.0857,x:570.6,y:435.5},0).wait(1).to({regX:1.2,scaleX:0.3984,scaleY:0.3984,rotation:42.3581,x:560.9,y:436.05},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_12Filter_2).wait(25));

	// Ankle
	this.instance_13 = new lib.Ankle("single",0);
	this.instance_13.setTransform(468.15,512.1,0.3991,0.3991,33.0558,0,0,14.8,11.9);
	var instance_13Filter_3 = new cjs.ColorFilter(0.76,0.76,0.76,1,0,0,0,0);
	this.instance_13.filters = [instance_13Filter_3];
	this.instance_13.cache(-22,-22,64,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:14.6,regY:12.1,scaleX:0.3988,scaleY:0.3988,rotation:39.3599,x:468.8,y:511.8},0).wait(1).to({regY:12,scaleX:0.3989,scaleY:0.3989,rotation:45.1395,x:471.4,y:510.85},0).wait(1).to({regY:12.1,scaleX:0.399,scaleY:0.399,rotation:50.9203,x:475.15,y:508.5},0).wait(1).to({regX:14.8,regY:11.8,scaleX:0.3994,scaleY:0.3994,rotation:57.1029,x:479.55,y:504.25},0).wait(1).to({scaleX:0.3988,scaleY:0.3988,rotation:48.9168,x:513.75,y:513.25},0).wait(1).to({regY:11.9,scaleX:0.3986,scaleY:0.3986,rotation:40.6491,x:549.55,y:515.8},0).wait(1).to({regX:14.6,regY:12,scaleX:0.3988,scaleY:0.3988,rotation:32.353,x:585.35,y:511.1},0).wait(1).to({regY:11.9,scaleX:0.3987,scaleY:0.3987,rotation:18.0439,x:644.7,y:488.15},0).wait(1).to({regX:14.7,regY:12.1,scaleX:0.399,scaleY:0.399,rotation:7.5555,x:681.35,y:461.05},0).wait(1).to({regY:12.2,scaleX:0.3992,scaleY:0.3992,rotation:1.2902,x:700.65,y:441.5},0).wait(1).to({regX:15,regY:12,scaleX:0.3995,scaleY:0.3995,rotation:-0.8163,x:706.7,y:434.25},0).wait(1).to({regX:14.7,regY:12.1,scaleX:0.3992,scaleY:0.3992,rotation:-2.4603,x:708.65,y:439.7},0).wait(1).to({scaleX:0.3991,scaleY:0.3991,rotation:-7.4625,x:715.15,y:454.3},0).wait(1).to({regX:14.5,scaleX:0.3989,scaleY:0.3989,rotation:-15.5717,x:724.65,y:476.15},0).wait(1).to({regX:14.7,scaleX:0.3982,scaleY:0.3982,rotation:-27.3133,x:734.4,y:501.5},0).wait(1).to({regX:14.3,scaleX:0.3977,scaleY:0.3977,rotation:-42.3408,x:739.2,y:523.35},0).wait(1).to({regY:12.2,scaleX:0.3983,scaleY:0.3983,rotation:-18.0893,x:658.7,y:546.4},0).wait(1).to({regX:14.4,scaleX:0.3985,scaleY:0.3985,rotation:-1.2682,x:597.25,y:543.55},0).wait(1).to({regX:14.3,regY:12.1,rotation:8.9985,x:560.4,y:533.9},0).wait(1).to({regX:14.7,regY:11.9,scaleX:0.3989,scaleY:0.3989,rotation:11.9539,x:549.8,y:530.3},0).wait(1).to({regX:14.6,regY:12.1,scaleX:0.3983,scaleY:0.3983,rotation:16.5079,x:532.3,y:528.9},0).wait(1).to({regY:11.8,scaleX:0.3982,scaleY:0.3982,rotation:20.5239,x:516.25,y:526.45},0).wait(1).to({regX:14.8,scaleX:0.398,scaleY:0.398,rotation:24.773,x:500.4,y:522.65},0).wait(1).to({regX:14.7,regY:12.1,scaleX:0.3982,scaleY:0.3982,rotation:28.83,x:484.3,y:517.85},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_13Filter_3).wait(25));

	// Leg_thigh
	this.instance_14 = new lib.Legthigh("single",0);
	this.instance_14.setTransform(602.35,310.95,0.3992,0.3992,22.7243,0,0,0.1,0.8);
	var instance_14Filter_4 = new cjs.ColorFilter(0.76,0.76,0.76,1,0,0,0,0);
	this.instance_14.filters = [instance_14Filter_4];
	this.instance_14.cache(-27,-27,54,393);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:0.3,regY:0.5,scaleX:0.3988,scaleY:0.3988,rotation:18.532,x:601.7,y:316.65},0).wait(1).to({regX:0.5,regY:0.7,rotation:14.293,x:601.05,y:322.4},0).wait(1).to({regX:0.4,scaleX:0.3989,scaleY:0.3989,rotation:10.0539,x:600.3,y:328.05},0).wait(1).to({regX:0.3,regY:0.6,scaleX:0.3992,scaleY:0.3992,rotation:5.9972,x:599.6,y:333.65},0).wait(1).to({regX:0.2,regY:0.5,scaleX:0.3988,scaleY:0.3988,rotation:-5.7531,x:599.8,y:328.05},0).wait(1).to({regY:0.6,scaleX:0.3984,scaleY:0.3984,rotation:-17.5264,x:600.15,y:322.6},0).wait(1).to({regY:0.8,scaleX:0.3986,scaleY:0.3986,rotation:-29.3158,x:600.5,y:316.7},0).wait(1).to({scaleX:0.3981,scaleY:0.3981,rotation:-49.9063,x:601,y:306.85},0).wait(1).to({regX:0.1,regY:0.9,scaleX:0.3985,scaleY:0.3985,rotation:-64.693,x:601.05,y:299.8},0).wait(1).to({regX:-0.1,regY:0.8,scaleX:0.3987,scaleY:0.3987,rotation:-73.4833,x:601.35,y:295.65},0).wait(1).to({regX:0,regY:0.7,scaleX:0.3991,scaleY:0.3991,rotation:-76.4488,x:601.45,y:294.15},0).wait(1).to({regX:-0.1,regY:0.8,scaleX:0.3987,scaleY:0.3987,rotation:-74.9831,x:601.35,y:295.4},0).wait(1).to({regY:0.7,scaleX:0.3985,scaleY:0.3985,rotation:-70.6937,x:601.1,y:298.75},0).wait(1).to({regX:0.1,scaleX:0.3982,scaleY:0.3982,rotation:-63.4173,x:600.75,y:304.1},0).wait(1).to({regX:0,scaleX:0.3977,scaleY:0.3977,rotation:-53.1499,x:600.2,y:311.9},0).wait(1).to({regX:0.2,regY:1.1,scaleX:0.398,scaleY:0.398,rotation:-40.0087,x:599.65,y:321.8},0).wait(1).to({regX:0.4,scaleX:0.3978,scaleY:0.3978,rotation:-21.8275,x:600.35,y:309.7},0).wait(1).to({regX:0.3,regY:1.2,scaleX:0.3983,scaleY:0.3983,rotation:-9.021,x:600.9,y:301.1},0).wait(1).to({regX:0.4,regY:0.9,scaleX:0.3986,scaleY:0.3986,rotation:-1.27,x:601.3,y:295.75},0).wait(1).to({regX:0.2,regY:0.8,scaleX:0.3987,scaleY:0.3987,rotation:1.2368,x:601.4,y:294.35},0).wait(1).to({regX:0.5,regY:0.7,scaleX:0.3985,scaleY:0.3985,rotation:5.5045,x:601.75,y:297.65},0).wait(1).to({regX:0.4,scaleX:0.3983,scaleY:0.3983,rotation:9.7626,x:602,y:300.95},0).wait(1).to({regY:1,scaleX:0.3981,scaleY:0.3981,rotation:14.024,x:602.35,y:304.35},0).wait(1).to({regY:0.8,scaleX:0.3983,scaleY:0.3983,rotation:18.3163,x:602.5,y:307.55},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_14Filter_4).wait(25));

	// Arm_fore
	this.instance_15 = new lib.Arm_fore("synched",0);
	this.instance_15.setTransform(703.45,217.2,0.3989,0.3989,-123.8341,0,0,-2.5,1.9);
	var instance_15Filter_5 = new cjs.ColorFilter(0.64,0.64,0.64,1,0,0,0,0);
	this.instance_15.filters = [instance_15Filter_5];
	this.instance_15.cache(-130,-23,153,281);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:-2.6,regY:2.1,scaleX:0.398,scaleY:0.398,rotation:-114.3456,x:687.75,y:237.25},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,rotation:-104.8127,x:669.8,y:254.65},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:-95.275,x:650.3,y:269.1},0).wait(1).to({regX:-2.5,regY:1.9,scaleX:0.3985,scaleY:0.3985,rotation:-85.6977,x:629.55,y:280.2},0).wait(1).to({regX:-2.4,regY:2,scaleX:0.3977,scaleY:0.3977,rotation:-77.7075,x:607.55,y:276.6},0).wait(1).to({regY:1.9,rotation:-69.6918,x:585.3,y:269.2},0).wait(1).to({regX:-2.6,regY:2.1,scaleX:0.3983,scaleY:0.3983,rotation:-61.6656,x:564,y:257.75},0).wait(1).to({regX:-2.8,regY:2,scaleX:0.3981,scaleY:0.3981,rotation:-47.899,x:530.75,y:229.05},0).wait(1).to({regX:-2.6,scaleX:0.398,scaleY:0.398,rotation:-38.125,x:511.55,y:202.55},0).wait(1).to({regY:1.9,scaleX:0.3981,scaleY:0.3981,rotation:-32.0927,x:501.9,y:184.5},0).wait(1).to({regX:-2.2,scaleX:0.3985,scaleY:0.3985,rotation:-29.9938,x:499.35,y:178.25},0).wait(1).to({regX:-2.4,regY:2,scaleX:0.398,scaleY:0.398,rotation:-28.594,x:501.7,y:183.75},0).wait(1).to({regX:-2.5,regY:2.2,scaleX:0.3979,scaleY:0.3979,rotation:-24.0834,x:509.95,y:199.2},0).wait(1).to({regX:-2.2,regY:2.1,scaleX:0.398,scaleY:0.398,rotation:-16.5905,x:526.9,y:222.9},0).wait(1).to({regX:-2.4,scaleX:0.3983,scaleY:0.3983,rotation:-6.0426,x:555.3,y:248.9},0).wait(1).to({regX:-2.6,scaleX:0.3979,scaleY:0.3979,rotation:6.901,x:598.4,y:269.8},0).wait(1).to({scaleX:0.3975,scaleY:0.3975,rotation:-23.615,x:680.4,y:234.75},0).wait(1).to({scaleX:0.398,scaleY:0.398,rotation:-45.1289,x:720.2,y:180.3},0).wait(1).to({regY:2.4,scaleX:0.3978,scaleY:0.3978,rotation:-58.1372,x:732.05,y:140.45},0).wait(1).to({regY:2,scaleX:0.3984,scaleY:0.3984,rotation:-62.586,x:733.5,y:126.35},0).wait(1).to({regX:-2.5,regY:2.2,scaleX:0.3979,scaleY:0.3979,rotation:-77.7455,x:731.2,y:147.6},0).wait(1).to({regX:-2.6,regY:2.1,scaleX:0.3984,scaleY:0.3984,rotation:-93.0498,x:726.25,y:167.8},0).wait(1).to({regY:2,scaleX:0.3979,scaleY:0.3979,rotation:-108.56,x:719.15,y:187.15},0).wait(1).to({regX:-2.8,regY:2.2,scaleX:0.3983,scaleY:0.3983,rotation:-124.0633,x:710.1,y:205.2},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_15Filter_5).wait(25));

	// Hand
	this.instance_16 = new lib.Hand("synched",0);
	this.instance_16.setTransform(807.35,196.45,0.3988,0.3988,2.6184,0,0,19.6,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:19.7,regY:18.8,scaleX:0.3983,scaleY:0.3983,rotation:12.059,x:793.4,y:233.9},0).wait(1).to({scaleX:0.3984,scaleY:0.3984,rotation:21.5875,x:774.55,y:268.85},0).wait(1).to({regX:19.8,regY:18.9,scaleX:0.3986,scaleY:0.3986,rotation:31.1089,x:751.1,y:300.55},0).wait(1).to({regX:19.6,scaleX:0.3993,scaleY:0.3993,rotation:40.7122,x:724.05,y:328.05},0).wait(1).to({regX:19.8,regY:19.1,scaleX:0.3983,scaleY:0.3983,rotation:48.6268,x:694.2,y:337.2},0).wait(1).to({regX:19.4,regY:18.9,scaleX:0.3979,scaleY:0.3979,rotation:56.639,x:662.75,y:341.1},0).wait(1).to({regX:19.8,regY:18.7,scaleX:0.3982,scaleY:0.3982,rotation:64.681,x:630.75,y:339.9},0).wait(1).to({regY:18.9,scaleX:0.3977,scaleY:0.3977,rotation:78.4638,x:576,y:324.55},0).wait(1).to({regX:19.6,regY:18.7,scaleX:0.398,scaleY:0.398,rotation:88.2599,x:540,y:304.4},0).wait(1).to({regX:19.8,regY:18.9,scaleX:0.3981,scaleY:0.3981,rotation:94.2862,x:519.45,y:288.75},0).wait(1).to({regX:19.4,scaleX:0.3989,scaleY:0.3989,rotation:96.5883,x:512.9,y:283.25},0).wait(1).to({scaleX:0.3981,scaleY:0.3981,rotation:97.7932,x:512.75,y:288.85},0).wait(1).to({regX:19.7,regY:18.8,scaleX:0.398,scaleY:0.398,rotation:102.2987,x:512.7,y:304.8},0).wait(1).to({regX:19.4,regY:18.9,scaleX:0.3978,scaleY:0.3978,rotation:109.7966,x:515.75,y:328},0).wait(1).to({regX:19.7,scaleX:0.3975,scaleY:0.3975,rotation:120.1072,x:525.05,y:350.4},0).wait(1).to({regX:19.9,regY:18.8,rotation:132.8783,x:546.4,y:361.8},0).wait(1).to({regX:19.8,scaleX:0.397,scaleY:0.397,rotation:102.5443,x:682.4,y:340.35},0).wait(1).to({regX:20.1,scaleX:0.3972,scaleY:0.3972,rotation:80.9904,x:760.85,y:278},0).wait(1).to({scaleX:0.3974,scaleY:0.3974,rotation:67.9563,x:793.45,y:226.35},0).wait(1).to({regX:19.8,regY:18.7,scaleX:0.3982,scaleY:0.3982,rotation:63.5842,x:801.7,y:207.55},0).wait(1).to({scaleX:0.3977,scaleY:0.3977,rotation:48.5808,x:817.9,y:208.05},0).wait(1).to({regX:19.6,regY:18.8,scaleX:0.3978,scaleY:0.3978,rotation:33.3146,x:825.85,y:203.2},0).wait(1).to({regY:18.9,scaleX:0.3973,scaleY:0.3973,rotation:17.7997,x:824.45,y:194.6},0).wait(1).to({regX:19.9,scaleX:0.3976,scaleY:0.3976,rotation:2.2696,x:813.5,y:184.15},0).wait(1));

	// Arm_upper
	this.instance_17 = new lib.Arm_upper("synched",0);
	this.instance_17.setTransform(609.55,134.45,0.3991,0.3991,-71.2332,0,0,0.1,0.1);
	var instance_17Filter_6 = new cjs.ColorFilter(0.64,0.64,0.64,1,0,0,0,0);
	this.instance_17.filters = [instance_17Filter_6];
	this.instance_17.cache(-141,-23,164,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0.4,regY:0.2,scaleX:0.3987,scaleY:0.3987,rotation:-61.7009,x:608.9,y:140.1},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,rotation:-52.1618,x:608.15,y:145.8},0).wait(1).to({regX:0.5,regY:0.1,rotation:-42.621,x:607.55,y:151.55},0).wait(1).to({regX:0.3,regY:0.2,scaleX:0.3991,scaleY:0.3991,rotation:-33.0266,x:606.8,y:157.2},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.3984,scaleY:0.3984,rotation:-22.7961,x:607,y:151.55},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,rotation:-12.5238,x:607.2,y:146.15},0).wait(1).to({regX:0.4,regY:-0.1,scaleX:0.3989,scaleY:0.3989,rotation:-2.2868,x:607.55,y:140.35},0).wait(1).to({regX:0.5,regY:0,scaleX:0.3988,scaleY:0.3988,rotation:15.5178,x:608.05,y:130.4},0).wait(1).to({regY:-0.1,scaleX:0.3986,scaleY:0.3986,rotation:28.0953,x:608.35,y:123.25},0).wait(1).to({regX:0.4,scaleX:0.3985,scaleY:0.3985,rotation:35.8371,x:608.55,y:119.05},0).wait(1).to({regY:0.1,scaleX:0.3991,scaleY:0.3991,rotation:38.4333,x:608.7,y:117.7},0).wait(1).to({regX:0.6,scaleX:0.3985,scaleY:0.3985,rotation:36.0875,x:608.6,y:118.95},0).wait(1).to({regY:-0.1,rotation:29.2943,x:608.4,y:122.15},0).wait(1).to({regX:0.5,scaleX:0.3986,scaleY:0.3986,rotation:17.783,x:607.95,y:127.55},0).wait(1).to({rotation:1.9549,x:607.3,y:135.2},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.3985,scaleY:0.3985,rotation:-18.8214,x:606.5,y:145.05},0).wait(1).to({regX:0.3,scaleX:0.3982,scaleY:0.3982,rotation:-58.1668,x:607.5,y:133.05},0).wait(1).to({regX:0.1,scaleX:0.3988,scaleY:0.3988,rotation:-86.0176,x:608.15,y:124.4},0).wait(1).to({scaleX:0.3986,scaleY:0.3986,rotation:-102.8029,x:608.55,y:119.2},0).wait(1).to({regX:-0.1,regY:-0.3,scaleX:0.399,scaleY:0.399,rotation:-108.5326,x:608.7,y:117.7},0).wait(1).to({regY:-0.2,scaleX:0.3986,scaleY:0.3986,rotation:-100.3068,x:608.85,y:121.1},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.3987,scaleY:0.3987,rotation:-92.2743,x:609.05,y:124.35},0).wait(1).to({regX:0,regY:0,scaleX:0.3989,scaleY:0.3989,rotation:-84.2504,x:609.15,y:127.75},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.399,scaleY:0.399,rotation:-76.1971,x:609.2,y:131},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_17Filter_6).wait(25));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_11, startFrame:1, endFrame:1, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:2, endFrame:2, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:3, endFrame:3, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:4, endFrame:4, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:5, endFrame:5, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:6, endFrame:6, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:7, endFrame:7, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:8, endFrame:8, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:9, endFrame:9, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:10, endFrame:10, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:11, endFrame:11, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:12, endFrame:12, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:13, endFrame:13, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:14, endFrame:14, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:15, endFrame:15, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:16, endFrame:16, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:17, endFrame:17, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:18, endFrame:18, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:19, endFrame:19, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:20, endFrame:20, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:21, endFrame:21, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:22, endFrame:22, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:23, endFrame:23, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:24, endFrame:24, x:-22, y:-7, w:166, h:90});
	this.filterCacheList.push({instance: this.instance_11, startFrame:24, endFrame:25, x:-22, y:-7, w:166, h:90});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.4,9.3,430.70000000000005,588.5);


// stage content:
(lib.MusicMan_v4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* play sound
		*/
		
		this.notes_button.addEventListener("click", fl_DeanClickToPlaySound.bind(this));
		
		function fl_DeanClickToPlaySound()
		{
			createjs.Sound.play("music");
		}
		
		
		/* stop sound
		*/
		
		this.soundStop_button.addEventListener("click", fl_ClickToStopSound.bind(this));
		
		function fl_ClickToStopSound()
		{
			createjs.Sound.stop("music");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// sound_stop_sign
	this.soundStop_button = new lib.soundStopSign();
	this.soundStop_button.name = "soundStop_button";
	this.soundStop_button.setTransform(61.15,54.5,1.3333,1.3333,0,0,0,21.9,21.9);
	new cjs.ButtonHelper(this.soundStop_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.soundStop_button).wait(200));

	// musical_notes
	this.notes_button = new lib.notes();
	this.notes_button.name = "notes_button";
	this.notes_button.setTransform(421.05,27.45,1.3333,1.3333,0,0,0,42.6,25.8);
	new cjs.ButtonHelper(this.notes_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.notes_button).wait(200));

	// Walkcycle
	this.instance = new lib.Walkcycle_Nested("synched",0);
	this.instance.setTransform(283.55,171.85,0.4722,0.4722,0,0,0,679.4,291.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(326.6,152.8,168.09999999999997,163.7);
// library properties:
lib.properties = {
	id: 'B7C125E8620EF743B2AC16B967D6839A',
	width: 600,
	height: 340,
	fps: 24,
	color: "#FEF0C4",
	opacity: 1.00,
	manifest: [
		{src:"images/MusicMan_atlas_1.png?1678584561473", id:"MusicMan_atlas_1"},
		{src:"sounds/music.mp3?1678584561704", id:"music"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B7C125E8620EF743B2AC16B967D6839A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
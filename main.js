const query=new URLSearchParams(window.location.search),symbols=query.get("symbols").split(","),randomInt=(t,e)=>Math.floor(t+Math.random()*(e+1-t)),matrixConfig={symbols:()=>{return symbols[(0,t=symbols.length-1,Math.floor(0+Math.random()*(t+1-0)))];var t},font:{family:"Matrix",file:"matrix.regular.ttf",size:12},splash:{size:40,interval:150,enabled:!0,texts:["Hello, World!","EZ Clap","Matrix"],colors:["#225400","#66FF00","#155400"]},entity:{enabled:!0,files:["images/DANKHACKERMANS.gif","images/HACKERJAMS.gif","images/HACKERMANS.gif","images/PEPEGAHACKER.gif","images/pepeLaughing.gif"],opacity:.5,rotate:[-10,10],size:32,speed:30}},{splash,entity}=matrixConfig,matrix=new Matrix(document.body,matrixConfig);console.log(matrix),matrix.start();let update,stats,count_fireworks=document.querySelector(".matrix-counters");stats=new Stats,stats.setMode(0),stats.domElement.style.position="fixed",stats.domElement.style.left="5px",stats.domElement.style.top="5px",stats.domElement.id="stats",document.body.appendChild(stats.domElement),update=()=>{stats.begin(),stats.end(),requestAnimationFrame(update)},requestAnimationFrame(update);const fpsMonitor=document.querySelector("#stats"),gui=new dat.GUI({closed:!0,autoPlace:!0,width:window.outerWidth>360?320:260}),folders={entity:gui.addFolder("entity"),splash:gui.addFolder("splash")};folders.entity.addFolder("rotate"),folders.entity.add(entity,"size",16,64,1).onChange((t=>{matrix.setOptions({entity:{size:t}})})),folders.entity.__folders.rotate.add(entity.rotate,"0",-360,360,1).name("min deg").onChange((t=>{matrix.setOptions({entity:{rotate:[t,matrix._.entity.options.rotate[1]]}})})),folders.entity.__folders.rotate.add(entity.rotate,"1",-360,360,1).name("max deg").onChange((t=>{matrix.setOptions({entity:{rotate:[matrix._.entity.options.rotate[0],t]}})})),folders.entity.add(entity,"opacity",.1,1).onChange((t=>{matrix.setOptions({entity:{opacity:t}})})),folders.entity.add(entity,"speed",10,60,1).name("tick speed").onChange((t=>{matrix.setOptions({entity:{speed:t}}),matrix._.entity.stop(),matrix._.entity.start()})),folders.entity.add(entity,"enabled").onChange((t=>{matrix.setOptions({entity:{enabled:t}}),matrix._.entity.clear()})),folders.splash.add(splash,"size",16,96,1).onChange((t=>{matrix.setOptions({splash:{size:t}})})),folders.splash.add(splash,"interval",100,2e3,1).name("tick speed").onChange((t=>{matrix.setOptions({splash:{interval:t}})})),folders.splash.add(splash,"enabled").onChange((t=>{matrix.setOptions({splash:{enabled:t}})}));
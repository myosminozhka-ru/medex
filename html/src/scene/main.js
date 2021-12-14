const modelurl = "../models/border.glb";

const modelurl2 = "../models/dots.glb";

const modelurl5 = "../models/shield.glb";

const modelurl6 = "../models/sphere.glb";

const line4  = "../models/line4.glb";

const line5 =  "../models/line5.glb";

const line6 =  "../models/line6.glb";

const circule1 = "../models/circule1.glb";

const circule2 = "../models/circule2.glb";

const circule3 = "../models/circule3.glb";



const loadModel = (url)=>{

    return new Promise((resolve, reject)=>{

        const manager = new THREE.LoadingManager();

        const loader = new THREE.GLTFLoader(manager);

        loader.load(url,

            function (gltf) {

                resolve(gltf.scene)

            },

            function (xhr) {



            },

            function (error) {

                console.log(error);

            }

        );

    });

}



let shield1StartPosition = null;

let shield2StartPosition = null;

let shield3StartPosition = null;



let composer, shield1,  shield2, shield3, line1, line2, line3, orbit1, orbit2, orbit3;

let shield1Pivot = new THREE.Object3D();

let shield2Pivot = new THREE.Object3D();

let shield3Pivot = new THREE.Object3D();

let lockShiled1 = false;

let lockShiled2 = false;

let lockShiled3 = false;

let lockLookShieled = false;



let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );

scene.add( camera );

let renderer = new THREE.WebGLRenderer( { antialias: true } );

renderer.setPixelRatio(1.5);

renderer.setSize( window.innerWidth, window.innerHeight );

renderer.toneMapping = THREE.ReinhardToneMapping;

renderer.toneMappingExposure = Math.pow( 1.2, 4.0 );



document.getElementById('background').appendChild( renderer.domElement );



const pointLight = new THREE.PointLight( 0xffffff, 1 );

camera.add( pointLight );



camera.position.z = 30;

camera.position.y = 10;



window.step = 1;

let pivot = new THREE.Object3D();

scene.add( pivot);



const renderScene = new THREE.RenderPass( scene, camera );



const bloomPass = new  THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );

bloomPass.threshold = 0;

bloomPass.strength = 1.5;

bloomPass.radius = 0;



composer = new THREE.EffectComposer( renderer );

composer.addPass( renderScene );

composer.addPass( bloomPass );





let material = new THREE.MeshStandardMaterial( {color: 0x00b3ff } );



var customMaterial = new THREE.ShaderMaterial({

    uniforms: 

    { 

          "s":   { type: "f", value: -1.0},

          "b":   { type: "f", value: 1.0},

          "p":   { type: "f", value: 2.0 },

          glowColor: { type: "c", value: new THREE.Color('#00b3ff') }

    },

    vertexShader:   document.getElementById( 'vertexShader'   ).textContent,

    fragmentShader: document.getElementById( 'fragmentShader' ).textContent,

    side: THREE.DoubleSide,

    blending: THREE.AdditiveBlending,

    transparent: false

})



    let fixY = -12.5;

    loadModel(modelurl).then((model)=>{

        pivot.add(model)

        model.position.y = fixY; 

        model.traverse((node) => {

            if (node.isMesh){

                node.material = customMaterial;

            }

        });

    });



    loadModel(modelurl2).then((model)=>{

        pivot.add(model)

          model.position.y = fixY; 

          model.traverse((node) => {

              if (node.isMesh){

                  node.material = material;

              }

          });

    });



    loadModel(line4).then((model)=>{

        model.traverse((node) => {

            if (node.isMesh){

                node.material = material;

            }

        });

        let linePivot = new THREE.Object3D();

        linePivot.add(model);

        linePivot.position.y = 0; 

        linePivot.rotation.z = Math.PI/4;

        linePivot.rotation.y = -0.22;

        scene.add(linePivot)

        line1 = model;

        line1.rotation.x = Math.PI /4;

    });



    loadModel(line5).then((model)=>{

        model.traverse((node) => {

            if (node.isMesh){

                node.material = material;

            }

        });

        let linePivot = new THREE.Object3D();

        linePivot.add(model);

        linePivot.position.y = 2; 

        linePivot.position.x = -2; 

        linePivot.rotation.z = -Math.PI/4;

        linePivot.rotation.y = -0.22;

        scene.add(linePivot)

        line2 = model;

        line2.rotation.x = Math.PI /2;

    });



    loadModel(line6).then((model)=>{

        model.traverse((node) => {

            if (node.isMesh){

                node.material = material;

            }

        });

        let linePivot = new THREE.Object3D();

        linePivot.add(model);

        linePivot.position.y = 5; 

        linePivot.rotation.y = -0.22;

        linePivot.scale.set(0.9,1,1);

        scene.add(linePivot)

        line3 = model;

    });





    loadModel(circule1).then((model)=>{

        scene.add(model)

        model.position.y = fixY; 

        model.position.z = -0.1; 

        model.traverse((node) => {

            if (node.isMesh){

                node.material = material;

            }

        });

        orbit1 = model;

        orbit1.visible = false;

    });



    loadModel(circule2).then((model)=>{

        scene.add(model)

        model.position.y = fixY; 

        model.position.z = 0.43; 

        model.traverse((node) => {

            if (node.isMesh){

                node.material = material;

            }

        });

        orbit2 = model;

        orbit2.visible = false;

    });



    loadModel(circule3).then((model)=>{

        scene.add(model)

        model.position.y = fixY; 

        model.position.z = -0.1; 

        model.traverse((node) => {

            if (node.isMesh){

                node.material = material;

            }

        });

        orbit3 = model;

        orbit3.visible = false;

    });



    loadModel(modelurl5).then((shield1l)=>{



        shield1l.position.y = fixY; 

        shield1l.position.x = 16.5; 

        shield1l.position.z = 0.5; 

        shield1l.visible = false;

        

        shield1l.traverse((node) => {

            if (node.isMesh){

                if(node.name == 'Object004'){

                    node.material.color.setHex('#091029');

                }else{

                    node.material.color.setHex(0xFFFFFF);

                }

            }

        });

        let shield2l = shield1l.clone();

        let shield3l = shield1l.clone();



        shield1 = shield1l;

        shield2 = shield2l;

        shield3 = shield3l;



        shield2.position.x = -23.5; 

        shield2.position.y = 0; 

        shield3.position.y = 26; 

        shield3.position.x = 0; 



        shield1Pivot.add(shield1);

        shield2Pivot.add(shield2);

        shield3Pivot.add(shield3);



        scene.add(shield1Pivot);

        scene.add(shield2Pivot);

        scene.add(shield3Pivot);



        shield1StartPosition = {

            x: shield1.position.x,

            y: shield1.position.y,

            z: shield1.position.z,

        }



        shield2StartPosition = {

            x: shield2l.position.x,

            y: shield2l.position.y,

            z: shield2l.position.z,

        }



        shield3StartPosition = {

            x: shield3l.position.x,

            y: shield3l.position.y,

            z: shield3l.position.z,

        }





    });



    let shieldPivotRotationZ = 0;



    const animate = ()=> {

        requestAnimationFrame( animate );

        pivot.rotation.y += 0.01;

        shieldPivotRotationZ += 0.01;

        if(shieldPivotRotationZ >= (Math.PI * 2)){

           shieldPivotRotationZ = 0;

        }

        shieldPivotRotationZ += 0.01;

        if(line1){

            line1.rotation.x += 0.06;

        }

        if(line2){

            line2.rotation.x += 0.06;

        }

        if(line3){

            line3.rotation.y += 0.06;

        }

        if(!lockShiled1){

          shield1Pivot.rotation.z = shieldPivotRotationZ;

        }

        if(!lockShiled2){

          shield2Pivot.rotation.z = shieldPivotRotationZ;

        }

        if(!lockShiled3){

          shield3Pivot.rotation.z = shieldPivotRotationZ;

        }

        if(shield1){

          shield1.lookAt(new THREE.Vector3(0,0,1000))

        }

        if(shield2){

            if(!lockLookShieled){

              shield2.lookAt(new THREE.Vector3(0,0,1000))

            }

        }

        if(shield3){

          shield3.lookAt(new THREE.Vector3(0,0,1000))

        }

        composer.render();

        TWEEN.update()

    };



animate();



let tasks = [];



const clearTasks =()=> {

    TWEEN.removeAll()

    for(let i=-0; i < tasks.length; i++){

        clearTimeout(tasks[i])

    }

}



let endRotation = camera.quaternion.clone();



const cameraSetup = (point, duration)=>{

  new TWEEN.Tween( camera.rotation ).to(point, duration? duration : 2000 ).start();

}



window.step1 = ()=>{





    let cameraFrom = {

        x: camera.position.x,

        y: camera.position.y,

        z: camera.position.z

    }



    new TWEEN.Tween(cameraFrom).to({ x: 0, y: 10, z: 30}, 2000)

    .easing(TWEEN.Easing.Cubic.Out)        

    .onUpdate(function () {

        camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

    }).start();



    orbit1.visible = false;

    orbit2.visible = false;

    orbit3.visible = false;

    shield1.visible = false;

    shield2.visible = false;

    shield3.visible = false;



}



window.step2 = ()=>{



    clearTasks();



    cameraSetup({x: 0, y: 0, z: 0}, 1450)



    let cameraFrom = {

        x: camera.position.x,

        y: camera.position.y,

        z: camera.position.z

    }



    new TWEEN.Tween(cameraFrom).to({ x: -20, y: 0, z: 80}, 2000)

    .easing(TWEEN.Easing.Cubic.Out)

    .onComplete(function(){

    })       

    .onUpdate(function () {

        camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

    }).start();



    orbit1.visible = true;

    orbit2.visible = true;

    orbit3.visible = true;

    shield1.visible = true;

    shield2.visible = true;

    shield3.visible = true;

    lockShiled2 = false;

    lockLookShieled = false;

}



window.step3 = ()=>{



      clearTasks();

      lockShiled2 = true;

      orbit1.visible = false;

      orbit2.visible = true;

      orbit3.visible = false;

      shield3.visible = false;

      shield1.visible = false;

      lockLookShieled = true;

      shield2.position.copy(shield2StartPosition);



      new TWEEN.Tween(camera.position)

      .to({ z: 80, x: 0, y: 0 }, 500)

      .onUpdate(function(){

         camera.lookAt(new THREE.Vector3(shield2StartPosition.x, shield2StartPosition.y, shield2StartPosition.z ))

      }).onComplete(function() {

          const curve = new THREE.CatmullRomCurve3( [

              new THREE.Vector3( 0, 0, 80 ),

              new THREE.Vector3( -60, 0, 70 ),

              new THREE.Vector3( -80, 0, 40 ),

              new THREE.Vector3( -60, 0, 10 ),

              new THREE.Vector3( -28, 0, 2 ),

          ]);



          const points = curve.getPoints( 500 );



          for (var i = 0; i < 500; i++) {

              (function(index) {

                  tasks.push(setTimeout(function() { 

                      if(step === 3){

                          camera.position.copy(points[index])

                          shield2.lookAt(camera.position)

                          camera.lookAt(new THREE.Vector3(shield2StartPosition.x, shield2StartPosition.y, shield2StartPosition.z ))

                      }



                  }, i * 5));

              })(i);

          }

      }).start()



      new TWEEN.Tween(shield2Pivot.rotation)

      .onUpdate(function(){

          shield2.lookAt(camera.position)

      })

      .to({ z: 0 }, 1000)

      .start();



}



window.step4 = ()=>{



    clearTasks();

    cameraSetup({x: 0, y: 0, z: 0},1450)

    orbit1.visible = true;

    orbit2.visible = true;

    orbit3.visible = true;

    shield1.visible = true;

    shield2.visible = true;

    shield3.visible = true;

    lockShiled2 = false;

    lockLookShieled = false;



    shield1.position.z = 0

    shield1.position.x = 6; 

    shield1.position.y = 20; 



    shield2Pivot.rotation.z = 0;

    lockShiled2 = false;

    shield2.position.z = 0.5; 

    shield2.position.x = 20; 

    shield2.position.y = 12; 



    lockShiled3 = false;

    shield3.position.z = 1; 

    shield3.position.x = 25.9; 

    shield3.position.y = -3; 



    let cameraFrom = {

        x: camera.position.x,

        y: camera.position.y,

        z: camera.position.z

    }



    new TWEEN.Tween(cameraFrom).to({ x: 30, y: 19, z: 80}, 2000)

    .easing(TWEEN.Easing.Cubic.Out)        

    .onUpdate(function () {

        camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

    }).start();



}



window.step5 = ()=>{



    clearTasks();



    shield2.position.x = 23.5; 

    shield2.position.y = 0; 

    shield2.position.z = 0.65; 

    lockShiled2 = true;

    orbit1.visible = false;

    orbit2.visible = true;

    orbit3.visible = false;

    shield3.visible = false;

    shield1.visible = false;

    lockLookShieled = true;



      let cameraFrom = {

          x: camera.position.x,

          y: camera.position.y,

          z: camera.position.z

      }

      // new TWEEN.Tween(cameraFrom)

      // .to({ z: 80, x: 0, y: 0 }, 1000)

      // .onUpdate(function(){



      //     camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);



      // }).onComplete(function() {

   

          new TWEEN.Tween( camera.rotation ).to({ x: 0, y: -0.2, z: 0}, 500)

          .onComplete(function() {

              new TWEEN.Tween(cameraFrom)

              .to({ z: 2, x: 28, y: 0 }, 2000)

              .delay(500)

              .onUpdate(function(){



                  camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

                  shield2.lookAt(camera.position)

                  camera.lookAt(shield2.position)



              }).start();

              // const curve = new THREE.CatmullRomCurve3( [

              //     new THREE.Vector3( 0, 0, 80 ),

              //     new THREE.Vector3( 60, 0, 70 ),

              //     new THREE.Vector3( 80, 0, 40 ),

              //     new THREE.Vector3( 60, 0, 10 ),

              //     new THREE.Vector3( 28, 0, 2 ),

              // ]);

              // const points = curve.getPoints( 500 );

              // for (var i = 0; i < 500; i++) {

              //         (function(index) {

              //             tasks.push(setTimeout(function() { 

              //                 camera.position.copy(points[index])

              //                 shield2.lookAt(camera.position)

              //                 camera.lookAt(shield2.position)



              //                 console.log(points[index])

                              

              //         }, i * 5));

              //     })(i);

              // }

          })

          .start();



  //    }).start()

      

  cameraSetup({ x: -0.2347317536273475, y: 0.07404189755525604, z : 0.017688367787720344},1000)



      new TWEEN.Tween(shield2Pivot.rotation)

      .onUpdate(function(){

          shield2.lookAt(camera.position);

      })

      .to({ z: 0 }, 500)

      .start();





}



window.step6 = ()=>{

    clearTasks();

    cameraSetup({x: 0, y: 0, z: 0},1450)

    let cameraFrom = {

        x: camera.position.x,

        y: camera.position.y,

        z: camera.position.z

    }



    new TWEEN.Tween(cameraFrom).to({ x: -20, y: 0, z: 80}, 4000)

    .easing(TWEEN.Easing.Cubic.Out)

    .onComplete(function(){

    })       

    .onUpdate(function () {

        camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

    }).start();



    orbit1.visible = true;

    orbit2.visible = true;

    orbit3.visible = true;

    shield1.visible = true;

    shield2.visible = true;

    shield2.position.copy(shield2StartPosition)

    shield3.visible = true;

    lockShiled2 = false;

    lockLookShieled = false;



}



window.step7 = ()=>{



    shield2.position.x = 23.5; 

    shield2.position.y = 0; 

    shield2.position.z = 0.5; 

    lockShiled2 = true;

    orbit1.visible = false;

    orbit2.visible = true;

    orbit3.visible = false;

    shield3.visible = false;

    shield1.visible = false;

    lockLookShieled = true;





      new TWEEN.Tween(camera.position)

      .to({ z: 80, x: 28, y: 0 }, 900)

      .onComplete(function() {

          const curve = new THREE.CatmullRomCurve3( [

              new THREE.Vector3( 28, 0, 80 ),

              new THREE.Vector3( 60, 0, 70 ),

              new THREE.Vector3( 80, 0, 40 ),

              new THREE.Vector3( 60, 0, 10 ),

              new THREE.Vector3( 28, 0, 0.5 ),

          ], false, 'catmullrom');



          const points = curve.getPoints( 500 );



          for (var i = 0; i < 500; i++) {

              (function(index) {

                  tasks.push(setTimeout(function() { 

                      camera.position.copy(points[index])

                      shield2.lookAt(camera.position)

                      camera.lookAt(shield2.position)

                  }, i * 5));

              })(i);

          }

      }).start();



      new TWEEN.Tween(shield2Pivot.rotation)

      .onUpdate(function(){

          shield2.lookAt(camera.position)

      })

      .to({ z: 0 }, 1000)

      .start();



}



window.step8 = ()=>{

    clearTasks();

    cameraSetup({x: 0, y: 0, z: 0},1050)

    orbit1.visible = true;

    orbit2.visible = true;

    orbit3.visible = true;

    shield1.visible = true;

    shield2.visible = true;

    shield3.visible = true;

    lockShiled2 = false;

    lockLookShieled = false;



    shield1.position.z = 0

    shield1.position.x = 6; 

    shield1.position.y = 20; 



    shield2Pivot.rotation.z = 0;

    lockShiled2 = false;

    shield2.position.z = 0.5; 

    shield2.position.x = 20; 

    shield2.position.y = 12; 



    lockShiled3 = false;

    shield3.position.z = 1; 

    shield3.position.x = 25.8; 

    shield3.position.y = -3; 



    let cameraFrom = {

        x: camera.position.x,

        y: camera.position.y,

        z: camera.position.z

    }



    new TWEEN.Tween(cameraFrom).to({ x: 30, y: 19, z: 80}, 4000)

    .easing(TWEEN.Easing.Cubic.Out)        

    .onUpdate(function () {

        camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

    }).start();

}



window.step9 = ()=>{



  let cameraFrom = {

        x: camera.position.x,

        y: camera.position.y,

        z: camera.position.z

    }



    new TWEEN.Tween(cameraFrom).to({ x: -10, y: 10, z: 40}, 4000)

    .easing(TWEEN.Easing.Cubic.Out)        

    .onUpdate(function () {

        camera.position.set(cameraFrom.x, cameraFrom.y, cameraFrom.z);

    }).start();



    orbit1.visible = false;

    orbit2.visible = false;

    orbit3.visible = false;

    shield1.visible = false;

    shield2.visible = false;

    shield3.visible = false;



}



// window.onscroll = function() {onscroll()};





// function onscroll() {



//   let scrollTop = document.body.scrollTop;

//   if(step != 1 && scrollTop > 0 && scrollTop < 1000){

//         step = 1;

//         step1();

//   }else if(step != 2 && scrollTop > 1000 && scrollTop < 2000){

//         step = 2;

//         step2();

//   } else if(step != 3 && scrollTop > 2000 && scrollTop < 3000){

//         step = 3;

//         step3();

//   }else if(step != 4 && scrollTop > 3000 && scrollTop < 4000){

//         step = 4;

//         step4();

//   } 

//   else if(step != 5 && scrollTop > 4000 && scrollTop < 5000){

//         step = 5;

//         step5();

//   }else if(step != 6 && scrollTop > 5000 && scrollTop < 6000){

//         step = 6;

//         step6();

//   }else if(step != 7 && scrollTop > 6000 && scrollTop < 7000){

//         step = 7;

//         step7();

//   }else if(step != 8 && scrollTop > 7000 && scrollTop < 8000){

//         step = 8;

//         step8();

//   }else if(step != 9 && scrollTop > 8000 && scrollTop < 9000){

//         step = 9;

//         step9();

//   }

// }
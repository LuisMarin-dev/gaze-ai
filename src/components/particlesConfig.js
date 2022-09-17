const particlesConfig = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
    
    
    
    
//     background: {
//         color: {
//         value: "#0d47a1"
//         },
//         position: "50% 50%",
//         repeat: "no-repeat",
//         size: "cover"
//     },
//     fullScreen: {
//         zIndex: 1
//     },
//     interactivity: {
//         events: {
//         onClick: {
//             enable: true,
//             mode: "push"
//         },
//         onHover: {
//             enable: true,
//             mode: "repulse",
//             parallax: {
//             force: 60
//             }
//         }
//         },
//         modes: {
//         attract: {
//             distance: 200,
//             duration: 0.4,
//             easing: "ease-out-quad",
//             factor: 1,
//             maxSpeed: 50,
//             speed: 1
//         },
//         bounce: {
//             distance: 200
//         },
//         bubble: {
//             distance: 400,
//             duration: 2,
//             mix: false,
//             opacity: 0.8,
//             size: 40,
//             divs: {
//             distance: 200,
//             duration: 0.4,
//             mix: false,
//             selectors: []
//             }
//         },
//         connect: {
//             distance: 80,
//             links: {
//             opacity: 0.5
//             },
//             radius: 60
//         },
//         grab: {
//             distance: 400,
//             links: {
//             blink: false,
//             consent: false,
//             opacity: 1
//             }
//         },
//         push: {
//             default: true,
//             groups: [],
//             quantity: 4
//         },
//         remove: {
//             quantity: 2
//         },
//         repulse: {
//             distance: 200,
//             duration: 0.4,
//             factor: 100,
//             speed: 1,
//             maxSpeed: 50,
//             easing: "ease-out-quad",
//             divs: {
//             distance: 200,
//             duration: 0.4,
//             factor: 100,
//             speed: 1,
//             maxSpeed: 50,
//             easing: "ease-out-quad",
//             selectors: []
//             }
//         },
//         trail: {
//             delay: 1,
//             pauseOnStop: false,
//             quantity: 1
//         },
//         light: {
//             area: {
//             gradient: {
//                 start: {
//                 value: "#ffffff"
//                 },
//                 stop: {
//                 value: "#000000"
//                 }
//             },
//             radius: 1000
//             },
//             shadow: {
//             color: {
//                 value: "#000000"
//             },
//             length: 2000
//             }
//         }
//         }
//     },
//     particles: {
//         color: {
//         value: "#ffffff"
//         },
//         move: {
//         attract: {
//             rotate: {
//             x: 600,
//             y: 1200
//             }
//         },
//         enable: true,
//         outModes: {
//             bottom: "out",
//             left: "out",
//             right: "out",
//             top: "out"
//         }
//         },
//         number: {
//         density: {
//             enable: true
//         },
//         value: 80
//         },
//         opacity: {
//         value: {
//             min: 0.1,
//             max: 0.5
//         },
//         animation: {
//             enable: true,
//             speed: 1,
//             minimumValue: 0.1
//         }
//         },
//         shape: {
//         options: {
//             type: "circle"
//         },
//         stroke: {
//         width: 1,
//         color: {
//             value: "#ffffff",
//             animation: {
//             h: {
//                 count: 0,
//                 enable: false,
//                 offset: 0,
//                 speed: 1,
//                 decay: 0,
//                 sync: true
//             },
//             s: {
//                 count: 0,
//                 enable: false,
//                 offset: 0,
//                 speed: 1,
//                 decay: 0,
//                 sync: true
//             },
//             l: {
//                 count: 0,
//                 enable: false,
//                 offset: 0,
//                 speed: 1,
//                 decay: 0,
//                 sync: true
//             }
//             }
//         }
//         },
//         life: {
//         count: 0,
//         delay: {
//             random: {
//             enable: false,
//             minimumValue: 0
//             },
//             value: 0,
//             sync: false
//         },
//         duration: {
//             random: {
//             enable: false,
//             minimumValue: 0.0001
//             },
//             value: 0,
//             sync: false
//         }
//         },
//         roll: {
//         darken: {
//             enable: false,
//             value: 0
//         },
//         enable: false,
//         enlighten: {
//             enable: false,
//             value: 0
//         },
//         mode: "vertical",
//         speed: 25
//         },
//         tilt: {
//         random: {
//             enable: false,
//             minimumValue: 0
//         },
//         value: 0,
//         animation: {
//             enable: false,
//             speed: 0,
//             decay: 0,
//             sync: false
//         },
//         direction: "clockwise",
//         enable: false
//         },
//         twinkle: {
//         lines: {
//             enable: false,
//             frequency: 0.05,
//             opacity: 1
//         },
//         particles: {
//             enable: false,
//             frequency: 0.05,
//             opacity: 1
//         }
//         },
//         wobble: {
//         distance: 5,
//         enable: false,
//         speed: {
//             angle: 50,
//             move: 10
//         }
//         },
//         orbit: {
//         animation: {
//             count: 0,
//             enable: false,
//             speed: 1,
//             decay: 0,
//             sync: false
//         },
//         enable: false,
//         opacity: 1,
//         rotation: {
//             random: {
//             enable: false,
//             minimumValue: 0
//             },
//             value: 45
//         },
//         width: 1
//         },
//         links: {
//         blink: false,
//         color: {
//             value: "#ffffff"
//         },
//         consent: false,
//         distance: 150,
//         enable: true,
//         frequency: 1,
//         opacity: 0.4,
//         shadow: {
//             blur: 5,
//             color: {
//             value: "#000"
//             },
//             enable: false
//         },
//         triangles: {
//             enable: false,
//             frequency: 1
//         },
//         width: 1,
//         warp: false
//         },
//         repulse: {
//         random: {
//             enable: false,
//             minimumValue: 0
//         },
//         value: 0,
//         enabled: false,
//         distance: 1,
//         duration: 1,
//         factor: 1,
//         speed: 1
//         }
//     }
// }
};

export default particlesConfig;
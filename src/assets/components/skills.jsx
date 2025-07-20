import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import Ski from "../images/skills.jpg"; // Import your background image
// Add your image URLs here (must be 20 for 20 nodes)
const imageUrls = [
  // Example: "/images/html.png", "/images/css.png", ...
  // Add 20 image URLs

  "https://cdn-icons-png.freepik.com/512/1051/1051277.png",
  "https://avatars.githubusercontent.com/u/15658638?s=280&v=4",
  "data:image/png;base64,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",
  "https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgDni61fImLmbS7es-r4Vsbc782DmR-HvmQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s",
  "https://www.vikingsoftware.com/wp-content/uploads/2024/02/TypeScript.png",
  "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVWag0nHlBNb6_TUZiYlecLT1H1NlNo7HCA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s",
  "https://www.gstatic.com/devrel-devsite/prod/v6dc4611c4232bd02b2b914c4948f523846f90835f230654af18f87f75fe9f73c/firebase/images/touchicon-180.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBF3Y9fCMAXThIDtSvY1BBw42OUAe5JMwww&s",
  "https://www.websolutions.cy/technologies/mysql/logo.svg",
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png",
  "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  "https://img.freepik.com/premium-vector/ejs-logo-design-initial-letter-ejs-monogram-logo-using-hexagon-shape_1101554-15620.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUyPLMCrdBvL7byu5KkMnOssbQigrkiRxZw&s",
 "https://education.oracle.com/file/general/p-80-java.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0XwqNREm1RVcGEQKDcHnP4OXBgFHhXnzVg&s",
  "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwYxDpVOISehethDPyaFlmTdTmqzXgaiCJEYKPrxuQTqquyYA.pf_1bjrIbtmAOr65Y-&format=source",
  "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoFD4gEokJXA9Ig5ZtDjDODQqmgqDfsy7TQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNwuGGAwYtd0_8iwfTDux5skNIlUkWjncNQ&s",
  "https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/800px-R_logo.svg.png",
  "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
  "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UV1Cbe9faBYh9b9aeKzsNasDRhQaLepJCQ&s", 
  "https://niltechedu.com/blog/wp-content/uploads/2021/11/python-programming-language.png",
  "https://w7.pngwing.com/pngs/724/306/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program-thumbnail.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
];

const generateData = () => {
  const n = 29;
  const r = 30;
  return Array.from({ length: n }, (_, i) => ({
    r,
    group: i % 4 + 1,
    img: imageUrls[i % imageUrls.length], // assign image
  }));
};

const loadImages = (urls) =>
  Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = url;
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
        })
    )
  );

const Skills = ({ width }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const height = width;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const nodes = generateData().map((d) => Object.create(d));

    loadImages(nodes.map((d) => d.img)).then((images) => {
      nodes.forEach((d, i) => {
        d.imageObj = images[i];
      });

      const simulation = d3
        .forceSimulation(nodes)
        .alphaTarget(0.3)
        .velocityDecay(0.1)
        .force("x", d3.forceX().strength(0.01))
        .force("y", d3.forceY().strength(0.01))
        .force("collide", d3.forceCollide().radius((d) => d.r + 1).iterations(3))
        .force("charge", d3.forceManyBody().strength((d, i) => (i ? 0 : -width * 2 / 3)))
        .on("tick", ticked);

      canvas.addEventListener("pointermove", pointermoved, { passive: false });

      function pointermoved(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        nodes[0].fx = x - width / 2;
        nodes[0].fy = y - height / 2;
      }

      function ticked() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        for (let i = 1; i < nodes.length; ++i) {
          const d = nodes[i];
          context.save();
          context.beginPath();
          context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
          context.closePath();
          context.clip();

          if (d.imageObj) {
            // Draw image centered in the circle
            context.drawImage(
              d.imageObj,
              d.x - d.r,
              d.y - d.r,
              d.r * 2,
              d.r * 2
            );
          } else {
            // fallback color fill
            context.fillStyle = color(d.group);
            context.fill();
          }
          context.restore();
        }
        context.restore();
      }

      return () => {
        simulation.stop();
        canvas.removeEventListener("pointermove", pointermoved);
      };
    });
  }, [width]);

  return <canvas ref={canvasRef} width={width} height={width} style={{ cursor: "grab"  , backgroundImage: `url(${Ski})`  , backgroundSize: "cover" }} />;
};

export default Skills;
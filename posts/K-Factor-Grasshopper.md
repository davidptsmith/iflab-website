---
title: 'Rhino 3D + Grasshopper Sheet Metal Bending'
ShowProject : true
date: 'JANUARY 21, 2019'
excerpt: 'Extending the capabilities of Rhino and factors in material elasticity for the calculation of bend allowances and deductions to produce accurate unroll patterns for fabrication. '
cover_image: '/images/posts/BLOG_Grasshopper K Factor/1.jpg'
tags: ["Shop Drawings", "Fabrication", "Cladding", "Sheet Metal", "Grasshopper", "Computational Design", "Rhino 3D"]
---

<div >
<iframe class="VideoMD"  src="https://www.youtube.com/embed/qbtK5vVbkjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

In exploration of sheet metal workflow solutions with Denmac, if/LAB developed a script that takes mechanical engineering calculations and applies them through Rhino’s visual scripting plugin, Grasshopper. This process extends the capabilities of Rhino and factors in material elasticity for the calculation of bend allowances and deductions to produce accurate unroll patterns for fabrication. 

### What is bend allowance? 

Metal is a ductile material that can be bent along a straight axis to form different shapes. The process occurs by applying pressure that overcomes tensile and compressive material stresses that forces the material to hold a given form. Bending metal does not occur in sharp corners but rather around a radius where the stretching of the material needs to be calculated to accurately to ensure the folded shape is the same as the designed form. 

When calculating bends, the neutral axis is considered to allow for the elasticity of the material and is the axis in cross section where the material is not in either tension or compression. This varies depending on the specific material and fabrication process and needs to be considered in the unrolled panel increasing the complexity of the bending process.

The k factor is a common process that refers to the calculation that estimates the neutral axis location and allows for a more accurate dimensioning. By creating a script to deal with this complex function, factory standards can be developed, updated and applied with ease.

By using Grasshopper, if/LAB was able to use a number of engineering functions that extend the capabilities of Rhino within sheet metal fabrication. This custom workflow enabled accurately modelled and unrolled sheet metal for Denmac’s fabrication requirements without the need for additional software such as Solidworks or Autodesk Inventor. 

This parametric process allows for direct manipulation of the design model to occur whilst maintaining all links within the computational design workflow. This includes updating the rest of the components in the script downstream, such as the dimensions, annotations and costing functions giving fast feedback on the effect of design changes. 

By holding the information within the same program there is no requirement for extra data management or file formats exchange between software simplifying the process and reducing time. Working with these engineering functions we can more accurately design for sheet metal components where results can vary dramatically and simplification of the process can lead to errors that are both time consuming and costly to fix. 
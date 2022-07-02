---
title: 'Implementing GIS Workflows for Architectural Visualisation'
ShowProject : true
date: 'AUGUST 16, 2019'
excerpt: 'Using GIS to reveal the ‘bigger picture’ by presenting data connected to its geographical context'
cover_image: '/images/posts/BLOG_GIS_Post_1/2.jpg'
tags: ["Rhino 3d", "Grasshopper", "GIS", "Automation", "Modelling"]
---

In Western Australia, there is a wealth of geometric data collected on everything from landscape topography, building footprints, road networks to seasonal flood mapping. This powerful repository of data is mostly made available to the public through open data initiatives like data.gov.wa.

At ifLAB we work with GIS data within Architectural modelling environments to assist in both decision making and visualisation processes. Our GIS software of choice, the open source QGIS has some 3D capability, but compared to 3D modelling software, it is not a productive environment to work on new designs. We prefer workflows that utilise each software package for the task it best suited for, so while QGIS is excellent as aligning different types of Data, when it comes to 3D modelling, Rhino is our tool of choice. 

An example of how we are using GIS data in practice is generating an accurate topological mesh with a high-resolution texture generative from satellite imagery. When we download satellite imagery, we get the option to download a text file that contains information about its geographical coordinates. We use QGIS to align the image with other datasets we have downloaded from data.gov.wa (for example, topographic contours). This avoids having to convert between mapping projections manually. 

Exporting everything as a shape file, we bring the information into Grasshopper with our current GIS Plugin on choice; Meerkat. Meerkat has an interface to trim down shape files to a given area. By setting the area to be larger than the downloaded satellite image, we can get all the information we need without processing data from the entire state and overloading the system. 


Within Grasshopper we make a mesh of the points brought in from the contours, and trim it down to the extent of the satellite image. Using the excellent mapping tools from the Human Plugin, it’s simple work to give the new mesh planar mapping, set to the location and dimensions of the original Satellite Image bounds. Within grasshopper we programmatically make a new material with the original image and bake the mesh with the new material and the correct mapping. 

The output is similar to a Google Earth 3D model, only because we control the sources of data we use, we have control over the process, and can use it for modelling the way we would use any other piece of geometry in Rhino. We can also rely on the result to be as accurate as the sources of data that we use.

The end result with other sources of data overlaid becomes a useful tool to see how designs respond to their context, with a range of other applications.
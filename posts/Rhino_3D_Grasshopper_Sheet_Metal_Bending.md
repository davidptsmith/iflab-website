---

title: 'Rhino 3D + Grasshopper Sheet Metal Bending'

ShowProject : true

date: 'JANUARY 21, 2019'

excerpt: 'Extending the capabilities of Rhino and factors in material
elasticity for the calculation of bend allowances and deductions to
produce accurate unroll patterns for fabrication. '

cover_image: '/images/posts/Rhino_3D_Grasshopper_Sheet_Metal_Bending/cover_image.jpg' 

tags: ["Shop Drawings", "Fabrication", "Cladding", "Sheet Metal",
"Grasshopper", "Computational Design", "Rhino 3D", “Workflows”,
“Automation”]

---

If/Lab has extended the functionality of Rhino 3D allow for the
modelling and unrolling of sheet metal. This bypasses the need for
additional solid modelling software to accurately design for the
fabrication of sheet metal and allows for seamless integration of design
models from file to fabrication reducing time, cost and tolerances.

Rhino 3D is a NURBS based surface modeller offering precise surface
representation through mathematically calculations. The software was
designed for industrial design, ship building, manufacturing and rapid
prototyping and has been adopted in architectural design. Due to its
development for complex surface representation it is less suited for the
solid modelling required for sheet metal calculations with other
software such as Autodesk’s Inventor and Solidworks being better suited
to this form of design. However, having to manage information between
different programs introduces complexity and the potential for errors
and a breakdown in parametric workflows whilst increasing costs in the
use of multiple proprietary software’s the training workers.

<div >
	<iframe class="VideoMD"  src="https://www.youtube.com/embed/qbtK5vVbkjo" title="If/Lab YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

In exploration of sheet metal workflow solutions with Denmac, if/Lab
developed a script that takes mechanical engineering calculations and
applies them through Rhino’s visual scripting plugin, Grasshopper. This
process extends the capabilities of Rhino and factors in material
elasticity for the calculation of bend allowances and deductions to
produce accurate unroll patterns for fabrication.

<figure  class="mx-auto w-full ">
	<img src="/images/posts/Rhino_3D_Grasshopper_Sheet_Metal_Bending/Rhino_3D_Grasshopper_Sheet_Metal_Bending_2.jpg" class="mx-auto w-full object-cover m-0" alt="if/Lab Project image for Rhino 3D Grasshopper Sheet Metal Bending" />
</figure>

**What is bend allowance?**

Metal is a ductile material that can be bent along a straight axis to
form different shapes. The process occurs by applying pressure that
overcomes tensile and compressive material stresses that forces the
material to hold a given form. Bending metal does not occur in sharp
corners but rather around a radius where the stretching of the material
needs to be calculated to accurately to ensure the folded shape is the
same as the designed form.

When calculating bends the neutral axis is considered to allow for the
elasticity of the material and is the axis in cross section where the
material is not in either tension or compression. This varies depending
on the specific material and fabrication process and needs to be
considered in the unrolled panel increasing the complexity of the
bending process.

The k factor is a common process that refers to the calculation that
estimates the neutral axis location and allows for a more accurate
dimensioning. By creating a script to deal with this complex function,
factory standards can be developed, updated and applied with ease.

<figure  class="mx-auto w-full ">
	<img src="/images/posts/Rhino_3D_Grasshopper_Sheet_Metal_Bending/Rhino_3D_Grasshopper_Sheet_Metal_Bending_3.jpg" class="mx-auto w-full object-cover m-0" alt="if/Lab Project image for Rhino 3D Grasshopper Sheet Metal Bending" />
</figure>

<figure  class="mx-auto w-full ">
	<img src="/images/posts/Rhino_3D_Grasshopper_Sheet_Metal_Bending/Rhino_3D_Grasshopper_Sheet_Metal_Bending_4.jpg" class="mx-auto w-full object-cover m-0" alt="if/Lab Project image for Rhino 3D Grasshopper Sheet Metal Bending" />
</figure>
<figure  class="mx-auto w-full ">
	<img src="/images/posts/Rhino_3D_Grasshopper_Sheet_Metal_Bending/Rhino_3D_Grasshopper_Sheet_Metal_Bending_5.jpg" class="mx-auto w-full object-cover m-0" alt="if/Lab Project image for Rhino 3D Grasshopper Sheet Metal Bending" />
</figure>

By using Rhino’s visual scripting plugin Grasshopper, if/Lab was able to
run engineering function that extends the capabilities of Rhino to
produce accurately modelled and unrolled sheet metal for Denmac’s
fabrication requirements without the need for additional software such
as Solidworks or Autodesk’s Inventor.

<figure  class="mx-auto w-full ">
	<img src="/images/posts/Rhino_3D_Grasshopper_Sheet_Metal_Bending/Rhino_3D_Grasshopper_Sheet_Metal_Bending_6.jpg" class="mx-auto w-full object-cover m-0" alt="if/Lab Project image for Rhino 3D Grasshopper Sheet Metal Bending" />
</figure>

This process works live and parametrically with referenced geometry from
Rhino allowing for adaptation to occur in a design and update other
downstream dimension, annotation and costing functions giving fast
feedback on the effect of design changes.

By holding the information within the same program there is no
requirement for extra data management or file formats exchange between
software simplifying the process and reducing time. Working with these
engineering functions can more accurately design for sheet metal
components where results can vary dramatically, and simplification of
the process can lead to errors that are both time consuming and costly
to fix.

Denmac: <https://www.denmac.net.au/>

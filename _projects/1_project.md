---
layout: page
title: Developments of Morphable UAAVs
description: A project for developing Morphable UAAVs, includinig mechanical design, modeling, and control.
img: assets/img/Development.jpg
importance: 1
category: Ph.D.
# related_publications: true
---

The groundbreaking research on morphable Unmanned Aerial-Aquatic Vehicles (UAAVs) is a monumental stride in robotics, symbolizing a major leap forward in human technological progress. 
The significance of this research lies in its far-reaching implications. UAAVs, blending aerial and aquatic functionalities, open new horizons for exploration, data collection, and environmental monitoring. This research paves the way for vital applications, including disaster response, search and rescue missions, and climate change studies. Beyond specific applications, the methodologies and insights derived offer valuable contributions to the broader understanding of autonomous systems, influencing a wide range of robotics research and sparking innovation.

<h2>Challenges</h2>
The mechanical design of UAAVs faces challenges due to substantial differences in air and water properties like density and viscosity, impacting performance and necessitating innovative designs for efficient dual-environment operation. Additionally, the variance in thrust layout between underwater and aerial modes and the absence of unified design guidelines pose significant hurdles.

Modeling UAAVs' dynamics separately for air and water is achievable, yet accurately representing the complex transition phase between these states in a dynamic model is challenging. Furthermore, the morphable nature of UAAVs, causing parameter variations due to structural changes, complicates the application of standard dynamic models.

Control strategies for UAAVs also present challenges, as existing frameworks in robotics often do not suit novel, morphable UAAV prototypes. These vehicles require tailored control strategies to match their unique dynamics.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Development.jpg" title="Morphable UAAVs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<h2>Mechanical Design</h2>
A generalized design method [(Huang et al., 2024)](https://allenhuangdongyue.github.io/publications/) incorperating optimization method for rotor based morphable UAAV is proposed, and two self-designed prototypes are constructed under the instruction of it. One is a coupling-tiltable UAAV (Mirs-Alioth), and the other one is a vectorial-tiltable UAAV with gearboxes ([TJ-FlyingFish](https://www.youtube.com/watch?v=EutFWW-mAUg)).

<h2>Modeling and Analysis</h2>
Dynamics corresponding to the prototype is established based on first principles and analyzed by a proposed method for the controller design. A Gazebo simulation incorporated with the parameters from system identification is constructed.

<h2>Underwater Control Strategy</h2>
A new type of controller integrating Nussbaum function-based switch control is proposed. This control strategy is implemented in Pixhawk Mini by PX4. Field tests and Hardware-In-The-Loop (HITL)-Gazebo simulation are cross validated, demonstrating the reasonableness of the model parameters and the effectiveness of the control framework.
For more details please find full paper [(Huang et al., 2023)](https://arxiv.org/abs/2312.07290).

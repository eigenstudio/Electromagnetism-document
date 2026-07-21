# Fundamentals of electromagnetics

Electromagnetics is the study of electric and magnetic fields and their interactions with charges, currents, and materials. It provides the theoretical foundation for analysing electrical machines, transformers, actuators, and other electromagnetic devices. The concepts introduced in this chapter form the basis for the finite element formulations used throughout this manual.


## What is electrostatics and why is it important?

Electrostatics is the branch of electromagnetics that studies stationary electric charges and the electric fields they produce. It introduces the concepts of electric charge, electric field, electric potential, and electric flux, which form the mathematical foundation of classical electromagnetic theory.

![](03_electrostatics.png)
**Figure 1:** Concept of Electric Charge in Electrostatics

Although BLDC motor analysis primarily involves magnetic fields, many of the governing mathematical concepts originate from electrostatics. Potential fields, conservation laws, and partial differential equations introduced here later appear in Maxwell's equations and finite element analysis.


## What is magnetostatics and why is it important?

Magnetostatics is the study of magnetic fields produced by steady electric currents and permanent magnets. It explains how magnetic fields are generated, distributed, and interact with magnetic materials to produce force and torque in electromagnetic devices.

![](04_magnetostatics.jpg)
**Figure 2:** Magnetic field lines 

Most electric machine simulations are based on magnetostatic or quasi-static assumptions. Magnetostatics provides the physical principles required to analyse magnetic flux distribution, magnetic saturation, electromagnetic force, torque production, and permanent magnet behaviour.


## What are the fundamental electromagnetic quantities?

Electromagnetic analysis is described using a set of physical quantities that characterise electric and magnetic fields. These quantities form the basis of Maxwell's equations and finite element formulations.

| Quantity | Symbol | SI Unit | Description |
|----------|--------|---------|-------------|
| Electric Charge | $Q$ | C | Source of electric fields. |
| Electric Field Intensity | $\mathbf{E}$ | V/m | Force acting on a unit positive charge. |
| Electric Potential | $V$ | V | Work required to move a unit charge. |
| Electric Flux Density | $\mathbf{D}$ | C/m² | Electric field within a material medium. |
| Magnetic Flux | $\Phi$ | Wb | Total magnetic field passing through a surface. |
| Magnetic Flux Density | $\mathbf{B}$ | T | Strength of the magnetic field. |
| Magnetic Field Intensity | $\mathbf{H}$ | A/m | Magnetizing force that produces magnetic flux. |
| Magnetomotive Force | $\mathcal{F}$ | At | Magnetic potential produced by current-carrying windings. |
| Magnetic Reluctance | $\mathcal{R}$ | At/Wb | Opposition to magnetic flux in a magnetic path. |


## How are these concepts used in electric machine analysis?

In permanent magnet BLDC machines, electric currents generate magnetic fields that interact with permanent magnets to produce torque. Finite element analysis solves for quantities such as magnetic flux density, flux linkage, back EMF, force, and torque using the electromagnetic principles introduced in this chapter.

![](05_usage.png)
**Figure 3:** Usage of the concepts of electrostatics and magnetostatics in BLDC motor simulations


## Summary

Electrostatics and magnetostatics together establish the fundamental concepts of classical electromagnetics. These principles provide the physical and mathematical framework for Maxwell's equations and the finite element methods used to analyse permanent magnet electrical machines.
# Introduction to the Theory Manual

This theory manual provides the scientific, mathematical, and numerical foundations of the electromagnetic finite element analysis (FEA) methods used for the simulation of permanent magnet brushless DC (BLDC) machines. It is intended to help readers understand the physical principles, governing equations, numerical formulations, and computational techniques that form the basis of the simulation framework.

Rather than serving as a software user guide, this manual focuses on the underlying theory of electromagnetic field analysis. The chapters progress from the fundamental laws of electrostatics and magnetostatics through Maxwell's equations, magnetic vector potential formulations, finite element methods, and finally to the calculation of electromagnetic quantities such as magnetic flux density, torque, back electromotive force (EMF), and machine losses.


## What does this manual explain?

This manual introduces the theoretical concepts required to understand the numerical simulation of permanent magnet electric machines. It explains how electromagnetic fields are generated, how they interact with magnetic materials and electrical currents, and how these physical phenomena are transformed into a finite element formulation that can be solved computationally.

The manual also presents the theoretical basis for post-processing techniques used to evaluate machine performance, including force, torque, flux linkage, back EMF, efficiency, and electromagnetic losses.


## Why is this theory important?

Electromagnetic machine simulation combines classical electromagnetic theory with numerical methods to predict the behaviour and performance of electric machines before physical prototypes are manufactured.

A thorough understanding of the governing equations and modelling assumptions allows simulation results to be interpreted correctly, numerical limitations to be recognised, and model accuracy to be improved through appropriate material properties, boundary conditions, mesh quality, and solver settings.


## What concepts are covered?

The theory manual includes:

- Electrostatic and magnetostatic field theory.
- Maxwell's equations and constitutive relations.
- Magnetic vector potential formulation.
- Permanent magnet BLDC machine theory.
- Finite element formulation for electromagnetic analysis.
- Transient rotor motion and moving interface techniques.
- Electromagnetic force, torque, and loss calculations.
- Post-processing methods and benchmark validation.

Mathematical concepts such as vector calculus, integral theorems, and vector identities are provided separately in the appendix for reference.


## General simulation workflow

The electromagnetic simulation process generally consists of the following stages:

1. Define the machine geometry.
2. Assign material properties.
3. Generate the finite element mesh.
4. Specify excitation and boundary conditions.
5. Assemble and solve the governing equations.
6. Compute electromagnetic field quantities.
7. Evaluate derived performance quantities through post-processing.
8. Validate the numerical results against analytical solutions, benchmark cases, or experimental measurements.

Each stage contributes to the accuracy and reliability of the final solution.


## Assumptions and limitations

The formulations presented in this manual are primarily intended for two-dimensional finite element analysis of permanent magnet electric machines.

Unless otherwise stated, the theory assumes:

- Continuum electromagnetic fields.
- SI units throughout the document.
- Homogeneous material properties within each region.
- Magnetic vector potential formulation.
- Two-dimensional cross-sectional modelling.
- Negligible end effects unless specifically discussed.

Certain physical phenomena, including manufacturing tolerances, structural deformation, thermal coupling, and three-dimensional leakage flux, are outside the scope of the fundamental formulations presented here.


## How should this manual be used?

The chapters are organised in a logical sequence, with each chapter building upon concepts introduced previously. Readers unfamiliar with electromagnetic field theory are encouraged to study the chapters in order, while experienced users may use the manual as a reference for specific formulations or derivations.

Together, the chapters provide a complete theoretical foundation for understanding the electromagnetic finite element methods and machine modelling techniques implemented throughout this project.
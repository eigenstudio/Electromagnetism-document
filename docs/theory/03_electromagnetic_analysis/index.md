# Theory Manual

## 1. Introduction to the Theory Manual
### 1.1 What Does This Manual Explain?
### 1.2 Why Is This Theory Important?
### 1.3 What Concepts Are Covered?
### 1.4 General Simulation Workflow
### 1.5 Assumptions and Limitations
### 1.6 How Should This Manual Be Used?


## 2. Fundamentals of Electrostatics
### 2.1 What Is Electrostatics?
### 2.2 Why Is Electrostatics Important?
### 2.3 Applications in Electromagnetic Engineering
### 2.4 Fundamental Electrostatic Quantities
#### 2.4.1 Electric Charge
#### 2.4.2 Charge Density
#### 2.4.3 Electric Field Intensity
#### 2.4.4 Electric Potential
#### 2.4.5 Electric Flux
#### 2.4.6 Electric Flux Density


## 3. Fundamentals of Magnetostatics
### 3.1 What Is Magnetostatics?
### 3.2 Why Is Magnetostatics Important?
### 3.3 Applications in Electromagnetic Engineering
### 3.4 Fundamental Magnetic Quantities
#### 3.4.1 Magnetic Flux
#### 3.4.2 Magnetic Flux Density
#### 3.4.3 Magnetic Field Intensity
#### 3.4.4 Magnetomotive Force
#### 3.4.5 Magnetic Reluctance
### 3.5 Relationship to Subsequent Chapters
### 3.6 Summary


## 4. Maxwell's Equations and Electromagnetic Field Theory
### 4.1 What Are Maxwell's Equations?
### 4.2 Why Are Maxwell's Equations Important?
### 4.3 Applications in Electromagnetic Engineering
### 4.4 Fundamental Equations
#### 4.4.1 Gauss's Law for Electricity
#### 4.4.2 Gauss's Law for Magnetism
#### 4.4.3 Faraday's Law
#### 4.4.4 Ampère-Maxwell Law
### 4.5 Constitutive Relations
### 4.6 Relationship to Finite Element Analysis
### 4.7 Relationship to Subsequent Chapters
### 4.8 Summary


## 5. Magnetic Vector Potential Formulation
### 5.1 What Is the Magnetic Vector Potential?
### 5.2 Why Is the Magnetic Vector Potential Used?
### 5.3 Two-Dimensional Formulation
### 5.4 Governing Equation
### 5.5 Permanent Magnet Formulation
### 5.6 Current Source Formulation
### 5.7 Weak Formulation
### 5.8 Relationship to Finite Element Analysis
### 5.9 Summary


## 6. Electrical Machine Fundamentals
### Working Principle of Electrical Machines
### Electromagnetic Induction
### Lorentz Force
### Electromechanical Energy Conversion
### Rotating Magnetic Field
### Torque Production
### Types of Electrical Machines
### DC Machines
### Induction Machines
### Synchronous Machines
### Permanent Magnet Synchronous Machines (PMSM)
### Brushless DC Machines (BLDC)
### Switched Reluctance Machines (SRM)
### Comparison of Machine Types
### Brushless DC (BLDC) Machines
### Construction
### Principle of Operation
### Advantages
### Limitations
### BLDC Motor Configurations
### Radial Flux BLDC Motors
### Inrunner BLDC Motor
### Outrunner BLDC Motor
### Axial Flux BLDC Motors
### Comparison of BLDC Configurations
### Relevance to This Manual


## 7. Motor Geometry and Components
### 7.1 Stator
### 7.2 Rotor
### 7.3 Airgap
### 7.4 Shaft
### 7.5 Permanent Magnets
### 7.6 Slot Types
#### 7.6.1 Open Slot
#### 7.6.2 Semi-Closed Slot
#### 7.6.3 Closed Slot
#### 7.6.4 Form-Wound Slot
### 7.7 Rotor Topologies
#### 7.7.1 Surface-Mounted Permanent Magnet Rotor
#### 7.7.2 Interior Permanent Magnet Rotor
#### 7.7.3 Spoke-Type Rotor
### 7.8 Machine Geometrical Parameters
#### 7.8.1 Outer Radius
#### 7.8.2 Inner Radius
#### 7.8.3 Stack Length
#### 7.8.4 Airgap Length
#### 7.8.5 Pole Number
#### 7.8.6 Slot Number
#### 7.8.7 Slot Opening
#### 7.8.8 Slot Depth
#### 7.8.9 Tooth Width
#### 7.8.10 Yoke Thickness
#### 7.8.11 Magnet Thickness
#### 7.8.12 Pole Arc Ratio


## 8. Windings and Electrical Excitation
### Sinusoidal Three-Phase Excitation
### Electrical Angle
### Relationship Between Mechanical and Electrical Angle
### Current Density Calculation
### Commutation Offset
### Electrical Frequency
### Rotor Speed
### Summary


## 9. Electromagnetic Materials
### 9.1 Air
### 9.2 Electrical Steel
### 9.3 Permanent Magnet Materials
### 9.4 Copper Conductors
### 9.5 Aluminium Rotor
### 9.6 Relative Permeability
### 9.7 Electrical Conductivity
### 9.8 Magnetization
### 9.9 B-H Characteristics
### 9.10 Magnetic Saturation
### 9.11 Remanence
### 9.12 Coercivity


## 10. Finite Element Formulation for Electromagnetic Analysis
### 10.1 Why Finite Element Analysis
### 10.2 Domain Discretization
### 10.3 Mesh Generation
### 10.4 Shape Functions
### 10.5 Weak Formulation
### 10.6 Galerkin Finite Element Method
### 10.7 Numerical Integration
### 10.8 Assembly of Global Equations
### 10.9 Boundary Conditions
### 10.10 Linear System Solution


## 11. Electromagnetic Governing Equations
### 11.1 Magnetostatic Formulation
### 11.2 Current Density Source
### 11.3 Permanent Magnet Source Term
### 11.4 Magnetic Reluctivity
### 11.5 Eddy Current Formulation
### 11.6 Lorentz Force
### 11.7 Maxwell Stress Tensor
### 11.8 Torque Calculation
### 11.9 Flux Linkage
### 11.10 Back Electromotive Force


## 12. Electromagnetic Simulation Setup
### 12.1 Purpose of Electromagnetic Simulation
### 12.2 Simulation Workflow
### 12.3 Simulation Types
#### 12.3.1 Magnetostatic Analysis
#### 12.3.2 Transient Magnetic Analysis
#### 12.3.3 Eddy Current Analysis
#### 12.3.4 Cogging Torque Analysis
#### 12.3.5 Open-Circuit Analysis
#### 12.3.6 Load Analysis
### 12.4 Geometry Import
### 12.5 Material Assignment
### 12.6 Mesh Generation
### 12.7 Boundary Conditions
### 12.8 Solver Configuration


## 13. Transient Simulation of Rotating Electric Machines
### 13.1 Rotor Motion
### 13.2 Sliding Interface
### 13.3 Mechanical and Electrical Angle
### 13.4 Rotor Speed
### 13.5 Electrical Frequency
### 13.6 Time Stepping
### 13.7 Commutation Offset
### 13.8 Sinusoidal Three-Phase Excitation
### 13.9 Parametric Studies
#### 13.9.1 RPM Sweep
#### 13.9.2 Current Sweep
#### 13.9.3 Frequency Sweep
#### 13.9.4 Airgap Sweep
#### 13.9.5 Magnet Thickness Sweep
#### 13.9.6 Slot Geometry Sweep


## 14. Electromagnetic Post-Processing and Performance Evaluation
### 14.1 Magnetic Flux Density
### 14.2 Magnetic Flux Lines
### 14.3 Airgap Flux Density
### 14.4 Radial and Tangential Flux Density
### 14.5 Airgap Pressure Distribution
### 14.6 Maxwell Stress Tensor
### 14.7 Lorentz Force
### 14.8 Electromagnetic Torque
### 14.9 Cogging Torque
### 14.10 Flux Linkage
### 14.11 Back Electromotive Force
### 14.12 Eddy Current Density
### 14.13 Copper Loss
### 14.14 Rotor Eddy Current Loss
### 14.15 Permanent Magnet Loss
### 14.16 Torque Ripple
### 14.17 Efficiency
### 14.18 Electromagnetic Field Visualization


## 15. Benchmark Validation and Numerical Verification
### 15.1 Validation Methodology
### 15.2 Benchmark Models
### 15.3 Mesh Independence Study
### 15.4 Time-Step Independence Study
### 15.5 Analytical Validation
### 15.6 Literature Comparison
### 15.7 Error Analysis
### 15.8 Performance Comparison


## Mathematical Appendix
### 16.1 Vector Calculus Identities
### 16.2 Coordinate Transformations
### 16.3 Cylindrical Coordinate System
### 16.4 Shape Functions
### 16.5 Numerical Integration
### 16.6 Electromagnetic Constants
### 16.7 Frequently Used Equations


## Symbols, Physical Constants, and References
### 17.1 Symbols and Notation
### 17.2 SI Units
### 17.3 Greek Symbols
### 17.4 Physical Constants
### 17.5 Acronyms and Abbreviations
### 17.6 References
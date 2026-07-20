# Symbols, Physical Constants, and References

This appendix summarizes the symbols, notation, SI units, physical constants, abbreviations, and conventions used throughout this theory manual. Unless otherwise stated, all quantities are expressed using the International System of Units (SI).

## Mathematical Notation

The following notation is adopted throughout the document.

| Symbol | Description |
|---|---|
| $a,\;b,\;c$ | Scalar quantities |
| $\mathbf{A},\;\mathbf{B}$ | Vector quantities |
| $\mathbf{K},\;\mathbf{M}$ | Matrices |
| $\hat{x},\hat{y},\hat{z}$ | Cartesian unit vectors |
| $\nabla$ | Nabla (vector differential operator) |
| $\nabla\cdot$ | Divergence |
| $\nabla\times$ | Curl |
| $\nabla^2$ | Laplacian |
| $\partial$ | Partial derivative |
| $\int$ | Integral |
| $\oint$ | Closed integral |
| $\sum$ | Summation |
| $\times$ | Vector (cross) product |
| $\cdot$ | Scalar (dot) product |



## Coordinate Systems

The following coordinate systems are used throughout the manual.

| Coordinate System | Variables | Typical Application |
|---|---|---|
| Cartesian | $(x,y,z)$ | Finite element formulation |
| Polar | $(r,\theta)$ | Two-dimensional machine geometry |
| Cylindrical | $(r,\theta,z)$ | Rotating electrical machines |

Positive angular rotation is defined as counter-clockwise unless otherwise stated.



## Electromagnetic Symbols

| Symbol | Quantity | SI Unit |
|---|---|---|
| $Q$ | Electric charge | C |
| $\rho$ | Volume charge density | C/m³ |
| $\sigma$ | Surface charge density | C/m² |
| $\lambda$ | Linear charge density | C/m |
| $\mathbf{E}$ | Electric field intensity | V/m |
| $\mathbf{D}$ | Electric flux density | C/m² |
| $V$ | Electric potential | V |
| $\Phi_E$ | Electric flux | N·m²/C |
| $\mathbf{H}$ | Magnetic field intensity | A/m |
| $\mathbf{B}$ | Magnetic flux density | T |
| $\Phi$ | Magnetic flux | Wb |
| $\mathbf{A}$ | Magnetic vector potential | Wb/m |
| $\mathbf{J}$ | Current density | A/m² |
| $\mathbf{M}$ | Magnetization | A/m |
| $\mu$ | Magnetic permeability | H/m |
| $\mu_0$ | Permeability of free space | H/m |
| $\mu_r$ | Relative permeability | – |
| $\varepsilon$ | Permittivity | F/m |
| $\varepsilon_0$ | Permittivity of free space | F/m |
| $\varepsilon_r$ | Relative permittivity | – |
| $\sigma_c$ | Electrical conductivity | S/m |



## Machine Parameters

| Symbol | Quantity | SI Unit |
|---|---|---|
| $N$ | Number of turns | – |
| $I$ | Current | A |
| $V$ | Voltage | V |
| $R$ | Resistance | Ω |
| $L$ | Inductance | H |
| $\lambda$ | Flux linkage | Wb-turn |
| $e$ | Back electromotive force (Back EMF) | V |
| $T$ | Electromagnetic torque | N·m |
| $\omega$ | Angular velocity | rad/s |
| $\omega_e$ | Electrical angular velocity | rad/s |
| $\omega_m$ | Mechanical angular velocity | rad/s |
| $\theta$ | Rotor angle | rad |
| $f$ | Electrical frequency | Hz |
| $p$ | Number of pole pairs | – |
| $g$ | Air-gap length | m |


## Physical Constants

| Constant | Symbol | Value |
|---|---|---:|
| Speed of light | $c$ | $2.99792458\times10^8$ m/s |
| Vacuum permeability | $\mu_0$ | $4\pi\times10^{-7}$ H/m |
| Vacuum permittivity | $\varepsilon_0$ | $8.854187817\times10^{-12}$ F/m |
| Elementary charge | $e$ | $1.602176634\times10^{-19}$ C |
| Electron mass | $m_e$ | $9.1093837015\times10^{-31}$ kg |
| Proton mass | $m_p$ | $1.67262192369\times10^{-27}$ kg |
| Boltzmann constant | $k_B$ | $1.380649\times10^{-23}$ J/K |
| Planck constant | $h$ | $6.62607015\times10^{-34}$ J·s |



## Common SI Prefixes

| Prefix | Symbol | Factor |
|---|---|---:|
| giga | G | $10^9$ |
| mega | M | $10^6$ |
| kilo | k | $10^3$ |
| milli | m | $10^{-3}$ |
| micro | μ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| pico | p | $10^{-12}$ |



## Common Abbreviations

| Abbreviation | Description |
|---|---|
| AC | Alternating Current |
| BLDC | Brushless Direct Current |
| CAD | Computer-Aided Design |
| EM | Electromagnetic |
| EMF | Electromotive Force |
| FEM | Finite Element Method |
| FEA | Finite Element Analysis |
| FFT | Fast Fourier Transform |
| MMF | Magnetomotive Force |
| MPC | Multi-Point Constraint |
| PDE | Partial Differential Equation |
| PM | Permanent Magnet |
| PETSc | Portable, Extensible Toolkit for Scientific Computation |
| SI | International System of Units |



## General Conventions

Unless explicitly stated otherwise, the following conventions are adopted throughout this manual.

- All quantities are expressed in SI units.
- Magnetic fields are represented using the magnetic vector potential formulation.
- Positive current follows the right-hand rule.
- Positive rotor rotation is counter-clockwise.
- Time is measured in seconds.
- Angular quantities are expressed in radians.
- Machine geometry is represented using a two-dimensional cross-section unless otherwise specified.
- Material properties are assumed homogeneous within each finite element region.


# Electromagnetic Appendix

The electromagnetic concepts presented in this appendix provide the mathematical foundation for the governing equations used throughout this manual. These equations describe the behaviour of electric and magnetic fields, material properties, electromagnetic induction, and energy conversion in electrical machines.

---

## Fundamental Electromagnetic Quantities

### Electric Field Intensity

The electric field intensity represents the force experienced by a unit positive charge.

$$
\mathbf{E}
=
\frac{\mathbf{F}}{q}
$$

**SI Unit:** V/m (or N/C)

---

### Electric Flux Density

Electric flux density relates the electric field to the permittivity of the medium.

$$
\mathbf{D}
=
\varepsilon\mathbf{E}
$$

**SI Unit:** C/m²

---

### Magnetic Field Intensity

Magnetic field intensity represents the magnetizing force responsible for producing magnetic flux.

$$
\mathbf{H}
=
\frac{\mathbf{B}}{\mu}
$$

**SI Unit:** A/m

---

### Magnetic Flux Density

Magnetic flux density describes the magnetic flux passing through a unit area.

$$
\mathbf{B}
=
\mu\mathbf{H}
$$

**SI Unit:** Tesla (T)

---

### Magnetic Flux

Magnetic flux represents the total magnetic field passing through a surface.

$$
\Phi
=
\int_S
\mathbf{B}\cdot d\mathbf{S}
$$

**SI Unit:** Weber (Wb)

---

### Current Density

Current density represents the electric current flowing per unit cross-sectional area.

$$
\mathbf{J}
=
\sigma\mathbf{E}
$$

**SI Unit:** A/m²

---

## Maxwell's Equations

### Gauss's Law

Electric charges act as sources of electric fields.

$$
\nabla\cdot\mathbf{D}
=
\rho
$$

---

### Gauss's Law for Magnetism

Magnetic monopoles do not exist.

$$
\nabla\cdot\mathbf{B}
=
0
$$

---

### Faraday's Law

A time-varying magnetic field induces an electric field.

$$
\nabla\times\mathbf{E}
=
-
\frac{\partial\mathbf{B}}{\partial t}
$$

---

### Ampère-Maxwell Law

Electric currents generate magnetic fields.

$$
\nabla\times\mathbf{H}
=
\mathbf{J}
+
\frac{\partial\mathbf{D}}{\partial t}
$$

For low-frequency electrical machine analysis,

$$
\nabla\times\mathbf{H}
=
\mathbf{J}
$$

---

## Constitutive Relations

### Magnetic Constitutive Relation

For linear magnetic materials,

$$
\mathbf{B}
=
\mu\mathbf{H}
$$

For nonlinear magnetic materials,

$$
\mathbf{B}
=
\mu(\mathbf{H})\mathbf{H}
$$

---

### Permanent Magnet Relation

For permanent magnets,

$$
\mathbf{B}
=
\mu\mathbf{H}
+
\mathbf{B_r}
$$

or equivalently,

$$
\mathbf{B}
=
\mu(\mathbf{H}+\mathbf{M})
$$

---

### Electrical Conductivity

Current density is proportional to the applied electric field.

$$
\mathbf{J}
=
\sigma\mathbf{E}
$$

---

## Magnetic Vector Potential

Since

$$
\nabla\cdot\mathbf{B}
=
0
$$

the magnetic flux density may be expressed as

$$
\mathbf{B}
=
\nabla\times\mathbf{A}
$$

For two-dimensional electromagnetic analysis,

$$
\mathbf{A}
=
A_z\hat{z}
$$

---

## Governing Electromagnetic Equation

Using the magnetic vector potential formulation,

$$
\nabla\times
\left(
\nu
\nabla\times\mathbf{A}
\right)
=
\mathbf{J}
+
\nabla\times\mathbf{M}
$$

where

$$
\nu
=
\frac{1}{\mu}
$$

For two-dimensional electrical machine analysis,

$$
\nabla\cdot
(\nu\nabla A_z)
=
-
J_z
-
\left(
\frac{\partial M_x}{\partial y}
-
\frac{\partial M_y}{\partial x}
\right)
$$

---

## Electromagnetic Force and Torque

### Lorentz Force

The force acting on a moving electric charge is

$$
\mathbf{F}
=
q
(
\mathbf{E}
+
\mathbf{v}\times\mathbf{B}
)
$$

For a current-carrying conductor,

$$
\mathbf{F}
=
I
\mathbf{L}
\times
\mathbf{B}
$$

---

### Maxwell Stress Tensor Torque

The electromagnetic torque is commonly evaluated using the Maxwell Stress Tensor.

$$
T
=
\frac{Lr^2}{\mu_0}
\int_0^{2\pi}
B_rB_\theta
\,d\theta
$$

---

## Electromagnetic Induction

### Flux Linkage

$$
\lambda
=
N
\Phi
=
N
\int_S
\mathbf{B}
\cdot
d\mathbf{S}
$$

---

### Back Electromotive Force

According to Faraday's Law,

$$
e
=
-
\frac{d\lambda}{dt}
$$

---

## Power and Losses

### Copper Loss

$$
P_{cu}
=
I^2R
$$

---

### Joule Heating

$$
Q
=
\mathbf{J}\cdot\mathbf{E}
$$

---

### Electromagnetic Power

Electrical input power

$$
P_{in}
=
VI
$$

Mechanical output power

$$
P_{out}
=
T\omega
$$

---

### Motor Efficiency

$$
\eta
=
\frac{P_{out}}
{P_{in}}
\times100\%
$$

---

## Common Electromagnetic Constants

| Quantity | Symbol | Value |
|----------|--------|--------|
| Permeability of Free Space | $\mu_0$ | $4\pi\times10^{-7}$ H/m |
| Permittivity of Free Space | $\varepsilon_0$ | $8.854\times10^{-12}$ F/m |
| Speed of Light | $c$ | $2.998\times10^8$ m/s |
| Elementary Charge | $e$ | $1.602\times10^{-19}$ C |

---

## Common Electromagnetic Units

| Quantity | Symbol | SI Unit |
|----------|--------|----------|
| Electric Field | $\mathbf{E}$ | V/m |
| Electric Flux Density | $\mathbf{D}$ | C/m² |
| Magnetic Flux Density | $\mathbf{B}$ | T |
| Magnetic Field Intensity | $\mathbf{H}$ | A/m |
| Magnetic Flux | $\Phi$ | Wb |
| Current Density | $\mathbf{J}$ | A/m² |
| Magnetic Vector Potential | $\mathbf{A}$ | Wb/m |
| Flux Linkage | $\lambda$ | Wb-turn |
| Back EMF | $e$ | V |
| Torque | $T$ | N·m |
| Power | $P$ | W |
| Efficiency | $\eta$ | % |

---

These equations constitute the fundamental mathematical framework for electromagnetic field analysis. They are referenced throughout the theoretical development of Maxwell's equations, magnetic vector potential formulations, finite element analysis, and the computation of engineering quantities such as magnetic flux density, flux linkage, Back EMF, torque, and efficiency.
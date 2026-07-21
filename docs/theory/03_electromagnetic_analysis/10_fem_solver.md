# Finite Element Solver

The electromagnetic behaviour of a BLDC motor is governed by Maxwell's equations, which describe the interaction between electric and magnetic fields. Due to the complex geometry of electrical machines, nonlinear magnetic materials, and continuously rotating components, analytical solutions are generally not feasible.

The Finite Element Method (FEM) provides a numerical framework for solving these governing equations over the motor geometry. By discretizing the computational domain into a large number of finite elements, the solver accurately predicts magnetic field distribution, flux linkage, electromagnetic torque, Back EMF, and other performance quantities.

---

## Why is transient simulation required?

Unlike static electromagnetic problems, the magnetic field inside a BLDC motor continuously changes as the rotor rotates and the stator windings are energized. The electromagnetic state therefore depends on both space and time, making transient analysis essential.

Transient simulation solves the governing equations at successive time steps while continuously updating the rotor position and electrical excitation. This enables the accurate prediction of dynamic quantities such as torque ripple, Back EMF, flux linkage, phase currents, and electromagnetic losses.

![[16_material.png]]
**Figure 1:** Transient simulation summary

The mechanical rotor position is given by

$$
\theta_m(t)=\omega_m t+\theta_0
$$

where

- $\theta_m$ = Mechanical rotor angle (rad)
- $\omega_m$ = Mechanical angular velocity (rad/s)
- $\theta_0$ = Initial rotor position (rad)

The corresponding electrical angle is

$$
\theta_e=\frac{P}{2}\theta_m
$$

where

- $P$ = Number of poles

The electrical angle determines the phase relationship between the rotating magnetic field and the stator excitation throughout the transient simulation.

---

## What are the important governing equations?

The finite element solver is based on Maxwell's equations, which describe the behaviour of electric and magnetic fields within the motor. These equations form the theoretical foundation for electromagnetic analysis.

For electrical machine analysis, the operating frequencies are sufficiently low that displacement currents can be neglected. This assumption is known as the **magnetoquasistatic approximation**, allowing the governing equations to be simplified while maintaining excellent accuracy.

### Gauss's Law

![[17_gauss.png]]
**Figure 2:** Gauss's Law of Electrostatics

Gauss's Law relates electric charge to the electric field.

$$
\nabla \cdot \mathbf{D} = \rho
$$

where

- $\mathbf{D}$ = Electric flux density (C/m²)
- $\rho$ = Electric charge density (C/m³)

---

### Gauss's Law for Magnetism

![[18_gauss_magnet.png]]
**Figure 2:** Gauss Law of magnetism

Magnetic monopoles do not exist; therefore, magnetic field lines always form closed loops.

$$
\nabla \cdot \mathbf{B}=0
$$

where

- $\mathbf{B}$ = Magnetic flux density (T)

This equation permits the introduction of the magnetic vector potential used by the finite element solver.

---

### Faraday's Law

![[19_faraday.png]]
**Figure 3:** Faraday's Law of Electromagnetism

Faraday's Law describes electromagnetic induction and forms the basis for Back EMF generation.

$$
\nabla\times\mathbf{E}
=
-\frac{\partial\mathbf{B}}{\partial t}
$$

where

- $\mathbf{E}$ = Electric field intensity (V/m)
- $\mathbf{B}$ = Magnetic flux density (T)

As the rotor rotates, the changing magnetic flux induces voltage within the stator windings according to this law.

---

### Ampère's Law

![[20_ampere.png]]
**Figure 4:** Ampere's Law of Electromagnetism

The complete Ampère-Maxwell equation is

$$
\nabla\times\mathbf{H}
=
\mathbf{J}
+
\frac{\partial\mathbf{D}}{\partial t}
$$

where

- $\mathbf{H}$ = Magnetic field intensity (A/m)
- $\mathbf{J}$ = Current density (A/m²)

For BLDC motor analysis, the displacement current is negligible.

$$
\frac{\partial\mathbf{D}}{\partial t}\approx0
$$

The governing equation therefore becomes

$$
\nabla\times\mathbf{H}
=
\mathbf{J}
$$

This equation represents the primary governing equation for magnetostatic and transient magnetic field analysis.

---

### Constitutive relations

The electromagnetic field quantities are related through the constitutive equations of the material.

Magnetic field relation

$$
\mathbf{B}=\mu\mathbf{H}
$$

Electric field relation

$$
\mathbf{D}=\varepsilon\mathbf{E}
$$

Current density relation

$$
\mathbf{J}=\sigma\mathbf{E}
$$

where

- $\mu$ = Magnetic permeability (H/m)
- $\varepsilon$ = Electrical permittivity (F/m)
- $\sigma$ = Electrical conductivity (S/m)

These equations define how different materials respond to applied electric and magnetic fields.

---

### Permanent magnet formulation

Permanent magnets introduce an additional source of magnetic flux independent of the stator current.

The magnetic constitutive relation becomes

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

where

- $\mathbf{B_r}$ = Remanent magnetic flux density (T)
- $\mathbf{M}$ = Magnetization vector (A/m)

This formulation enables the permanent magnets to be incorporated directly into the finite element model.

---

### Magnetic vector potential formulation

Since

$$
\nabla\cdot\mathbf{B}=0
$$

the magnetic flux density can be expressed as

$$
\mathbf{B}
=
\nabla\times\mathbf{A}
$$

where

- $\mathbf{A}$ = Magnetic vector potential (Wb/m)

For two-dimensional electrical machine analysis, only the out-of-plane component exists.

$$
\mathbf{A}
=
A_z\hat{z}
$$

This reduces the vector problem to solving a single scalar unknown throughout the computational domain.

---

### Governing partial differential equation

Substituting the constitutive relations into Maxwell's equations gives the governing electromagnetic equation.

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
\nu=\frac{1}{\mu}
$$

is the magnetic reluctivity.

For two-dimensional BLDC motor analysis, the equation reduces to

$$
\nabla\cdot
\left(
\nu\nabla A_z
\right)
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

This is the governing partial differential equation solved by the finite element solver.

---

## How is the geometry meshed?

Before the governing equations can be solved, the motor geometry must be discretized into a finite number of small elements. This process is known as **mesh generation**.

For two-dimensional electromagnetic analysis, triangular finite elements are typically employed because they accurately represent complex machine geometries while maintaining computational efficiency.

Within each triangular element, the magnetic vector potential is approximated using interpolation (shape) functions.

$$
A(x,y)
=
\sum_{i=1}^{3}
N_i(x,y)A_i
$$

where

- $N_i$ = Shape function associated with node $i$
- $A_i$ = Magnetic vector potential at node $i$

The complete computational mesh consists of thousands of interconnected elements. Increasing the mesh density generally improves solution accuracy, particularly within the air-gap, permanent magnets, and tooth-tip regions where magnetic field gradients are highest.

Mesh convergence studies are commonly performed to ensure that the computed solution is independent of the selected mesh resolution.

---

## How are the electromagnetic quantities calculated?

Once the magnetic vector potential has been obtained, all engineering quantities are derived from the field solution.

### Magnetic flux density

$$
\mathbf{B}
=
\nabla\times\mathbf{A}
$$

**Unit:** Tesla (T)

Magnetic flux density represents the strength of the magnetic field throughout the motor and is one of the primary quantities computed during finite element analysis.

---

### Magnetic field intensity

$$
\mathbf{H}
=
\frac{\mathbf{B}}{\mu}
$$

**Unit:** A/m

Magnetic field intensity represents the magnetizing force required to establish the magnetic flux within the material.

---

### Flux linkage

$$
\lambda
=
N
\int_S
\mathbf{B}\cdot d\mathbf{S}
$$

**Unit:** Wb-turn

Flux linkage measures the total magnetic flux linked by a stator winding and forms the basis for Back EMF calculation.

---

### Back electromotive force (Back EMF)

$$
e
=
-
\frac{d\lambda}{dt}
$$

**Unit:** V

Back EMF represents the voltage induced in the stator windings due to the changing magnetic flux produced by rotor motion.

---

### Electromagnetic torque

The electromagnetic torque is evaluated using the Maxwell Stress Tensor (MST) method.

$$
T
=
\frac{Lr^2}{\mu_0}
\int_0^{2\pi}
B_rB_\theta\,d\theta
$$

where

- $L$ = Stack length
- $r$ = Air-gap radius
- $B_r$ = Radial flux density
- $B_\theta$ = Tangential flux density

**Unit:** N·m

Torque represents the mechanical output produced by the interaction between the stator magnetic field and the permanent magnets.

---

### Copper loss

$$
P_{cu}
=
I^2R
$$

**Unit:** W

Copper loss represents the resistive heating produced within the stator windings.

---

### Efficiency

$$
\eta
=
\frac{P_{out}}
{P_{in}}
\times100\%
$$

**Unit:** %

Efficiency measures how effectively the motor converts electrical input power into useful mechanical output power.

---

## Summary

The Finite Element Method enables accurate numerical solution of the electromagnetic field equations governing BLDC motor operation. The solver begins by discretizing the machine geometry into finite elements, after which Maxwell's equations are solved using the magnetic vector potential formulation.

The computed magnetic vector potential is subsequently used to determine important engineering quantities such as magnetic flux density, flux linkage, Back EMF, electromagnetic torque, losses, and efficiency. These results provide a comprehensive description of the electromagnetic performance of the motor and form the basis for design evaluation and optimization.
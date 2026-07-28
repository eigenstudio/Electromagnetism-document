# Validation Case 6: Force and Torque on a Current-Carrying Conductor in a Uniform Magnetic Field

## Objective

This validation verifies the electromagnetic force and torque computation implemented in the solver.

Unlike previous validation cases that verify the magnetic field solution, this benchmark validates the post-processing algorithms used to compute force and torque from the electromagnetic field.

## Physics Being Validated

- Lorentz force
- Electromagnetic torque
- Current-field interaction
- Force direction
- Maxwell stress tensor implementation (if applicable)
- Torque integration

## Problem Description

A straight current-carrying conductor is placed inside a uniform external magnetic field.

The current flows perpendicular to the magnetic field, producing a constant Lorentz force on the conductor.

To validate the torque solver, the conductor is positioned at a known radial distance from the center of rotation so that both force and torque can be computed analytically.

## Governing Equations

Lorentz force

$$
\mathbf{F}=I\mathbf{L}\times\mathbf{B}
$$

Force magnitude

$$
F=BIL
$$

where

- B = magnetic flux density
- I = conductor current
- L = active conductor length

Electromagnetic torque

$$
T=rF
$$

or

$$
T=rBIL
$$

where

- r = distance of conductor from rotation center

## Geometry

A rectangular air region contains:

- one straight conductor
- imposed uniform magnetic field
- conductor located at radius r

The magnetic field is perpendicular to the conductor current.

## Expected Field Distribution

Since the external magnetic field is uniform,

- magnetic flux density remains constant throughout the air region
- the conductor does not significantly disturb the field
- force density is uniform inside the conductor

## Validation Procedure

1. Apply a known current to the conductor.
2. Apply a uniform magnetic field.
3. Solve the magnetostatic problem.
4. Compute the total Lorentz force.
5. Compute the electromagnetic torque.
6. Compare numerical results with the analytical solution.

## Expected Results

The numerical force should satisfy

$$
F_{FEM}\approx BIL
$$

The numerical torque should satisfy

$$
T_{FEM}\approx rBIL
$$

The force direction must follow the right-hand rule.

## Acceptance Criteria

- Force error < 1%
- Torque error < 1%
- Correct force direction
- Linear relationship between current and force
- Linear relationship between magnetic field and torque

## Validation Results

| Quantity | Analytical | FEM | Error |
|----------|------------|-----|-------|
| Force | | | |
| Torque | | | |

## Interpretation

Agreement between analytical and numerical results verifies that the solver correctly computes electromagnetic forces and torque. This validation confirms both the force density formulation and the numerical integration used by the torque post-processing routines.

## Validation Statement

The solver accurately predicts electromagnetic force and torque produced by the interaction of a current-carrying conductor with a uniform magnetic field.

## Conclusion

This benchmark validates the complete force and torque computation chain used for motor performance prediction.
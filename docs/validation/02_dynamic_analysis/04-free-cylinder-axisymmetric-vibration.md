# Free cylinder with axisymmetric vibration

## What is the purpose of this validation case?

Modal validation for a free cylindrical structure with axisymmetric vibration behavior. This case is intended to validate radial, axial, and circumferential coupling in dynamic analysis.

This validation case is included to check whether ESD produces a dynamic response that is consistent with an accepted benchmark, analytical solution, or reference finite element result.

## What type of analysis is used?

This case uses dynamic structural analysis. Depending on the benchmark, the analysis may involve modal analysis or transient response analysis.

For modal validation, the main objective is to compare natural frequencies and mode shapes. For transient validation, the main objective is to compare the displacement-time response and damping behavior.

## What model information should be defined?

The validation page should define the geometry, material properties, density, element type, mesh details, loads, boundary conditions, and analysis settings required to reproduce the benchmark.

Use this section to record:

- Geometry dimensions
- Material properties
- Density
- Element type
- Mesh details
- Boundary conditions
- Dynamic loading, if applicable
- Solver settings
- Output quantities

## What results should be compared?

The results should be compared against the selected benchmark or analytical reference values.

For modal analysis, compare:

- Natural frequencies
- Mode shapes
- Rigid body modes, where applicable
- Frequency error percentage

For transient analysis, compare:

- Displacement-time response
- Peak displacement
- Period of oscillation
- Damping decay
- Error against analytical or reference solution

## What should users check in ESD?

Users should verify that the ESD setup matches the benchmark definition before comparing results. The most important checks are boundary conditions, material density, unit consistency, mesh quality, and solver settings.

The validation is successful when the ESD result is within the acceptable tolerance defined for the benchmark or reference solution.

<!-- ## What figures should be included?

Add screenshots or figures for:

![Geometry and boundary condition screen](./figures/nafems-fv41-free-cylinder-with-axisymmetric-vibration-geometry.png)

![Mesh screen](./figures/nafems-fv41-free-cylinder-with-axisymmetric-vibration-mesh.png)

![Mode shape or response plot](./figures/nafems-fv41-free-cylinder-with-axisymmetric-vibration-result.png) -->

## What reference should be used?

Add the benchmark source, analytical solution, or published reference used for comparison.

Reference to be added:

- Benchmark/source name:
- Reference value:
- Accepted tolerance:
- Notes:

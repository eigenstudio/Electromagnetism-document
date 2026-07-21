# 2.1 Tapered Membrane Under End Load
  
## Objective
  
This practice problem validates a linear elastic membrane solver using the NAFEMS tapered membrane benchmark from report LSB2.
  
The objective is to compute the direct normal stress, $\sigma_{xx}$, at Point B and compare it with the published NAFEMS reference value.
  
This case is useful for checking plane stress behavior, load application on an inclined or tapered domain, boundary constraint handling, and mesh convergence.

![](attachments/1test.pdf)

**Figure 1.** Definition of validation problem

## Problem Overview
  
The model consists of a tapered membrane subjected to a uniformly distributed horizontal load at one end.
  
Because the membrane height reduces along its length, the stress is expected to increase toward the narrower loaded edge.
  
The benchmark checks whether the numerical solver can capture this stress variation accurately under linear elastic plane stress assumptions.
  
## Benchmark Source
  
| Field            | Value                                  |
| ---------------- | -------------------------------------- |
| Benchmark origin | NAFEMS report LSB2                     |
| Unit system      | m, kN                                  |
| Analysis type    | Linear elastic membrane analysis       |
| Primary output   | Direct stress $\sigma_{xx}$ at Point B |
| Reference value  | 61.3 MPa                               |
## Geometry
  
The geometry is a two-dimensional tapered membrane. The membrane has a length of 4 m. Its height varies from 2 m at one end to 1 m at the other end. A constant thickness of 0.1 m is assigned to the membrane for plane stress analysis.
  
| Parameter     | Value                      |
| ------------- | -------------------------- |
| Length        | $4$ m                      |
| Height        | Tapers from $2$ m to $1$ m |
| Thickness     | $0.1$ m                    |
| Geometry type | 2D tapered membrane        |
## Material Properties

  The material is assumed to be homogeneous, isotropic, and linearly elastic.
  
These assumptions are appropriate for this benchmark because the goal is to validate the finite element formulation rather than material nonlinearity.
  
| Property                 | Value                    |
| ------------------------ | ------------------------ |
| Young’s modulus, $(E)$   | $210 \times 10^3$ MPa    |
| Poisson’s ratio, $(\nu)$ | $0.3$                    |
| Material model           | Linear elastic isotropic |
## Loading Conditions
  A uniformly distributed horizontal load is applied along the outer edge DE.
  
The applied load is equivalent to a pressure of $100$ MPa, or $10$ MN/m when expressed as a line load over the membrane thickness.
  
| Load type           | Value      |
| ------------------- | ---------- |
| Load direction      | Horizontal |
| Loaded edge         | DE         |
| Distributed load    | $10$ MN/m  |
| Equivalent pressure | $100$ MPa  |
  
## Boundary Conditions
 
The boundary conditions prevent rigid body motion while allowing the membrane to deform under the applied end load.
  
Edge AC is constrained in the horizontal direction. Point B is constrained in the vertical direction.
  
| Location | Constraint                           |
| -------- | ------------------------------------ |
| Edge AC  | Zero displacement in the x-direction |
| Point B  | Zero displacement in the y-direction |
  
## Finite Element Setup
  The problem is solved using plane stress finite elements. Both quadrilateral and triangular elements can be used for this benchmark. In this study, Continuous Galerkin elements of degree 1 and degree 2 are compared.
 
| Item                    | Description                              |
| ----------------------- | ---------------------------------------- |
| Element family          | Continuous Galerkin                      |
| Element degrees studied | CG1 and CG2                              |
| Element type            | Plane stress triangles or quadrilaterals |
| Initial mesh            | 2 × 2 uniform mesh                       |
| Quantity monitored      | $\sigma_{xx}$ at Point B                 |
## Stress Distribution
  Figure 2 shows the computed $\sigma_{xx}$ stress distribution for the tapered membrane using a mesh with $718$ nodes.
  The stress increases along the loading direction as the membrane becomes narrower.
  The smooth variation of stress across the domain indicates a stable finite element solution.
  
![](attachments/30.png)

**Figure 2.** Direct stress $\sigma_{xx}$ distribution in the tapered membrane.
## Mesh Convergence Study
  
The stress at Point B was evaluated using progressively refined meshes.
 
 The purpose of the convergence study is to verify that the computed stress approaches the NAFEMS reference value as the mesh density increases.
  
Both CG1 and CG2 formulations were tested to compare the influence of interpolation degree on convergence.
  
## Continuous Galerkin Degree 1 Results
  
| Number of nodes | $\sigma_{xx}$ (MPa) | Error (%) |
| --------------: | ------------------: | --------: |
|              24 |               59.18 |      3.46 |
|             104 |               60.66 |      1.04 |
|             142 |               61.05 |      0.41 |
|             718 |               61.24 |      0.10 |
|            2760 |               61.31 |      0.02 |
|           11250 |               61.33 |      0.05 |
  
The CG1 solution shows steady convergence toward the reference value.
  
The error decreases significantly as the mesh is refined, reaching less than 0.1% for the finer meshes.
  
## Continuous Galerkin Degree 2 Results
  
| Number of nodes | $\sigma_{xx}$ (MPa) | Error (%) |
| --------------: | ------------------: | --------: |
|              24 |               59.21 |      3.41 |
|             104 |               60.89 |      0.67 |
|             142 |               61.09 |      0.34 |
|             718 |               61.27 |      0.05 |
|            2760 |               61.32 |      0.03 |
|           11250 |               61.33 |      0.05 |
  
The CG2 formulation converges slightly faster than CG1 for the same number of nodes.  This is expected because the higher-order interpolation can represent the stress variation more accurately on coarser meshes.
  
## Convergence Plot
  
Figure 3 compares the mesh convergence behavior of CG1 and CG2 elements against the NAFEMS reference value.
  
Both formulations approach the benchmark value of 61.3 MPa as the mesh is refined.
 
The final results show that both element formulations produce essentially the same converged solution.


![](attachments/31.png)

**Figure 3.** Mesh convergence of $\sigma_{xx}$ at Point B compared with the NAFEMS reference value.
  
## Converged Result
 
The finest mesh produced a direct stress value of $61.33$ MPa at Point B.
  
This result is in excellent agreement with the NAFEMS benchmark value of $61.30$ MPa.
  
| Quantity                          |     Value |
| --------------------------------- | --------: |
| Computed $\sigma_{xx}$ at Point B | 61.33 MPa |
| NAFEMS benchmark value            | 61.30 MPa |
| Relative error                    |     0.05% |
  
## Interpretation of Results
  
The computed stress converges toward the benchmark value with mesh refinement.
  
The CG2 formulation reaches high accuracy with fewer nodes, while CG1 requires additional mesh refinement to achieve comparable accuracy.
  
For sufficiently fine meshes, both formulations converge to the same final stress value.
  
## Validation Statement
  
The Linear Elastic Membrane Solver successfully reproduces the NAFEMS tapered membrane benchmark.
 
The converged stress at Point B is $61.33$ MPa, compared with the reference value of $61.30$ MPa.
  
The relative error of $0.05\%$ confirms that the solver implementation is accurate for this linear elastic membrane problem.
  
## Conclusion
  
This practice problem validates the solver for a tapered membrane subjected to an end load.  The results confirm correct implementation of plane stress behavior, distributed loading, displacement constraints, stress recovery, and mesh convergence. This benchmark provides confidence for applying the solver to more complex structural validation cases.
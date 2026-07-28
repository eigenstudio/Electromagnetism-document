# Validation Case 7: Nonlinear B-H Curve and Magnetic Saturation

## Objective

This validation verifies the nonlinear magnetic material implementation, including the B-H curve interpolation and magnetic saturation behaviour.

Unlike previous linear material benchmarks, this case confirms that the solver correctly handles field-dependent permeability.

## Physics Being Validated

- Nonlinear magnetic materials
- B-H curve interpolation
- Magnetic saturation
- Variable permeability
- Nonlinear finite element solution
- Flux redistribution

## Problem Description

A steel block is positioned near a current-carrying conductor.

The conductor generates a magnetic field that magnetizes the steel.

As the excitation current increases, the steel initially exhibits high permeability. Once the material approaches saturation, additional increases in current produce only small increases in magnetic flux density.

## Governing Equations

Ampère's Law

$$
\nabla\times\mathbf{H}=\mathbf{J}
$$

Material constitutive relation

$$
\mathbf{B}=\mu(H)\mathbf{H}
$$

where

$$
\mu(H)
$$

is obtained from the supplied B-H curve.

## Geometry

The computational domain contains

- circular current-carrying conductor
- rectangular steel block
- surrounding air region

The steel is positioned close enough to experience a strong magnetic field.

## Expected Physical Behaviour

### Low excitation

- steel permeability is high
- magnetic flux concentrates inside the steel
- field lines bend toward the steel

### Medium excitation

- permeability gradually decreases
- magnetic field spreads into surrounding air
- local saturation begins near edges

### High excitation

- steel reaches saturation
- permeability approaches that of free space
- further increase in current produces only a small increase in B

## Validation Procedure

1. Import the nonlinear B-H curve.
2. Perform simulations for increasing current values.
3. Measure peak flux density inside the steel.
4. Plot B versus excitation current.
5. Compare the numerical response with the supplied material curve.

## Expected Results

The solution should exhibit three distinct regions:

- linear magnetization
- transition region
- saturation region

The magnetic flux density should asymptotically approach the saturation flux density defined by the material.

The magnetic field distribution should show increasing flux leakage as saturation develops.

## Validation Metrics

- Peak magnetic flux density
- Relative permeability
- Convergence of nonlinear iterations
- B-H curve agreement
- Saturation onset current

## Acceptance Criteria

- Numerical B-H response follows the supplied material curve
- Saturation begins at the expected field level
- Nonlinear solver converges for all operating points
- Peak B error < 2%

## Validation Results

| Current | Expected B | FEM B | Error |
|---------|------------|-------|-------|
| | | | |

## Interpretation

The agreement between the simulated magnetic response and the reference B-H curve demonstrates that nonlinear material properties are correctly implemented. The observed saturation behaviour confirms accurate interpolation of the material data and stable nonlinear convergence.

## Validation Statement

The solver accurately reproduces nonlinear magnetic behaviour, including permeability variation and magnetic saturation.

## Conclusion

This benchmark validates the nonlinear magnetic material model required for accurate simulation of electric machine cores operating near saturation.
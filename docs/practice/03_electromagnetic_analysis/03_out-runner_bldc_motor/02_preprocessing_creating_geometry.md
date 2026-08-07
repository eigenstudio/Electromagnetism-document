# Outrunner BLDC Motor Simulation — 2. Preprocessing & Creating Geometry

## Overview

In the preprocessing phase of an outrunner BLDC motor simulation, you define the geometric dimensions of the motor components, assign electromagnetic material properties, and generate the finite element mesh required for solver computation.

| Workflow Stage | Part 1 | Part B–D (Current) | Part 3 | Part 4 |
| :--- | :--- | :--- | :--- | :--- |
| **Section** | Creating Project | **Preprocessing & Geometry** | Solver & Excitations | Post-Processing & Reporting |



# PART B — Defining the Motor Geometry

After entering the electromagnetic workspace, the default outrunner BLDC motor geometry is displayed in the 3D viewport. The **Geometry** panel on the left side of the workspace is used to define all major dimensions of the motor. As parameters are updated, the software automatically regenerates the motor geometry and prepares it for mesh generation.

The geometry is defined by configuring the motor topology, shaft, rotor, stator slot, and airgap dimensions.


## B.1 — Define the Motor Topology

The **Topology** section defines the fundamental configuration of the motor. These parameters determine the number of poles, stator slots, winding phases, and stack length used to generate the motor geometry.

To define the motor topology:

1. In the left navigation panel, click **Geometry → Topology**.
2. Enter the required values for **Number of Slots**, **Number of Phases**, **Number of Poles**, and **Stack Length**.
3. Click **Save** to apply the configuration.

| Parameter | Description |
|-----------|-------------|
| Number of Slots | Total stator slots |
| Number of Phases | Number of electrical phases |
| Number of Poles | Total rotor poles |
| Stack Length | Axial length of the motor |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## B.2 — Define the Shaft

The shaft dimensions determine the central supporting shaft around which the rotor rotates.

To define the shaft:

1. In the left navigation panel, click **Geometry → Shaft**.
2. Enter the required **Shaft Radius**.
3. Click **Save** to apply the shaft dimension.

| Parameter | Description |
|-----------|-------------|
| Shaft Radius | Radius of the motor shaft |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## B.3 — Define the Rotor

The **Rotor** section controls the dimensions of the rotor back iron and permanent magnets.

To define the rotor:

1. In the left navigation panel, click **Geometry → Rotor**.
2. Enter the rotor dimensions (**Magnet Thickness**, **Rotor Inner Radius**, **Rotor Outer Radius**, **Magnet Fill Factor**).
3. Click **Save** to update the rotor configuration.

| Parameter | Description |
|-----------|-------------|
| Magnet Thickness | Thickness of the permanent magnets |
| Rotor Inner Radius | Inner radius of the rotor |
| Rotor Outer Radius | Outer radius of the rotor |
| Magnet Fill Factor | Percentage of rotor surface occupied by magnets |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## B.4 — Define the Stator Slot Geometry

The stator slot dimensions determine the winding space and tooth geometry of the stator.

To define the stator slot geometry:

1. In the left navigation panel, click **Geometry → Slot**.
2. Select the required **Slot Type** from the dropdown menu.
3. Enter the slot parameters (**LS0–LS2**, **CS0**, **WS0–WS2**).
4. Click **Save** to update the slot dimensions.

| Parameter | Description |
|-----------|-------------|
| Slot Type | Stator slot profile |
| LS0–LS2 | Slot length parameters |
| CS0 | Slot opening parameter |
| WS0–WS2 | Slot width parameters |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## B.5 — Define the Airgap

The airgap is the radial distance between the rotor and stator and has a significant influence on the electromagnetic performance of the motor.

To define the airgap:

1. In the left navigation panel, click **Geometry → Airgap**.
2. Enter the required **Airgap Radius**.
3. Click **Save** to apply the airgap setting.

| Parameter | Description |
|-----------|-------------|
| Airgap Radius | Radial airgap between the rotor and stator |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)


## B.6 — Review the Generated Geometry

After parameters have been saved across the geometry sections (Topology, Shaft, Rotor, Stator, Stator Tooth, and Airgap), eigenspacedesign automatically renders the complete outrunner BLDC motor model. The updated geometry is displayed in the 3D viewport, allowing the user to verify the overall motor dimensions before proceeding to material assignment and mesh generation.

At this stage, the model consists of the shaft, rotor, permanent magnets, stator, slots, and air region generated from the specified parameters.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



# PART C — Assign Material Properties

After defining the motor geometry, the next step is to assign material properties to each component of the motor. Material properties determine how each region responds to the applied magnetic field and electrical excitation during the simulation.

Unlike structural analysis, the electromagnetic solver requires two primary material properties for each component:

- **Relative Magnetic Permeability ($\mu_r$)** — Defines the magnetic behavior of the material relative to free space.
- **Electrical Conductivity ($\sigma$)** — Defines the ability of the material to conduct electric current.


## C.1 — Material Properties

The following materials are used for the default outrunner BLDC motor model.

| Material | Relative Magnetic Permeability ($\mu_r$) | Electrical Conductivity ($\sigma$) |
|-----------|------------------------------------------:|-----------------------------------:|
| Electrical Steel | 4000 | $2.0 \times 10^6$ S/m |
| NdFeB Permanent Magnet | 1.05 | $6.25 \times 10^5$ S/m |
| Copper | 1.0 | $5.8 \times 10^7$ S/m |
| Air | 1.0 | 0 S/m |
| Structural Steel (Shaft) | 1000 | $6.99 \times 10^6$ S/m |


## C.2 — Assign Materials

To assign materials to the motor components:

1. Expand **Material** in the left navigation panel and select **Assign Material**.
2. Assign the appropriate material to each motor component using the material selection table.
3. Click **Save** to apply the assignments.

| Motor Component | Material |
|-----------------|----------|
| Stator Core | Electrical Steel |
| Rotor Core | Electrical Steel |
| Permanent Magnets | NdFeB Permanent Magnet |
| Windings | Copper |
| Shaft | Structural Steel |
| Air Region | Air |



# PART D — Finite Element Mesh Generation

After the motor geometry and material properties have been defined, the next step is to generate the finite element mesh. eigenspacedesign automatically creates the mesh directly from the motor geometry, eliminating the need for external meshing software.


## D.1 — Configure Mesh Settings and Generate Mesh

To configure mesh settings and generate the finite element mesh:

1. In the left navigation panel under **Mesh**, click **Mesh Settings**.
2. A **Mesh Settings** modal dialog opens.
3. Enter the target values for **Min. Number of Element** and **Max. Number of Element**.
4. Click **Generate Mesh** inside the modal dialog to generate the mesh.

| Parameter | Description |
|-----------|-------------|
| Min. Number of Element | Lower element limit / target minimum resolution for the generated mesh. |
| Max. Number of Element | Upper element limit / target maximum resolution for the generated mesh. |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)


## D.2 — Review the Mesh Summary

After the mesh has been successfully generated, the viewport and workspace visualization panel update automatically.

To review the mesh summary:

1. Inspect the generated mesh displayed in the viewport.
2. Verify that the mesh representation and element discretization are suitable for analysis.
3. Click **Go to Solver** to proceed to solver configuration.


## D.3 — Regenerate the Mesh

If any geometry or material parameter is modified after the mesh has been generated, the existing mesh becomes outdated.

To regenerate the mesh:

1. In the left navigation panel under **Mesh**, click **Mesh Settings**.
2. Update the **Min. Number of Element** or **Max. Number of Element** values if required.
3. Click **Generate Mesh** inside the modal dialog to rebuild the mesh.

---

[← 1. Creating Project](01_creating_project.md) | [3. Solver & Simulation Setup →](03_solver_simulation_setup.md)

# Inrunner BLDC Motor Simulation — 1. Creating Project

## Description

This practice exercise demonstrates the complete workflow for performing an electromagnetic simulation of an inrunner Brushless DC (BLDC) motor using **eigenspacedesign**. 

In an inrunner BLDC motor topology, the permanent-magnet rotor is located internally and attached directly to the central shaft, while the stator core surrounds the rotor externally and houses the phase windings in radial slots. This configuration provides low rotor inertia, high rotational speed capabilities, and effective dynamic performance.

The tutorial is divided into 4 main stages:
1. **Creating Project** (Stage A)
2. **Preprocessing & Creating Geometry** (Stages B, C, D)
3. **Solver & Simulation Setup** (Stages E, F)
4. **Result & Post-Process** (Stages G, H)

| Complete Workflow | Stage A (Current) | Stage B–D | Stage E–F | Stage G–H |
| :--- | :--- | :--- | :--- | :--- |
| **Workflow Stage** | **Project Creation** | Preprocessing & Geometry | Solver & Excitations | Post-Processing & Reporting |

# STAGE A — Creating an Electromagnetic Project

## A.1 — Open eigenspacedesign

Launch **eigenspacedesign**. After the application starts, the **My Projects** page is displayed. This page provides access to all previously created projects and allows users to create, organize, export, and open simulation projects.

To begin a new electromagnetic simulation:

1. Locate the project workspace header on the **My Projects** page.
2. Click the **Add** button located in the upper-right corner of the project page.

![](../attachments/create_project%201.png)

## A.2 — Select the Simulation Workspace

Clicking **Add** opens the **Add Project** dialog, where the simulation workspace must be selected before creating the project.

Two simulation workspaces are available.

| Workspace | Purpose |
| ---------- | ------- |
| **Structural Solver** | Used for static and dynamic structural finite element analysis. |
| **EM Solver** | Used for electromagnetic analysis of electrical machines such as BLDC motors. |

To select the simulation workspace:

1. Select **EM Solver** from the workspace options.
2. Click **Input Metadata** to proceed to project configuration.

![](../attachments/choose_solver%201.png)


## A.3 — Enter Project Information

After selecting the **EM Solver** workspace, the **Add Project** dialog is displayed. This dialog is used to define the project information and storage location.
![](attachments/project_detail.png)
Complete the project details as described below.

| Field | Description | Example |
| ------ | ----------- | ------- |
| **File Name** | Name of the project file. | `Inrunner_BLDC` |
| **Project Name** | Display name shown in the project list. | `Inrunner BLDC Motor Simulation` |
| **Work Folder Path** | Directory where the project files will be stored. | `D:\ESD\MotorProjects` |
| **Description** | Brief summary of the project objective. | `Electromagnetic simulation of an inrunner BLDC motor.` |
| **Labels** | Optional tags used to organize projects. | `Motor`, `BLDC`, `Inrunner`, `Electromagnetic` |

### Steps

1. Enter the **File Name**.
2. Enter the **Project Name**.
3. Click **Browse** and select the project directory.
4. Provide a brief project description.
5. Optionally add one or more labels.
6. Click **Create Project**.



> **Recommendation:** Store each motor simulation in its own dedicated project folder. This keeps generated geometry, meshes, simulation data, and exported results organized throughout the design process.


## A.4 — Select the Motor Configuration

After the project is created, the software guides you through a series of dialogs to configure the motor type before entering the simulation workspace.

### A.4.1 — Select Motor Type

To select the motor type:

1. In the **Select Motor Type** dialog, select **BLDC (Brushless DC Motor)** from the available motor types.
2. Click **Select Flux Type** to continue.



### A.4.2 — Select the Flux Type

The next dialog allows you to choose the magnetic flux topology of the motor.

To select the flux type:

1. In the **Select Flux Type** dialog, select **Radial Flux**.
2. Click **Next** to proceed to motor subtype selection.



### A.4.3 — Select the Radial Flux Motor Subtype

After selecting **Radial Flux**, additional motor topologies become available.

To select the radial flux motor subtype:

1. Select **Inrunner** from the available radial flux motor topologies.
2. Click **Continue in Workspace** to open the simulation environment.
![](attachments/select_motor.png)
### A.4.4 — Open the Electromagnetic Workspace

After the motor configuration is confirmed, eigenspacedesign automatically opens the **Electromagnetic Workspace**.

A default **Inrunner BLDC motor** model is generated automatically using the software's built-in geometry generator. The generated model includes the internal rotor, external stator, surface-mounted permanent magnets, central shaft, air region, and winding regions, providing a ready-to-configure starting point for the simulation.

![](attachments/workplace%201.png)

---

**Next Step:** [2. Preprocessing & Creating Geometry →](02_preprocessing_creating_geometry.md)

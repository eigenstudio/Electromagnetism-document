# Outrunner BLDC Motor Simulation — 3. Solver & Simulation Setup

## Overview

Once the motor geometry, materials, and finite element mesh are established, the next phase is configuring the electromagnetic solver, defining electrical excitations, setting up simulation sweeps, and executing the simulation.

| Workflow Stage | Part 1 | Part 2 | Part E–F (Current) | Part 4 |
| :--- | :--- | :--- | :--- | :--- |
| **Section** | Creating Project | Preprocessing & Geometry | **Solver & Excitations** | Post-Processing & Reporting |



# PART E — Solver and Excitations Setup

Once the geometry, materials, and mesh have been configured, click **Go to Solver** in the **Mesh Summary** panel. The workspace switches from the **Pre-Process** stage to the **Solver** stage. In this phase, the electrical excitations, winding configurations, and solver settings are defined.


## E.1 — Open the Solver Workspace

To open the solver workspace:

1. Click **Go to Solver** in the **Mesh Summary** panel (or click **Solver** in the top toolbar).
2. Verify that the workspace switches from **Pre-Process** to **Solver**.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)


## E.2 — Select Analysis Type

To configure the solver for an electromagnetic simulation:

1. Click **Solver** in the top toolbar to switch from the **Pre-Process** workspace.
2. In the left navigation panel, expand **Select Analysis Type**.
3. Select the **Electromagnetic** checkbox.
4. Leave the **Mechanical**, **Thermal**, and **Lab** options unselected for this tutorial.
5. Verify that the **Electromagnetic** analysis type is enabled before proceeding to the analysis settings.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## E.3 — Configure Drive Settings (Electrical Excitations)

The **Drive Settings** section defines the electrical operating conditions and excitation parameters of the motor during the simulation.

1. Expand **Analysis Settings** in the left navigation panel.
2. Click **Drive Settings**.
3. Enter the operating **Current**.
4. Enter the operating **Frequency**.
5. Enter the motor **Speed**.
6. Select the **Excitation Type** from the dropdown menu.
7. Specify the number of **Phases** (typically `3` for a three-phase BLDC motor).
8. Click **Save**.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## E.4 — Configure Winding Configuration

The **Winding Configuration** section defines the phase winding sequence and connection arrangement for the stator slots.

1. Expand **Analysis Settings**.
2. Click **Winding Configuration**.
3. Select the desired winding configuration.
4. Assign the winding sequence for each stator slot as required.
5. Verify that all phase assignments are correct.
6. Click **Save**.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## E.5 — Configure Cogging Analysis Settings

Cogging analysis evaluates the cogging torque produced by the interaction between the rotor magnets and stator teeth.

1. Expand **Analysis Settings**.
2. Click **Cogging**.
3. Enable **Run Cogging** if cogging torque analysis is required.
4. Enter the number of **Cogging Steps**.
5. Click **Save**.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## E.6 — Configure Time Sweep Settings

The **Time Sweep** settings define the transient simulation duration and time resolution used during the electromagnetic analysis.

1. Expand **Sweep Settings** in the left navigation panel.
2. Click **Time Sweep**.
3. Enter the **Number of Cycles**.
4. Enter the **Time Step**.
5. Click **Save**.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## E.7 — Configure Speed Sweep Settings

The **Speed Sweep** settings define the operating speed range over which the motor performance will be evaluated.

1. Expand **Sweep Settings**.
2. Click **Speed Sweep**.
3. Enter the **Start Speed**.
4. Enter the **End Speed**.
5. Enter the **Speed Step**.
6. Click **Save**.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



# PART F — Simulation Execution and Progress Monitoring

After configuring all solver, excitation, and sweep settings, the simulation is ready to execute.


## F.1 — Execute the Electromagnetic Analysis

To execute the simulation:

1. Expand **Simulation Settings** in the left navigation panel.
2. Click **Run Analysis**.
3. Review the simulation settings summary.
4. Click **Start Simulation** to begin the analysis.

The electromagnetic solver initializes the model, applies the defined operating conditions, and solves the finite element system equations.

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)



## F.2 — Monitor Real-Time Simulation Progress

Once the simulation starts, monitor the progress in the **Job Status** panel on the right side of the workspace:

1. Observe the real-time simulation metrics in the **Job Status** panel on the right side of the workspace.
2. Track **CPU Usage**, **Progress**, **Memory Usage**, and **Iterations**.
3. Wait until the **Job Status** changes from **Running** to **Completed**.

The **Job Status** panel displays the following information:

| Item | Description |
|------|-------------|
| Job Status | Current simulation state (Running, Completed, Failed). |
| CPU Usage | Active processor cores used during the simulation. |
| Progress | Overall simulation progress. |
| Memory Usage | Current memory consumption. |
| Iterations | Completed and total solver iterations. |

![](../02_in-runner_bldc_motor/attachments/Placeholder.png)

---

[← 2. Preprocessing & Creating Geometry](02_preprocessing_creating_geometry.md) | [4. Result & Post-Process →](04_result_post_process.md)

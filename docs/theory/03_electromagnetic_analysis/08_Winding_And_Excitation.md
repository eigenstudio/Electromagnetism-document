# Winding and Excitation

The winding and excitation chapter defines the electrical layout and slot-level construction of the stator winding together with the electrical excitation applied to the machine. These choices determine how current flows through the machine, how the magnetic field is established in the air gap, and how the winding behaves under electrical, thermal, and mechanical loading. The content in this chapter is therefore central to both electromagnetic performance and manufacturability.

This consolidated chapter brings together the principal topics of winding selection and definition, from the initial topology choice to the final conductor and slot-fill description, followed by the sinusoidal excitation strategy, current density calculation, and rotor motion parameters. It is intended to be read as a continuous design sequence in which each decision constrains the next.


## Winding Overview

The stator winding is the set of insulated copper coils placed in the stator slots. When current flows through these coils, the winding produces the magnetomotive force required for machine operation. The winding therefore serves as the physical realization of the electrical design and as a key determinant of torque, loss, temperature, and manufacturability.

The chapter proceeds through the following stages:

1. Select the winding type.
2. Define the basic layout parameters.
3. Choose the path, coil style, divider arrangement, and wedge model.
4. Complete the conductor and slot-fill definition.
5. Define the electrical excitation and rotor motion.

Before a winding design is finalized, it should be checked for phase balance, insulation clearance, copper fill, thermal limits, mechanical retention, and manufacturing feasibility.


## Winding Type

The winding type defines the fundamental coil topology of the machine. It governs how the conductors are arranged within the stator slots, how the phases are distributed, and how the magnetic field is established in the air gap. This choice affects slot utilization, end-winding length, current sharing, and electromagnetic performance.

### Lap Winding

Lap winding is a progressive winding in which adjacent coils are connected in sequence around the stator. This produces a regular and mechanically repeatable arrangement. It is commonly used in applications requiring stable current sharing and a straightforward coil layout.

The main advantages of lap winding are:

- good current sharing between parallel paths;
- a regular slot-occupation pattern;
- suitability for high-current operation; and
- stable electromagnetic performance when the phase groups are balanced.

### Concentric Winding

Concentric winding uses coils of different sizes arranged around a common reference point. The coil pitches are not identical across the winding, and the layout is therefore more varied than in a lap winding. This arrangement is often used when the slot geometry is restrictive or when a compact end-winding structure is required.

The coil pitches may be written as

$$
y_1, y_2, \dots, y_n
$$

where each $y_i$ corresponds to an individual coil span. The average pitch is usually selected close to the pole pitch, and the resulting winding factor is influenced by the chosen pitch sequence.

### Custom Winding

Custom winding is used when the coil arrangement is explicitly defined for the machine rather than following a standard lap or concentric pattern. This approach is suitable when the slot-pole combination is unusual, when a specific harmonic profile is required, or when the geometry demands a tailored coil placement strategy.

A custom winding can be expressed as a set of phase-dependent coil placements:

$$
\mathcal{C} = \{(s_i, \phi_i, y_i)\}_{i=1}^{N_c}
$$

where $s_i$ is the slot position, $\phi_i$ the phase assignment, $y_i$ the coil pitch, and $N_c$ the number of coils.


## Basic Parameters

Once the winding topology has been selected, the key electrical and geometric parameters of the winding must be defined. These parameters establish the phase arrangement, turn count, pole-related geometry, current sharing, and layer arrangement.

### Phases

Phases are the electrical groups of coils that are energized with a defined time-varying displacement in a polyphase machine. In a three-phase winding, the phase belts are arranged so that the magnetomotive force remains balanced and the air-gap field remains smooth. The phase count therefore defines the electrical structure of the machine, and an uneven phase distribution can lead to asymmetry, additional harmonic content, and non-uniform torque production.

### Turns

Turns are the number of times a conductor is wound around the magnetic circuit to form a coil. The turn count determines the amount of flux linkage and therefore directly affects the induced voltage and field strength. A larger turn count generally increases back-EMF, but it also increases copper length, winding resistance, and heat generation.

The induced voltage may be written as

$$
E = -N\frac{d\Phi}{dt}
$$

where $N$ is the number of turns and $\Phi$ the magnetic flux linking the coil.

### Pole Throw

Pole throw is the angular extent associated with the pole-related flux distribution. It is the portion of the machine periphery over which the pole flux is effectively associated with a given pole region. Pole throw is closely related to the coil pitch and influences the winding factor and the harmonic content of the air-gap field.

### Parallel Paths

Parallel paths are the separate electrical branches into which the winding current is divided. They are introduced when the winding is arranged so that current can flow through multiple branches in parallel, thereby reducing the current carried by each conductor and improving current sharing. Parallel paths are particularly relevant when current levels are high and the conductor cross section must remain practical.

### Winding Layers

Winding layers describe the number of conductor levels placed inside the slot. A larger number of layers can improve the use of the available slot area, but it also increases insulation demand and may complicate manufacturing.


## Path Type

The path type defines how the conductor is placed inside the slot. It affects the local conductor arrangement, the symmetry of the winding, and the way the slot is filled.

### Central Path

A central path places the coil near the middle of the slot. This arrangement is often selected where the slot geometry is regular and a balanced placement is desired.

### Upper/Lower Path

An upper/lower path distributes the conductor between the upper and lower regions of the slot. It is useful when the slot depth is large or when control over fill distribution and insulation spacing is needed.

### Left/Right Path

A left/right path places the coil toward one side of the slot. This arrangement may be used when the slot geometry is asymmetric or when a particular coil-end configuration must be accommodated.

The path type also influences the slot fill factor:

$$
\eta_{fill} = \frac{A_{cu}}{A_{slot}}
$$

where $A_{cu}$ is the total copper area and $A_{slot}$ the available slot area.


## Coil Style

The coil style defines the physical form of the conductor bundle. It affects current density, manufacturability, mechanical rigidity, and thermal performance.

### Stranded Coil

A stranded coil is built from several individually insulated conductors arranged into one bundle. This style is commonly used when flexibility and ease of forming the coil are important.

The electrical behavior of the coil depends on the number of strands, the strand diameter, and the effective copper area. The resistance is given by

$$
R = \rho \frac{l}{A}
$$

where $\rho$ is the resistivity of the conductor material, $l$ the conductor length, and $A$ the effective cross-sectional area of the bundle.

### Hairpin Coil

A hairpin coil is formed from a pre-shaped conductor, typically with a rectangular cross section. It is often used in high-performance machines where compact copper usage, good thermal conduction, and a more rigid mechanical structure are important.

Compared with a stranded coil, a hairpin coil usually provides a more compact and robust conductor arrangement.


## Divider Type

The divider type defines the separation strategy between conductor regions inside the slot. It influences insulation reliability, mechanical support, heat transfer, and the ability to maintain a controlled winding geometry.

### Overlapping Divider

An overlapping divider provides a continuous transition between adjacent conductor regions. This arrangement is often selected where compact packing is required and the winding layout must remain geometrically smooth.

### Solid Divider

A solid divider uses a physical insulating barrier between conductor groups. It is commonly selected where mechanical rigidity and reliable insulation separation are important.

### Air Divider

An air divider introduces a gap between conductor regions to improve insulation or cooling behavior. Although it reduces the copper area available in the slot, it may improve thermal access and electrical clearance.

### Divider Variants by Orientation

Divider configurations may also be classified by orientation:

- Side/side: the divider is arranged along the lateral sides of the conductor group.
- Upper/lower: the divider is arranged between the upper and lower regions of the slot.
- V-shaped: the divider follows a V-shaped geometry and may be used where a tapered separation is required.

These variants are selected according to slot geometry, insulation requirement, and the required mechanical support characteristics.


## Wedge Model

The wedge model defines the material and void arrangement near the top of the slot. It influences the mechanical retention of the winding, the available free volume for conductors, and the overall slot packing strategy.

### Wedge

A wedge is a retaining feature placed near the slot opening to hold the conductors in position. It provides mechanical support and helps maintain the winding geometry during assembly and operation.

### Wound Space

Wound space is the portion of the slot reserved for the winding. It preserves a defined usable volume for the conductors while limiting excessive compression during manufacture and assembly.

### Air Region

An air region near the slot top can be used where insulation spacing or cooling access is required. Although it reduces the copper packing factor slightly, it may improve thermal access and provide additional clearance where needed.

The wedge geometry affects the achievable packing factor:

$$
\eta_{pack} = \frac{V_{cu}}{V_{slot}}
$$

where $V_{cu}$ is the conductor volume and $V_{slot}$ the total slot volume.


## Wedge Definition

The wedge definition determines the physical form of the retaining element placed near the slot opening. It is not only a mechanical feature, but also a design parameter that influences how much of the slot volume remains available for conductors, insulation, and impregnation material. The wedge definition must therefore be coordinated with the conductor fill and wire-selection choices made for the winding.

Before finalizing the wedge, confirm that it:

- retains the winding under expected electromagnetic and mechanical loading;
- maintains the required insulation clearances;
- leaves sufficient usable slot area for the selected conductor arrangement; and
- remains compatible with the intended manufacturing process.


## Winding Definition

The winding definition records the physical details of the conductor inside the slot, including its size, arrangement, insulation allowance, and the space it occupies. These details convert the earlier layout choices into a winding model that can be manufactured and evaluated for resistance, temperature rise, and slot utilization.

### Copper Slot Fill

Copper slot fill defines the proportion of the usable slot area occupied by copper. It is governed by the selected conductor dimensions, slot geometry, insulation thickness, and the arrangement of the conductors inside the slot. In practice, this fill level is often described by the fill factor:

$$
\eta_{fill} = \frac{A_{cu}}{A_{slot}}
$$

where $A_{cu}$ is the copper cross-sectional area and $A_{slot}$ the usable slot area.

### Wire Size

Wire size defines the physical size of the conductor used in the winding. For round wire, this is the diameter; for rectangular conductors, it is the width and height. The selected wire size directly influences resistance, current density, thermal performance, and the ability of the winding to fit within the available slot space.

### Heavy Build Slot Fill

Heavy-build slot fill is used when the winding must occupy a high proportion of the available slot volume. This approach is common in compact, high-performance designs where low resistance and strong copper utilization are important. It must still be checked against insulation allowance, impregnation requirements, assembly tolerances, and heat removal.

The total copper loss in the winding may be expressed as

$$
P_{cu} = I^2R
$$

where $P_{cu}$ is copper loss, $I$ the phase current, and $R$ the winding resistance.


## Sinusoidal Three-Phase Excitation

The electromagnetic model is excited using a balanced three-phase sinusoidal current source. During every transient time step, the current density applied to each stator coil is updated according to the instantaneous electrical angle of the rotor. The three phases are separated by an electrical phase shift of 120°, producing a rotating magnetic field that interacts with the permanent magnets on the rotor.

The phase current densities are defined as

$J_A = J_{\mathrm{pk}}\sin(\theta_e)$

$
J_B = J_{\mathrm{pk}}\sin\left(\theta_e-\frac{2\pi}{3}\right)
$

$
J_C = J_{\mathrm{pk}}\sin\left(\theta_e+\frac{2\pi}{3}\right)
$

where

- $(J_A,J_B,J_C)$ are the current densities of phases A, B and C,
- $J_{\mathrm{pk}}$ is the peak current density,
- $\theta_e$ is the electrical angle.

The excitation is assigned to the positive and negative coil regions so that current enters one side of the coil and exits the opposite side, reproducing the physical winding arrangement.


## Electrical Angle

The electrical angle defines the instantaneous position of the rotating magnetic field relative to the stator winding. Unlike the mechanical angle, the electrical angle depends on the number of magnetic pole pairs.

The electrical angle is computed as

$
\theta_e
=
p\theta_m+\theta_{\mathrm{offset}}
$

where

- $\theta_e$ is the electrical angle,
- $\theta_m$ is the mechanical rotor angle,
- $p$ is the number of pole pairs,
- $\theta_{\mathrm{offset}}$ is the commutation offset.

The electrical angle is wrapped into one electrical revolution,

$
0\le \theta_e<2\pi .
$

This angle is evaluated at every simulation time step and is used to calculate the instantaneous phase currents.


## Relationship Between Mechanical and Electrical Angle

Mechanical rotation represents the actual angular displacement of the rotor, whereas the electrical angle represents the position of the magnetic poles with respect to the stator.

Their relationship is

$
\theta_e=p\theta_m
$

where

$
p=\frac{N_p}{2}
$

and

- $N_p$ is the total number of poles.

For the present motor,

- Number of poles = **22**
- Pole pairs = **11**

Therefore,

$
\theta_e=11\theta_m.
$

Consequently, one complete mechanical revolution corresponds to eleven electrical cycles.


## Current Density Calculation

The finite element model requires current density rather than phase current. The peak phase current is first obtained from the specified RMS current,

$
I_{\mathrm{pk}}
=
\sqrt{2}\,I_{\mathrm{RMS}}.
$

The corresponding current density is then computed as

$
J_{\mathrm{raw}}
=
\frac{I_{\mathrm{pk}}N_c}{A_c}
$

where

- $N_c$ is the number of conductors per slot,
- $A_c$ is the coil cross-sectional area.

Since each coil spans three stator slots, a geometric scaling factor is applied,

$
J
=
\frac{J_{\mathrm{raw}}}{3}.
$

Using the simulation parameters,

| Parameter | Value |
|-----------|------:|
| Rated RMS current | 10.89 A |
| Conductors per slot | 6 |
| Coil area | $8.559\times10^{-5}\,\mathrm{m^2}$ |

the computed current density is approximately

$
J
\approx
3.6\times10^5\;\mathrm{A/m^2}.
$

This current density is uniformly applied to the corresponding winding regions in the finite element model.


## Commutation Offset

The commutation offset shifts the electrical angle by a fixed amount before calculating the three-phase currents.

The modified electrical angle becomes

$
\theta_e'
=
\theta_e+\theta_{\mathrm{offset}}.
$

Changing the commutation offset changes the phase relationship between the stator current and rotor magnetic field, thereby influencing

- developed torque,
- torque ripple,
- back electromotive force,
- power factor.

The present simulation uses

| Parameter | Value |
|-----------|------:|
| Commutation offset | **30° electrical** |

which is applied throughout the transient simulation.


## Electrical Frequency

The electrical excitation frequency determines the rate at which the three-phase currents complete one electrical cycle.

The electrical angular frequency is

$
\omega_e
=
2\pi f
$

where

- $f$ is the electrical frequency.

The simulation uses

| Parameter | Value |
|-----------|------:|
| Electrical frequency | **310.75 Hz** |

The simulation time step is determined directly from this frequency,

$
\Delta t
=
\frac{1}{fN_s}
$

where

- $N_s$ is the number of time steps per electrical cycle.

For

- $f=310.75$ Hz
- $N_s=80$

the time step becomes

$
\Delta t
\approx
4.02\times10^{-5}\ \mathrm{s}.
$

The excitation currents, rotor position and electromagnetic solution are updated once every time step.


## Rotor Speed

Rotor motion is prescribed using a constant mechanical speed throughout the transient simulation.

The angular velocity is

$
\omega_m
=
\frac{2\pi n}{60}
$

where

- $n$ is the rotor speed in revolutions per minute (RPM).

The rotor angle is updated after every time step according to

$$
\theta_m^{k+1}
=
\theta_m^{k}
+
\omega_m\Delta t.
$$

The simulation parameters are

| Parameter | Value |
|-----------|------:|
| Rotor speed | **1695 RPM** |
| Angular velocity | **177.5 rad/s** |

The continuously updated rotor position is used to

- rotate the rotor mesh,
- rotate the permanent magnet magnetization vectors,
- compute the electrical angle,
- update the three-phase excitation,
- evaluate transient electromagnetic torque, flux linkage and back-EMF.


## Summary

This chapter establishes the complete winding and excitation system for the BLDC motor.

The winding design covers:

- Winding type selection (lap, concentric, or custom).
- Basic parameters including phases, turns, pole throw, parallel paths, and winding layers.
- Path type, coil style, divider type, and wedge model.
- Wedge definition and winding definition including copper slot fill, wire size, and heavy build slot fill.

The electrical excitation model consists of:

- Balanced three-phase sinusoidal current excitation.
- Electrical angle computed from rotor position.
- Current density derived from the specified RMS current and winding geometry.
- A fixed 30° electrical commutation offset.
- Electrical excitation frequency of 310.75 Hz.
- Constant rotor speed of 1695 RPM with transient rotor motion.

Together, these parameters define the winding construction, generate the rotating stator magnetic field, and provide all inputs required for transient electromagnetic analysis of the BLDC motor.

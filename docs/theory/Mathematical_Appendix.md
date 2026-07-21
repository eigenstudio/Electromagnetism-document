# Mathematical Appendix

The mathematical concepts presented in this appendix provide the foundation for the electromagnetic formulations developed throughout this manual. These operators and identities are extensively used in Maxwell's equations, magnetic vector potential formulations, and finite element analysis.


## Vector Differential Operators

### Gradient

The gradient describes the direction and rate of maximum increase of a scalar field.

$$
\nabla\phi=
\frac{\partial\phi}{\partial x}\hat{x}
+
\frac{\partial\phi}{\partial y}\hat{y}
+
\frac{\partial\phi}{\partial z}\hat{z}
$$

For electrostatics,

$$
\mathbf{E}=-\nabla V
$$


### Divergence

The divergence measures the net outward flow of a vector field from an infinitesimal volume.

$$
\nabla\cdot\mathbf{A}
=
\frac{\partial A_x}{\partial x}
+
\frac{\partial A_y}{\partial y}
+
\frac{\partial A_z}{\partial z}
$$


### Curl

The curl describes the local rotational behaviour of a vector field.

$$
\nabla\times\mathbf{A}
=
\begin{vmatrix}
\hat{x}&\hat{y}&\hat{z}\\
\dfrac{\partial}{\partial x}&
\dfrac{\partial}{\partial y}&
\dfrac{\partial}{\partial z}\\
A_x&A_y&A_z
\end{vmatrix}
$$

Curl appears directly in Faraday's Law, Ampère's Law, and the magnetic vector potential formulation.


### Laplacian

The Laplacian is a second-order differential operator.

$$
\nabla^2=\nabla\cdot\nabla
$$

For a scalar field,

$$
\nabla^2\phi=
\frac{\partial^2\phi}{\partial x^2}
+
\frac{\partial^2\phi}{\partial y^2}
+
\frac{\partial^2\phi}{\partial z^2}
$$

It appears in Poisson's equation, Laplace's equation, and finite element formulations.


## Vector Integrals

### Line Integral

Evaluates a vector field along a curve.

$$
\int_C \mathbf{A}\cdot d\mathbf{l}
$$

Applications include voltage and Ampère's circuital law.


### Surface Integral

Measures the total field passing through a surface.

$$
\int_S \mathbf{A}\cdot d\mathbf{S}
$$

Used to calculate electric and magnetic flux.


### Volume Integral

Determines the total quantity contained within a region.

$$
\int_V f\,dV
$$

Applications include total charge, magnetic energy, and electromagnetic losses.


## Integral Theorems

### Divergence Theorem

Relates the flux through a closed surface to the divergence within the enclosed volume.

$$
\oint_S
\mathbf{A}\cdot d\mathbf{S}
=
\int_V
\nabla\cdot\mathbf{A}\,dV
$$

This theorem forms the mathematical basis of Gauss's Law.


### Stokes' Theorem

Relates the circulation around a closed contour to the curl over the enclosed surface.

$$
\oint_C
\mathbf{A}\cdot d\mathbf{l}
=
\int_S
(\nabla\times\mathbf{A})\cdot d\mathbf{S}
$$

This theorem is fundamental to Faraday's Law and Ampère's Law.


## Common Vector Identities

Gradient of a constant

$$
\nabla c=0
$$

Curl of a gradient

$$
\nabla\times(\nabla\phi)=0
$$

Divergence of a curl

$$
\nabla\cdot(\nabla\times\mathbf{A})=0
$$

Curl of a curl

$$
\nabla\times(\nabla\times\mathbf{A})
=
\nabla(\nabla\cdot\mathbf{A})
-
\nabla^2\mathbf{A}
$$

Divergence of a product

$$
\nabla\cdot(\phi\mathbf{A})
=
\phi(\nabla\cdot\mathbf{A})
+
\mathbf{A}\cdot\nabla\phi
$$

Curl of a product

$$
\nabla\times(\phi\mathbf{A})
=
\nabla\phi\times\mathbf{A}
+
\phi(\nabla\times\mathbf{A})
$$

These identities are frequently used in the derivation of Maxwell's equations, weak formulations, and finite element discretisation.


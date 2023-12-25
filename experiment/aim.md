## Multiplexer using Pass Transistor

Multiplexer or MUX, which is also known as data selector, is a combinational circuit with multiple input and single output. At a time a single input is selected and given as output based on select signal.

A multiplexer selects binary information present on any one on the input line, depending upon logic status of the selection inputs and routes to the output line. If there are n selection line then number of possible routes input lines is 2<sup>n</sup> and then multiplexer is referred as a 2<sup>n</sup> x 1 multiplexer.

**Advantages of Multiplexer based on pass transistor:**

1. Pass transistor multiplexer uses fewer transistors as compared to fully complementary gates

2. Pass transistor is somewhat faster than complementary switch.

## Spice Code

## SPICE

In the experiments we have done till now we have designed gates by arranging transistors in various fashions. The simulation of these designs gave graphs of output voltages and we analyzed how these graph changes with varying different parameters of the transistor. Now when you place a transistor on screen there is a back end code which tells a simulator what are the points to which the transistor's substrate, gate, drain, source are connected. The language in which this information is conveyed is spice.

**INTRODUCTION TO SPICE**

SPICE (Simulation Program with Integrated Circuit Emphasis) is a powerful program that is used in integrated circuit and board-level design to check the integrity of circuit designs and to predict circuit behavior. SPICE was originally developed at the Electronics Research Laboratory of the University of California, Berkeley (1975). Simulating the circuit with SPICE is the industry-standard way to verify circuit operation at the transistor level before committing to manufacturing an integrated circuit. In spice program, circuit elements (transistors, resistors, capacitors, etc) and their connections being translated into a text net list.

<img src="images/Exp7_Intro_Image.png">

Several types of circuit analyses can be done using SPICE program. Here are the most important ones-

 - DC analysis: calculates the DC transfer curve.
 - Transient analysis: calculates the voltage and current as a function of time when a large signal is applied.
 - AC Analysis: calculates the output as a function of frequency. A bode plot is generated.
 - Noise analysis.
 - Sensitivity analysis.
 - Distortion analysis.
 - Fourier analysis: calculates and plots the frequency spectrum.
 - Monte Carlo Analysis


All analyses can be done at different temperatures. The default temperature is 300K.

*2:1_MUX*
.include PTM_45nm.txt

.PARAM supply=1.1
.PARAM Lmin=45nm
.PARAM Wmin=45nm
.PARAM Wp={2*Wmin}

vvdd vdd 0 supply
.global vdd gnd

.subckt inverter in out 
MP1 out in vdd vdd pmos w={Wmin} L={Lmin}
Mn1 out in 0 0 NMOS W={Wmin} L={Lmin}
.ends inverter

.subckt pass_transistor control in out
Xinv control not inverter
MP1 out not in vdd pmos w={Wp} L={Lmin}
MN1 out control in 0 nmos W={Wmin} L={Lmin}
.ends

.subckt mux a b s out
Xinvs s s_ inverter

Xpt1 s_ a out pass_transistor
Xpt2 s b out pass_transistor
.ends

Xn a b s out mux

*USE '*' for commenting

.PARAM trfin=10p
.PARAM t1 = 10n
.PARAM t2 = 20n
.PARAM t3 = 30n
.PARAM t4 = 40n
.PARAM t5 = 50n
.PARAM t6 = 60n
.PARAM t7 = 70n
.PARAM t8 = 80n
.tran 6p 100n

V1 a 0 PWL (0 0 't1' 0 't2' 0 't2+trfin' 'supply' 't3' 'supply' 't4' 'supply' 't4+trfin' 0 't5' 0 't6' 0 't6+trfin' 'supply' 't7' 'supply' 't8' 'supply')
V2 b 0 PWL (0 0 't1' 0 't1+trfin' 'supply' 't2' 'supply' 't3' 'supply' 't3+trfin' 0 't4' 0 't5' 0 't5+trfin' 'supply' 't6' 'supply' 't7' 'supply' 't7+trfin' 0 't8' 0)
V3 s 0 PWL (0 0 't1' 0 't2' 0 't3' 0 't4' 0 't4+trfin' 'supply' 't5' 'supply' 't6' 'supply' 't7' 'supply' 't8' 'supply')


.control
run
*sets background color of plot, comment below line for black background
* set color0=white 
*plots input
plot v(a) v(b) v(s)
*plots output
plot v(out) 

.endc
.end
    
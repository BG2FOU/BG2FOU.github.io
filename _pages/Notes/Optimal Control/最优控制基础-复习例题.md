---
title: "最优控制基础-复习例题"
date: "2025-06-25"
bookmark: true
---
# 最优控制基础 - 复习例题

## 变分法与最优控制

1. 求泛函$J(x) = \int_0^{ {t_f} } {\sqrt {1 + { {\dot x}^2}(t)} dt} $的极值，要求：(1)$x(0)=1$，$x(t_f)$位于曲线$\theta(t)=-2t+3$上；(2)$x(0)=5$，$x(t_f)$位于曲线$x^2(t)+(t-5)^2=4$上。

   - (1)$\sqrt{1+\dot x^2}+\frac{\dot x}{\sqrt{1+\dot x^2} }(-2-\dot x)=0$，得${\left. {\dot x} \right|_{ {t_f} } } = \frac{1}{2}$，代入边界条件$x(0)=1$得 $x(t) = \frac{1}{2}t+1$，从而$t_f=\frac{4}{5}$，$J^*=\frac{2\sqrt{5} }{5}$；

   - (2)$L + {\left. {\frac{ {\partial L} }{ {\partial \dot x} }(\theta  - \dot x)} \right|_{ {t_f} } } = 0$,$2\theta \dot \theta+2(t_f-5)=0$,得${\left. {\dot \theta } \right|_{ {t_f} } } = \frac{ {5 - {t_f} } }{ { { {\left. \theta  \right|}_{ {t_f} } } } } = \frac{ {5 - {t_f} } }{ {x({t_f})} }$,$x=ct+5$,$\sqrt{1+c^2}+\frac{c}{\sqrt{1+c^2} }\left( \frac{5-t_f}{ct_f+5}-c \right)=0$,由图或直接解得$c=-1$,则极小值$J^*=5\sqrt{2}-2$,极大值$J^*=5\sqrt{2}+2$;“(0,5)出发到圆的最短距离曲线(即与圆心连接)”;

2. 设受控系统为$$\left\{ \begin{array}{l}{ {\dot x}_1}(t) = {x_2}(t) + {u_1}(t), \ {x_1}(0) = 1\\{ {\dot x}_2}(t) = {u_2}(t), \ {x_2}(0) = 1\end{array} \right.$$，性能指标为$J(u) = 0.5\int_0^2 {\left[ {u_1^2(t) + u_2^2(t)} \right]dt} $，目标集为$x_1(2)=0$，求最优控制$u^*(t)$使$J(u)$为最小。

   - 构造哈密顿函数：$H= 0.5(u_1^2 + u_2^2) + \lambda_1(x_2 + u_1) + \lambda_2 u_2$。控制方程由 $\frac{\partial H}{\partial u_1} = 0$ ， $\frac{\partial H}{\partial u_2} = 0$ 得到：
      $$\left\{ \begin{array}{l}
      u_1^* =  - {\lambda _1}\\
      u_2^* =  - {\lambda _2}
      \end{array} \right.$$；
      协状态方程：
      $$\left\{ \begin{array}{l}
      { {\dot \lambda }_1} =  - \frac{ {\partial H} }{ {\partial {x_1} } } = 0\\
      { {\dot \lambda }_2} =  - \frac{ {\partial H} }{ {\partial {x_2} } } =  - {\lambda _1}
      \end{array} \right.$$，
      积分得：$\lambda_1(t) = c_1,\ \lambda_2(t) = -c_1 t + c_2$；
      代入状态方程得到：
      $$\left\{ \begin{array}{l}
      { {\dot x}_1} = {x_2} - {c_1}\\
      { {\dot x}_2} = {c_1}t - {c_2}
      \end{array} \right.$$，
      对状态方程积分，并由初始条件 $x_1(0)=1, x_2(0)=1$得到：
      $$\left\{ \begin{array}{l}
      {x_1}(t) = \frac{1}{6}{c_1}{t^3} - \frac{1}{2}{c_2}{t^2} + (1 - {c_1})t + 1\\
      {x_2}(t) = \frac{1}{2}{c_1}{t^2} - {c_2}t + 1
      \end{array} \right.$$；
      由边界条件 $x_1(2)=0,\ \lambda_2(2)=0$，解得$c_1 = \frac{9}{14},\ c_2 = \frac{9}{7}$；
      则最优控制为：
      $$\left\{ \begin{array}{l}
      u_1^*(t) =  - \frac{9}{ {14} }\\
      u_2^*(t) = \frac{9}{ {14} }t - \frac{9}{7}
      \end{array} \right.$$，最优性能指标$J^*=\frac{27}{28}$。

3. 求泛函$J = \int_0^{\frac{\pi }{2} } {({ {\dot x}^2} - {x^2})dt} $极值，边界条件$x(0)=2,x(\frac{\pi}{2})=2$；

   - 

4. 求泛函$J = \int_0^{\frac{\pi }{2} } {(2x_1x_2+{ {\dot x_1^2} }+\dot x_2^2)dt} $极值，边界条件$x_1(0)=2,x_1(\frac{\pi}{2})=1,x_2(0)=0,x_2(\frac{\pi}{2})=-1$；

   - 

5. $\theta=0.5(t-5)^2-0.5$,$J(x) = \int_0^{ {t_f} } {\sqrt {1 + { { x}^2}(t)} dt} $,$L=\sqrt{1+x^2}$,$x(t_f)=c_1t+c_2$,$x(0)=0$；

   - $c_2=0,L=\sqrt{1+c_1^2}$,$\sqrt{1+c_1^2}+\frac{c_1}{\sqrt{1+c_1^2} }\left( t_f-5-c_1 \right)=0$,且$c_1t_f=0.5(t_f-5)^2-0.5$,得$c_1=0.5$；

6. 求有约束泛函极值$J = \frac{1}{2}\int_0^2 { {u^2}(t)dt} $极值，特征方程（双积分系统）$\dot x(t) = \left[ {\begin{array}{*{20}{c} }
   0&1\\
   0&0
   \end{array} } \right]x(t) + \left[ {\begin{array}{*{20}{c} }
   0\\
   1
   \end{array} } \right]u$，边界条件$x(0) = {\left[ {\begin{array}{*{20}{c} }
   1&1
   \end{array} } \right]^T},x(2) = {\left[ {\begin{array}{*{20}{c} }
   0&0
   \end{array} } \right]^T}$；

   - 需要计算机求解；

7. $\mathop {\operatorname*{\min} }\limits_{u(t)} J = 0.5{\left[ { {x_1}(2) - 5} \right]^2} + 0.5{\left[ { {x_2}(2) - 5} \right]^2} + \frac{1}{2}\int_0^2 { {u^2}(t)dt} $，${ {\dot x}_1}(t) = {x_2}(t),{ {\dot x}_2}(t) =  - {x_2}(t) + u(t)$,${x_1}(0) = {x_2}(0) = 0,{x_2}$自由；

   - 

8. $\mathop {\operatorname*{\min} }\limits_{u(t)} J = \frac{1}{2}\int_0^1 { {u^2} } (t)dt$，s.t.${ {\dot x}_1}(t) = {x_2}(t),{ {\dot x}_2}(t) = u(t)$,${x_1}(0) = {x_2}(0) = 0,{x_1}(1) + {x_2}(1) = 1$；
   - 



## 极小值原理

1. $\mathop {\operatorname*{\min} }\limits_{\left| u \right| \le 1} J = \int_0^{ {t_f} } {\left| {2 + \left| {u(t)} \right|} \right|dt} ,\;\;{\rm{s} }.{\rm{t} }.\left\{ \begin{array}{l}
   { {\dot x}_1} = {x_2},\;{x_1}(0) =  - 8,\;{x_1}({t_1}) = 0\\
   { {\dot x}_2} = u,\;{x_2}(0) =  - 4,\;{x_2}({t_1}) = 0
   \end{array} \right.$，求解$u^*$及$t_f^*$；

   - $H=|2+|u||+\lambda_1 x_2+\lambda_2 u$，$\left\{ \begin{array}{l}
     { {\dot \lambda }_1} = 0\\
     { {\dot \lambda }_2} =  - c
     \end{array} \right. \to \left\{ \begin{array}{l}
     {\lambda _1} = ct\\
     {\lambda _2} =  - ct + {c_1}
     \end{array} \right.$，由加权时间-燃料最优控制知${u^*} = \left\{ \begin{array}{l}
     1,{\lambda _2} <-1\\
     0, -1 < {\lambda _2} < 1\\
     -1,{\lambda _2} > 1
     \end{array} \right.$，最终控制量$u^*(t_f)=-1$，则由图，设到达B点、C点时间分别为$t_B$、$t_C$，列出横截条件$H(t_f)=2+1-\lambda_2(t_f)=0$，$\left\{ \begin{array}{l}
     {\lambda _2}({t_B}) =  - c{t_B} + {c_1} =  - 1\\
     {\lambda _2}({t_C}) =  - c{t_C} + {c_1} = 1\\
     {\lambda _2}({t_f}) =  - c{t_f} + {c_1} = 3
     \end{array} \right. \Rightarrow {t_f} + {t_B} = 2{t_C}$；

     AB段：$u=1$，$x_1=0.5x_2^2+c$，由${x_1}(0) =  - 8,{x_2}(0) =  - 4$解得$c=-16$，此时$\left\{ \begin{array}{l}
     { {\dot x}_1} = {x_2}\\
     { {\dot x}_2} = 1
     \end{array} \right. \Rightarrow \left\{ \begin{array}{l}
     {x_1} = 0.5{t^2} -4t -8\\
     {x_2} = t -4
     \end{array} \right.$；

     开关曲线第二象限部分$\mu_-=-\frac{2+4}{2*2}x_2^2=-1.5x_2^2$，联立$x_1=0.5x_2^2-16$解得$B(-12,2\sqrt{2})$，对于B点仍满足$\left\{ \begin{array}{l}
     {x_1}(t_B) = 0.5{t_B^2} -4t_B -8\\
     {x_2}(t_B) = t_B -4
     \end{array} \right.$，解得$t_B=4+2\sqrt{2}$；

     BC段：$u=0$，由C在$x_1=-0.5x_2^2$上易得$C(-4,2\sqrt{2})$，此时$\left\{ \begin{array}{l}
     { {\dot x}_1} = {x_2}\\
     { {\dot x}_2} = 1
     \end{array} \right. \Rightarrow \left\{ \begin{array}{l}
     {x_1} = (t_B-4)(t-t_B)+x_1(t_B)\\
     {x_2} = t_B -4
     \end{array} \right.$，对于C点也成立；

     CO段：$\left\{ \begin{array}{l}
     { {\dot x}_1} = {x_2}\\
     { {\dot x}_2} = -1
     \end{array} \right. \Rightarrow \left\{ \begin{array}{l}
     {x_1} = -\frac{1}{2}(t-t_C)^2+x_2(t_C)(t-t_C)+x_1(t_C)\\
     {x_2} = -(t-t_C)+x_2(t_C)=-t+t_B+t_C-4
     \end{array} \right.$，由$x_1(t_f)=-\frac{1}{2}(t_f-t_C)^2+x_2(t_C)(t_f-t_C)+x_1(t_C)=0,\\ x_2(t_f)=-t_f+t_B+t_C-4=0$，联立解得$t_C=4+4\sqrt{2}$，$t_f^*=4+6\sqrt{2}$；

     则控制律${u^*} = \left\{ \begin{array}{l}-1,\;0\le t < 4+2\sqrt{2}\\
     0,\;4+2\sqrt{2}\le t < 4+4\sqrt{2}\\
     1,\; 4+4\sqrt{2}\le t \le 4+6\sqrt{2} 
     \end{array} \right.$.

2. $\mathop {\operatorname*{\min} }\limits_{\left| u \right| \le 1} J = 0.5\int_0^1 {(x_1^2 + {u^2})dt} $，s.t.${ {\dot x}_1} = {x_2},{ {\dot x}_2} =  - {x_2} + u,x(0) = 1$;

   - 

3. $\mathop {\operatorname*{\min} }\limits_{u(t)} J = \int_0^1 (x + u)  dt$，s.t.$\dot{x} = x - u$, $x(0) = 5$, $0.5 \le u \le 1$;

   - 



## 动态规划

1. 设离散系统方程$x(k+1)=x(k)+u(k)$，$x(0)=0$，$x(4)=1$，式中 $u(k)\in \Omega=\{-1,0,+1\}$。性能指标$J = \sum\limits_{k = 0}^3 {\left[ { {x^2}(k) + {u^2}(k)} \right]} $，求使性能指标为极小的最优控制序列$u^*(k),k=0,1,2,3$,以及最优轨线$x^*(k),k=0,1,2,3,4$。

   - 
2. $\mathop {\operatorname*{\min} }\limits_{ {u^*}(k)} J = {x^2}(3) + \sum\limits_{k = 0}^2 {\left[ { {x^2}(k) + {u^2}(k)} \right]} ,{\rm{ s} }{\rm{.t} }{\rm{. } }x(k + 1) = 2x(k) + u(k),x(0) = 1$；

   - 
3. $\mathop {\operatorname*{\min} }\limits_{ {u^*}(k)} J = {x^2}(3) + \sum\limits_{k = 0}^3 {\left[ {3x(k) - u(k)} \right]} ,{\rm{ s} }{\rm{.t} }{\rm{. } }x(k + 1) = 0.5x(k) + 0.3u(k),0 \le u(k) \le x(k)$

   - 



## 线性二次型最优控制

1. $\min_{u(t)} J = 0.5x^2(t_f) + \int_{t_0}^{t_f} [x^2(t) + u^2(t)]  dt$，s.t.$\dot{x} = u,  x(t_0) = x_0$，$P(t) = \frac{6 - 2e^{2(t-t_f)} }{3 + e^{2(t-t_f)} }$；
   - 
2. $\min_{u(t)} J = \int_0^\infty [x_2^2(t) + 0.25 u^2(t)]  dt$​，s.t.$\dot{x}_1(t) = u(t),  x_1(0) = 0$,$\dot{x}_2(t) = x_1(t),  x_2(0) = 1$；
   - 
3. $\min_{u(t)} J = 0.5 \int_0^\infty [x^T(t)x(t) + u^2(t)]  dt$，s.t.$\dot{x}_1(t) = x_1(t),  x_1(0) = 1$,$\dot{x}_2(t) = x_2(t) + u(t),  x_2(0) = 0$；
   - 
4. $\min_{u(t)} J = \int_0^\infty e^{2t} [x_1^2(t) + u^2(t)]  dt$，s.t.$\dot{x}_1(t) = x_2(t)$,$\dot{x}_2(t) = u(t)$；
   - 



## 最优输出跟踪

1. $\min_{u^*} J = \frac{1}{2} \int_0^{10} \{ 2[y - 0.2 \sin(\pi t)]^2 + 0.002u^2 \}  dt$​，s.t.$\dot{x}_1 = x_2,  x_1(0) = 1$,$\dot{x}_2 = 2x_1 - x_2 + u,  x_2(0) = 1$，$y = x_1$；
   - 
2. 系统$\dot{x}_1 = x_2, \ \dot{x}_2 = -2x_2 + u, \ y = x_1$，性能指标$J = \frac{1}{2} \int_{0}^{\infty} (e^2 + u^2)  dt$（其中 $e = 1 - y$）确定近似跟踪控制律；
   - 


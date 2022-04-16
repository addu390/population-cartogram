var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=Math.PI/3,e=[0,t,2*t,3*t,4*t,5*t];function r(n){return n[0]}function i(n){return n[1]}var o={};!function(t){function e(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function r(n){return 1===n.length&&(n=i(n)),{left:function(t,e,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var o=r+i>>>1;n(t[o],e)<0?r=o+1:i=o}return r},right:function(t,e,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var o=r+i>>>1;n(t[o],e)>0?i=o:r=o+1}return r}}}function i(n){return function(t,r){return e(n(t),r)}}function o(n){for(var t,e,r,i=n.length,o=-1,u=0;++o<i;)u+=n[o].length;for(e=new Array(u);--i>=0;)for(t=(r=n[i]).length;--t>=0;)e[--u]=r[t];return e}function u(n,t){var e,r=0,i=n.length,o=-1;if(null==t)for(;++o<i;)(e=+n[o])&&(r+=e);else for(;++o<i;)(e=+t(n[o],o,n))&&(r+=e);return r}function a(){return new l}function l(){this.reset()}r(e),l.prototype={constructor:l,reset:function(){this.s=this.t=0},add:function(n){f(c,n,this.t),f(this,c.s,this.s),this.s?this.t+=c.t:this.s=c.t},valueOf:function(){return this.s}};var c=new l;function f(n,t,e){var r=n.s=t+e,i=r-t,o=r-i;n.t=t-o+(e-i)}var s=1e-6,p=Math.PI,h=p/2,d=p/4,v=2*p,g=180/p,y=p/180,m=Math.abs,S=Math.atan,E=Math.atan2,x=Math.cos,M=Math.sin,b=Math.sign||function(n){return n>0?1:n<0?-1:0},w=Math.sqrt;function _(n){return n>1?0:n<-1?p:Math.acos(n)}function k(n){return n>1?h:n<-1?-h:Math.asin(n)}function N(){}function j(n,t){n&&q.hasOwnProperty(n.type)&&q[n.type](n,t)}var P={Feature:function(n,t){j(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)j(e[r].geometry,t)}},q={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){L(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)L(e[r],t,0)},Polygon:function(n,t){A(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)A(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)j(e[r],t)}};function L(n,t,e){var r,i=-1,o=n.length-e;for(t.lineStart();++i<o;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function A(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)L(n[e],t,1);t.polygonEnd()}function z(n,t){n&&P.hasOwnProperty(n.type)?P[n.type](n,t):j(n,t)}function C(n){return[E(n[1],n[0]),k(n[2])]}function F(n){var t=n[0],e=n[1],r=x(e);return[r*x(t),r*M(t),M(e)]}function O(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function R(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function G(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function T(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function I(n){var t=w(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function $(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return(e=t.invert(e,r))&&n.invert(e[0],e[1])}),e}function Z(n,t){return[n>p?n-v:n<-p?n+v:n,t]}function B(n,t,e){return(n%=v)?t||e?$(H(n),J(t,e)):H(n):t||e?J(t,e):Z}function D(n){return function(t,e){return[(t+=n)>p?t-v:t<-p?t+v:t,e]}}function H(n){var t=D(n);return t.invert=D(-n),t}function J(n,t){var e=x(n),r=M(n),i=x(t),o=M(t);function u(n,t){var u=x(t),a=x(n)*u,l=M(n)*u,c=M(t),f=c*e+a*r;return[E(l*i-f*o,a*e-c*r),k(f*i+l*o)]}return u.invert=function(n,t){var u=x(t),a=x(n)*u,l=M(n)*u,c=M(t),f=c*i-l*o;return[E(l*i+c*o,a*e+f*r),k(f*e-a*r)]},u}function K(n,t,e,r,i,o){if(e){var u=x(t),a=M(t),l=r*e;null==i?(i=t+r*v,o=t-l/2):(i=Q(u,i),o=Q(u,o),(r>0?i<o:i>o)&&(i+=r*v));for(var c,f=i;r>0?f>o:f<o;f-=l)c=C([u,-a*x(f),-a*M(f)]),n.point(c[0],c[1])}}function Q(n,t){(t=F(t))[0]-=n,I(t);var e=_(-t[1]);return((-t[2]<0?-e:e)+v-s)%v}function U(){var n,t=[];return{point:function(t,e){n.push([t,e])},lineStart:function(){t.push(n=[])},lineEnd:N,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var e=t;return t=[],n=null,e}}}function V(n,t,e,r,i,o){var u,a=n[0],l=n[1],c=0,f=1,s=t[0]-a,p=t[1]-l;if(u=e-a,s||!(u>0)){if(u/=s,s<0){if(u<c)return;u<f&&(f=u)}else if(s>0){if(u>f)return;u>c&&(c=u)}if(u=i-a,s||!(u<0)){if(u/=s,s<0){if(u>f)return;u>c&&(c=u)}else if(s>0){if(u<c)return;u<f&&(f=u)}if(u=r-l,p||!(u>0)){if(u/=p,p<0){if(u<c)return;u<f&&(f=u)}else if(p>0){if(u>f)return;u>c&&(c=u)}if(u=o-l,p||!(u<0)){if(u/=p,p<0){if(u>f)return;u>c&&(c=u)}else if(p>0){if(u<c)return;u<f&&(f=u)}return c>0&&(n[0]=a+c*s,n[1]=l+c*p),f<1&&(t[0]=a+f*s,t[1]=l+f*p),!0}}}}}function W(n,t){return m(n[0]-t[0])<s&&m(n[1]-t[1])<s}function X(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Y(n,t,e,r,i){var o,u,a=[],l=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,e,r=n[0],u=n[t];if(W(r,u)){for(i.lineStart(),o=0;o<t;++o)i.point((r=n[o])[0],r[1]);i.lineEnd()}else a.push(e=new X(r,n,null,!0)),l.push(e.o=new X(r,null,e,!1)),a.push(e=new X(u,n,null,!1)),l.push(e.o=new X(u,null,e,!0))}})),a.length){for(l.sort(t),nn(a),nn(l),o=0,u=l.length;o<u;++o)l[o].e=e=!e;for(var c,f,s=a[0];;){for(var p=s,h=!0;p.v;)if((p=p.n)===s)return;c=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(h)for(o=0,u=c.length;o<u;++o)i.point((f=c[o])[0],f[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(h)for(c=p.p.z,o=c.length-1;o>=0;--o)i.point((f=c[o])[0],f[1]);else r(p.x,p.p.x,-1,i);p=p.p}c=(p=p.o).z,h=!h}while(!p.v);i.lineEnd()}}}function nn(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}a(),a(),a(),Z.invert=Z;var tn=1e9,en=-tn;function rn(n,t,e,r){function i(i,o){return n<=i&&i<=e&&t<=o&&o<=r}function u(i,o,u,l){var f=0,s=0;if(null==i||(f=a(i,u))!==(s=a(o,u))||c(i,o)<0^u>0)do{l.point(0===f||3===f?n:e,f>1?r:t)}while((f=(f+u+4)%4)!==s);else l.point(o[0],o[1])}function a(r,i){return m(r[0]-n)<s?i>0?0:3:m(r[0]-e)<s?i>0?2:1:m(r[1]-t)<s?i>0?1:0:i>0?3:2}function l(n,t){return c(n.x,t.x)}function c(n,t){var e=a(n,1),r=a(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){var c,f,s,p,h,d,v,g,y,m,S,E=a,x=U(),M={point:b,lineStart:N,lineEnd:j,polygonStart:_,polygonEnd:k};function b(n,t){i(n,t)&&E.point(n,t)}function w(){for(var t=0,e=0,i=f.length;e<i;++e)for(var o,u,a=f[e],l=1,c=a.length,s=a[0],p=s[0],h=s[1];l<c;++l)o=p,u=h,p=(s=a[l])[0],h=s[1],u<=r?h>r&&(p-o)*(r-u)>(h-u)*(n-o)&&++t:h<=r&&(p-o)*(r-u)<(h-u)*(n-o)&&--t;return t}function _(){E=x,c=[],f=[],S=!0}function k(){var n=w(),t=S&&n,e=(c=o(c)).length;(t||e)&&(a.polygonStart(),t&&(a.lineStart(),u(null,null,1,a),a.lineEnd()),e&&Y(c,l,n,u,a),a.polygonEnd()),E=a,c=f=s=null}function N(){M.point=P,f&&f.push(s=[]),m=!0,y=!1,v=g=NaN}function j(){c&&(P(p,h),d&&y&&x.rejoin(),c.push(x.result())),M.point=b,y&&E.lineEnd()}function P(o,u){var a=i(o,u);if(f&&s.push([o,u]),m)p=o,h=u,d=a,m=!1,a&&(E.lineStart(),E.point(o,u));else if(a&&y)E.point(o,u);else{var l=[v=Math.max(en,Math.min(tn,v)),g=Math.max(en,Math.min(tn,g))],c=[o=Math.max(en,Math.min(tn,o)),u=Math.max(en,Math.min(tn,u))];V(l,c,n,t,e,r)?(y||(E.lineStart(),E.point(l[0],l[1])),E.point(c[0],c[1]),a||E.lineEnd(),S=!1):a&&(E.lineStart(),E.point(o,u),S=!1)}v=o,g=u,y=a}return M}}var on=a();function un(n,t){var e=t[0],r=t[1],i=[M(e),-x(e),0],o=0,u=0;on.reset();for(var a=0,l=n.length;a<l;++a)if(f=(c=n[a]).length)for(var c,f,h=c[f-1],g=h[0],y=h[1]/2+d,m=M(y),S=x(y),b=0;b<f;++b,g=_,m=j,S=P,h=w){var w=c[b],_=w[0],N=w[1]/2+d,j=M(N),P=x(N),q=_-g,L=q>=0?1:-1,A=L*q,z=A>p,C=m*j;if(on.add(E(C*L*M(A),S*P+C*x(A))),o+=z?q+L*v:q,z^g>=e^_>=e){var O=R(F(h),F(w));I(O);var G=R(i,O);I(G);var T=(z^q>=0?-1:1)*k(G[2]);(r>T||r===T&&(O[0]||O[1]))&&(u+=z^q>=0?1:-1)}}return(o<-s||o<s&&on<-s)^1&u}function an(n){return n}a();var ln,cn,fn,sn,pn=a(),hn=a(),dn={point:N,lineStart:N,lineEnd:N,polygonStart:function(){dn.lineStart=vn,dn.lineEnd=mn},polygonEnd:function(){dn.lineStart=dn.lineEnd=dn.point=N,pn.add(m(hn)),hn.reset()},result:function(){var n=pn/2;return pn.reset(),n}};function vn(){dn.point=gn}function gn(n,t){dn.point=yn,ln=fn=n,cn=sn=t}function yn(n,t){hn.add(sn*n-fn*t),fn=n,sn=t}function mn(){yn(ln,cn)}var Sn=1/0,En=Sn,xn=-Sn,Mn=xn,bn={point:wn,lineStart:N,lineEnd:N,polygonStart:N,polygonEnd:N,result:function(){var n=[[Sn,En],[xn,Mn]];return xn=Mn=-(En=Sn=1/0),n}};function wn(n,t){n<Sn&&(Sn=n),n>xn&&(xn=n),t<En&&(En=t),t>Mn&&(Mn=t)}var _n,kn,Nn,jn,Pn=0,qn=0,Ln=0,An=0,zn=0,Cn=0,Fn=0,On=0,Rn=0,Gn={point:Tn,lineStart:In,lineEnd:Bn,polygonStart:function(){Gn.lineStart=Dn,Gn.lineEnd=Hn},polygonEnd:function(){Gn.point=Tn,Gn.lineStart=In,Gn.lineEnd=Bn},result:function(){var n=Rn?[Fn/Rn,On/Rn]:Cn?[An/Cn,zn/Cn]:Ln?[Pn/Ln,qn/Ln]:[NaN,NaN];return Pn=qn=Ln=An=zn=Cn=Fn=On=Rn=0,n}};function Tn(n,t){Pn+=n,qn+=t,++Ln}function In(){Gn.point=$n}function $n(n,t){Gn.point=Zn,Tn(Nn=n,jn=t)}function Zn(n,t){var e=n-Nn,r=t-jn,i=w(e*e+r*r);An+=i*(Nn+n)/2,zn+=i*(jn+t)/2,Cn+=i,Tn(Nn=n,jn=t)}function Bn(){Gn.point=Tn}function Dn(){Gn.point=Jn}function Hn(){Kn(_n,kn)}function Jn(n,t){Gn.point=Kn,Tn(_n=Nn=n,kn=jn=t)}function Kn(n,t){var e=n-Nn,r=t-jn,i=w(e*e+r*r);An+=i*(Nn+n)/2,zn+=i*(jn+t)/2,Cn+=i,Fn+=(i=jn*n-Nn*t)*(Nn+n),On+=i*(jn+t),Rn+=3*i,Tn(Nn=n,jn=t)}function Qn(n){this._context=n}Qn.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,v)}},result:N};var Un,Vn,Wn,Xn,Yn,nt=a(),tt={point:N,lineStart:function(){tt.point=et},lineEnd:function(){Un&&rt(Vn,Wn),tt.point=N},polygonStart:function(){Un=!0},polygonEnd:function(){Un=null},result:function(){var n=+nt;return nt.reset(),n}};function et(n,t){tt.point=rt,Vn=Xn=n,Wn=Yn=t}function rt(n,t){Xn-=n,Yn-=t,nt.add(w(Xn*Xn+Yn*Yn)),Xn=n,Yn=t}function it(){this._string=[]}function ot(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function ut(n,t){var e,r,i=4.5;function o(n){return n&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),z(n,e(r))),r.result()}return o.area=function(n){return z(n,e(dn)),dn.result()},o.measure=function(n){return z(n,e(tt)),tt.result()},o.bounds=function(n){return z(n,e(bn)),bn.result()},o.centroid=function(n){return z(n,e(Gn)),Gn.result()},o.projection=function(t){return arguments.length?(e=null==t?(n=null,an):(n=t).stream,o):n},o.context=function(n){return arguments.length?(r=null==n?(t=null,new it):new Qn(t=n),"function"!=typeof i&&r.pointRadius(i),o):t},o.pointRadius=function(n){return arguments.length?(i="function"==typeof n?n:(r.pointRadius(+n),+n),o):i},o.projection(n).context(t)}function at(n,t,e,r){return function(i,u){var a,l,c,f=t(u),s=i.invert(r[0],r[1]),p=U(),h=t(p),d=!1,v={point:g,lineStart:m,lineEnd:S,polygonStart:function(){v.point=E,v.lineStart=x,v.lineEnd=M,l=[],a=[]},polygonEnd:function(){v.point=g,v.lineStart=m,v.lineEnd=S,l=o(l);var n=un(a,s);l.length?(d||(u.polygonStart(),d=!0),Y(l,ct,n,e,u)):n&&(d||(u.polygonStart(),d=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),d&&(u.polygonEnd(),d=!1),l=a=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}};function g(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function y(n,t){var e=i(n,t);f.point(e[0],e[1])}function m(){v.point=y,f.lineStart()}function S(){v.point=g,f.lineEnd()}function E(n,t){c.push([n,t]);var e=i(n,t);h.point(e[0],e[1])}function x(){h.lineStart(),c=[]}function M(){E(c[0][0],c[0][1]),h.lineEnd();var n,t,e,r,i=h.clean(),o=p.result(),f=o.length;if(c.pop(),a.push(c),c=null,f)if(1&i){if((t=(e=o[0]).length-1)>0){for(d||(u.polygonStart(),d=!0),u.lineStart(),n=0;n<t;++n)u.point((r=e[n])[0],r[1]);u.lineEnd()}}else f>1&&2&i&&o.push(o.pop().concat(o.shift())),l.push(o.filter(lt))}return v}}function lt(n){return n.length>1}function ct(n,t){return((n=n.x)[0]<0?n[1]-h-s:h-n[1])-((t=t.x)[0]<0?t[1]-h-s:h-t[1])}it.prototype={_circle:ot(4.5),pointRadius:function(n){return this._circle=ot(n),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}}};var ft=at((function(){return!0}),st,ht,[-p,-h]);function st(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(o,u){var a=o>0?p:-p,l=m(o-e);m(l-p)<s?(n.point(e,r=(r+u)/2>0?h:-h),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(o,r),t=0):i!==a&&l>=p&&(m(e-i)<s&&(e-=i*s),m(o-a)<s&&(o-=a*s),r=pt(e,r,o,u),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=o,r=u),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function pt(n,t,e,r){var i,o,u=M(n-e);return m(u)>s?S((M(t)*(o=x(r))*M(e)-M(r)*(i=x(t))*M(n))/(i*o*u)):(t+r)/2}function ht(n,t,e,r){var i;if(null==n)i=e*h,r.point(-p,i),r.point(0,i),r.point(p,i),r.point(p,0),r.point(p,-i),r.point(0,-i),r.point(-p,-i),r.point(-p,0),r.point(-p,i);else if(m(n[0]-t[0])>s){var o=n[0]<t[0]?p:-p;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}function dt(n,t){var e=x(n),r=e>0,i=m(e)>s;function o(e,r,i,o){K(o,n,t,i,e,r)}function u(n,t){return x(n)*x(t)>e}function a(n){var t,e,o,a,f;return{lineStart:function(){a=o=!1,f=1},point:function(h,d){var v,g=[h,d],y=u(h,d),m=r?y?0:c(h,d):y?c(h+(h<0?p:-p),d):0;if(!t&&(a=o=y)&&n.lineStart(),y!==o&&(v=l(t,g),(W(t,v)||W(g,v))&&(g[0]+=s,g[1]+=s,y=u(g[0],g[1]))),y!==o)f=0,y?(n.lineStart(),v=l(g,t),n.point(v[0],v[1])):(v=l(t,g),n.point(v[0],v[1]),n.lineEnd()),t=v;else if(i&&t&&r^y){var S;m&e||!(S=l(g,t,!0))||(f=0,r?(n.lineStart(),n.point(S[0][0],S[0][1]),n.point(S[1][0],S[1][1]),n.lineEnd()):(n.point(S[1][0],S[1][1]),n.lineEnd(),n.lineStart(),n.point(S[0][0],S[0][1])))}!y||t&&W(t,g)||n.point(g[0],g[1]),t=g,o=y,e=m},lineEnd:function(){o&&n.lineEnd(),t=null},clean:function(){return f|(a&&o)<<1}}}function l(n,t,r){var i=[1,0,0],o=R(F(n),F(t)),u=O(o,o),a=o[0],l=u-a*a;if(!l)return!r&&n;var c=e*u/l,f=-e*a/l,h=R(i,o),d=T(i,c);G(d,T(o,f));var v=h,g=O(d,v),y=O(v,v),S=g*g-y*(O(d,d)-1);if(!(S<0)){var E=w(S),x=T(v,(-g-E)/y);if(G(x,d),x=C(x),!r)return x;var M,b=n[0],_=t[0],k=n[1],N=t[1];_<b&&(M=b,b=_,_=M);var j=_-b,P=m(j-p)<s;if(!P&&N<k&&(M=k,k=N,N=M),P||j<s?P?k+N>0^x[1]<(m(x[0]-b)<s?k:N):k<=x[1]&&x[1]<=N:j>p^(b<=x[0]&&x[0]<=_)){var q=T(v,(-g+E)/y);return G(q,d),[x,C(q)]}}}function c(t,e){var i=r?n:p-n,o=0;return t<-i?o|=1:t>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return at(u,a,o,r?[0,-n]:[-p,n-p])}function vt(n){return function(t){var e=new gt;for(var r in n)e[r]=n[r];return e.stream=t,e}}function gt(){}function yt(n,t,e){var r=t[1][0]-t[0][0],i=t[1][1]-t[0][1],o=n.clipExtent&&n.clipExtent();n.scale(150).translate([0,0]),null!=o&&n.clipExtent(null),z(e,n.stream(bn));var u=bn.result(),a=Math.min(r/(u[1][0]-u[0][0]),i/(u[1][1]-u[0][1])),l=+t[0][0]+(r-a*(u[1][0]+u[0][0]))/2,c=+t[0][1]+(i-a*(u[1][1]+u[0][1]))/2;return null!=o&&n.clipExtent(o),n.scale(150*a).translate([l,c])}function mt(n,t,e){return yt(n,[[0,0],t],e)}gt.prototype={constructor:gt,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var St=16,Et=x(30*y);function xt(n,t){return+t?bt(n,t):Mt(n)}function Mt(n){return vt({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}function bt(n,t){function e(r,i,o,u,a,l,c,f,p,h,d,v,g,y){var S=c-r,x=f-i,M=S*S+x*x;if(M>4*t&&g--){var b=u+h,_=a+d,N=l+v,j=w(b*b+_*_+N*N),P=k(N/=j),q=m(m(N)-1)<s||m(o-p)<s?(o+p)/2:E(_,b),L=n(q,P),A=L[0],z=L[1],C=A-r,F=z-i,O=x*C-S*F;(O*O/M>t||m((S*C+x*F)/M-.5)>.3||u*h+a*d+l*v<Et)&&(e(r,i,o,u,a,l,A,z,q,b/=j,_/=j,N,g,y),y.point(A,z),e(A,z,q,b,_,N,c,f,p,h,d,v,g,y))}}return function(t){var r,i,o,u,a,l,c,f,s,p,h,d,v={point:g,lineStart:y,lineEnd:S,polygonStart:function(){t.polygonStart(),v.lineStart=E},polygonEnd:function(){t.polygonEnd(),v.lineStart=y}};function g(e,r){e=n(e,r),t.point(e[0],e[1])}function y(){f=NaN,v.point=m,t.lineStart()}function m(r,i){var o=F([r,i]),u=n(r,i);e(f,s,c,p,h,d,f=u[0],s=u[1],c=r,p=o[0],h=o[1],d=o[2],St,t),t.point(f,s)}function S(){v.point=g,t.lineEnd()}function E(){y(),v.point=x,v.lineEnd=M}function x(n,t){m(r=n,t),i=f,o=s,u=p,a=h,l=d,v.point=m}function M(){e(f,s,c,p,h,d,i,o,r,u,a,l,St,t),v.lineEnd=S,S()}return v}}var wt=vt({point:function(n,t){this.stream.point(n*y,t*y)}});function _t(n){var t,e,r,i,o,u,a,l,c,f,s=150,p=480,h=250,d=0,v=0,m=0,S=0,E=0,x=null,M=ft,b=null,_=an,k=.5,N=xt(q,k);function j(n){return[(n=o(n[0]*y,n[1]*y))[0]*s+e,r-n[1]*s]}function P(n){return(n=o.invert((n[0]-e)/s,(r-n[1])/s))&&[n[0]*g,n[1]*g]}function q(n,i){return[(n=t(n,i))[0]*s+e,r-n[1]*s]}function L(){o=$(i=B(m,S,E),t);var n=t(d,v);return e=p-n[0]*s,r=h+n[1]*s,A()}function A(){return c=f=null,j}return j.stream=function(n){return c&&f===n?c:c=wt(M(i,N(_(f=n))))},j.clipAngle=function(n){return arguments.length?(M=+n?dt(x=n*y,6*y):(x=null,ft),A()):x*g},j.clipExtent=function(n){return arguments.length?(_=null==n?(b=u=a=l=null,an):rn(b=+n[0][0],u=+n[0][1],a=+n[1][0],l=+n[1][1]),A()):null==b?null:[[b,u],[a,l]]},j.scale=function(n){return arguments.length?(s=+n,L()):s},j.translate=function(n){return arguments.length?(p=+n[0],h=+n[1],L()):[p,h]},j.center=function(n){return arguments.length?(d=n[0]%360*y,v=n[1]%360*y,L()):[d*g,v*g]},j.rotate=function(n){return arguments.length?(m=n[0]%360*y,S=n[1]%360*y,E=n.length>2?n[2]%360*y:0,L()):[m*g,S*g,E*g]},j.precision=function(n){return arguments.length?(N=xt(q,k=n*n),A()):w(k)},j.fitExtent=function(n,t){return yt(j,n,t)},j.fitSize=function(n,t){return mt(j,n,t)},function(){return t=n.apply(this,arguments),j.invert=t.invert&&P,L()}}function kt(n){var t=0,e=p/3,r=_t(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*y,e=n[1]*y):[t*g,e*g]},i}function Nt(n){var t=x(n);function e(n,e){return[n*t,M(e)/t]}return e.invert=function(n,e){return[n/t,k(e*t)]},e}function jt(n,t){var e=M(n),r=(e+M(t))/2;if(m(r)<s)return Nt(n);var i=1+e*(2*r-e),o=w(i)/r;function u(n,t){var e=w(i-2*r*M(t))/r;return[e*M(n*=r),o-e*x(n)]}return u.invert=function(n,t){var e=o-t;return[E(n,m(e))/r*b(e),k((i-(n*n+e*e)*r*r)/(2*r))]},u}function Pt(){return kt(jt).scale(155.424).center([0,33.6442])}function qt(){return Pt().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function Lt(n){return n}function At(n){if(null==n)return Lt;var t,e,r=n.scale[0],i=n.scale[1],o=n.translate[0],u=n.translate[1];return function(n,a){a||(t=e=0);var l=2,c=n.length,f=new Array(c);for(f[0]=(t+=n[0])*r+o,f[1]=(e+=n[1])*i+u;l<c;)f[l]=n[l],++l;return f}}function zt(n,t){for(var e,r=n.length,i=r-t;i<--r;)e=n[i],n[i++]=n[r],n[r]=e}function Ct(n,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return Ft(n,t)}))}:Ft(n,t)}function Ft(n,t){var e=t.id,r=t.bbox,i=null==t.properties?{}:t.properties,o=Ot(n,t);return null==e&&null==r?{type:"Feature",properties:i,geometry:o}:null==r?{type:"Feature",id:e,properties:i,geometry:o}:{type:"Feature",id:e,bbox:r,properties:i,geometry:o}}function Ot(n,t){var e=At(n.transform),r=n.arcs;function i(n,t){t.length&&t.pop();for(var i=r[n<0?~n:n],o=0,u=i.length;o<u;++o)t.push(e(i[o],o));n<0&&zt(t,u)}function o(n){return e(n)}function u(n){for(var t=[],e=0,r=n.length;e<r;++e)i(n[e],t);return t.length<2&&t.push(t[0]),t}function a(n){for(var t=u(n);t.length<4;)t.push(t[0]);return t}function l(n){return n.map(a)}function c(n){var t,e=n.type;switch(e){case"GeometryCollection":return{type:e,geometries:n.geometries.map(c)};case"Point":t=o(n.coordinates);break;case"MultiPoint":t=n.coordinates.map(o);break;case"LineString":t=u(n.arcs);break;case"MultiLineString":t=n.arcs.map(u);break;case"Polygon":t=l(n.arcs);break;case"MultiPolygon":t=n.arcs.map(l);break;default:return null}return{type:e,coordinates:t}}return c(t)}function Rt(n,t){return n(t={exports:{}},t.exports),t.exports}function Gt(){var n=8,t=qt(),e=function(n){return{}},r=function(n){return 1};function i(i,c){i=l(i);for(var s,p,d,v=h(i.transform),g=i.arcs.length,y=0,m=new Array(g);y<g;){for(s=0,p=0,w=i.arcs[y].length,_=0,d=new Array(w);_<w;)i.arcs[y][_][0]=s+=i.arcs[y][_][0],i.arcs[y][_][1]=p+=i.arcs[y][_][1],d[_]=null===t?v(i.arcs[y][_]):t(v(i.arcs[y][_])),_++;m[y++]=d}var S=ut().projection(null),E=f(m,{type:"GeometryCollection",geometries:c}).geometries.map((function(n){return{type:"Feature",id:n.id,properties:e.call(null,n,i),geometry:n}})),x=E.map(r),M=u(x);if(n<=0)return E;for(var b=0;b++<n;){var w,_,k,N,j,P,q,L,A,z,C,F,O,R,G=E.map(S.area),T=u(G),I=0,$=0,Z=E.map((function(n,t){var e=Math.abs(G[t]),r=+x[t],i=T*r/M,o=Math.sqrt(e/Math.PI),u=Math.sqrt(i/Math.PI)-o,a=Math.max(e,i)/Math.min(e,i);return I+=a,$++,{id:n.id,area:e,centroid:S.centroid(n),value:r,desired:i,radius:o,mass:u,sizeError:a}})),B=I/$,D=1/(1+B);for(g=m.length,y=0;y<g;){for(w=m[y].length,_=0;_<w;){for(k=[0,0],N=Z.length,j=0;j<N;)P=Z[j].centroid,q=Z[j].mass,A=(L=Z[j].radius)*L,F=(z=m[y][_][0]-P[0])*z+(C=m[y][_][1]-P[1])*C,R=(O=Math.sqrt(F))>L?q*L/O:q*(F/A)*(4-3*O/L),k[0]+=R*o(C,z),k[1]+=R*a(C,z),j++;m[y][_][0]+=k[0]*D,m[y][_][1]+=k[1]*D,_++}y++}if(B<=1)break}return{features:E,arcs:m}}function o(n,t){if(0===t)return 0;var e=n/t;return t>0?1/Math.sqrt(1+e*e):-1/Math.sqrt(1+e*e)}function a(n,t){if(0===t)return 1;var e=n/t;return t>0?e/Math.sqrt(1+e*e):-e/Math.sqrt(1+e*e)}function l(n){return n instanceof Array?n.map(l):"string"==typeof n||"number"==typeof n?n:c(n)}function c(n){var t={};for(var e in n)t[e]=l(n[e]);return t}function f(n,t){function e(t,e){e.length&&e.pop();for(var r=n[t<0?~t:t],i=0,o=r.length;i<o;++i)e.push(r[i]);t<0&&s(e,o)}function r(n){for(var t=[],r=0,i=n.length;r<i;++r)e(n[r],t);return t}function i(n){return n.map(r)}function o(n){return(n=Object.create(n)).coordinates=u[n.type](n.arcs),n}var u={LineString:r,MultiLineString:i,Polygon:i,MultiPolygon:function(n){return n.map(i)}};return"GeometryCollection"===t.type?((t=Object.create(t)).geometries=t.geometries.map(o),t):o(t)}function s(n,t){for(var e,r=n.length,i=r-t;i<--r;)e=n[i],n[i++]=n[r],n[r]=e}function p(n){return function(){return n}}i.path=ut().projection(null),i.iterations=function(t){return arguments.length?(n=t,i):n},i.value=function(n){return arguments.length?(r="function"==typeof n?n:p(n),i):r},i.projection=function(n){return arguments.length?(t=n,i):t},i.feature=function(n,t){return{type:"Feature",id:t.id,properties:e.call(null,t,n),geometry:{type:t.type,coordinates:Ct(n,t).geometry.coordinates}}},i.features=function(n,t){return t.map((function(t){return i.feature(n,t)}))},i.properties=function(n){return arguments.length?(e="function"==typeof n?n:p(n),i):e};var h=i.transformer=function(n){var t=n.scale[0],e=n.scale[1],r=n.translate[0],i=n.translate[1];function o(n){return[n[0]*t+r,n[1]*e+i]}return o.invert=function(n){return[(n[0]-r)/t,(n[1]-i)/e]},o};return i}"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self,Rt((function(n,t){!function(t,e,r){n.exports=r()}(0,0,(function(){return function(t){var e=t instanceof Array?[]:{};return function t(e,r){for(var i in e){var o=e[i];o instanceof Array?t(o,n(r,i,[])):o instanceof Object&&"function"!=typeof o?t(o,n(r,i,{})):n(r,i,o)}}(t,e),e};function n(n,t,e){return n instanceof Array?(n.push(e),n[n.length-1]):n instanceof Object?(n[t]=e,n[t]):void 0}}))})),t.cartogram=Gt,Object.defineProperty(t,"__esModule",{value:!0})}(o),document.querySelector("#loader").classList.add("hide");let u=["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"],a=document.querySelector("input#radius"),l=document.querySelector("input#year");console.log(l.value),a.addEventListener("click",(()=>{document.querySelector("#loader").classList.remove("hide"),d()})),l.addEventListener("click",(()=>{document.querySelector("#loader").classList.remove("hide"),d()}));const c=25,f=35,s=10,p=1250-s-10,h=750-c-f;function d(){let n=a.value;const d=d3.json("https://raw.githubusercontent.com/addu390/population-cartogram/master/data/test2/topo.json"),M=d3.csv("https://raw.githubusercontent.com/addu390/population-cartogram/master/data/world-population-unpd-3.csv");Promise.all([d,M]).then((a=>{let[d,M]=a;!function(n,a,d,M){let b=1.5*d,w=p/b,_=Math.ceil(h/b),k=d3.range(_*w).map((function(n,t){return{x:Math.floor(t%w)*b,y:Math.floor(t/w)*b,datapoint:0}}));var N=function(n){var t={};for(var e in n)t[n[e].code]=n[e];return t}(a),j=o.cartogram().projection(null).properties((function(n){return n.properties})).value((function(n){return+n.properties.count}));j.features(n,n.objects.tiles.geometries);d3.scaleLinear().domain([1,1e9]).range([1,1e3]);j.value((function(n){return+N[n.properties.id][l.value]}));var P=j(n,n.objects.tiles.geometries).features;let q=[];for(let n=0;n<P.length;n++){var L=[];if("MultiPolygon"==P[n].geometry.type)for(let t=0;t<P[n].geometry.coordinates.length;t++)L=L.concat(P[n].geometry.coordinates[t][0]);else"Polygon"==P[n].geometry.type&&(L=L.concat(P[n].geometry.coordinates[0]));q[n]={coordinates:L,properties:P[n].properties}}d3.select("#container").selectAll("*").remove();let A=function(){var n,o,u,a=0,l=0,c=1,f=1,s=r,p=i;function h(n){var t,e={},r=[],i=n.length;for(t=0;t<i;++t)if(!isNaN(l=+s.call(null,a=n[t],t,n))&&!isNaN(c=+p.call(null,a,t,n))){var a,l,c,f=Math.round(c/=u),h=Math.round(l=l/o-(1&f)/2),d=c-f;if(3*Math.abs(d)>1){var v=l-h,g=h+(l<h?-1:1)/2,y=f+(c<f?-1:1),m=l-g,S=c-y;v*v+d*d>m*m+S*S&&(h=g+(1&f?1:-1)/2,f=y)}var E=h+"-"+f,x=e[E];x?x.push(a):(r.push(x=e[E]=[a]),x.x=(h+(1&f)/2)*o,x.y=f*u)}return r}function d(n){var t=0,r=0;return e.map((function(e){var i=Math.sin(e)*n,o=-Math.cos(e)*n,u=i-t,a=o-r;return t=i,r=o,[u,a]}))}return h.hexagon=function(t){return"m"+d(null==t?n:+t).join("l")+"z"},h.centers=function(){for(var t=[],e=Math.round(l/u),r=Math.round(a/o),i=e*u;i<f+n;i+=u,++e)for(var s=r*o+(1&e)*o/2;s<c+o/2;s+=o)t.push([s,i]);return t},h.mesh=function(){var t=d(n).slice(0,4).join("l");return h.centers().map((function(n){return"M"+n+"m"+t})).join("")},h.x=function(n){return arguments.length?(s=n,h):s},h.y=function(n){return arguments.length?(p=n,h):p},h.radius=function(e){return arguments.length?(o=2*(n=+e)*Math.sin(t),u=1.5*n,h):n},h.size=function(n){return arguments.length?(a=l=0,c=+n[0],f=+n[1],h):[c-a,f-l]},h.extent=function(n){return arguments.length?(a=+n[0][0],l=+n[0][1],c=+n[1][0],f=+n[1][1],h):[[a,l],[c,f]]},h.radius(1)}().radius(d).x((function(n){return n.x})).y((function(n){return n.y}));const z=d3.select("#container").append("svg").attr("width",p+s+c).attr("height",h+c+f).append("g").attr("transform",`translate(${s} ${c})`);z.append("g").attr("id","hexes").selectAll(".hex").data(A(k)).enter().append("path").attr("class","hex").attr("transform",(function(n){return"translate("+n.x+", "+n.y+")"})).attr("d",A.hexagon()).style("fill","#fff").style("stroke","#e0e0e0").style("stroke-width",.5).on("click",g);for(let n=0;n<q.length;n++){var C;C=M?q[n].coordinates:q[n].coordinates.map((n=>newProjection(n)));let t=A(k.reduce((function(n,t){return d3.polygonContains(C,[t.x,t.y])&&n.push(t),n}),[]));z.append("g").attr("id","hexes").selectAll(".hex").data(t).enter().append("path").attr("class","hex"+q[n].properties.id).attr("transform",(function(n){return"translate("+n.x+", "+n.y+")"})).attr("x",(function(n){return n.x})).attr("y",(function(n){return n.y})).attr("d",A.hexagon()).style("fill",u[n%19]).style("stroke","#000").style("stroke-width",.5).on("click",y).on("mouseover",v).on("mouseout",m).call(d3.drag().on("start",S).on("drag",E).on("end",x))}}(d,M,n,!0),document.querySelector("#loader").classList.add("hide")}))}function v(n){klass=d3.select(this).attr("class"),d3.selectAll("."+klass),d3.select(this).transition().duration(10).style("fill-opacity",.9)}function g(n){if("Remove"==document.querySelector("#label-option").value)d3.select(this).style("fill","#fff").style("stroke","#e0e0e0").style("stroke-width",.5).lower();else{let n=document.querySelector("#color-option");d3.select(this).style("stroke-width",.5).style("fill",n.value).style("stroke","#000").on("mouseover",v).on("mouseout",m).call(d3.drag().on("start",S).on("drag",E).on("end",x)).raise()}}function y(n){if("Remove"==document.querySelector("#label-option").value)d3.select(this).remove();else{let n=document.querySelector("#color-option");d3.select(this).style("stroke-width",.5).style("fill",n.value).style("stroke","#000").on("mouseover",v).on("mouseout",m).call(d3.drag().on("start",S).on("drag",E).on("end",x)).raise()}}function m(n){d3.select(this).transition().duration(10).style("fill-opacity",1)}function S(n,t){t.fixed=!1,d3.select(this).raise().style("stroke-width",1).style("stroke","#000")}function E(n,t){let e=a.value;var r=function(n,t,e){var r,i,o=Math.sqrt(3)/2,u=2*e,a=u*o,l=3*e;t%l<e?(i=t-t%l,r=n-n%a):(i=t+(u-e*o/2)-t%l,r=n+e*o-n%a);return[r,i]}(n.x,n.y,e);d3.select(this).attr("x",t.x=r[0]).attr("y",t.y=r[1]).attr("transform",(function(n){return"translate("+n.x+", "+n.y+")"}))}function x(n,t){t.fixed=!0,d3.select(this).style("stroke-width",.5).style("stroke","#000")}d();
//# sourceMappingURL=index.a72d94f3.js.map
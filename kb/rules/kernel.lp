% The kernel and the core of the paraphrase graph (KB_PLAN.md phase 2; after
% Harnad's work on dictionary graphs). Needs atoms.lp for def_form/2.
%
% An edge V -> W means V is used to say W, in a fine paraphrase. The kernel is
% what is left after taking away, again and again, every word that no remaining
% word's paraphrase uses. The core is the largest group of kernel words that
% can all reach each other, through words of the kernel. If two groups tie for
% the largest, the one whose first word sorts lowest is the core.

use_edge(V,W) :- def_form(W,N), para_uses(W,N,V), V != W.

% gone: every word it helps to say is gone (so a word that helps to say none is gone at once)
gone(W) :- word(W), gone(X) : use_edge(W,X).
kernel(W) :- word(W), not gone(W).

reach(V,W) :- use_edge(V,W), kernel(V), kernel(W).
reach(V,X) :- reach(V,W), use_edge(W,X), kernel(X).
mutual(V,W) :- reach(V,W), reach(W,V).

group(V,R)      :- mutual(V,_), R = #min{ W : mutual(V,W) }.
group_size(R,N) :- group(_,R), N = #count{ V : group(V,R) }.

% one group, so that the core is always a single group whose words all reach each other:
% the largest, and among equals the one with the lowest first word
best(R) :- group_size(R,N), N = #max{ M : group_size(_,M) }, R = #min{ S : group_size(S,N) }.
core(V) :- group(V,R), best(R).

#show kernel/1.
#show core/1.

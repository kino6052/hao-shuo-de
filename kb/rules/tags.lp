% The tag nets (TAGS_PLAN.md, K31). Read with the facts from src/lib/kb/facts.js:
%   tag(T,topic|kind).  tag_parent(T,P).  tagged(E,T).
% T is a string (the tag's id), E a word id or a composite's hanzi. Nothing is chosen here; a question adds its own #show lines:
%   node scripts/kb.js query "#show in_tag/2."     (these rules are loaded with every query)

% -- the nets ------------------------------------------------------------------------------
% under(T,P): P is above T, any number of steps up
under(T,P) :- tag_parent(T,P).
under(T,P) :- under(T,Q), tag_parent(Q,P).
has_child(T) :- tag_parent(_,T).
leaf_tag(T) :- tag(T,_), not has_child(T).

% -- what an entry is under ---------------------------------------------------------------------
entry(E) :- word(E).
entry(E) :- composite(E).
in_tag(E,T) :- tagged(E,T).
in_tag(E,P) :- tagged(E,T), under(T,P).
tagged_axis(E,A) :- tagged(E,T), tag(T,A).

% -- what is wrong ---------------------------------------------------------------------------------
tag_cycle(T) :- under(T,T).
unknown_parent(T,P) :- tag_parent(T,P), not tag(P,_).
unknown_tag(E,T) :- tagged(E,T), not tag(T,_).
% a tag written beside one that is under it (knife: kitchen-utensils and kitchen)
extra_tag(E,T) :- tagged(E,T), tagged(E,U), under(U,T).
empty_tag(T) :- tag(T,_), not in_tag(_,T).
untagged(E,A) :- entry(E), axis(A), not tagged_axis(E,A).
axis(topic;kind).
% a topic entry with no leaf topic is too vague (it sits on a shelf, not a page)
tagged_leaf(E) :- tagged(E,T), tag(T,topic), leaf_tag(T).
vague(E) :- entry(E), tagged_axis(E,topic), not tagged_leaf(E).
% a leaf topic is a picture-dictionary page: 8 to 30 entries, split above 40, merged below 3
leaf_size(T,N) :- tag(T,topic), leaf_tag(T), N = #count{ E : tagged(E,T) }.
big_leaf(T) :- leaf_size(T,N), N > 40.
small_leaf(T) :- leaf_size(T,N), N > 0, N < 3.

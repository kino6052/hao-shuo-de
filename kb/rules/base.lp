% Relations every question uses (KB_PLAN.md phase 1). Read together with the
% facts from src/lib/kb/facts.js. No choices, no output of its own: a question
% adds its own #show lines.

% -- opposites and synonyms go both ways -----------------------------------------
opp(A,B)  :- antonym(A,B).
opp(A,B)  :- antonym(B,A).
same(A,B) :- synonym(A,B).
same(A,B) :- synonym(B,A).

% -- how much a word is used ---------------------------------------------------------
% (how much the book uses it needs the sentences: kb/rules/text.lp)
% a composite uses a word when some form of it does
in_composite(W,C) :- uses(C,_,_,W).
composite_uses(W,N) :- word(W), N = #count{ C : in_composite(W,C) }.

% -- the book, by lesson position ---------------------------------------------------------
% the lesson that first teaches a word (the earliest card)
first_card(W,P) :- card(W,_,_), P = #min{ Q : card(W,K,_), lesson(K,Q) }.

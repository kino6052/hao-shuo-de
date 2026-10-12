% What happens if words leave the core (KB_PLAN.md K10, phase 1: remove).
%
% Input:  drop(W). facts, one per word to remove (added by the caller).
% Output: the consequences below. This file ends with #show lines, so it is
%         the output interface: ask for other atoms by leaving whatif.lp out.
%
% Nothing here changes data. Every atom is a fact the author can check, and
% src/lib/kb/whatif.js turns them into the report with their reasons.

gone(W) :- drop(W).

% -- composite forms to redo ------------------------------------------------------
% a form breaks when it uses a gone word in any slot
form_broken(C,F) :- uses(C,F,_,W), gone(W).
form_ok(C,F)     :- form(C,F), not form_broken(C,F).
% an entry that loses some forms but keeps another
c_loses(C,F)     :- form_broken(C,F), form_ok(C,_).
% an entry left with no form at all
c_redo(C)        :- form(C,_), not form_ok(C,_).
% an entry that hangs under a word (or an entry) that is gone
head_lost(C)     :- head_word(C,W), gone(W), not c_redo(C).
head_lost(C)     :- head_comp(C,D), c_redo(D), not c_redo(C).

% -- the book to rewrite ---------------------------------------------------------------
s_hit(S)         :- sent_uses(S,W), gone(W).
s_hit_count(K,N) :- sent_kind(_,K), N = #count{ S : s_hit(S), sent_kind(S,K) }.
card_gone(W,L,M)         :- card(W,L,M), gone(W).
card_sense_gone(W,K,L,M) :- card_sense(W,K,L,M), gone(W).
% every other place the book names the word: prose, info, exercises, faq
m_hit(W,L,M,K,N) :- mention(W,L,M,K,N), gone(W), K != card, K != example, K != answer.

% -- coverage -------------------------------------------------------------------------------
item_form_broken(I,N) :- item_uses(I,N,W), gone(W).
item_form_ok(I,N)     :- item_form(I,N), not item_form_broken(I,N).
% an item with no way left to say it
item_lost(I)    :- item(I), item_form(I,_), not item_form_ok(I,_).
% an item that loses a carrier but can still be said
item_touched(I) :- carries(W,I), gone(W), not item_lost(I).
item_carrier_gone(I,W) :- carries(W,I), gone(W).

% -- the rest of the dictionary --------------------------------------------------------------
% another word's definition or necessity text names a gone word
def_hit(V,W) :- def_uses(V,W), gone(W), not gone(V).
% a catch-all sense whose listed compounds are all gone
sc_ok(W,K,N)   :- sense_compound(W,K,N), not sc_broken(W,K,N).
sc_broken(W,K,N) :- sense_compound_uses(W,K,N,V), gone(V).
sense_dead(W,K) :- sense(W,K), not gone(W), sense_compound(W,K,_), not sc_ok(W,K,_).
% an opposite or synonym pair loses a half; a phrase for a staying word breaks
rel_pair_hit(antonym,A,B) :- antonym(A,B), gone(A), not gone(B).
rel_pair_hit(antonym,A,B) :- antonym(A,B), gone(B), not gone(A).
rel_pair_hit(synonym,A,B) :- synonym(A,B), gone(A), not gone(B).
rel_pair_hit(synonym,A,B) :- synonym(A,B), gone(B), not gone(A).
rel_phrase_hit(K,W,N) :- rel_phrase_uses(K,W,N,V), gone(V), not gone(W).

#show gone/1.
#show form_broken/2.
#show c_loses/2.
#show c_redo/1.
#show head_lost/1.
#show s_hit/1.
#show s_hit_count/2.
#show card_gone/3.
#show card_sense_gone/4.
#show m_hit/5.
#show item_lost/1.
#show item_touched/1.
#show item_carrier_gone/2.
#show def_hit/2.
#show sense_dead/2.
#show rel_pair_hit/3.
#show rel_phrase_hit/3.

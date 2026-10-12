% Which words are atoms (KB_PLAN.md K3, K8, phase 2: the smallest defining sets).
%
% A defining set is a set of words from which every other word can be said,
% one after another, by a fine paraphrase that uses only words already said.
% Words the author marked as atoms, or whose paraphrase is clumsy, have to be
% in it. A word with neither a paraphrase nor an atom mark (not reviewed yet)
% has nothing to be said with, so it is in it too. The smallest such sets say
% which words are atoms:
%
%   in every smallest set   a true atom
%   in some of them         swappable: another word could take its place
%   in none                 secondary: the others say it
%
% Run it with --opt-mode=optN to get only the smallest sets; add
% --enum-mode=brave for the words in some of them, or --enum-mode=cautious for
% the words in all of them (nothing here lists the sets: cycles make too many).
%
% Input: word/1 atom_mark/1 para_verdict/2 para/2 para_uses/3 (src/lib/kb/facts.js).

marked(W)     :- atom_mark(W).
marked(W)     :- para_verdict(W,clumsy).
unreviewed(W) :- word(W), not atom_mark(W), not para_verdict(W,_).

% only a fine paraphrase counts as a definition
def_form(W,N) :- para(W,N), para_verdict(W,fine).

{ base(W) : word(W) }.
base(W) :- marked(W).
base(W) :- unreviewed(W).

% said: in the set, or has a form whose words are all said (no word says itself)
said(W) :- base(W).
said(W) :- def_form(W,N), said(V) : para_uses(W,N,V).
:- word(W), not said(W).

#minimize { 1,W : base(W) }.

#show base/1.
#show marked/1.
#show unreviewed/1.

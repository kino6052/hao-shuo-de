% Rules that count over every sentence. They are only right when the whole text
% tier is loaded (`textProgram()` with no words, `kb.query(..., { text: true })`);
% with the text of a what-if only the dropped words' sentences are there.

% a word is used in the book when a sentence uses it
sentence_uses(W,N) :- word(W), N = #count{ S : sent_uses(S,W) }.

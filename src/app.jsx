import { useRef, useEffect } from 'preact/hooks';
import { Sidebar } from './components/Sidebar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { Section } from './components/Section.jsx';
import { VocabGrid } from './components/VocabGrid.jsx';
import { GrammarBlock } from './components/GrammarBlock.jsx';
import { ExampleList } from './components/ExampleList.jsx';
import { PracticeExercise } from './components/PracticeExercise.jsx';
import { LessonFlow } from './components/LessonFlow.jsx';
import { StoryBlock } from './components/StoryBlock.jsx';
import { PageNav } from './components/PageNav.jsx';
import { lazyPage } from './components/LazyPage.jsx';
import { TldrSummary } from './components/TldrSummary.jsx';
import { MissingTranslationBanner } from './components/MissingTranslationBanner.jsx';
import { AdSlot } from './components/AdSlot.jsx';
import { ConsentBanner } from './components/ConsentBanner.jsx';
import { CommentButton } from './components/CommentButton.jsx';
import { useAppRouter } from './lib/use-router.js';
import { useChapter } from './lib/use-chapter.js';
import { t } from './lib/i18n.js';
import { AD_SLOT_LESSON_END } from './lib/tracking-config.js';
import { trackPageView } from './lib/tracking.js';
import { useTheme } from './lib/use-theme.js';

// The dictionaries, builders, word map and Akinator come in chunks of their own, fetched when first shown.
const DictionarySection = lazyPage(() => import('./components/DictionarySection.jsx'), 'DictionarySection');
const CategoricalDictionarySection = lazyPage(() => import('./components/CategoricalDictionarySection.jsx'), 'CategoricalDictionarySection');
const CompositeDictionarySection = lazyPage(() => import('./components/CompositeDictionarySection.jsx'), 'CompositeDictionarySection');
const SentenceBuilder = lazyPage(() => import('./components/SentenceBuilder.jsx'), 'SentenceBuilder');
const WordBuilder = lazyPage(() => import('./components/WordBuilder.jsx'), 'WordBuilder');
const WordMap = lazyPage(() => import('./components/WordMap.jsx'), 'WordMap');
const Akinator = lazyPage(() => import('./components/Akinator.jsx'), 'Akinator');
// The lesson test and the final exam (BOOK_PLAN.md Phase 5): their own chunk, which fetches the lessons on start.
const LessonTest = lazyPage(() => import('./components/LessonTest.jsx'), 'LessonTest');
const FinalExam = lazyPage(() => import('./components/FinalExam.jsx'), 'FinalExam');

function renderContent(s, lang) {
  const type = s.meta.type;
  if (type === 'intro') {
    // An intro with pictures is shown in file order, like a lesson; one
    // without keeps the plain text-then-examples layout.
    if (s.flow?.some((g) => g.kind === 'image')) return <LessonFlow flow={s.flow} lang={lang} />;
    return (
      <>
        <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
        {s.examples.length > 0 && <ExampleList items={s.examples} />}
      </>
    );
  }
  if (type === 'dictionary') {
    if (s.meta.layout === 'categorical') {
      return (
        <>
          {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
          <CategoricalDictionarySection lang={lang} />
        </>
      );
    }
    if (s.meta.layout === 'composites') {
      return (
        <>
          {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
          <CompositeDictionarySection lang={lang} />
        </>
      );
    }
    return <DictionarySection items={s.dict} lang={lang} />;
  }
  if (type === 'sentence-builder') {
    return (
      <>
        {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
        <SentenceBuilder lang={lang} />
      </>
    );
  }
  if (type === 'word-map') {
    return (
      <>
        {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
        <WordMap lang={lang} />
      </>
    );
  }
  if (type === 'akinator') {
    return (
      <>
        {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
        <Akinator lang={lang} />
      </>
    );
  }
  if (type === 'final-exam') {
    return (
      <>
        {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
        <FinalExam lang={lang} />
      </>
    );
  }
  if (type === 'word-builder') {
    return (
      <>
        {s.bodyHtml && <div class="prose-body" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />}
        <WordBuilder lang={lang} />
      </>
    );
  }
  // .ts chapters carry a `flow` (blocks in file order); the older .yaml
  // chapters don't, and keep the fixed layout below.
  if (s.flow) {
    return (
      <>
        {s.missingBlocks && <MissingTranslationBanner blocks={s.missingBlocks} lang={lang} />}
        {s.tldrSummary && <TldrSummary key={s.meta.id} items={s.tldrSummary} lang={lang} />}
        <LessonFlow flow={s.flow} lang={lang} />
        {type === 'lesson' && s.tldrSummary && <TldrSummary key={`${s.meta.id}-end`} items={s.tldrSummary} lang={lang} at="end" />}
        {type === 'lesson' && (
          <div data-part="test">
            <LessonTest key={s.meta.id} lessonId={s.meta.id} lang={lang} />
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {s.missingBlocks && <MissingTranslationBanner blocks={s.missingBlocks} lang={lang} />}
      {s.tldrSummary && <TldrSummary key={s.meta.id} items={s.tldrSummary} lang={lang} />}
      <VocabGrid items={s.vocab} />
      <GrammarBlock html={s.bodyHtml} lang={lang} />
      {s.story.length > 0 && <StoryBlock items={s.story} />}
      <ExampleList items={s.examples} />
      <PracticeExercise questions={s.exercise} answers={s.answers} lang={lang} />
    </>
  );
}

export function App() {
  const router = useAppRouter();
  const { theme, toggle: toggleTheme } = useTheme();
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [router.pageIndex]);

  const pageId = router.sections[router.pageIndex]?.meta.id;
  useEffect(() => { trackPageView(); }, [pageId, router.lang]);

  function handleSidebarNav(id) {
    const idx = router.sectionIds.indexOf(id);
    if (idx >= 0) router.goTo(idx);
  }

  // the outline's entry (enough for the heading) at once, the chapter's text when it is fetched
  const current = router.sections[router.pageIndex];
  const { view, failed } = useChapter(router.lang, current?.meta, router.sections[router.pageIndex + 1]?.meta);
  if (!current) return null;

  const showHero = router.pageIndex === 0;

  return (
    <div class="app-shell">
      <Sidebar
        sections={router.toc}
        completed={router.completed}
        currentId={current.meta.id}
        onNavigate={handleSidebarNav}
        lang={router.lang}
        availableLangs={router.availableLangs}
        onSwitchLang={router.switchLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        onResetProgress={router.resetProgress}
      />

      <main class="main-content" ref={mainRef}>
        <div class="page-inner">
          {showHero && <HeroSection lang={router.lang} />}

          <Section data={view ?? current} lang={router.lang}>
            {view ? renderContent(view, router.lang) : <p class="page-loading">{t(router.lang, failed ? 'pageLoadFailed' : 'pageLoading')}</p>}
          </Section>

          {current.meta.type === 'lesson' && <AdSlot key={current.meta.id} slot={AD_SLOT_LESSON_END} />}

          <PageNav
            page={router.pageIndex}
            total={router.total}
            prev={router.prev}
            next={router.next}
            lang={router.lang}
          />
        </div>
      </main>

      <ConsentBanner lang={router.lang} />
      <CommentButton page={current.meta.id} title={(view ?? current).meta.title} lang={router.lang} />
    </div>
  );
}

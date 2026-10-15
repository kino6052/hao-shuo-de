import { ExampleList } from './ExampleList.jsx';
import styles from './StoryImage.module.css';

// The book's story pictures (public/story/<file>.webp), each with its caption:
// Miao-miao's line in Hao-shuo-de and what it means. The art is black lines on
// white; the stylesheet blends it into the page and turns it round in the dark
// theme.
export function StoryImage({ items }) {
  return (
    <>
      {items.map((img, i) => (
        <figure key={i} class={styles.figure}>
          <img
            class={styles.picture}
            src={`${import.meta.env.BASE_URL}story/${img.file}.webp`}
            alt={img.alt}
            decoding="async"
          />
          <figcaption class={styles.caption}>
            <ExampleList items={[img]} label={null} />
          </figcaption>
        </figure>
      ))}
    </>
  );
}

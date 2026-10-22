import { useEffect, useState } from "preact/hooks";
import { t } from "../lib/i18n.js";

// A page section that comes in its own file of the build (a chunk), fetched
// the first time it is shown: the dictionaries, the builders, the word map
// and the Akinator carry thousands of entries no other page needs.
//   const WordMap = lazyPage(() => import("./WordMap.jsx"), "WordMap");
export function lazyPage(load, name) {
  let Page = null;
  let loading = null;
  return function LazyPage(props) {
    const [, setReady] = useState(Page != null);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
      if (Page) return;
      loading ??= load().then((m) => (Page = m[name]));
      loading.then(() => setReady(true), () => ((loading = null), setFailed(true)));
    }, []);
    if (Page) return <Page {...props} />;
    return <p class="page-loading">{t(props.lang, failed ? "pageLoadFailed" : "pageLoading")}</p>;
  };
}
